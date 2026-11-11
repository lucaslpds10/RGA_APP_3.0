## 2024-05-18 - [Auto-focusing without stealing focus on bulk operations]
**Learning:** When adding focus logic to a row creation function used for both manual entry and bulk data loading (like imports), unconditional auto-focus causes jarring focus stealing and accessibility issues as the browser tries to focus every single element being loaded.
**Action:** Always wrap auto-focus logic in a conditional block (e.g. `if (isManualAction)`) to ensure it only fires during explicit user interaction, preventing focus jumping during data hydration.
