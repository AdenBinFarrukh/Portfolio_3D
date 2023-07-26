import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    DigitalStories,
    jobit,
    tripguide,
    threejs,
    skipq,
    ArticleSummerizer,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "React JS Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    // {
    //     title: "Devops Trainee",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "July 2022 - October 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Devops Trainee",
        company_name: "SKIPQ",
        icon: skipq,
        iconBg: "#E6DEDD",
        date: "July 2022 - October 2022",
        points: [
            "Developed a RESTful Python application on AWS, using IaC constructs to run it across multiple AWS Regions.",
            "Utilized GitHub Versioning and Code Reviews for code quality and consistency.",
            "Application was built using automated CI/CD, with logs stored in CloudWatch.",
            " AWS services such as Lambda, SNS, S3, DynamoDB, CodePipeline, and API Gateway were used in the development.",
        ],
    },
    {
        title: "Mern Stack Trainee",
        company_name: "SKIPQ",
        icon: skipq,
        iconBg: "#383E56",
        date: "November 2022 - April 2023",
        points: [
            "Conceptualized and developed a social media application from ideation to launch, utilizing React, JavaScript, ExpressJS and MongoDB to create a dynamic and user-friendly platform.",
            "Designed and implemented a comprehensive user interface, incorporating best practices for usability and accessibility to optimize the user experience and increase user engagement.",
            "Deployed the social media application to AWS using EC2 and kept track of it's health using Lambda, CloudWatch and SNS. Created a CI/CD pipeline to streamline the deployment process.",
            "Developed a MERN stack app utilizing the LLM API from Rapid API to summarize articles. Led the entire development cycle from ideation to deployment on Netlify, ensuring optimal health with continuous integration and deployment. Designed an intuitive user interface with React and Tailwind CSS, and implemented best practices for usability and accessibility",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Aden's expertise and dedication contributed significantly to the success of our Blue team project.",
        name: "Sohaib Abbass",
        designation: "L1 SOC Analyst",
        company: "YOTTABYTE",
        image: "https://media.licdn.com/dms/image/C5103AQGrrBsDxHSoEA/profile-displayphoto-shrink_800_800/0/1565086440434?e=1695859200&v=beta&t=9vfzfyPFdQ5Uh1njqNdDlx_8rcovpjj_yHT8xxL3ksw",
    },
    // {
    //     testimonial:
    //         "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //     name: "Chris Brown",
    //     designation: "COO",
    //     company: "DEF Corp",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //     testimonial:
    //         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "CTO",
    //     company: "456 Enterprises",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];

const projects = [
    {
        name: "Digital Stories",
        description:
            "A social media app with posting, commenting, leaderboard, and trending sections. Promotes community engagement and meaningful interactions.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Express",
                color: "pink-text-gradient",
            },
        ],
        image: DigitalStories,
        source_code_link: "https://github.com/AdenBinFarrukh/Digital-Stories",
        Demo_Link:
            "https://6460af4ddb1c45661f9b7af1--digital-stories-adenbinfarrukh.netlify.app/",
    },
    {
        name: "Article Summerizer",
        description:
            "A powerful article summarizer built with React and Tailwind CSS, leveraging the efficiency of Rapid API endpoints for seamless content extraction and concise summaries.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: ArticleSummerizer,
        source_code_link:
            "https://github.com/AdenBinFarrukh/Article_Summerizer",
        Demo_Link: "https://openai-article-summarizer-aden.netlify.app/",
    },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { services, technologies, experiences, testimonials, projects };
