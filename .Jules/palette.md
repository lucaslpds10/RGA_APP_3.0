## 2026-10-25 - Improve Screen Reader Accessibility for Status Messages
**Learning:** Dynamic status messages (toasts) in the UI, such as `.status-message`, need to include `role="status"` and `aria-live="polite"` to ensure screen reader accessibility. Otherwise, visually impaired users will not receive these non-blocking notifications.
**Action:** When working on UI notifications or dynamic updates, always ensure proper ARIA attributes like `role="status"` and `aria-live="polite"` are applied to the container element so that screen readers can announce the changes.
