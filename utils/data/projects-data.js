import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'DataVizPro',
        description: "Developed a high-performance web application focused on data visualization and  management using React v17 and v18 and TypeScript. Built reusable, well-typed React components and integrated Material-UI for responsive design. Integrated React applications with MS Dynamics F&O for seamless production-related data transactions. Enforced strict type checking and code quality standards using TypeScript, ESLint, and Prettier. Developed and maintained robust backend systems using Django and Django REST Framework to create secure and scalable APIs. Integrated RESTful APIs with Axios, ensuring type-safe responses and implementing caching strategies . Utilized Microsoft Azure services for application hosting and data storage, ensuring scalable and secure performance. Responsive for design and mobile-first approach using media queries and modern CSS techniques. Integrated Django REST API with React frontend, ensuring smooth communication between client and server through RESTful services.",
        tools: ["React", "Material-UI", "Typescript", "Django REST Framework", "Python"],
        role: 'Senior Software Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Denver Auto',
        description: 'At Denver Auto, I contributed to the development of a web application using React and TypeScript, which improved code quality and user experience. My efforts led to a 30% increase in customer engagement through better UI design with Tailwind CSS. I implemented secure user authentication with Django, built custom models and views for data management, and conducted thorough testing using Jest and Cypress. Additionally, I developed a mobile version of the app with React Native, ensuring consistency across platforms. I worked in an Agile environment, managing tasks with Jira and creating reusable components to boost team productivity. My experience also included using cloud services for deployment, managing databases like MySQL and MongoDB, and integrating features such as mapping using ArcGIS APIs.',
        tools: ["React", "Next.js", "TypeScript", "TailwindCSS", "Django", "Jest", "Cypress", "React Native", "MySQL", "MongoDB", "RTL", "AWS", "Azure"],
        role: 'Senior Full-Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'PropertyPal',
        description: 'Built a full-fledged web application (SPA + API) from scratch for a real estate startup. Worked closely with stakeholders using an Agile approach for effective expectations management. Implemented the front end in SPA fashion using React. Wrote Python scripts to interface with third-party APIs, automating data retrieval and integration with external services (e.g., payment gateways, social media platforms). Optimized database queries and handled migrations using Django ORM and PostgreSQL/MySQL. Designed and optimized application deployment using Docker containers, ensuring consistent development and production environments. Used CSS modules to scope styles at the component level in React applications. Developed Python-based data validation scripts to ensure the integrity and accuracy of data processed by backend systems before passing it to the React frontend. Designed and integrated efficient middleware in Django to manage cross-cutting concerns like caching, session handling, and logging. Created a Django-based REST API for both front-end and mobile clients deployed to Heroku. Integrated with cloud platforms like AWS or Google Cloud for scalable and high-availability hosting solutions. ',
        tools: ["React", "Redux", "Typescript", "Python", "Docker", "Django", "Google Cloud", "PostgreSQL", "MySQL", "AWS"],
        code: '',
        role: 'Full-Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Listing Loop',
        description: "Built an admin management web app for the property listing platform with React and TypeScript. Worked on deployment pipelines using Docker and Gunicorn, deploying Django apps to cloud environments (AWS, Heroku). Used Python's HTTP libraries (e.g., Requests, aiohttp) to build integration services that consume external APIs, enabling seamless data sharing and interaction. Integrated popular UI libraries like Material-UI and Tailwind CSS for faster, consistent styling across components. Applied test-driven development (TDD) with unit tests and pytest to ensure reliability and performance of Django applications. Developed the responsive mobile screens of the buyer app for the real estate platform. Fixed a slow performance issue with a lagging UI on mobile devices. Implemented the pagination with infinite loading for the properties list. Handled the implementation of the Firebase DB migration scripts in JavaScript. Ensured the components and Redux-saga modules were thoroughly tested with Jest.",
        tools: ["React", "TypeScript", "Python", "Django", "Material-UI", "TailwindCSS", "AWS", "Heroku", "Jest", "Firebase"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full-Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },