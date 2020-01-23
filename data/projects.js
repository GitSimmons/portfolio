const projects = [
  {
    title: "Ragnarok MVP Tracker",
    views: [
      {
        name: "Single Page App",
        desktop: "/images/projects/ragnarok/ragnarok-desktop.jpg",
        tablet: "/images/projects/ragnarok/ragnarok-tablet.jpg",
        mobile: "/images/projects/ragnarok/ragnarok-mobile.jpg"
      }
    ],
    tools: [
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
  }
];

export default projects;
