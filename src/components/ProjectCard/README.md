# ProjectCard Component

Displays a project with title, description, and optional image or link.

## Props

- `title`: string – Project title
- `description`: string – Project description
- `image`: string (optional) – Project image URL
- `link`: string (optional) – Link to the project

## Usage Example

```tsx
<ProjectCard
  title="Mon projet"
  description="Description du projet"
  image="/img/projet.png"
  link="https://exemple.com"
/>
```

## Accessibility

- Card is keyboard accessible
- Image has alt text if provided

## Related

- Used in project showcase sections
