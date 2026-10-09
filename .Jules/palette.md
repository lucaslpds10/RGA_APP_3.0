## 2024-05-24 - Accessibility for Custom Toast Messages
**Learning:** Custom toast messages created using absolute/fixed positioning and CSS transitions are often completely invisible to screen readers because they are dynamically inserted or have their classes updated without alerting the accessibility tree.
**Action:** Always add `role="status"` and `aria-live="polite"` (or `aria-live="assertive"` for critical errors) to the container element of custom toast or status messages so that screen readers announce their content when it changes.
