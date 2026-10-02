/**
 * fixme.vip → Google Sheets lead webhook (free, no Zapier needed).
 *
 * Setup (5 minutes):
 *   1. Create a Google Sheet. Extensions → Apps Script. Delete the sample code, paste this file.
 *   2. Change KEY below to a long random string (e.g. from a password manager).
 *   3. Optional: put your email in NOTIFY_EMAIL to get an email per lead from Google.
 *   4. Deploy → New deployment → type "Web app".
 *        Execute as: Me.  Who has access: Anyone.  → Deploy → authorize → copy the Web app URL.
 *   5. In https://fixme.vip/admin → Channels → Webhook URL, paste:
 *        <Web app URL>?key=<your KEY>
 *      Leave "Signing secret" empty (Apps Script cannot read request headers; the key does the job).
 *   6. Click "Send test lead". A TEST row should appear in the "Leads" tab.
 *
 * After editing this script later, use Deploy → Manage deployments → Edit → New version,
 * otherwise the URL keeps running the old code.
 */
const KEY = 'CHANGE-ME-to-a-long-random-string';
const SHEET_NAME = 'Leads';
const NOTIFY_EMAIL = ''; // e.g. 'you@gmail.com' — leave empty to skip

const COLUMNS = ['Received', 'ZIP', 'Name', 'Contact', 'Type', 'Issue', 'Source page', 'Lead ID', 'Status', 'Note'];

function doPost(e) {
  if (!e || !e.parameter || e.parameter.key !== KEY) return reply({ ok: false, error: 'bad key' });

  let lead;
  try {
    lead = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: 'invalid JSON' });
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    lead.createdAt || new Date().toISOString(),
    safe(lead.zip),
    safe(lead.name),
    safe(lead.contact),
    safe(lead.contactType),
    safe(lead.issue),
    safe(lead.sourceUrl || lead.source),
    safe(lead.id),
    'new',
    '',
  ]);

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(
      NOTIFY_EMAIL,
      'New HVAC lead — ' + safe(lead.zip),
      ['ZIP: ' + lead.zip, 'Name: ' + (lead.name || '-'), 'Contact: ' + lead.contact, 'Page: ' + (lead.sourceUrl || lead.source), '', lead.issue].join('\n')
    );
  }
  return reply({ ok: true });
}

// Visitor text must never be read as a spreadsheet formula (=, +, -, @ at the start).
function safe(v) {
  const s = v == null ? '' : String(v).slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
