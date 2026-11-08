## 2024-11-08 - Accessible Toast Notifications
**Learning:** Dynamic toast components in vanilla JS that only visually appear need specific ARIA roles to be announced by screen readers without stealing focus.
**Action:** Always add `role="status"` and `aria-live="polite"` to dynamically appearing status messages.
