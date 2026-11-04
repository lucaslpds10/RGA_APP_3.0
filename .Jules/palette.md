## 2024-03-24 - Conditional UI side-effects in shared functions
**Learning:** When a single function (like `adicionarLinha`) is used for both manual user interaction and bulk data operations (like imports or restoring backups), applying UI side-effects (like auto-focus) unconditionally can cause severe UX regressions, such as focus stealing during data loading.
**Action:** Always condition UI side-effects on a flag that indicates manual user intent (e.g., `if (salvar) { focus(); }`) when the function is shared across manual and automated contexts.
