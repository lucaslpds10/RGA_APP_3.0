## 2024-05-24 - Accessible Toast Notifications
**Learning:** Dynamic status messages and toast notifications that appear and disappear need `role="status"` and `aria-live="polite"` to be announced by screen readers. Without these attributes, visually impaired users will not receive feedback when actions like saving, importing, or clearing lists occur.
**Action:** Always verify that dynamic UI feedback elements use appropriate ARIA live regions so screen reader users are kept informed of background state changes without their focus being interrupted.
