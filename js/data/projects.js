/**
 * Projects Data - All portfolio projects with complete information
 * 
 * To add a new project:
 * 1. Copy the template at the bottom
 * 2. Fill in all required fields
 * 3. Add to the appropriate category array
 * 
 * Required fields: id, title, slug, description, category, tags, techStack
 * Optional fields: longDescription, challenge, approach, solution, images, demoUrl, repoUrl, featured, status
 */

export const projects = [
    // ========== FEATURED FLUTTER PROJECTS (Freelance/Client Work) ==========
    {
        id: "volunteen",
        title: "VolunTeen",
        slug: "volunteen",
        description: "A volunteering app targeting teenagers with 30-40 screens, AI chatbot integration, and comprehensive features.",
        longDescription: "Solo project for a real client: built a complete volunteering platform targeting teenagers. Features include in-app video player, AI chatbot powered by GPT-3, and a comprehensive user experience across 30-40 screens.",
        challenge: "Create an engaging volunteering platform specifically designed for teenagers, with modern features like AI assistance while maintaining simplicity and ease of use.",
        approach: "Implemented MVC architecture for clean code organization. Integrated Firebase for backend services, GPT-3 for intelligent chatbot responses, and carefully designed the UI/UX to appeal to younger users.",
        solution: "Delivered a polished mobile application with AI-powered assistance, video content, social sharing, and a reward system to encourage volunteer participation among teenagers.",
        category: "flutter",
        tags: ["Flutter", "Firebase", "GPT-3", "Provider", "AI Chatbot"],
        techStack: ["Flutter", "Dart", "Firebase", "GPT-3 API", "Provider", "Shared Preferences"],
        images: [],
        demoUrl: null,
        repoUrl: null,
        featured: true,
        status: "completed",
        date: "2024-01"
    },
    {
        id: "hypermate",
        title: "HyperMate",
        slug: "hypermate",
        description: "IoT stress monitoring app connecting to ESP8266 microcontroller via Wi-Fi for real-time GSR sensor readings.",
        longDescription: "Solo client project: developed a stress monitoring application that connects to ESP8266 microcontroller via Wi-Fi. Displays real-time GSR sensor readings and provides personalized exercise and nutrition suggestions.",
        challenge: "Bridge the gap between hardware IoT devices and mobile applications, providing real-time health monitoring with actionable insights.",
        approach: "Built custom Wi-Fi service for seamless ESP8266 communication. Implemented real-time data visualization and integrated AI chatbot for personalized recommendations.",
        solution: "A complete IoT health monitoring solution that reads stress levels from GSR sensors and provides personalized wellness recommendations through an intuitive mobile interface.",
        category: "flutter",
        tags: ["Flutter", "IoT", "ESP8266", "Wi-Fi", "Health Tech"],
        techStack: ["Flutter", "Dart", "ESP8266", "GSR Sensor", "Wi-Fi Service", "AI Chatbot"],
        images: [],
        demoUrl: null,
        repoUrl: null,
        featured: true,
        status: "completed",
        date: "2023-12"
    },
    {
        id: "ecosort",
        title: "EcoSort",
        slug: "ecosort",
        description: "Enhanced recycling app with Firebase authentication, Blync API integration, and QR-based reward system.",
        longDescription: "Enhanced an existing client application by adding Firebase authentication, push notifications, and real-time hardware sensor connectivity through Blync API.",
        challenge: "Integrate modern mobile features into an existing recycling application while connecting to physical recycle bin sensors.",
        approach: "Added Firebase for authentication and notifications. Implemented Blync API for real-time hardware communication. Built QR scanning and points reward system.",
        solution: "A gamified recycling application that connects to smart recycle bins, tracks user recycling activities, and rewards eco-friendly behavior.",
        category: "flutter",
        tags: ["Flutter", "Firebase", "IoT", "QR Code", "Blync API"],
        techStack: ["Flutter", "Dart", "Firebase Auth", "FCM", "Blync API", "QR Scanner"],
        images: [],
        demoUrl: null,
        repoUrl: null,
        featured: true,
        status: "completed",
        date: "2024-05"
    },
    {
        id: "check-it",
        title: "Check-It",
        slug: "check-it",
        description: "Mobile solution to verify product prices and combat price manipulation in retail stores.",
        longDescription: "Developed a freelance mobile solution to help consumers verify product prices and combat price manipulation in retail environments.",
        challenge: "Create a user-friendly tool for price verification that works quickly in retail environments.",
        approach: "Implemented barcode scanning for instant product lookup. Built an e-commerce style product database with real-time price comparison.",
        solution: "A consumer protection app that scans product barcodes, compares prices, and allows users to submit and track complaints about price manipulation.",
        category: "flutter",
        tags: ["Flutter", "Barcode", "E-commerce", "Provider", "Forms"],
        techStack: ["Flutter", "Dart", "Provider", "Barcode Scanner", "REST API"],
        images: [],
        demoUrl: null,
        repoUrl: null,
        featured: true,
        status: "completed",
        date: "2024-06"
    },

    // ========== FLUTTER PROJECTS (Academic/Hackathon) ==========
    {
        id: "reddit-clone",
        title: "Reddit Clone",
        slug: "reddit-clone",
        description: "Full Reddit mobile app clone developed as part of a 6-member team in a software house environment.",
        longDescription: "Developed a comprehensive Reddit mobile app clone following Agile methodology with dedicated roles for frontend, backend, DevOps, and QA.",
        challenge: "Build a complete social platform clone with complex features like communities, posts, voting, and real-time updates.",
        approach: "Followed MVC-S architecture with Provider for state management. Implemented comprehensive UI components including drawers, settings, and community creation. Contributed to unit testing and backend integration.",
        solution: "A fully functional Reddit clone with community creation, post management, voting system, and user profiles.",
        category: "flutter",
        tags: ["Flutter", "MVC-S", "Agile", "Provider", "REST API"],
        techStack: ["Flutter", "Dart", "Provider", "REST APIs", "Unit Testing"],
        images: [],
        demoUrl: "https://drive.google.com/file/d/1bvNjKRziBzwB0HgoXXekyV8re8xg5q-m/view",
        repoUrl: "https://github.com/Mamdouh-Attia/RedditX-Cross-Platform",
        featured: true,
        status: "completed",
        date: "2022-12"
    },
    {
        id: "tapcash",
        title: "TabCash",
        slug: "tapcash",
        description: "Fintech app developed in a 2-week hackathon enabling secure and easy mobile transactions.",
        longDescription: "Developed a fintech application during Orange Digital Center's Eid Hackathon 2023. Built UI for home, wallet, statistics, and profile screens.",
        challenge: "Create a complete fintech solution in just 2 weeks with secure transaction capabilities.",
        approach: "Rapid development using MVC architecture. Built intuitive UI for financial transactions. Presented to Orange Digital Centre's board.",
        solution: "A polished fintech app prototype demonstrating secure mobile payments and wallet management.",
        category: "flutter",
        tags: ["Flutter", "Fintech", "Hackathon", "MVC", "Agile"],
        techStack: ["Flutter", "Dart", "MVC Architecture", "Cubit"],
        images: [],
        demoUrl: "https://docs.google.com/presentation/d/1IC-2Cvxh4LbfgxtxTxzCyrZzTY8DJjav",
        repoUrl: "https://github.com/Mamdouh-Attia/tapcash-Cross-Platform",
        featured: false,
        status: "completed",
        date: "2023-05"
    },

    // ========== GRADUATION PROJECT ==========
    {
        id: "predicto",
        title: "Predicto (vPredicto)",
        slug: "predicto",
        description: "Open-source Python library specialized in Video Frame Prediction (VFP) using state-of-the-art deep learning models.",
        longDescription: "Graduation project: Developed an open-source Python library named 'vPredicto', specialized in Video Frame Prediction (VFP). Integrated the latest state-of-the-art Deep Learning models in this field.",
        challenge: "Create an accessible library for video frame prediction that integrates cutting-edge deep learning research.",
        approach: "Researched and implemented state-of-the-art VFP models. Built a clean, well-documented API for easy integration. Used PyTorch and OpenCV for implementation.",
        solution: "A comprehensive Python library for video frame prediction with multiple model options and easy-to-use API.",
        category: "ml",
        tags: ["Python", "Deep Learning", "Computer Vision", "PyTorch", "OpenCV"],
        techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Deep Learning"],
        images: [],
        demoUrl: "https://drive.google.com/drive/u/0/folders/1jtiHOvQ74DYDfKBmwXYvz1KPGcsNf_qT",
        repoUrl: null,
        featured: true,
        status: "completed",
        date: "2024-07"
    },

    // ========== ML/AI PROJECTS ==========
    {
        id: "phishing-detection",
        title: "Web-page Phishing Detection",
        slug: "phishing-detection",
        description: "Trained and evaluated 12 ML models with hyperparameter tuning to detect phishing websites.",
        longDescription: "Addressed the phishing detection problem by training and evaluating 12 machine learning models with comprehensive hyperparameter tuning.",
        challenge: "Develop an accurate phishing detection system using machine learning techniques.",
        approach: "Applied advanced ML concepts including feature engineering, model selection, and hyperparameter optimization.",
        solution: "A comprehensive comparison of ML models for phishing detection with actionable insights for real-world deployment.",
        category: "ml",
        tags: ["Python", "Machine Learning", "scikit-learn", "Cybersecurity"],
        techStack: ["Python", "scikit-learn", "Pandas", "NumPy"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/Web-page-Phishing-Detection",
        featured: false,
        status: "completed",
        date: "2024-05"
    },
    {
        id: "covid-detector",
        title: "Covid Detector",
        slug: "covid-detector",
        description: "Deep learning model to detect Covid-19 from X-ray images using VGG16, VGG19, and AlexNet architectures.",
        longDescription: "Built a deep learning model to detect Covid-19 from X-ray images using multiple CNN architectures.",
        challenge: "Create an accurate medical imaging classifier to assist in Covid-19 detection.",
        approach: "Implemented and compared VGG16, VGG19, and AlexNet architectures. Applied transfer learning and data augmentation.",
        solution: "A trained model capable of detecting Covid-19 from chest X-ray images with high accuracy.",
        category: "ml",
        tags: ["Python", "Deep Learning", "TensorFlow", "Medical Imaging"],
        techStack: ["Python", "TensorFlow", "Keras", "VGG16", "VGG19", "AlexNet"],
        images: [],
        demoUrl: null,
        repoUrl: "https://drive.google.com/drive/folders/1ZqStqq8wre9embMhxTddudRjl8Cl47jh",
        featured: false,
        status: "completed",
        date: "2021-09"
    },
    {
        id: "hand-digit-recognizer",
        title: "Hand Digit Recognizer",
        slug: "hand-digit-recognizer",
        description: "ML model to detect hand gestures corresponding to numbers 0-5 for pattern recognition course.",
        challenge: "Build a robust hand gesture recognition system.",
        approach: "Applied pattern recognition techniques and trained on custom hand gesture dataset.",
        solution: "A trained model that accurately recognizes hand gestures for digits 0-5.",
        category: "ml",
        tags: ["Python", "Machine Learning", "Pattern Recognition"],
        techStack: ["Python", "scikit-learn", "OpenCV"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/hand_digit_recognizer",
        featured: false,
        status: "completed",
        date: "2023-01"
    },
    {
        id: "ai-virtual-mouse",
        title: "AI Virtual Mouse",
        slug: "ai-virtual-mouse",
        description: "Computer vision-based virtual mouse control using hand gestures.",
        category: "ml",
        tags: ["Python", "Computer Vision", "OpenCV", "MediaPipe"],
        techStack: ["Python", "OpenCV", "MediaPipe"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/AI_Virtual_Mouse",
        featured: false,
        status: "completed",
        date: "2022-01"
    },

    // ========== SYSTEMS PROJECTS ==========
    {
        id: "gamingo",
        title: "Gamingo Engine + Drive Me Home",
        slug: "gamingo",
        description: "Custom game engine and driving game built using C++ and OpenGL with shaders, textures, and lighting.",
        longDescription: "Co-developed a custom game engine and a complete game using C++ and OpenGL. Implemented shaders, textures, materials, collision systems, and post-processing effects.",
        challenge: "Build a complete game engine from scratch with modern graphics capabilities.",
        approach: "Designed modular shader, texture, sampler, and material classes for the engine. Built collision system, menus, and game states for the game.",
        solution: "A functional game engine with a playable driving game featuring post-processing shaders and multiple game objects.",
        category: "systems",
        tags: ["C++", "OpenGL", "Game Engine", "Graphics"],
        techStack: ["C++", "OpenGL", "GLSL Shaders", "OOP"],
        images: [],
        demoUrl: "https://www.youtube.com/watch?v=-o9Z7iQaBZQ",
        repoUrl: "https://github.com/Mamdouh-Attia/Gamingo",
        featured: true,
        status: "completed",
        date: "2023-05"
    },
    {
        id: "logic-simulator",
        title: "Logic Simulator",
        slug: "logic-simulator",
        description: "Desktop application for designing and simulating digital logic circuits with interactive GUI.",
        challenge: "Create an intuitive tool for digital circuit design and simulation.",
        approach: "Applied OOP and design patterns. Built interactive GUI with drag-and-drop controls.",
        solution: "A desktop application for designing, simulating, and testing digital logic circuits.",
        category: "systems",
        tags: ["C++", "OOP", "Design Patterns", "Desktop"],
        techStack: ["C++", "CMU Graphics", "OOP", "Design Patterns"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/Logic-Simulator",
        featured: false,
        status: "completed",
        date: "2021-04"
    },
    {
        id: "mips-processor",
        title: "MIPS Processor",
        slug: "mips-processor",
        description: "5-stage pipelined MIPS processor in Verilog with hazard detection, forwarding, and branch control.",
        challenge: "Design a fully functional pipelined processor with hazard handling.",
        approach: "Implemented 5-stage pipeline with decode stage and system integration. Ensured correct instruction flow.",
        solution: "A working pipelined processor with hazard detection and forwarding.",
        category: "systems",
        tags: ["Verilog", "Computer Architecture", "FPGA", "IC Design"],
        techStack: ["Verilog", "FPGA", "ModelSim"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/Project_Processor/tree/MIPS_phase3_new",
        featured: false,
        status: "completed",
        date: "2022-12"
    },
    {
        id: "rsa-chat",
        title: "RSA E2E Encrypted Chat",
        slug: "rsa-chat",
        description: "Secure Python chat service with end-to-end RSA encryption using sockets.",
        category: "systems",
        tags: ["Python", "Security", "Cryptography", "Socket Programming"],
        techStack: ["Python", "RSA", "Sockets"],
        images: [],
        demoUrl: "https://drive.google.com/file/d/1dUS068pTXS--25zpC78NCQex-6nGKri8/view",
        repoUrl: "https://github.com/Mamdouh-Attia/RSA_E2E_encryption",
        featured: false,
        status: "completed",
        date: "2023-04"
    },
    {
        id: "mars-rovers",
        title: "Rovers Mars-station",
        slug: "mars-rovers",
        description: "C++ simulation system modeling Mars exploration missions with custom data structures.",
        category: "systems",
        tags: ["C++", "Data Structures", "Algorithms", "Simulation"],
        techStack: ["C++", "Custom Data Structures", "Event-Driven Design"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/DT_MARS-EXPLORE_PROJECT",
        featured: false,
        status: "completed",
        date: "2021-12"
    },
    {
        id: "os-scheduler",
        title: "OS Scheduler",
        slug: "os-scheduler",
        description: "OS-like scheduler implementing process scheduling algorithms in C on Linux.",
        category: "systems",
        tags: ["C", "Operating Systems", "Linux", "Algorithms"],
        techStack: ["C", "Linux", "Process Management"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/OS-scheduler/",
        featured: false,
        status: "completed",
        date: "2022-04"
    },
    {
        id: "distributed-fs",
        title: "Distributed File System",
        slug: "distributed-fs",
        description: "Distributed file system supporting reading/writing mp4 files with fault-tolerant replication.",
        category: "systems",
        tags: ["Go", "Distributed Systems", "Fault Tolerance"],
        techStack: ["Go", "Distributed Systems", "Replication"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/Distributed_file_system",
        featured: false,
        status: "completed",
        date: "2023-06"
    },

    // ========== OTHER PROJECTS ==========
    {
        id: "search-engine",
        title: "Search Engine",
        slug: "search-engine",
        description: "Modular Java-based search engine with web crawling, indexing, and PageRank ranking.",
        category: "other",
        tags: ["Java", "Web Crawling", "Algorithms", "Multithreading"],
        techStack: ["Java", "OOP", "Multithreading", "PageRank"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/Search-Engine",
        featured: false,
        status: "completed",
        date: "2022-04"
    },
    {
        id: "regex-generator",
        title: "Regex NFA/DFA Generator",
        slug: "regex-generator",
        description: "Command line tool that converts regular expressions to NFA using Thompson's construction.",
        category: "other",
        tags: ["Compilers", "Automata", "Algorithms"],
        techStack: ["Thompson's Construction", "NFA", "DFA"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/regex_NFA_DFA_generator",
        featured: false,
        status: "completed",
        date: "2023-01"
    },
    {
        id: "alu-circuit",
        title: "ALU Logic Circuit",
        slug: "alu-circuit",
        description: "Arithmetic Logic Unit digital circuit project for Logic Design course.",
        category: "other",
        tags: ["Digital Logic", "Logisim", "Hardware"],
        techStack: ["Logisim", "Digital Circuits"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/ALU-Logic-Circuit-Simulation",
        featured: false,
        status: "completed",
        date: "2020-12"
    },
    {
        id: "processor-game",
        title: "Processor Simulating Game",
        slug: "processor-game",
        description: "Assembly 2-player game about assembly commands and a chatting app.",
        category: "other",
        tags: ["Assembly", "Game", "Low-Level"],
        techStack: ["x86 Assembly", "DOS"],
        images: [],
        demoUrl: null,
        repoUrl: "https://github.com/Mamdouh-Attia/Processor_Simulating_Game",
        featured: false,
        status: "completed",
        date: "2022-01"
    }
];

// Helper functions
export function getFeaturedProjects() {
    return projects.filter(p => p.featured);
}

export function getProjectsByCategory(category) {
    if (category === 'all') return projects;
    return projects.filter(p => p.category === category);
}

export function getProjectBySlug(slug) {
    return projects.find(p => p.slug === slug);
}

export function searchProjects(query) {
    const lowercaseQuery = query.toLowerCase();
    return projects.filter(p =>
        p.title.toLowerCase().includes(lowercaseQuery) ||
        p.description.toLowerCase().includes(lowercaseQuery) ||
        p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
}

// Project template for easy addition
/*
{
  id: "unique-id",
  title: "Project Title",
  slug: "project-slug",
  description: "Short description (1-2 sentences)",
  longDescription: "Longer description with more details",
  challenge: "What problem was being solved?",
  approach: "How did you tackle it?",
  solution: "What was the result?",
  category: "flutter|ml|systems|other",
  tags: ["Tag1", "Tag2"],
  techStack: ["Tech1", "Tech2"],
  images: ["/assets/images/projects/project-1.jpg"],
  demoUrl: "https://demo.url",
  repoUrl: "https://github.com/repo",
  featured: false,
  status: "completed|in-progress|idea",
  date: "YYYY-MM"
}
*/
