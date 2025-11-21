import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiSparkles, HiDatabase, HiMail, HiBriefcase, HiCog } from "react-icons/hi";

export const config = {
    developer: {
        name: "Sheikh Shakeel",
    },
    social: {
        github: "sheikh989",
        discord: "#"
    },
    // Featured repos will appear first (use exact repo names from GitHub)
    featuredRepos: [
    "Anomaly_detection",  // This will show first
    "campair_SequenceMutation_structure",  // This will show second
    "Email_AutoMation_Agent",  // This will show third
],
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
                {
                    id: 1,
                    title: "AI-Powered Email & Report Automation Agent",
                    description:
                    "An intelligent automation agent built using CrewAI and LangChain that interprets natural language instructions to send emails via SMTP. Supports single and bulk email delivery, AI-generated messages, dynamic content merging, report attachments, and workflow automation.",
                    image: "/projects/agent.webp",
                    technologies: [
                    "Python",
                    "CrewAI",
                    "LangChain",
                    "LLMs",
                    "SMTP",
                    "Automation"
                    ],
                    github: "#",
                    demo: "https://github.com/sheikh989/Email_AutoMation_Agent"
                },

                {
                    id: 2,
                    title: "Flower Identification Using Deep Learning",
                    description:
                    "A TensorFlow-based CNN model trained to classify 28 flower species using the Roboflow dataset. Features image upload and real-time webcam detection using OpenCV. Deployed as an interactive Streamlit app and hosted on Hugging Face.",
                    image: "/projects/project-1.webp",
                    technologies: [
                    "TensorFlow",
                    "Keras",
                    "CNN",
                    "Streamlit",
                    "OpenCV",
                    "Python"
                    ],
                    github: "#",
                    demo: "https://flowerclassification-qtv9gkjpzbmojvhmzw4f8w.streamlit.app/"
                },

                {
                    id: 3,
                    title: "Anomaly Detection System",
                    description:
                    "An end-to-end video anomaly detection system using a pretrained C3D model. Includes preprocessing, feature extraction, training scripts, and both CLI and Flask web UI for live/demo predictions. Suitable for fraud detection, surveillance, and system monitoring.",
                    image: "/projects/anomaly.png",
                    technologies: [
                    "Python",
                    "Scikit-Learn",
                    "NumPy",
                    "Pandas",
                    "OpenCV",
                    "Unsupervised Learning",
                    "C3D"
                    ],
                    demo: "https://github.com/sheikh989/Anomaly_detection",
                },

                {
                    id: 4,
                    title: "Airbnb Price Prediction Model",
                    description:
                    "A machine learning project predicting Airbnb listing prices using Python, SQL, and Pandas. Includes data cleaning, feature engineering, model training, evaluation, and insight extraction for pricing optimization.",
                    image: "/projects/AIRBNB.png",
                    technologies: [
                    "Python",
                    "Scikit-Learn",
                    "SQL",
                    "Pandas",
                    "Machine Learning",
                    "Matplotlib"
                    ],
                    github: "#",
                    demo: "https://airbnbpricepredication.streamlit.app/"
                },

                {
                id: 5,
                title: "Sequence-Mutation Structure Analysis Tool",
                description:
                    "A bioinformatics pipeline for analyzing sequence mutations and structural variation using machine learning. Implements data ingestion, feature extraction, unsupervised clustering of mutation patterns, and 3D structural annotations to identify critical mutation hotspots.",
                image: "/projects/DNA.png",
                technologies: [
                    "Python",
                    "Scikit-Learn",
                    "NumPy",
                    "Pandas",
                    "BioPython",
                    "ML Clustering",
                    "3D Structure Annotation"
                ],
                demo: "https://github.com/sheikh989/campair_SequenceMutation_structure",
                
                }

                ]
