# ProjectForm Component

A form component for submitting or editing project data.

## Props

- `onSubmit`: function – Callback when the form is submitted
- `initialValues`: object – Initial values for the form fields
- `loading`: boolean – Loading state
- `error`: string (optional) – Error message to display

## Usage Example

```tsx
<ProjectForm
  onSubmit={handleSubmit}
  initialValues={projectData}
  loading={isLoading}
  error={errorMsg}
/>
```

## Accessibility

- Keyboard accessible
- Proper labels and ARIA attributes

## Related

- Used in project creation/edit pages
