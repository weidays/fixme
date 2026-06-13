# fixme.vip — 项目约定

本项目的工作产物全部落在项目目录内，不写 `~/.claude`：

- **PRD**：`MEMORY/WORK/{slug}/PRD.md`
- **记忆**：`MEMORY/*.md`，索引在 `MEMORY/MEMORY.md`（通过下方导入自动加载）。新增/更新记忆一律写这里，不写 `~/.claude/projects/.../memory/`

`MEMORY/` 已被 .gitignore 排除，不会随仓库发布。

@MEMORY/MEMORY.md
