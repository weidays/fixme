// Site-wide constants. Monetization placeholders live here so flipping them
// on (after affiliate approvals) is a one-line change, not a refactor.

export const SITE_NAME = 'fixme.vip';
export const SITE_TAGLINE = 'HVAC error codes, explained and fixed';

// Rail A — Amazon Associates. Replace after approval; links render with this tag.
export const AMAZON_TAG = 'fixmevip-20'; // TODO: replace with your real Associates tag

// Rail B — pay-per-call number. Empty string = phone CTA hidden (form-only)
// until a Service Direct / pay-per-call number is provisioned.
export const QUOTE_PHONE = '';

export const BRANDS = [
  'carrier',
  'goodman',
  'trane',
  'lennox',
  'york',
  'rheem',
  'bryant',
  'amana',
  'honeywell',
  'american-standard',
] as const;

export const BRAND_LABELS: Record<(typeof BRANDS)[number], string> = {
  carrier: 'Carrier',
  goodman: 'Goodman',
  trane: 'Trane',
  lennox: 'Lennox',
  york: 'York',
  rheem: 'Rheem',
  bryant: 'Bryant',
  amana: 'Amana',
  honeywell: 'Honeywell',
  'american-standard': 'American Standard',
};

export const EQUIPMENT = [
  'furnace',
  'air-conditioner',
  'heat-pump',
  'mini-split',
  'thermostat',
] as const;

export const EQUIPMENT_LABELS: Record<(typeof EQUIPMENT)[number], string> = {
  furnace: 'Furnace',
  'air-conditioner': 'Air Conditioner',
  'heat-pump': 'Heat Pump',
  'mini-split': 'Mini Split',
  thermostat: 'Thermostat',
};

export const SEVERITIES = ['diy', 'pro', 'emergency'] as const;

export function amazonSearchUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
