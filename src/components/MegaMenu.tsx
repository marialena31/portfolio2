import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link } from 'gatsby';
import React from 'react';

// Exemple de structure, à personnaliser selon tes sections/menus
const menuItems = [
  {
    label: 'Offre & Services',
    content: [
      {
        title: 'Présentation des services',
        description: 'Tout ce que je propose',
        href: '/services',
      },
      {
        title: 'Pourquoi me choisir ?',
        description: 'Mon approche et mes valeurs',
        href: '/pourquoi-choisir',
      },
      { title: 'Conseils de pro', description: 'Astuces et expertise', href: '/conseils-pro' },
      {
        title: 'Diagnostic Magento 1',
        description: 'Audit gratuit de votre site',
        href: '/diagnostic-magento1',
      },
    ],
  },
  {
    label: 'Portfolio',
    content: [
      { title: 'Portfolio', description: 'Réalisations & projets', href: '/portfolio' },
      {
        title: 'Études de cas',
        description: 'Cas clients détaillés',
        href: '/portfolio#etudes-de-cas',
      },
    ],
  },
  {
    label: 'Ressources',
    content: [
      { title: 'Plaquette ExpertEcom', description: 'Présentation PDF', href: '/plaquette' },
      { title: 'Blog', description: 'Articles & veille', href: '/blog' },
      { title: 'Jeux RGPD Inside', description: 'Jeu interactif RGPD', href: '/jeux' },
    ],
  },
  {
    label: 'Contact',
    content: [
      { title: 'Déposer un projet', description: 'Formulaire projet', href: '/projet' },
      { title: 'Envoyer un message', description: 'Contact direct', href: '/contact' },
      {
        title: 'Prendre rendez-vous',
        description: 'Calendly',
        href: 'https://calendly.com/marialena31/30min',
        external: true,
      },
    ],
  },
];

/**
 * MegaMenu (Radix UI)
 * -------------------
 * Ce composant fournit un méga menu accessible et réactif pour le desktop, basé sur @radix-ui/react-navigation-menu.
 * Toute la logique d'ouverture/fermeture, focus et accessibilité est gérée par Radix UI.
 *
 * Pour personnaliser les sections ou liens du menu, modifier la constante menuItems ci-dessous.
 * Ce composant NE prend AUCUNE prop externe : il est totalement autonome.
 *
 * Pour toute modification de structure ou de style, intervenir ici directement.
 */
export const MegaMenu: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <NavigationMenu.Root className="relative z-30" data-testid="mega-menu-root">
      {/* Desktop menu */}
      <NavigationMenu.List
        className="hidden md:flex space-x-8 bg-white rounded-xl shadow-lg px-6 py-3"
        aria-label="Menu principal"
      >
        {menuItems.map(item => (
          <NavigationMenu.Item
            key={item.label}
            className="relative"
            data-testid={`menu-item-${item.label}`}
          >
            <NavigationMenu.Trigger
              className="px-4 py-2 font-semibold rounded hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
              aria-haspopup="true"
              aria-expanded="false"
              tabIndex={0}
            >
              {item.label}
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              className="absolute left-0 mt-2 min-w-[320px] bg-white rounded-xl shadow-2xl p-6 grid grid-cols-1 gap-4 animate-fade-in border border-gray-100"
              role="menu"
              aria-label={`Sous-menu ${item.label}`}
            >
              {item.content.map(link =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block p-2 rounded hover:bg-blue-50 transition focus:bg-blue-100 focus:outline-none"
                    tabIndex={0}
                    role="menuitem"
                    aria-label={link.title}
                    data-testid={`submenu-link-${link.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="font-bold text-gray-900">{link.title}</div>
                    <div className="text-sm text-gray-500">{link.description}</div>
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block p-2 rounded hover:bg-blue-50 transition focus:bg-blue-100 focus:outline-none"
                    tabIndex={0}
                    role="menuitem"
                    aria-label={link.title}
                    data-testid={`submenu-link-${link.title}`}
                  >
                    <div className="font-bold text-gray-900">{link.title}</div>
                    <div className="text-sm text-gray-500">{link.description}</div>
                  </Link>
                )
              )}
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
      {/* Mobile burger button */}
      <button
        className="md:hidden flex items-center px-4 py-2 border rounded text-blue-700 border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        onClick={() => setMobileOpen(v => !v)}
        data-testid="burger-button"
      >
        <span className="sr-only">Menu</span>
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block align-middle"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-0 right-0 top-16 bg-white shadow-xl rounded-b-xl py-4 px-6 z-50 animate-fade-in"
          role="menu"
          aria-label="Menu principal mobile"
          data-testid="mobile-menu"
        >
          {menuItems.map(item => (
            <div key={item.label} className="mb-4" data-testid={`mobile-menu-item-${item.label}`}>
              <div className="font-semibold text-blue-700 mb-2">{item.label}</div>
              <div className="flex flex-col gap-2">
                {item.content.map(link =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block p-2 rounded hover:bg-blue-50 transition focus:bg-blue-100 focus:outline-none"
                      tabIndex={0}
                      role="menuitem"
                      aria-label={link.title}
                      data-testid={`mobile-submenu-link-${link.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="font-bold text-gray-900">{link.title}</div>
                      <div className="text-sm text-gray-500">{link.description}</div>
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block p-2 rounded hover:bg-blue-50 transition focus:bg-blue-100 focus:outline-none"
                      tabIndex={0}
                      role="menuitem"
                      aria-label={link.title}
                      data-testid={`mobile-submenu-link-${link.title}`}
                    >
                      <div className="font-bold text-gray-900">{link.title}</div>
                      <div className="text-sm text-gray-500">{link.description}</div>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <NavigationMenu.Indicator className="hidden md:block absolute bottom-0 left-0 h-1 bg-blue-500 rounded transition-all duration-200" />
      <NavigationMenu.Viewport className="hidden md:block absolute left-0 w-full" />
    </NavigationMenu.Root>
  );
};

export default MegaMenu;
