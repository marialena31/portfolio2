# DiagnosticForm

Formulaire de diagnostic Magento 1 pour audit/migration.
- Collecte les réponses utilisateur (questions business, m1status, eco, budget)
- Calcule le score et affiche une recommandation personnalisée
- Collecte les coordonnées (nom, prénom, email, société, url du site)
- Envoie le résultat par email au client + copie à l’admin via mail-server-api

## Utilisation
```tsx
<DiagnosticForm />
```

## Style
Ce composant utilise exclusivement TailwindCSS pour le style.

## À faire
- Implémenter le formulaire dynamique
- Ajouter la logique de scoring
- Intégrer l’appel à l’API mail-server-api
- Ajouter la validation et les tests
