export const myProjects = [
  {
    id: 1,
    title: "Recommendation site",
    description:
      "A motorcycle recommendation web app tailored for the Indian market, helping users find the best bike based on their budget and usage.",
    subDescription: [
      "Built a scalable application with Flask framework for backend development, SQLite for database management, and HTML, CSS, and JavaScript for the frontend. Additionally, Jinja templating is used to dynamically render content on the website. The end result is an intuitive platform that makes bike selection accessible to all users, regardless of prior expertise.",
    ],
    href: "https://github.com/anuow/Bike-Finder",
    logo: "",
    image: "/assets/projects/motor.jpg",
    tags: [
      {
        id: 1,
        name: "Flask",
        path: "/assets/logos/Flask.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap.png",
      },
    ],
  },
  {
    id: 2,
    title: "Flappy Bird Game",
    description:
      "The classic Flappy Bird game built using Flutter and Flame game engine.",
    subDescription: [
      "Implemented game loop mechanics, physics, and collision detection.",
      "Designed retro-style pixel graphics for a nostalgic feel.",
      "Gained understanding of mobile game development and Flame basics.",
    ],
    href: "https://github.com/anuow/flutter-flappy-bird",
    logo: "",
    image: "/assets/projects/flap.jpg",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Flame",
        path: "/assets/logos/flame.png",
      },
      {
        id: 3,
        name: "Dart",
        path: "/assets/logos/dart.svg",
      },
      {
        id: 3,
        name: "Github",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 3,
    title: "To-Do App",
    description:
      "A simple yet functional mobile app for managing tasks and boosting productivity.",
    subDescription: [
      "Built with Flutter, focusing on CRUD operations and local state management.",
      "Clean and minimal UI for easy daily task tracking.",
      "Helped strengthen knowledge of Flutter widgets and state management.",
    ],
    href: "https://github.com/anuow/flutter-todo-app",
    logo: "",
    image: "/assets/projects/todo.jpg",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        path: "/assets/logos/dart.svg",
      },
      {
        id: 3,
        name: "Github",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "A responsive, animated portfolio site showcasing my skills, projects, and journey as a developer.",
    subDescription: [
      "This portfolio highlights my journey as a developer, showcasing projects built with a diverse tech stack. It features frontend technologies like HTML5, CSS3, JavaScript, React, TailwindCSS, and Bootstrap, alongside backend tools such as Flask, .NET, Blazor, and Entity Framework Core. I’ve also explored mobile and cross-platform development with Flutter, Dart, and Flame, while honing my programming skills in C, Python, Javascript. For design and creative work, I use Blender, and I manage version control and collaboration with Git & GitHub. ",
    ],
    href: "https://github.com/anuow/Portfolio",
    logo: "",
    image: "/assets/projects/portfolio.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Github",
        path: "/assets/logos/github.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Calorie Tracker (In Progress)",
    description:
      "A cross-platform mobile app to log meals, track calories, and visualize nutrition progress.",
    subDescription: [
       "Developed using Flutter for both Android and iOS.",
      "Designed a clean and minimal UI inspired by fitness tracking apps.",
      "Planned integration with Firebase for authentication and real-time storage.",
      "Experimenting with multi-phase roadmap for advanced features like analytics.",
    ],
    href: "https://github.com/anuow/calorie-tracker",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        path: "/assets/logos/dart.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "Github",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/anuow",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/anirudh-kumar-25361731b/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/anuo_w/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "CS50x Graduate",
    job: "Harvard's Intro to Computer Science",
    date: "2025",
    contents: [
      "Completed problem sets in C, Python, SQL, and web development.",
      "Built capstone project: BikeFinder, a Flask-based motorcycle recommendation app.",
      "Learned algorithms, data structures, and full-stack web development basics.",
    ],
  },
  {
    title: "Independent Developer",
    job: "Self-Driven Projects",
    date: "2025–Present",
    contents: [
      "Developing cross-platform apps like a calorie tracker and task manager using Flutter.",
      "Experimenting with game dev through a Flappy Bird clone using the Flame engine.",
      "Building and iterating on personal portfolio website with React + Tailwind.",
      "Actively sharing projects and learning journey on GitHub, LinkedIn, and YouTube.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Open to Remote Internships",
    date: "2025-Present",
    contents: [
      "Currently seeking opportunities to contribute to real-world projects.",
      "Focused on building full-stack and mobile development expertise.",
      "Exploring freelancing, remote internships, and open-source contributions.",
    ],
  },
];
