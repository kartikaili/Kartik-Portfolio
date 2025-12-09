import { 
  Code2, 
  TestTube2, 
  Database, 
  Terminal, 
  Layout, 
  Trophy, 
  Users, 
  CheckCircle2,
  GitBranch,
  Server,
  Bug,
  FileJson,
  Globe,
  Zap,
  Search
} from 'lucide-react';
import { Job, Skill, Education, Certification, Achievement } from './types';

export const PROFILE = {
  name: "Kartik Eshwar Aili",
  role: "Software Quality Engineer",
  email: "ailikartik@gmail.com",
  phone: "+91 8884965763",
  linkedin: "https://www.linkedin.com/in/kartik-aili",
  location: "India",
  summary: "Software Quality Engineer with 4+ years of experience in manual and automated testing, extending into API development and testing. Expert in Selenium, Java, and BDD frameworks, with hands-on experience in Java Spring Boot, REST APIs, and GraphQL. Seeking a Software Test Engineer position where I can bring my full-stack testing and collaboration skills to support your mission of delivering high-quality software solutions.",
  avatar: "kartik-aili.png"
};

export const SKILLS: Skill[] = [
  // Languages & Backend
  { 
    name: "Java", 
    category: "Languages", 
    icon: Code2, 
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  { 
    name: "Spring Boot", 
    category: "Languages", 
    icon: Server, 
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  { 
    name: "REST API", 
    category: "Languages", 
    icon: Globe, 
    level: 85 
  },
  { 
    name: "GraphQL", 
    category: "Languages", 
    icon: Zap, 
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
  },
  { 
    name: "SQL / MySQL", 
    category: "Languages", 
    icon: Database, 
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  
  // Automation
  { 
    name: "Selenium", 
    category: "Automation", 
    icon: TestTube2, 
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
  },
  { 
    name: "RestAssured", 
    category: "Automation", 
    icon: TestTube2, 
    level: 90 
  },
  { 
    name: "Cucumber BDD", 
    category: "Automation", 
    icon: FileJson, 
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg"
  },
  { 
    name: "TestNG", 
    category: "Automation", 
    icon: CheckCircle2, 
    level: 85 
  },
  
  // Tools
  { 
    name: "JIRA", 
    category: "Tools", 
    icon: Bug, 
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
  },
  { 
    name: "Postman", 
    category: "Tools", 
    icon: Globe, 
    level: 90,
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
  },
  { 
    name: "Confluence", 
    category: "Tools", 
    icon: Layout, 
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg"
  },
  { 
    name: "Git / SourceTree", 
    category: "Tools", 
    icon: GitBranch, 
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  { 
    name: "Jenkins", 
    category: "Tools", 
    icon: Server, 
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
  },
  { 
    name: "Figma", 
    category: "Tools", 
    icon: Layout, 
    level: 70,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  { 
    name: "Deque Axe", 
    category: "Tools", 
    icon: CheckCircle2, 
    level: 65 
  },
  
  // Soft Skills (No Logos usually, stick to icons)
  { name: "Problem Solving", category: "Soft Skills", icon: Trophy, level: 95 },
  { name: "Team Collaboration", category: "Soft Skills", icon: Users, level: 100 },
];

export const EXPERIENCE: Job[] = [
  {
    title: "Programmer Analyst (Test Analyst)",
    company: "Cognizant Technology Solutions",
    client: "US Bank Corp",
    period: "Present (4+ Years Exp)",
    description: [
      "Manual & Automated Testing (50/50 split): Expertise in Web and Mobile Automation Testing using Selenium and Manual Testing including Functional, Regression, and Smoke Testing.",
      "API Development & Testing: Experience in developing and testing REST and GraphQL APIs using Java Spring Boot. Proficient in using Postman and RestAssured for API automation and validation.",
      "Conducted thorough manual and automated testing of new features, enhancements, and bug fixes to ensure high-quality releases.",
      "Ensured every new feature is tested in the staging environment first and performed thorough testing of the production environment.",
      "Test Planning & Strategy: Designed, developed, and executed comprehensive test plans, test cases, and test scenarios ensuring both functional and performance testing coverage.",
      "Collaboration with Cross-Functional Teams: Worked closely with product managers, software engineers, and designers to understand requirements, refine user stories, and validate acceptance criteria.",
      "Regression Testing & Bug Tracking: Performed regression testing to ensure feature stability, documented bugs clearly, and worked closely with developers to resolve issues promptly.",
      "Adherence to Figma Designs: Ensured 100% match between the developed user interface and Figma designs, raising bugs for any mismatches.",
      "Agile Processes: Actively participated in sprint planning and daily stand-ups, driving testing efforts for feature releases."
    ],
    tags: ["Selenium", "Java", "Spring Boot", "REST API", "GraphQL", "Cucumber", "Regression Testing", "Mobile Automation", "Jira", "Agile"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor in Computer Applications (BCA)",
    institution: "KLEs BCA, PC Jabin Science College",
    year: "2018 - 2021"
  },
  {
    degree: "12th Grade",
    institution: "KLEs JT PU college",
    year: "2016 - 2018"
  },
  {
    degree: "10th Grade",
    institution: "Lion's GD Shah English Medium High School",
    year: "2015 - 2016"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Learn Cucumber BDD From Scratch+ Automation Framework Design",
    provider: "Udemy",
    icon: "Cucumber"
  },
  {
    name: "Selenium WebDriver with Java - Basics to Advanced+Framework",
    provider: "Udemy",
    icon: "Selenium"
  },
  {
    name: "Master XPath and CSS Selectors for Selenium WebDriver",
    provider: "Udemy",
    icon: "Code"
  },
  {
    name: "SQL for Beginners: Learn SQL using MySQL and Database Design",
    provider: "Udemy",
    icon: "SQL"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Beyond Call of Duty Recognition",
    description: "Received a recognition from clients and awarded with 'Beyond call of duty' for extensive work effort and deep knowledge of the domain."
  }
];