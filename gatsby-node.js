exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type HomeJson implements Node {
      hero: Hero!
      needs: Needs!
      services: Services!
      brands: Brands!
      callToAction: CallToAction!
    }

    type Hero {
      title: String!
      subtitle: String!
      cta: HeroCta!
    }

    type HeroCta {
      text: String!
      link: String!
      phoneNumber: String
    }

    type Needs {
      title: String!
      items: [NeedItem!]!
    }

    type NeedItem {
      question: String!
      solution: String!
      link: String!
    }

    type Services {
      title: String!
      items: [ServiceItem!]!
    }

    type ServiceItem {
      title: String!
      description: String!
      icon: String!
      link: String!
    }

    type Brands {
      title: String!
      items: [BrandItem!]!
    }

    type BrandItem {
      name: String!
      logo: String!
      alt: String!
    }

    type CallToAction {
      title: String!
      buttons: [HomeButton!]!
    }

    type HomeButton {
      text: String!
      link: String!
      type: String!
      isExternal: Boolean
      phoneNumber: String
    }
  `;
  createTypes(typeDefs);
};
