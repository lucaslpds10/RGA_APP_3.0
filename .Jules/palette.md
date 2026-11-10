## 2024-05-24 - Conditional Focus in Shared Functions
**Learning:** Adding auto-focus UI enhancements to a function used for both user-initiated actions and programmatic tasks (like bulk data imports) can lead to focus-stealing regressions.
**Action:** When adding focus logic to shared row-creation functions, always wrap it in a condition (e.g., checking a `salvar` flag) to ensure the enhancement only fires during manual user interactions and not during bulk imports.
