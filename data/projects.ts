import { Locale } from './locales';

export interface View {
  name: string;
  desktop?: string;
  tablet?: string;
  mobile?: string;
}
export interface Link {
  name: string;
  href?: string;
}
export interface Project {
  title: string;
  views: View[];
  tools: string[];
  lead: string;
  description: string;
  links: Link[];
}

const projects: {
  [Locale.en]: Project[];
  [Locale.fr]: Project[];
} = {
  en: [
    {
      title: 'Antique Store',
      views: [
        {
          name: 'Home',
          desktop: '/projects/auntsadies/1-desktop',
          tablet: '/projects/auntsadies/1-tablet',
          mobile: '/projects/auntsadies/1-mobile',
        },
        {
          name: 'Cart',
          desktop: '/projects/auntsadies/2-desktop',
          tablet: '/projects/auntsadies/2-tablet',
          mobile: '/projects/auntsadies/2-mobile',
        },
        {
          name: 'Item Cards',
          desktop: '/projects/auntsadies/3-desktop',
          tablet: '/projects/auntsadies/3-tablet',
          mobile: '/projects/auntsadies/3-mobile',
        },
        {
          name: 'Editing CMS',
          desktop: '/projects/auntsadies/4-desktop',
          tablet: '/projects/auntsadies/4-tablet',
          mobile: '/projects/auntsadies/4-mobile',
        },
        {
          name: 'Gallery',
          desktop: '/projects/auntsadies/5-desktop',
          tablet: '/projects/auntsadies/5-tablet',
          mobile: '/projects/auntsadies/5-mobile',
        },
        {
          name: 'Login',
          desktop: '/projects/auntsadies/6-desktop',
          tablet: '/projects/auntsadies/6-tablet',
          mobile: '/projects/auntsadies/6-mobile',
        },
        {
          name: 'Stripe Checkout',
          desktop: '/projects/auntsadies/7-desktop',
          tablet: '/projects/auntsadies/7-tablet',
          mobile: '/projects/auntsadies/7-mobile',
        },
      ],
      tools: [
        'REACT',
        'NEXT',
        'STYLED-COMPONENTS',
        'SEMANTIC-UI',
        'GRAPHQL',
        'APOLLO',
        'PRISMA',
        'STRIPE',
      ],
      lead:
        'As an homage to my previous emploment at an antique store, I wanted my first ambitious project to mirror my dreams of a web store while I was working there. An e-shop complete with a CMS for CRUD operations, user permissions, stripe checkout, authentication, search, and so much more.',
      description: `
    With the backend largely based off Wes Bos' Advanced React course, I added my own touches by using some of (at the time) the latest React features such as React Hooks and implementing some nice front-end components such as a carousel for the item listings(inspired by AirBNB) and a gallery for a more detailed view (inspired by Sotheby's galleries for antiques). There's still plenty I'd like to add to this site, but for now I'm using the lessons learned from it on other projects.`,
      links: [
        { name: 'Contact me for demo links' },
        { name: 'Github', href: 'https://github.com/GitSimmons/antiquestore' },
      ],
    },
    {
      title: 'Ragnarok MVP Tracker',
      views: [
        {
          name: 'Single Page App',
          desktop: '/projects/ragnarok/ragnarok-desktop',
          tablet: '/projects/ragnarok/ragnarok-tablet',
          mobile: '/projects/ragnarok/ragnarok-mobile',
        },
      ],
      tools: [
        'TYPESCRIPT',
        'REACT',
        'NEXT',
        'STYLED-COMPONENTS',
        'PUPPETEER',
        'FIRESTORE',
        'AWS LAMBDA',
        'JEST',
      ],
      lead:
        'Ragnarok is an online game with server wide bosses to hunt. This tool helps players to see which bosses are available at a glance.',
      description: `This is accomplished by scraping an online page that lists the latest kills of these bosses with Puppeteer running on Google Cloud Functions (formerly on AWS Lambda) and then updating a FireStore database. On the front-end, NextJS renders out the basic table and pulls the data through a subscription to FireStore. Because NextJS uses SSR, requests to the database are kept constant rather than based on current users. This project was recently migrated to GCF from Lambda, and rewritten in TypeScript.`,
      links: [
        { name: 'LIVE SITE', href: 'https://r0mvptracker.now.sh/' },
        {
          name: 'Front-end Github',
          href: 'https://github.com/GitSimmons/r0mvptracker',
        },
        { name: 'Back-end Github', href: 'https://github.com/GitSimmons/r0mvptracker-backend' },
      ],
    },
    {
      title: 'Scholar Guide',
      views: [
        {
          name: 'Landing Page',
          desktop: '/projects/sch/1-desktop',
          tablet: '/projects/sch/1-tablet',
          mobile: '/projects/sch/1-mobile',
        },
        {
          name: 'Skill Tree',
          desktop: '/projects/sch/2-desktop',
          tablet: '/projects/sch/2-tablet',
          mobile: '/projects/sch/2-mobile',
        },
        {
          name: 'Other Skills',
          desktop: '/projects/sch/3-desktop',
          tablet: '/projects/sch/3-tablet',
          mobile: '/projects/sch/3-mobile',
        },
        {
          name: 'Rotation',
          desktop: '/projects/sch/4-desktop',
          tablet: '/projects/sch/4-tablet',
          mobile: '/projects/sch/4-mobile',
        },
        {
          name: 'Decision Making',
          desktop: '/projects/sch/5-desktop',
          tablet: '/projects/sch/5-tablet',
          mobile: '/projects/sch/5-mobile',
        },
      ],
      tools: ['REACT', 'STYLED-COMPONENTS', 'Netlify'],
      lead: `While most game guides for Final Fantasy XIV are distributed as unstyled google docs, Sovasin Kair distributed his with a stunning design as a png image. Unfortunately, due to it's enormous size, it was difficult to use effectively. I offered to transform his design into a single page site that could be viewed as easily on mobile as on desktop.`,
      description: '',
      links: [
        { name: 'LIVE SITE', href: 'https://sch-sovas.netlify.com/' },
        {
          name: 'Github',
          href: 'https://github.com/GitSimmons/sch.sovas',
        },
      ],
    },
    {
      title: 'Confluence Floating ToC',
      views: [
        {
          name: 'Multi Level Highlights',
          desktop: '/projects/floating-toc/1-desktop',
        },
      ],
      tools: ['Javascript', 'CSS'],
      lead:
        'A no-frameworks JS + CSS approach to adding some quality of life features to the Confluence Table of Contents Macro. Features include: Multi Level Highlighting, Sticky-ish Positioning, and Collapsable Headings',
      description: '',
      links: [
        {
          name: 'View on Code Pen',
          href: 'https://codepen.io/SimmonsPen/full/yLBwBLN',
        },
        {
          name: 'Github',
          href: 'https://github.com/GitSimmons/confluence-floating-toc',
        },
      ],
    },
  ],
  fr: [
    {
      title: `Magasin D'Antiquités`,
      views: [
        {
          name: 'Accueil',
          desktop: '/projects/auntsadies/1-desktop',
          tablet: '/projects/auntsadies/1-tablet',
          mobile: '/projects/auntsadies/1-mobile',
        },
        {
          name: 'Panier',
          desktop: '/projects/auntsadies/2-desktop',
          tablet: '/projects/auntsadies/2-tablet',
          mobile: '/projects/auntsadies/2-mobile',
        },
        {
          name: 'Cartes',
          desktop: '/projects/auntsadies/3-desktop',
          tablet: '/projects/auntsadies/3-tablet',
          mobile: '/projects/auntsadies/3-mobile',
        },
        {
          name: 'CMS',
          desktop: '/projects/auntsadies/4-desktop',
          tablet: '/projects/auntsadies/4-tablet',
          mobile: '/projects/auntsadies/4-mobile',
        },
        {
          name: 'Gallerie',
          desktop: '/projects/auntsadies/5-desktop',
          tablet: '/projects/auntsadies/5-tablet',
          mobile: '/projects/auntsadies/5-mobile',
        },
        {
          name: 'Connecter',
          desktop: '/projects/auntsadies/6-desktop',
          tablet: '/projects/auntsadies/6-tablet',
          mobile: '/projects/auntsadies/6-mobile',
        },
        {
          name: 'Paiement Stripe',
          desktop: '/projects/auntsadies/7-desktop',
          tablet: '/projects/auntsadies/7-tablet',
          mobile: '/projects/auntsadies/7-mobile',
        },
      ],
      tools: [
        'REACT',
        'NEXT',
        'STYLED-COMPONENTS',
        'SEMANTIC-UI',
        'GRAPHQL',
        'APOLLO',
        'PRISMA',
        'STRIPE',
      ],
      lead:
        'As an homage to my previous emploment at an antique store, I wanted my first ambitious project to mirror my dreams of a web store while I was working there. An e-shop complete with a CMS for CRUD operations, user permissions, stripe checkout, authentication, search, and so much more.',
      description: `
    With the backend largely based off Wes Bos' Advanced React course, I added my own touches by using some of (at the time) the latest React features such as React Hooks and implementing some nice front-end components such as a carousel for the item listings(inspired by AirBNB) and a gallery for a more detailed view (inspired by Sotheby's galleries for antiques). There's still plenty I'd like to add to this site, but for now I'm using the lessons learned from it on other projects.`,
      links: [
        { name: 'Contact me for demo links' },
        { name: 'Github', href: 'https://github.com/GitSimmons/antiquestore' },
      ],
    },
    {
      title: 'Ragnarok MVP',
      views: [
        {
          name: 'SPA',
          desktop: '/projects/ragnarok/ragnarok-desktop',
          tablet: '/projects/ragnarok/ragnarok-tablet',
          mobile: '/projects/ragnarok/ragnarok-mobile',
        },
      ],
      tools: [
        'TYPESCRIPT',
        'REACT',
        'NEXT',
        'STYLED-COMPONENTS',
        'PUPPETEER',
        'FIRESTORE',
        'AWS LAMBDA',
        'JEST',
      ],
      lead: `En Ragnarok, les joueuers chassent des boss partagées par l'ensemble du serveur. Cet util aide ces joueuers à voir rapidement celles qui sont toujours disponibles.`,
      description: `
      L'effet est accompli par recueillir les donnés d'un site web qui liste les chasses réussis récemment avec Puppeteer sur Google Cloud Functions.`,
      //      `This is accomplished by scraping an online page that lists the latest kills of these bosses with Puppeteer running on Google Cloud Functions (formerly on AWS Lambda) and then updating a FireStore database. On the front-end, NextJS renders out the basic table and pulls the data through a subscription to FireStore. Because NextJS uses SSR, requests to the database are kept constant rather than based on current users. This project was recently migrated to GCF from Lambda, and rewritten in TypeScript.`,
      links: [
        { name: 'LIVE SITE', href: 'https://r0mvptracker.now.sh/' },
        {
          name: 'Front-end Github',
          href: 'https://github.com/GitSimmons/r0mvptracker',
        },
        { name: 'Back-end Github', href: 'https://github.com/GitSimmons/r0mvptracker-backend' },
      ],
    },
    {
      title: `Guide d'Érudit`,
      views: [
        {
          name: 'Accueil',
          desktop: '/projects/sch/1-desktop',
          tablet: '/projects/sch/1-tablet',
          mobile: '/projects/sch/1-mobile',
        },
        {
          name: 'Arbre de compétences',
          desktop: '/projects/sch/2-desktop',
          tablet: '/projects/sch/2-tablet',
          mobile: '/projects/sch/2-mobile',
        },
        {
          name: 'Actions',
          desktop: '/projects/sch/3-desktop',
          tablet: '/projects/sch/3-tablet',
          mobile: '/projects/sch/3-mobile',
        },
        {
          name: 'Rotation',
          desktop: '/projects/sch/4-desktop',
          tablet: '/projects/sch/4-tablet',
          mobile: '/projects/sch/4-mobile',
        },
        {
          name: 'Décisions',
          desktop: '/projects/sch/5-desktop',
          tablet: '/projects/sch/5-tablet',
          mobile: '/projects/sch/5-mobile',
        },
      ],
      tools: ['REACT', 'STYLED-COMPONENTS', 'Netlify'],
      lead: `While most game guides for Final Fantasy XIV are distributed as unstyled google docs, Sovasin Kair distributed his with a stunning design as a png image. Unfortunately, due to it's enormous size, it was difficult to use effectively. I offered to transform his design into a single page site that could be viewed as easily on mobile as on desktop.`,
      description: '',
      links: [
        { name: 'Live', href: 'https://sch-sovas.netlify.com/' },
        {
          name: 'Github',
          href: 'https://github.com/GitSimmons/sch.sovas',
        },
      ],
    },
    {
      title: 'Confluence ToC Floatant',
      views: [
        {
          name: 'Souligne plusieurs niveaux',
          desktop: '/projects/floating-toc/1-desktop',
        },
      ],
      tools: ['Javascript', 'CSS'],
      lead:
        'A no-frameworks JS + CSS approach to adding some quality of life features to the Confluence Table of Contents Macro. Features include: Multi Level Highlighting, Sticky-ish Positioning, and Collapsable Headings',
      description: '',
      links: [
        {
          name: 'Code Pen',
          href: 'https://codepen.io/SimmonsPen/full/yLBwBLN',
        },
        {
          name: 'Github',
          href: 'https://github.com/GitSimmons/confluence-floating-toc',
        },
      ],
    },
  ],
};

export default projects;
