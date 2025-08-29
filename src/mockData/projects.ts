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
      "Web application for fuel vendors and clients to manage and order through an intuitive interface.",
      "Calculated fuel prices based on distance, quantity, and delivery options based on clients' needs.",
      "Alerted vendors on low inventory via email allowing them to restock in a timely manner.",
      "Automated order processing and notifications for vendors and clients via email.",
      "Generated reports on fuel sales and inventory levels for vendors.",
    ],
    startDate: "Feb 2024",
    endDate: "May 2024",
    technologies: [
      "React",
      "Postgres",
      "Azure",
      "REST API",
      "Jest",
      "Docker",
      "Tailwind",
      "Node.js",
    ],
    company: "University of Houston",
    location: "Software Design COSC - 4353",
  },
  {
    id: 2,
    title: "Medical Clinic Web App",
    tasks: [
      "Web application for medical clinics and patients to manage appointments, medical records, and billing information.",
      "Implemented dynamic data reporting with customizable filters for staff to easily access and sort patient and appointment records.",
      "Allow patients to book, reschedule, and cancel appointments through a user-friendly interface.",
      "Automated email notifications to clients clarifying appointment details upon new appointments.",
    ],
    startDate: "Jan 2023",
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
      "Integrated Apache Kafka with Spring Boot application for communicating with JPMorgan Chase's data services.",
      "Ensured account balances were updated correctly in development with an H2 in-memory database.",
      "Validated transactions with external API and applied incentives to user balances.",
      "Exposed REST API endpoint for querying user balances with Kafka.",
    ],
    startDate: "Aug 2025",
    endDate: "Aug 2025",
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
      "Revamping a rock climbing mobile application with the goal of offering an enhanced user experience with less navigation.",
      "Integrated Bluetooth connectivity for communication with the climbing board.",
      "Implemented a new user interface using SwiftUI for a more modern look and feel.",
    ],
    startDate: "Aug 2025",
    endDate: "Current",
    technologies: ["Swift", "SFSymbols", "SQLite", "GRDB", "UIKit"],
    company: "Personal",
    location: "Katy, TX",
  },
  {
    id: 2,
    title: "BlackJack 21 Trainer",
    tasks: [
      "IOS App for simulating blackjack giving users the ability to practice basic strategy and card counting techniques.",
      "Implemented a scoring system to track user performance and progress over time.",
      "Added customizable settings allowing users to customize rulesets based on the house.",
    ],
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    technologies: ["Swift", "SFSymbols", "SQLite", "GRDB", "UIKit"],
    company: "Personal",
    location: "Katy, TX",
  },
];

export const PythonProjects: ProjectDetails[] = [];
// Combine all projects and order chronologically by startDate
function parseDate(dateStr: string): Date {
  // Handles 'Current' as the latest date
  if (dateStr.toLowerCase() === "current") return new Date(3000, 0, 1);
  // Handles formats like 'Feb 2024', 'Aug 2025', etc.
  const [month, year] = dateStr.split(" ");
  return new Date(`${month} 1, ${year}`);
}

export const allProjects: ProjectDetails[] = [
  ...ReactProjects,
  ...JavaProjects,
  ...SwiftProjects,
  ...PythonProjects,
].sort(
  (a, b) => parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime()
);
