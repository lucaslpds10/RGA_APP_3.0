## 2024-05-24 - Dynamic Status Message Accessibility
**Learning:** Dynamic status messages (toasts) that appear on the screen without user focus need `role="status"` and `aria-live="polite"` so screen readers will announce them properly. Otherwise, screen reader users might not know an action like "Data Saved" was successful.
**Action:** Always add ARIA live region attributes to dynamic notification containers.
