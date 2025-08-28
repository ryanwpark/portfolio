export type ProjectDetails = {
  id: number;
  title: string;
  tasks: string[];
  startDate: string;
  endDate: string;
  technologies: string[];
  company: string;
  location: string;
};

export const ReactProjects: ProjectDetails[] = [
  {
    id: 1,
    title: "Fuel Vendor Web App",
    tasks: [
      "Coordinated agile sprints to define team roles, prioritize development needs, and ensure collaboration aligned with industry practices.",
      "Designed UI/UX with Tailwind components, streamlining front-end development and maintaining clean, scalable code.",
      "Secured user authentication with JSON Web Tokens (JWT), restricting unauthorized access for vendors and clients.",
      "Developed 12 REST API endpoints in Node.js for CRUD operations on fuel orders, integrated with a PostgreSQL database.",
      "Implemented CI/CD pipeline with GitHub Actions, enabling smooth deployment and continuous feature integration.",
    ],
    startDate: "February 2024",
    endDate: "May 2024",
    technologies: [
      "Javascript",
      "React",
      "Postgres",
      "Azure",
      "REST API",
      "Github",
      "Jest",
      "Tailwind CSS",
    ],
    company: "University of Houston",
    location: "Software Design COSC - 4353",
  },
  {
    id: 2,
    title: "Medical Clinic Web App",
    tasks: [
      "Designed UI/UX with Chakra UI components, ensuring clean, responsive, and efficient front-end development.",
      "Implemented dynamic data reporting with customizable filters, enabling staff to easily access and sort patient and appointment records.",
      "Secured application access with JSON Web Tokens (JWT), enforcing role-based authentication and authorization for patients, clients, and administrators.",
      "Developed 31 REST API endpoints in Node.js to handle secure CRUD operations across administration, staff, and client functionalities.",
      "Automated email notifications via SQL triggers, sending appointment details to clients upon new appointment creation.",
      "Deployed full stack application to Heroku with a persistent MySQL database hosted on Azure.",
    ],
    startDate: "January 2023",
    endDate: "May 2023",
    technologies: [
      "Javascript",
      "React",
      "MySQL",
      "Azure",
      "REST API",
      "Github",
      "Chakra",
      "Heroku",
    ],
    company: "University of Houston",
    location: "Database Systems COSC - 3380",
  },
];

export const JavaProjects: ProjectDetails[] = [
  {
    id: 1,
    title: "Midas API",
    tasks: [
      "Integrated Apache Kafka into Spring Boot core to consume and deserialize transaction messages, enabling asynchronous, decoupled communication between frontend and backend.",
      "Implemented H2 in-memory SQL database with JPA entity mappings to validate and persist financial transactions, enforcing sender/recipient checks and updating account balances.",
      "Connected external Incentive REST API via Spring’s RestTemplate, fetching incentive amounts for valid transactions and applying them to recipient balances.",
      "Exposed REST API endpoint (/balance) on port 33400 for querying user balances, returning serialized JSON responses with default values for non-existent users.",
    ],
    startDate: "August 2025",
    endDate: "August 2025",
    technologies: ["Java", "Spring Boot", "SQL", "H2", "REST API"],
    company: "JPMorgan Chase - Forage",
    location: "SWE Training",
  },
];

export const SwiftProjects: ProjectDetails[] = [
  {
    id: 1,
    title: "Kilterboard App",
    tasks: [
      "Revamping a rock climbing mobile application with the goal of offering an enhanced UI/UX by using Swift and reducing user interactions for accessing climbing routes.",
      "Used GRDB library to create 12 API endpoints performing the necessary CRUD operations for both users and climbing routes.",
      "Integrated Bluetooth connectivity with Apple's CoreBluetooth to communicate with the climbing wall.",
    ],
    startDate: "August 2025",
    endDate: "Current",
    technologies: ["Swift", "SFSymbols", "SQLite", "GRDB", "UIKit"],
    company: "Personal",
    location: "Katy, TX",
  },
  {
    id: 2,
    title: "BlackJack 21 Trainer",
    tasks: [
      "Built an iOS app that simulates blackjack, allowing users to test and refine their decision making skills in a controlled environment.",
      "Used GRDB and SQLite for storing and retrieving player settings and answer key for training purposes with authentication using Apple’s authorization services.",
      "Added settings management allowing users to customize rules and preferences based on black jack table environment.",
      "Applied MVC architecture to separate concerns and to simplify future feature expansion.",
    ],
    startDate: "June 2025",
    endDate: "July 2025",
    technologies: ["Swift", "SFSymbols", "SQLite", "GRDB", "UIKit"],
    company: "Personal",
    location: "Katy, TX",
  },
];

export const PythonProjects: ProjectDetails[] = [];
