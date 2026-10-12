## 2024-05-24 - Accessible Toast Notifications
**Learning:** Custom toast/status messages need `role="status"` and `aria-live="polite"` so screen reader users are notified when background tasks (like auto-saves or clear confirmations) complete.
**Action:** Always add ARIA live regions to custom status notification elements.
