/**
 * Projects Data - All portfolio projects with complete information
 */

export const projects = [
    // ========== MOBILE & WEB PROJECTS (Prioritizing Flutter) ==========
    {
        id: "volunteen",
        title: "VolunTeen",
        slug: "volunteen",
        category: "mobile",
        tags: ["Flutter", "Firebase", "AI Chatbot"],
        techStack: ["Flutter", "Dart", "Firebase", "GPT-3.5", "Provider"],
        featured: true,
        status: "completed",
        date: "2024-01",
        i18nKey: "projectData.volunteen",
        color: "#00b4d8",
        demoUrl: "https://youtu.be/mfJJU8dV7c4",
        youtubeId: "mfJJU8dV7c4",
        media: [
            { type: 'youtube', src: 'mfJJU8dV7c4' },
            { type: 'image', src: '../assets/projects_media/volunteen/cover photo.png' },
            { type: 'image', src: '../assets/projects_media/volunteen/Home Screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Community screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Helping Hand screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/VolunGuideBot (smart chatbot) screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Article screen example.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Videos screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Announcments screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Contacts dialouge.jpeg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Donate now screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Feedback screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Help Form screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Helping hand example (Home Economics) screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Home Screen 2.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Join social media dialouge.jpeg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Side Drawer.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Splash Screen.jpg' },
            { type: 'image', src: '../assets/projects_media/volunteen/Volunteer screen.jpg' }
        ]
    },
    {
        id: "checkit",
        title: "Check-It",
        slug: "checkit",
        category: "mobile",
        tags: ["Flutter", "Consumer Rights", "Scanner"],
        techStack: ["Flutter", "Dart", "Provider", "Barcode Scanner", "Shared Prefs"],
        featured: true,
        status: "completed",
        date: "2024-05",
        i18nKey: "projectData.checkit",
        color: "#2ecc71",
        media: [
            { type: 'image', src: '../assets/projects_media/check-it/CheckIt Cover.png' },
            { type: 'image', src: '../assets/projects_media/check-it/Home.jpg' },
            { type: 'image', src: '../assets/projects_media/check-it/Products grid.jpg' },
            { type: 'image', src: '../assets/projects_media/check-it/Product window.jpg' },
            { type: 'image', src: '../assets/projects_media/check-it/Product Complaint with validation.jpg' },
            { type: 'image', src: '../assets/projects_media/check-it/Complaint status.jpg' },
            { type: 'image', src: '../assets/projects_media/check-it/Splash.jpg' },
            { type: 'image', src: '../assets/projects_media/check-it/drawer.jpg' },
            { type: 'image', src: '../assets/projects_media/check-it/Helpdesk idea.jpg' }
        ]
    },
    {
        id: "hypermate",
        title: "HyperMate",
        slug: "hypermate",
        category: "mobile",
        tags: ["Flutter", "IoT", "Health Tech"],
        techStack: ["Flutter", "Dart", "ESP8266", "Wi-Fi Service", "GSR Sensors"],
        featured: true,
        status: "completed",
        date: "2023-12",
        i18nKey: "projectData.hypermate",
        color: "#e67e22",
        demoUrl: "https://www.youtube.com/watch?v=I7HxB9zB4rE",
        youtubeId: "I7HxB9zB4rE",
        media: [
            { type: 'youtube', src: 'I7HxB9zB4rE' },
            { type: 'image', src: '../assets/projects_media/hypermate/HyperMate Cover.png' },
            { type: 'image', src: '../assets/projects_media/hypermate/Home Screen.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Measurement screen.png' },
            { type: 'image', src: '../assets/projects_media/hypermate/Smart Chatbot screen 2.png' },
            { type: 'image', src: '../assets/projects_media/hypermate/Food List Screen 1.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Hardware connections.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/App logo.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Excercise screen 1.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Excercise screen 2.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Excercise screen 3.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Food List Screen 2.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Food List Screen 3.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Food List Screen 4.jpeg' },
            { type: 'image', src: '../assets/projects_media/hypermate/Quiz screen.png' },
            { type: 'image', src: '../assets/projects_media/hypermate/Quiz summary screen.png' },
            { type: 'image', src: '../assets/projects_media/hypermate/Smart Chatbot screen 1.jpeg' }
        ]
    },
    {
        id: "tapcash",
        title: "TapCash FinTech",
        slug: "tapcash",
        category: "mobile",
        tags: ["Flutter", "FinTech", "UI/UX"],
        techStack: ["Flutter", "Dart", "Cubit", "Data Viz", "Provider"],
        featured: false,
        status: "completed",
        date: "2023-05",
        i18nKey: "projectData.tapcash",
        color: "#9b59b6",
        demoUrl: "https://docs.google.com/presentation/d/1IC-2Cvxh4LbfgxtxTxzCyrZzTY8DJjav/edit",
        media: [
            { type: 'image', src: '../assets/projects_media/tapcash/tapcash.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/home.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/send.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/qr.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/elec_bills.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/children.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/auth1.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/auth2.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/auth3.jpg' },
            { type: 'image', src: '../assets/projects_media/tapcash/notifications.jpg' }
        ]
    },
    {
        id: "epl-reservation",
        title: "EPL Ticket Reservation",
        slug: "epl-reservation",
        category: "mobile",
        tags: ["Flutter", ".NET Core", "SQL Server"],
        techStack: ["Flutter Web", "ASP.NET Core", "SQL Server", "Provider"],
        featured: true,
        status: "completed",
        date: "2023-10",
        i18nKey: "projectData.eplReservation"
    },
    {
        id: "reddit-clone",
        title: "Reddit Clone",
        slug: "reddit-clone",
        category: "mobile",
        tags: ["Flutter", "MVC-S", "Agile"],
        techStack: ["Flutter", "Dart", "Provider", "REST APIs"],
        featured: false,
        status: "completed",
        date: "2022-12",
        i18nKey: "projectData.redditClone"
    },

    // ========== DATA & AI PROJECTS ==========
    {
        id: "us-accidents",
        title: "US Accidents Analysis",
        slug: "us-accidents",
        category: "data",
        tags: ["PySpark", "Machine Learning", "GCP"],
        techStack: ["PySpark", "MapReduce", "Mage", "Terraform", "GCP"],
        featured: true,
        status: "completed",
        date: "2024-01",
        i18nKey: "projectData.usAccidents"
    },
    {
        id: "vpredicto",
        title: "vPredicto",
        slug: "vpredicto",
        category: "ai",
        tags: ["PyTorch", "Video Prediction", "OpenCV"],
        techStack: ["Python", "PyTorch", "OpenCV", "Docker"],
        featured: true,
        status: "completed",
        date: "2024-07",
        i18nKey: "projectData.vpredicto"
    },
    {
        id: "phishing-detection",
        title: "Phishing Detection",
        slug: "phishing-detection",
        category: "ai",
        tags: ["Machine Learning", "Scikit-Learn"],
        techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
        featured: false,
        status: "completed",
        date: "2024-05",
        i18nKey: "projectData.phishing"
    },
    {
        id: "vector-db",
        title: "Vectorized Database",
        slug: "vector-db",
        category: "data",
        tags: ["Databases", "Algorithms", "Python"],
        techStack: ["Python", "NumPy", "K-Means"],
        featured: false,
        status: "completed",
        date: "2024-03",
        i18nKey: "projectData.vectorDb"
    },
    {
        id: "library-system",
        title: "Central Library System",
        slug: "library-system",
        category: "data",
        tags: ["SQL Server", "Database Design"],
        techStack: ["SQL Server", "T-SQL", "Relational Mapping"],
        featured: false,
        status: "completed",
        date: "2022-05",
        i18nKey: "projectData.librarySystem"
    },

    // ========== EMBEDDED & ROBOTICS PROJECTS ==========
    {
        id: "robot-exploration",
        title: "Multi-Robot Exploration",
        slug: "robot-exploration",
        category: "embedded",
        tags: ["ROS", "Python", "Robotics"],
        techStack: ["ROS Noetic", "Gazebo", "Python", "Linux"],
        featured: true,
        status: "completed",
        date: "2023-11",
        i18nKey: "projectData.robotExploration"
    },
    {
        id: "line-follower",
        title: "Embedded CV Line Follower",
        slug: "line-follower",
        category: "embedded",
        tags: ["Android", "OpenCV", "ESP32"],
        techStack: ["Android (Java)", "OpenCV", "C++", "JNI"],
        featured: false,
        status: "completed",
        date: "2022-05",
        i18nKey: "projectData.lineFollower"
    },
    {
        id: "mips-processor",
        title: "MIPS 5-Stage Processor",
        slug: "mips-processor",
        category: "embedded",
        tags: ["Verilog", "Architecture", "FPGA"],
        techStack: ["Verilog", "ModelSim", "Computer Architecture"],
        featured: false,
        status: "completed",
        date: "2022-12",
        i18nKey: "projectData.mipsProcessor"
    },

    // ========== CS & ALGORITHMS PROJECTS ==========
    {
        id: "circuits-solver",
        title: "Circuits Solver Engine",
        slug: "circuits-solver",
        category: "cs",
        tags: ["C++", "Linear Algebra", "Simulation"],
        techStack: ["C++", "Eigen Library", "MNA Algorithms"],
        featured: true,
        status: "completed",
        date: "2023-03",
        i18nKey: "projectData.circuitsSolver"
    },
    {
        id: "logic-simulator",
        title: "Logic Gate Simulator",
        slug: "logic-simulator",
        category: "cs",
        tags: ["C++", "OOP", "Design Patterns"],
        techStack: ["C++", "CMU Graphics", "Command Pattern"],
        featured: false,
        status: "completed",
        date: "2021-04",
        i18nKey: "projectData.logicSimulator"
    },
    {
        id: "os-scheduler",
        title: "OS Scheduler",
        slug: "os-scheduler",
        category: "cs",
        tags: ["C", "Operating Systems", "Linux"],
        techStack: ["C", "Linux Process Management"],
        featured: false,
        status: "completed",
        date: "2022-04",
        i18nKey: "projectData.osScheduler"
    },
    {
        id: "search-engine",
        title: "Search Engine Architecture",
        slug: "search-engine",
        category: "cs",
        tags: ["Java", "Web Crawling", "Algorithms"],
        techStack: ["Java", "Apache Tomcat", "Multithreading"],
        featured: false,
        status: "completed",
        date: "2022-04",
        i18nKey: "projectData.searchEngine"
    }
];

// Helper functions
export function getFeaturedProjects() {
    return projects.filter(p => p.featured);
}

export function getProjectsByCategory(category) {
    if (category === 'all') return projects;
    // Special mapping for common categories
    if (category === 'mobile' || category === 'flutter') return projects.filter(p => p.category === 'mobile');
    if (category === 'ai' || category === 'ml') return projects.filter(p => p.category === 'ai');
    if (category === 'embedded' || category === 'systems') return projects.filter(p => p.category === 'embedded');
    return projects.filter(p => p.category === category);
}

export function getProjectBySlug(slug) {
    return projects.find(p => p.slug === slug);
}

export function searchProjects(query) {
    const lowercaseQuery = query.toLowerCase();
    return projects.filter(p => {
        // Build dynamic values for search based on current language
        const title = p.i18nKey ? window.t(p.i18nKey + '.title') : p.title;
        const description = p.i18nKey ? window.t(p.i18nKey + '.overview') : (p.description || "");

        return title.toLowerCase().includes(lowercaseQuery) ||
            description.toLowerCase().includes(lowercaseQuery) ||
            p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery));
    });
}
