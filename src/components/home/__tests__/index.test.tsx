import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '../../../pages/index';

// Mock all home section components
const MockLayout = ({ children }: any) => <div data-testid="layout">{children}</div>;
MockLayout.displayName = 'MockLayout';
jest.mock('../../layout', () => MockLayout);
const MockSEO = () => <></>;
MockSEO.displayName = 'MockSEO';
jest.mock('../../seo', () => ({ SEO: MockSEO }));
const MockHero = () => <section>HeroSection</section>;
MockHero.displayName = 'MockHero';
jest.mock('../../home/hero', () => MockHero);
const MockNeeds = () => <section>NeedsSection</section>;
MockNeeds.displayName = 'MockNeeds';
jest.mock('../../home/needs', () => MockNeeds);
const MockServices = () => <section>ServicesSection</section>;
MockServices.displayName = 'MockServices';
jest.mock('../../home/services', () => MockServices);
const MockBrands = () => <section>BrandsSection</section>;
MockBrands.displayName = 'MockBrands';
jest.mock('../../home/brands', () => MockBrands);
const MockCallToAction = () => <section>CallToActionSection</section>;
MockCallToAction.displayName = 'MockCallToAction';
jest.mock('../../home/call-to-action', () => MockCallToAction);
jest.mock('../../../data/home', () => ({
  homeData: {
    hero: {},
    needs: {},
    services: { title: '', items: [] },
    brands: {},
    callToAction: {},
  },
}));

describe('IndexPage (Home)', () => {
  it('renders all main sections', () => {
    render(<IndexPage />);
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    expect(screen.getByText('HeroSection')).toBeInTheDocument();
    expect(screen.getByText('NeedsSection')).toBeInTheDocument();
    expect(screen.getByText('ServicesSection')).toBeInTheDocument();
    expect(screen.getByText('BrandsSection')).toBeInTheDocument();
    expect(screen.getByText('CallToActionSection')).toBeInTheDocument();
  });
});
