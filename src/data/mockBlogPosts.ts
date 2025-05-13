interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Le Magento qu’on ne vous montre jamais',
    excerpt:
      'Sous les modules clinquants : dette technique, backlog fantôme, et prestataires muets. Découvrez l’envers du décor Magento.',
    content: `<p>Magento, c’est puissant. Flexible. Ambitieux. C’est aussi, souvent, un projet qui dérape lentement avant de s’écraser sans bruit. Et personne ne vous a prévenu. Parce que Magento, dans les brochures, c’est la promesse : un site scalable, modulaire, personnalisable à l’infini. Mais la réalité en agence, sur le terrain, avec des prestataires pressés et des clients mal accompagnés ? C’est une autre histoire.</p>
<p>Bienvenue dans l’envers du décor.</p>
<h2>1. La dette technique, ce monstre invisible</h2>
<p>Tout commence par des modules. Un ici, un autre là. Un développeur qui code vite, un autre qui patche sans documentation. Le projet avance. Le site fonctionne. Les tickets sont fermés. Mais à chaque sprint, la structure s’encombre. Magento 2 est exigeant : une bonne architecture, c’est vital. Or, dans 80% des cas que je reprends, le socle est déjà pourri avant même la recette.</p>
<p>Et quand il faut migrer ? Ou upgrader ? Là, la dette technique s’invite dans les devis. Et les zéros s’accumulent.</p>
<blockquote>
  <p>"Ce module n’est plus compatible."<br>
  "L’intégration frontend est trop couplée."<br>
  "On ne peut pas tester sans casser."</p>
</blockquote>
<p>Ce n’est pas Magento le problème. C’est ce qu’on en fait.</p>
<h2>2. Le backlog fantôme</h2>
<p>Dans beaucoup de projets e-commerce, le backlog devient un fourre-tout. Des tickets ouverts à la va-vite, jamais estimés, jamais priorisés. Des features floues, des bugs jamais tranchés. Les vraies urgences se noient dans la masse. Et au milieu : un client paumé, un PO absent ou débordé, une agence qui avance en flux tendu.</p>
<p>Alors les arbitrages se font au bruit. Pas à la valeur. Le backlog ne reflète plus la réalité. Il cache même les risques. Jusqu'à ce qu’un jour, ça bloque. Sans que personne ne comprenne vraiment pourquoi.</p>
<h2>3. Les prestataires muets</h2>
<p>C’est là que ça devient dangereux. Quand le projet tangue, les rôles s’érodent. L’agence se retranche derrière ses specs. Le client n’a pas les clés pour challenger. Le lead dev est sur deux autres projets. Le PM fait le tampon, mais sans pouvoir. À force de mails sans réponse, de versions mal testées, de "on regarde et on revient vers vous", la confiance s’effondre.</p>
<p>Et quand il faut reconstruire, il est trop tard. On parle alors de refonte, de "restart propre". Mais on recommence sans régler la cause : le manque de pilotage réel.</p>
<h2>Ce qu’on ne vous dit pas (et qu’il faut entendre)</h2>
<p>Magento, ce n’est pas pour tout le monde. Ce n’est pas plug & play. C’est une plateforme pour les marchands qui ont une vraie vision SI, un besoin complexe, et les moyens de le faire bien.</p>
<ul>
  <li>ça demande du pilotage,</li>
  <li>de la documentation,</li>
  <li>une gouvernance ferme,</li>
  <li>et quelqu’un pour poser les questions dérangeantes avant qu’elles ne deviennent bloquantes.</li>
</ul>
<blockquote>
  <p>Le bon projet Magento n’est pas celui où tout roule.<br>
  C’est celui où tout est prévu pour quand ça déraille.</p>
</blockquote>
<p><strong>Vous héritez d’un projet Magento mal embarqué ?</strong><br>
J’interviens en reprise, cadrage, structuration. Pour remettre du rythme, de la clarté, et du sens. On ne vend pas du rêve ici. On répare les promesses cassées.</p>
<p><a href="https://expertecom.fr/contact">Contactez-moi sur expertecom.fr</a></p>`,
    date: '2024-05-13',
    author: 'Maria-Lena Pietri',
    tags: ['Magento', 'E-commerce', 'Pilotage'],
    slug: 'magento-envers-du-decor',
  },
  {
    id: '2',
    title: 'Mastering TypeScript',
    excerpt: 'Deep dive into TypeScript features and best practices',
    content: `
      # Mastering TypeScript

      TypeScript is a powerful superset of JavaScript that adds static typing and other features.
      Let's explore some advanced concepts and best practices.

      ## Why TypeScript?

      TypeScript adds several key features to JavaScript:

      1. Static typing
      2. Interface definitions
      3. Generics
      4. Decorators
      5. Enhanced IDE support

      ## Getting Started

      First, install TypeScript globally:
      \`\`\`bash
      npm install -g typescript
      \`\`\`
    `,
    date: '2023-12-14',
    author: 'Jane Smith',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    slug: 'mastering-typescript',
  },
];
