const projects = [
  {
    title: "Antique Store",
    views: [
      {
        name: "Landing",
        desktop: "/images/projects/auntsadies/1-desktop.jpg",
        tablet: "/images/projects/auntsadies/1-tablet.jpg",
        mobile: "/images/projects/auntsadies/1-mobile.jpg"
      },
      {
        name: "Cart",
        desktop: "/images/projects/auntsadies/2-desktop.jpg",
        tablet: "/images/projects/auntsadies/2-tablet.jpg",
        mobile: "/images/projects/auntsadies/2-mobile.jpg"
      },
      {
        name: "Item Cards",
        desktop: "/images/projects/auntsadies/3-desktop.jpg",
        tablet: "/images/projects/auntsadies/3-tablet.jpg",
        mobile: "/images/projects/auntsadies/3-mobile.jpg"
      },
      {
        name: "Editing CMS",
        desktop: "/images/projects/auntsadies/4-desktop.jpg",
        tablet: "/images/projects/auntsadies/4-tablet.jpg",
        mobile: "/images/projects/auntsadies/4-mobile.jpg"
      },
      {
        name: "Gallery",
        desktop: "/images/projects/auntsadies/5-desktop.jpg",
        tablet: "/images/projects/auntsadies/5-tablet.jpg",
        mobile: "/images/projects/auntsadies/5-mobile.jpg"
      },
      {
        name: "Login",
        desktop: "/images/projects/auntsadies/6-desktop.jpg",
        tablet: "/images/projects/auntsadies/6-tablet.jpg",
        mobile: "/images/projects/auntsadies/6-mobile.jpg"
      },
      {
        name: "Stripe Checkout",
        desktop: "/images/projects/auntsadies/7-desktop.jpg",
        tablet: "/images/projects/auntsadies/7-tablet.jpg",
        mobile: "/images/projects/auntsadies/7-mobile.jpg"
      }
    ],
    tools: [
      "REACT",
      "NEXT",
      "STYLED-COMPONENTS",
      "SEMANTIC-UI",
      "GRAPHQL",
      "APOLLO",
      "PRISMA",
      "STRIPE"
    ],
    description: `As an homage to my previous emploment at an antique store, I wanted my first ambitious project to mirror my dreams of a web store while I was working there. An e-shop complete with a CMS for CRUD operations, user permissions, stripe checkout, authentication, search, and so much more. With the backend largely based off Wes Bos' Advanced React course, I added my own touches by using some of (at the time) the latest React features such as React Hooks and implementing some nice front-end components such as a carousel for the item listings(inspired by AirBNB) and a gallery for a more detailed view (inspired by Sotheby's galleries for antiques). There's still plenty I'd like to add to this site, but for now I'm using the lessons learned from it on other projects.`,
    links: [{ name: "Contact me for demo links" }]
  },
  {
    title: "Ragnarok MVP Tracker",
    views: [
      {
        name: "Single Page App",
        desktop: "/images/projects/ragnarok/ragnarok-desktop.png",
        tablet: "/images/projects/ragnarok/ragnarok-tablet.png",
        mobile: "/images/projects/ragnarok/ragnarok-mobile.png"
      }
    ],
    tools: [
      "Typescript",
      "REACT",
      "NEXT",
      "STYLED-COMPONENTS",
      "PUPPETEER",
      "FIRESTORE",
      "AWS LAMBDA"
    ],
    description: `Ragnarok is an online game with server wide bosses to hunt. This tool helps players to see which bosses are available at a glance rather than spending time consulting the previous solution - a manually updated google spreadsheet.
  This is accomplished by scraping an online page that lists the latest kills of these bosses with Puppeteer running on AWS Lambda and then updating a FireStore database. On the front-end, NextJS renders out the basic table and pulls the data through a subscription to FireStore. Because NextJS uses SSR, requests to the database are kept constant rather than based on current users.`,
    links: [
      { name: "LIVE SITE", href: "https://r0mvptracker.now.sh/" },
      { name: "Front-end Github" },
      { name: "Back-end Github" }
    ]
  },
  {
    title: "Scholar Guide",
    views: [
      {
        name: "Landing Page",
        desktop: "/images/projects/sch/1-desktop.png",
        tablet: "/images/projects/sch/1-tablet.png",
        mobile: "/images/projects/sch/1-mobile.png"
      },
      {
        name: "Skill Tree",
        desktop: "/images/projects/sch/2-desktop.png",
        tablet: "/images/projects/sch/2-tablet.png",
        mobile: "/images/projects/sch/2-mobile.png"
      },
      {
        name: "Other Skills",
        desktop: "/images/projects/sch/3-desktop.png",
        tablet: "/images/projects/sch/3-tablet.png",
        mobile: "/images/projects/sch/3-mobile.png"
      },
      {
        name: "Rotation",
        desktop: "/images/projects/sch/4-desktop.png",
        tablet: "/images/projects/sch/4-tablet.png",
        mobile: "/images/projects/sch/4-mobile.png"
      },
      {
        name: "Decision Making",
        desktop: "/images/projects/sch/5-desktop.png",
        tablet: "/images/projects/sch/5-tablet.png",
        mobile: "/images/projects/sch/5-mobile.png"
      }
    ],
    tools: ["REACT", "STYLED-COMPONENTS", "Netlify"],
    description: `While most game guides for Final Fantasy XIV are distributed as unstyled google docs, Sovasin Kair distributed his with a stunning design as a png image. Unfortunately, due to it's enormous size, it was difficult to use effectively. I offered to transform his design into a single page site that could be viewed as easily on mobile as on desktop.`,
    links: [
      { name: "LIVE SITE", href: "https://sch-sovas.netlify.com/" },
      {
        name: "Github",
        href: "https://github.com/GitSimmons/sch.sovas"
      }
    ]
  },
  {
    title: "Confluence Floating ToC",
    views: [
      {
        name: "Multi Level Highlights",
        desktop: "/images/projects/floating-toc/1-desktop.jpg"
      }
    ],
    tools: ["Javascript", "CSS"],
    description: `A no-frameworks JS + CSS approach to adding some quality of life features to the Confluence Table of Contents Macro. Features include: Multi Level Highlighting, Sticky-ish Positioning, and Collapsable Headings`,
    links: [
      {
        name: "View on Code Pen",
        href: "https://codepen.io/SimmonsPen/full/yLBwBLN"
      },
      {
        name: "Github",
        href: "https://github.com/GitSimmons/confluence-floating-toc"
      }
    ]
  }
];

export default projects;
