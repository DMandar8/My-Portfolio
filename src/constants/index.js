import { meta, shopify, starbucks,redis,yardi, tesla, poly, jnec, it, cms, dhub, jnecorg, mrk, cmsimg, popai, atlasmdb, codeathon, mobdash, ams } 
from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    sql,
    node,
    expressjs,
    bootstrap,
    mongo,
    c,
    php,
    dsa,
    rapid,
    mdbatlas,
    tf,

} from "../assets/icons";

import {  timesep1, timesep2,
    timesep3, timesep4, timesep5, timesep6, timesep7, timesep8, timesep9,
    timesep10, timesep11, timesep12, timesep13, timesep14, timesep15, timesep16,
    timesep17, timesep18, timesep19 } from "../assets/timesep";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongo,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: node,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend framework",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Core Language",
    },
     {
        imageUrl: sql,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming language",
    },
    {
        imageUrl: atlasmdb,
        name: "C",
        type: "Programming language",
    },
    {
        imageUrl: php,
        name: "php",
        type: "Server-Side Scripting Language",
    },
    {
        imageUrl: dsa,
        name: "DSA",
        type: "Programming Core",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Caching",
    }
];

export const experiences = [
    {
        title: "Diploma in Computer Engineering",
        company_name: "MGM's Polytechnic College",
        icon: poly,
        iconBg: "#accbe1",
        date: "March 2019 - April 2022",
        points: [
            "Built foundational knowledge in programming and computer systems.",
            "Developed early projects in C, Java, and basic web development.",
            "Explored database concepts, logic building, and algorithmic thinking.",
            "Learned the importance of clean code and structured problem-solving.",
        ],
    },
    {
        title: "Computer Science & Engineering",
        company_name: "Jawaharlal Nehru Engineering College",
        icon: jnec,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - Feb 2026",
        points: [
            "Deepened expertise in full-stack development and data structures.",
            "Actively contributed to technical events, hackathons, and group projects.",
            "Worked on scalable web app architectures and system design.",
            "Balanced academics with real-world development practice.",
        ],
    },
    {
        title: "Software Developer Internship",
        company_name: "ITSight",
        icon: it,
        iconBg: "#000000",
        date: "Jan 2025 - June 2025",
        points: [
            "Worked on multiple client-based projects using MERN & PHP stacks.",
            "Built scalable APIs and dynamic web components in team environments.",
            "Gained hands-on deployment experience and version control workflows.",
            "Learned real-world project delivery, client handling, and debugging.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Yardi Software India Pvt Ltd",
        icon: yardi,
        iconBg: "#90caf9",
        date: "Jan 2026 - June 2026",
        points: [
            "Worked on enterprise-level client cases and issue resolution within large-scale property management systems.",
            "Collaborated with cross-functional teams to analyze workflows and troubleshoot production environments.",
            "Gained hands-on exposure to SQL investigations, enterprise software processes, and business logic handling.",
            "Developed strong problem-solving, system analysis, and client communication skills in real-world scenarios.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: timesep1, // or whatever icon variable you have
        theme: 'btn-back-purple', // or any theme color you prefer
        name: 'TimeSep – Enterprise CRM & Workforce Management',
        description: 'Built a CRM platform for organization management, Dynamic RBAC and AI-driven dashboards for enterprise workforce management.',
        btnText: '',
        link: 'https://timesep.com/', // or your deployed URL
        techs: [react, node, express, sql, redis]
    },
    {
        iconUrl: jnecorg,
        theme: 'btn-back-red',
        name: ' JNEC.org – Official College Website',
        description: 'Crafted and deployed the dynamic, responsive website of JNEC to showcase academic offerings, updates, and events.',
        btnText: 'Live link',
        link: 'https://jnec.org/',
        techs: [javascript, react, sql, tailwindcss]
    },
    {
        iconUrl: cmsimg,
        theme: 'btn-back-red',
        name: 'JNEC CMS – College Content Management System',
        description: 'Developed a secure dashboard-driven CMS to manage and update all dynamic content of the JNEC official site. (Cannot publish code due to security reasons)',
        btnText: 'Contact me to get code',
        link: '/contact',
        techs: [react, sql, node,express, bootstrap]
    },
    {
        iconUrl: dhub,
        theme: 'btn-back-green',
        name: 'DoctorsHub – Franchise & Appointment Platform',
        description: 'Built a web app for managing hospital franchise requests and multi-branch appointment bookings with role-based access.(Cannot publish code due to security reasons)',
        btnText: 'Contact me to get code',
        link: '/contact',
        techs: [html, css, php, javascript, sql, bootstrap]
    },
    {
        iconUrl: mrk,
        theme: 'btn-back-blue',
        name: ' MRK Ghar Sansar Mall – Inventory & Sales Platform',
        description: 'Designed a scalable product management system for a local mall with admin-controlled inventory and daily billing.',
        btnText: 'Live link',
        link: 'https://mrkmall.com/home/',
        techs: [html, css, javascript, php, sql, bootstrap ]
    },
    {
        iconUrl: popai,
        theme: 'btn-back-pink',
        name: ' AI-Based Movie Recommendation System',
        description: 'Created an AI-powered platform that suggests movies based on user preferences using OpenAI and IMDb APIs.',
        btnText: 'GitHub link',
        link: 'https://github.com/DMandar8/AI-mini-project',
        techs: [react, node, express, atlasmdb, rapid]
    },
    {
        iconUrl: codeathon,
        theme: 'btn-back-yellow',
        name: 'Online Exam Portal with Proctoring© (Licensed)',
        description: 'Engineered a multi-tenant exam system featuring real-time proctoring, role-based access, and exam analytics. (Cannot publish code due to security reasons)',
        btnText: 'Contact me to get code',
        link: '/contact',
        techs: [html, css, javascript, sql, php, tailwindcss]
    },
    {
        iconUrl: mobdash,
        theme: 'btn-back-yellow',
        name: 'Dashboard to manage e-commerce mobile app.',
        description: 'Designed and developed a web-based dashboard using PHP, integrated with a MySQL database for secure authentication and efficient management of e-commerce mobile application data.',
        link: 'https://github.com/DMandar8/ecommerce-dashboard',
        btnText: 'GitHub link',
        techs: [html, css, javascript, sql, php, bootstrap]
    },
    {
        iconUrl: ams,
        theme: 'btn-back-yellow',
        name: 'Asset Management System',
        description: 'Built a full-stack MERN Asset Management System (AMS) with secure authentication, role-based access, and real-time database integration. (Cannot publish code due to security reasons)',
        link: '/contact',
        btnText: 'Contact me to get code',
        techs: [react, javascript,node, express, sql, bootstrap]
    }

];

export const timeSepScreenshots = [
    { 
      id: 1, 
      src: timesep1, 
      title: "Dashboard Overview (Dark Mode)",
      description: "Main dashboard with key metrics and analytics in dark theme"
    },
    { 
      id: 2, 
      src: timesep2, 
      title: "Dashboard Overview (Light Mode)",
      description: "Main dashboard with key metrics and analytics in light theme"
    },
    { 
      id: 3, 
      src: timesep3, 
      title: "Login Page",
      description: "Secure authentication portal with email and password login"
    },
    { 
      id: 4, 
      src: timesep4, 
      title: "Add User",
      description: "Create new user accounts with role assignment and organization mapping"
    },
    { 
      id: 5, 
      src: timesep5, 
      title: "List Users",
      description: "View and manage all users with search, filter, and pagination"
    },
    { 
      id: 6, 
      src: timesep6, 
      title: "Add Organization",
      description: "Create new organization with logo upload and subscription plans"
    },
    { 
      id: 7, 
      src: timesep7, 
      title: "List Organizations",
      description: "Manage all organizations with status tracking and user counts"
    },
    { 
      id: 8, 
      src: timesep8, 
      title: "Add Role (Step 1)",
      description: "Define role name, description, and basic information"
    },
    { 
      id: 9, 
      src: timesep9, 
      title: "Add Role (Step 2) - Permissions",
      description: "Assign module-wise granular permissions to roles"
    },
    { 
      id: 10, 
      src: timesep10, 
      title: "List Roles",
      description: "View all roles with user counts and status indicators"
    },
    { 
      id: 11, 
      src: timesep11, 
      title: "Add Ticket",
      description: "Create support tickets with priority levels and assignments"
    },
    { 
      id: 12, 
      src: timesep12, 
      title: "List Tickets",
      description: "Track and manage support tickets with status updates"
    },
    { 
      id: 13, 
      src: timesep13, 
      title: "Add Leave Request",
      description: "Submit leave requests with type, duration, and reason"
    },
    { 
      id: 14, 
      src: timesep14, 
      title: "List Leave Requests",
      description: "View and manage employee leave requests with approval workflow"
    },
    { 
      id: 15, 
      src: timesep15, 
      title: "Add Daily Activity",
      description: "Log daily work activities and task progress"
    },
    { 
      id: 16, 
      src: timesep16, 
      title: "List Employee Activities",
      description: "Track and monitor employee daily activities and productivity"
    },
    { 
      id: 17, 
      src: timesep17, 
      title: "System Logs",
      description: "View audit trails and system activity logs for security"
    },
    { 
      id: 18, 
      src: timesep18, 
      title: "Logout Page",
      description: "Secure logout with session termination"
    },
    { 
      id: 19, 
      src: timesep19, 
      title: "Database Schema",
      description: "Complete database structure with tables and relationships"
    }
];