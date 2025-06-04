# ServiceCard Component

Displays a service offering with icon, title, description, and features list.

## Props

- `title`: string | React.ReactNode – Service title
- `price`: string (optional) – Service price
- `description`: string – Service description
- `features`: string[] – List of features
- `emoji`: string (optional) – Emoji to display
- `highlight`: boolean (optional) – Highlight style

## Usage Example

```tsx
<ServiceCard
  title="Audit"
  description="Analyse complète de votre site"
  features={['Rapport détaillé', 'Recommandations personnalisées']}
  emoji="🛠"
  highlight
/>
```

## Accessibility

- Icon has ARIA label
- Card is keyboard accessible

## Related

- Used in home/services section
