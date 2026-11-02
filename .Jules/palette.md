## 2024-05-14 - Screen Reader Accessible Dynamic Toasts
**Learning:** Dynamic status messages (toasts) injected into the DOM or toggled via classes need `role="status"` and `aria-live="polite"` to be announced by screen readers without stealing focus or interrupting current tasks.
**Action:** Always add `role="status"` and `aria-live="polite"` (or `assertive` for critical alerts) to elements like `.status-message` or toast notifications that appear dynamically to provide feedback to users.
