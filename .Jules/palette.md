## 2026-10-21 - [A11y: Toast Notifications]
**Learning:** Screen readers do not automatically announce content that dynamically appears on the screen (like toast notifications or status messages) unless they are specifically marked as live regions. Visually impaired users would entirely miss "Save successful" toasts.
**Action:** Always add `role="status"` and `aria-live="polite"` to dynamically appearing status message containers (toasts) so they are read out by screen readers without interrupting the user.
