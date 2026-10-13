## 2026-10-13 - Add context to disabled buttons and make status messages announced

**Learning:** Disabled buttons without tooltips are confusing for users, especially those using screen readers, because they can't understand *why* an action is unavailable. Additionally, status messages that appear visually need `role="status"` and `aria-live="polite"` so screen readers can announce the content to visually impaired users dynamically.

**Action:** Added a `title` explaining why the restore button is disabled, and toggled it dynamically in JavaScript. Added `role="status"` and `aria-live="polite"` to `.status-message` so dynamic notifications (e.g., "Lista limpa com sucesso!") are spoken by screen readers.
