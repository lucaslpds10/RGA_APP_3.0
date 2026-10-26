## 2024-05-24 - Focus Management during Bulk Imports
**Learning:** Adding auto-focus to dynamically created elements (like table rows) improves manual data entry UX, but it creates a severe focus-stealing regression when the same function is reused for bulk data imports or initial rendering.
**Action:** Always conditionally apply UI side-effects (like focus management) in reusable component functions by checking the context (e.g., using a flag like `isManualAction` or checking if it's during a save operation).

## 2024-05-24 - Dynamic Status Messages Accessibility
**Learning:** Screen readers ignore dynamically injected text changes in the DOM (like toast notifications or status messages) unless the container is explicitly marked with ARIA live region attributes.
**Action:** Always include `role="status"` and `aria-live="polite"` (or `assertive` for critical alerts) on notification containers before updating their text content.
