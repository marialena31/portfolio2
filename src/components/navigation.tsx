import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { MenuItem } from '../types';

const Nav = styled.nav`
  padding: 1rem 0;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #663399;
  }
  
  &.active {
    color: #663399;
  }
`;

const Navigation: React.FC = () => {
  const menuItems: MenuItem[] = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <Nav>
      <NavList>
        {menuItems.map(({ path, label }) => (
          <NavItem key={path}>
            <NavLink to={path} activeClassName="active">
              {label}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navigation;
