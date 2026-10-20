## 2024-05-30 - Focus management when adding new rows
**Learning:** In a dynamic table list, adding a new item creates cognitive friction if the user must manually click or tab into the newly created row. However, blindly setting focus on every row creation disrupts workflows like bulk imports.
**Action:** When a new row is manually created by the user, set focus on its first input field and smoothly scroll it into view. Condition this behaviour on manual creation (e.g. `salvar=true`) to avoid stealing focus during bulk imports.
