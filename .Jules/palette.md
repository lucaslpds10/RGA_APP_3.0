## 2024-05-18 - Toast Message Accessibility
**Learning:** In vanilla JS applications like RGA_APP_3.0 that use custom toast notifications (e.g. `.status-message`), screen readers often miss dynamic updates because there are no default ARIA attributes alerting them to the changes.
**Action:** Always ensure dynamic notification elements in the DOM are explicitly decorated with `role="status"` and `aria-live="polite"` so screen readers seamlessly read out the updates without stealing focus from the user's current task.
