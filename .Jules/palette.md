## 2024-05-24 - Conditional Focus Management on Row Addition
**Learning:** Adding auto-focus to newly created rows improves manual input flow but can cause severe focus-stealing regressions during bulk operations (like importing data) where the same row addition function is reused.
**Action:** When adding focus management or other UI side-effects to functions that create DOM elements, always check if the action was triggered by a single user interaction (e.g. `salvar` flag) versus a batch process.
