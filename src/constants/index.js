import { meta, shopify, starbucks, tesla, poly, jnec, it } from "../assets/images";
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
        title: "Final Year Project",
        company_name: "JNEC CMS (Live Now)",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "July 2025 - Present",
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];