,
    skills: [
            {
                title: "AI / Machine Learning",
                icon: <HiCode />,
                description: "Model Development & Intelligent Systems",
                bgClass: "bg-blue-500/10",
                iconClass: "text-blue-500",
                skills: [
                { name: "Supervised Learning", level: "Expert", hot: true },
                { name: "Unsupervised Learning", level: "Expert" },
                { name: "Clustering (K-Means, DBSCAN)", level: "Advanced" },
                { name: "Recommendation Systems", level: "Advanced" },
                { name: "Feature Engineering", level: "Expert" }
                ]
            },

            {
                title: "Deep Learning",
                icon: <HiDatabase />,
                description: "Neural Networks & Model Architectures",
                bgClass: "bg-purple-500/10",
                iconClass: "text-purple-500",
                skills: [
                { name: "TensorFlow", level: "Expert", hot: true },
                { name: "Keras", level: "Expert" },
                { name: "CNN", level: "Expert" },
                { name: "RNN / LSTM", level: "Intermediate" },
                { name: "Transformers", level: "Intermediate" }
                ]
            },

            {
                title: "Programming & Data Analytics",
                icon: <HiCube />,
                description: "Data Processing, Visualization & Scripting",
                bgClass: "bg-emerald-500/10",
                iconClass: "text-emerald-500",
                skills: [
                { name: "Python", level: "Expert", hot: true },
                { name: "SQL", level: "Advanced" },
                { name: "R Programming", level: "Intermediate" },
                { name: "Pandas / NumPy", level: "Expert" },
                { name: "Matplotlib / Seaborn", level: "Advanced" }
                ]
            },

            {
                title: "GenAI & LLMs",
                icon: <HiSparkles />,
                description: "AI Agents, Automation & Language Models",
                bgClass: "bg-orange-500/10",
                iconClass: "text-orange-500",
                skills: [
                { name: "LangChain", level: "Expert", hot: true },
                { name: "CrewAI", level: "Expert" },
                { name: "RAG Pipelines", level: "Intermediate" },
                { name: "Chatbot Development", level: "Expert" },
                { name: "Automation Agent", level: "Expert" }
                ]
            },

            {
                title: "Tools & Platforms",
                icon: <HiCog />,
                description: "Analysis, Deployment & Collaboration Tools",
                bgClass: "bg-yellow-500/10",
                iconClass: "text-yellow-500",
                skills: [
                { name: "Power BI", level: "Advanced" },
                { name: "GitHub", level: "Advanced", hot: true },
                { name: "Vs Code", level: "Advanced" },
                { name: "Adobe After Effect & Premiere Pro", level: "Expert" },
                { name: "Excel", level: "Advanced" }
                ]
            },
            {
                title: "Prompt Engineering & GenAI",
                icon: <HiSparkles />,
                description: "Expertise in prompting, model behavior control, and multimodal AI generation",
                bgClass: "bg-pink-500/10",
                iconClass: "text-pink-500",
                skills: [
                    { name: "Prompt Engineering", level: "Expert", hot: true },
                    { name: "GPT Models (3.5, 4, 4o, o1)", level: "Expert" },
                    { name: "Google Gemini Models", level: "Expert" },
                    { name: "Kiro", level: "Expert" },
                    { name: "Image Generation (Diffusion, DALL·E, Midjourney)", level: "Expert" },
                    { name: "Video Generation (Runway, Pika, Luma AI)", level: "Expert" },
                    { name: "Custom AI Workflows & Automation", level: "Expert" }
                ]
                }

            ],

    experiences: [
    {
        position: "AI/ML Engineer",
        company: "SyncWave Corporation",
        period: "Sep 2025 - Present",
        location: "Remote, India",
        description:
        "Monitoring and analyzing production machine learning models, ensuring reliability, performance, and data quality across live systems.",
        responsibilities: [
        "Monitored four production ML models using the Arize observability platform",
        "Diagnosed data pipeline failures and resolved feature-level issues",
        "Identified underperforming data segments to improve model accuracy",
        "Ensured model stability by tracking drift, data quality, and prediction anomalies"
        ],
        technologies: [
        "Python",
        "Arize AI",
        "Machine Learning",
        "Model Monitoring",
        "Data Pipelines",
        "Analytics"
        ]
    },
    {
        position: "AI/ML Engineer",
        company: "AffyCloud Solutions",
        period: "2024 - 2025",
        location: "Bhopal, India",
        description:
        "Developed LLM-based automation agents, optimized model workflows, and built intelligent systems for business operations and analytics.",
        responsibilities: [
        "Built LLM-powered automation agents using CrewAI and LangChain",
        "Fine-tuned machine learning and language models for production use cases",
        "Developed intelligent workflows for business automation and analytics",
        "Worked on multi-agent systems for communication and task execution"
        ],
        technologies: [
        "CrewAI",
        "LangChain",
        "Python",
        "LLMs",
        "AI Agents",
        "Model Fine-Tuning"
        ]
    },
    {
        position: "Data Analyst",
        company: "Elevate Labs",
        period: "2023 - 2024",
        location: "Remote, India",
        description:
        "Analyzed and visualized business data using SQL, Python, and Power BI, delivering insights and building machine learning solutions.",
        responsibilities: [
        "Performed data cleaning, wrangling, and analysis using Python and SQL",
        "Built Power BI dashboards for business insights",
        "Developed a machine learning model for Airbnb price prediction",
        "Created visualizations and statistical reports for decision-making"
        ],
        technologies: [
        "SQL",
        "Python",
        "Power BI",
        "Pandas",
        "NumPy",
        "Data Visualization",
        "Machine Learning"
        ]
    }
    ]
,
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@sheikh989",
            link: `https://github.com/sheikh989`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "sheikhupdesk@gmail.com",
            link: "mailto:sheikhupdesk@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bhopal,India",
            link: null
        }
    ]
}