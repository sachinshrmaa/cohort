import { BootcampData } from "@/types/bootcamp";

const bootcamps: BootcampData[] = [
  {
    id: 1,
    slug: "fullstack-bootcamp",
    name: "Mastering Modern Web Development from Scratch",
    description:
      "Master the art of web development with our intensive 12 weeks Full Stack Web Development Bootcamp. ",
    price: 4999,
    thumbnail: "/img/Open-Source-Workshop.jpg",
    content: {
      body: "Learn HTML5, CSS3, JavaScript, React, Next.js, Git, Node.js, MongoDB, authentication, deployment, and more. Build real-world projects, optimize performance, and create a stunning portfolio. Elevate your skills and launch your career in tech.",
      modules: [
        {
          id: 1,
          name: "Week 1: Introduction to Web Development",
          content:
            "<li>Introduction to web development</li><li>Basics of HTML</li><li>Basics of CSS</li>",
        },
        {
          id: 2,
          name: "Week 2: Front-End Development",
          content:
            "<li>Advanced HTML concepts (HTML5, semantic markup)</li><li>Advanced CSS concepts (CSS3, Flexbox, Grid)</li><li>Responsive web design with media queries</li><li>Introduction to Bootstrap framework</li><li>Styling with CSS preprocessors (Sass or Less)</li>",
        },
        {
          id: 3,
          name: "Week 3: JavaScript Fundamentals",
          content:
            "<li>Introduction to JavaScript</li><li>JavaScript language fundamentals (variables, data types, operators)</li>",
        },
        {
          id: 4,
          name: "Week 4: Advanced JavaScript",
          content:
            "<li>DOM manipulation and event handling</li><li>JavaScript functions and scope</li><li>Asynchronous JavaScript (callbacks, promises, async/await)</li><li>Working with APIs (fetch, AJAX)</li>",
        },
        {
          id: 5,
          name: "Week 5: Introduction to React",
          content:
            "<li>Introduction to React and its core concepts</li><li>JSX syntax and components</li>",
        },
        {
          id: 6,
          name: "Week 6: Advanced ReactJS",
          content:
            "<li>State and props in React</li><li>React hooks for managing state and side effects</li><li>React Router for navigation</li>",
        },
        {
          id: 7,
          name: "Week 7: Advanced Front-End Development with NextJS",
          content: "<li>Introduction to Next.js framework</li><li>Server-side rendering (SSR) with Next.js</li><li>Static site generation (SSG) with Next.js</li><li>Working with external data in Next.js</li><li>Deploying Next.js applications on Vercel</li>",
        },
        {
          id: 8,
          name: "Week 8: Version Control with Git and GitHub",
          content: "<li>Introduction to version control with Git</li><li>Setting up a Git repository</li><li>Basic Git commands (commit, push, pull, branch)</li><li>Collaborative development with GitHub</li><li>Managing branches and pull requests</li>",
        },
        {
          id: 9,
          name: "Week 9: Back-End Development Basics",
          content: "<li>Introduction to back-end development</li><li>Basics of Node.js</li><li>MongoDB database fundamentals</li><li>Introduction to Mongoose ODM (Object Data Modeling)</li>",
        },
        {
          id: 10,
          name: "Week 10: Full Stack Development",
          content: "<li>Integrating front-end (React/Next.js) with back-end (Node.js)</li><li>Building APIs with Node.js and NextJS</li><li>Data storage and manipulation with MongoDB and Mongoose</li><li>Authentication and authorization (JWT, OAuth)</li><li>Deployment of full stack applications on Vercel</li>",
        },
        {
          id: 11,
          name: "Week 11: Advanced Topics",
          content:
            "<li>Performance optimization techniques</li><li>Testing and debugging strategies</li><li>Security best practices</li>",
        },
        {
          id: 12,
          name: "Week 12: Final Project and Portfolio Development",
          content:
            "<li>Building a full-stack web application from scratch</li><li>Project planning and architecture</li><li>Deployment of the final project</li><li>Creating a portfolio website to showcase projects</li>",
        },
      ],
    },
    detail: {
      start: "01/09/2023",
      end: "30/11/2023",
      duration: "12 weeks",
      timing: "9:00 pm IST",
      size: 50,
    },
  },
];

export default bootcamps;
