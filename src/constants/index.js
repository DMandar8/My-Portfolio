import { meta, shopify, starbucks, tesla, poly, jnec, it, cms, dhub, jnecorg, mrk, cmsimg, popai, atlasmdb, codeathon } from "../assets/images";
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
    },{
        imageUrl: dsa,
        name: "DSA",
        type: "Programming Core",
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
        title: "College Website Content Management Dashboardt",
        company_name: "JNEC CMS",
        icon: cms,
        iconBg: "#a2d2ff",
        date: "May 2025 - July 2025",
        points: [
            "Led frontend and backend development of a full-stack CMS for jnec.org.",
            "Implemented secure role-based access for admins and faculty.",
            "Integrated dynamic content modules and real-time database updates.",
            "Deployed live system, now actively used by the college staff.",
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
        iconUrl: jnecorg,
        theme: 'btn-back-red',
        name: ' JNEC.org – Official College Website',
        description: 'Crafted and deployed the dynamic, responsive website of JNEC to showcase academic offerings, updates, and events.',
        link: 'https://jnec.org/',
        techs: [javascript, react, sql, tailwindcss]
    },
    {
        iconUrl: cmsimg,
        theme: 'btn-back-red',
        name: 'JNEC CMS – College Content Management System',
        description: 'Developed a secure dashboard-driven CMS to manage and update all dynamic content of the JNEC official site.',
        link: 'https://jnec.org/admin',
        techs: [react, sql, node,express, bootstrap]
    },
    {
        iconUrl: dhub,
        theme: 'btn-back-green',
        name: 'DoctorsHub – Franchise & Appointment Platform',
        description: 'Built a web app for managing hospital franchise requests and multi-branch appointment bookings with role-based access.',
        link: 'https://doctorshubpune.in/home/',
        techs: [html, css, php, javascript, sql, bootstrap]
    },
    {
        iconUrl: mrk,
        theme: 'btn-back-blue',
        name: ' MRK Ghar Sansar Mall – Inventory & Sales Platform',
        description: 'Designed a scalable product management system for a local mall with admin-controlled inventory and daily billing.',
        link: 'https://mrkmall.com/home/',
        techs: [html, css, javascript, php, sql, bootstrap ]
    },
    {
        iconUrl: popai,
        theme: 'btn-back-pink',
        name: ' AI-Based Movie Recommendation System',
        description: 'Created an AI-powered platform that suggests movies based on user preferences using OpenAI and IMDb APIs.',
        link: 'https://github.com/DMandar8/AI-mini-project',
        techs: [react, node, express, atlasmdb, rapid]
    },
    {
        iconUrl: codeathon,
        theme: 'btn-back-yellow',
        name: 'Online Exam Portal with Proctoring (Ongoing)',
        description: 'Engineered a multi-tenant exam system featuring real-time proctoring, role-based access, and exam analytics.',
        link: 'https://jnec.org/cse/test/test/login.php',
        techs: [react, node, express, sql, typescript, tf]
    }
];