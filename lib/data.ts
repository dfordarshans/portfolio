import type { Project, Certification, CodingProfile, SkillCategory, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Internship", href: "#internship" },
  { label: "Certifications", href: "#certifications" },
  { label: "Profiles", href: "#coding-profiles" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS: SkillCategory[] = [
  { category: "Programming Languages", skills: ["C", "C++", "Python", "Java"] },
  { category: "Web Technologies", skills: ["HTML", "CSS", "JavaScript"] },
  { category: "Database", skills: ["MySQL", "MongoDB"] },
  { category: "Tools", skills: ["VS Code", "GitHub", "Canva", "Microsoft Excel", "Microsoft PowerPoint"] },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Microblogging Platform",
    description: "Developed a full-stack Social Networking and Microblogging Platform with secure authentication, post creation, likes, comments, REST APIs, JWT authentication, Spring Boot, Maven, MySQL, and Postman.",
    technologies: ["Spring Boot", "Maven", "MySQL", "JWT", "REST API", "Postman"],
    github: "#",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description: "Built a movie recommendation platform using TMDB API and MongoDB with personalized recommendations based on user preferences and similarity analysis.",
    technologies: ["MongoDB", "TMDB API", "JavaScript"],
    github: "#",
  },
  {
    id: 3,
    title: "Smart Cooking Assistant",
    description: "Developed an AI-powered Smart Cooking Assistant that recommends recipes using available ingredients with ML-based ingredient matching.",
    technologies: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
    github: "#",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { id: 1, title: "Introduction to C", issuer: "SoloLearn" },
  { id: 2, title: "Problem Solving using C", issuer: "NPTEL" },
  { id: 3, title: "Data Structures & Algorithms using C and C++", issuer: "NPTEL" },
  { id: 4, title: "HTML, CSS & Bootstrap", issuer: "Udemy" },
  { id: 5, title: "MySQL (Basic)", issuer: "HackerRank" },
  { id: 6, title: "Data Structures & Algorithm", issuer: "Udemy" },
];

export const CODING_PROFILES: CodingProfile[] = [
  { platform: "LeetCode", solved: "80+", url: "#", color: "from-orange-500 to-yellow-500" },
  { platform: "HackerRank", solved: "25+", url: "#", color: "from-green-500 to-emerald-500" },
  { platform: "SkillRack", solved: "1300+", url: "#", color: "from-blue-500 to-cyan-500" },
];

export const STATS = [
  { label: "Projects Completed", value: "3", icon: "FolderKanban" },
  { label: "Internship", value: "1", icon: "Briefcase" },
  { label: "Programming Languages", value: "4", icon: "Code2" },
  { label: "Certifications", value: "6", icon: "Award" },
  { label: "Problems Solved", value: "1400+", icon: "Brain" },
  { label: "Current CGPA", value: "7.48", icon: "GraduationCap" },
];
