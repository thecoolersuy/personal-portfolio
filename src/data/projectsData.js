import project1 from "../assets/othericons/project1.png";
import project2 from "../assets/othericons/aqiapp.png";
import project0 from "../assets/othericons/project0.png";
import project4 from "../../public/swagging.png";

export const projectsData = [
  {
    id: 1,
    name: " E-Commerce API",
    description: ` • Architected a Clean Architecture REST API that completely decouples business logic from database implementations\n
       • Implemented dependency injection to seamlessly swap in-memory storage for SQLite with zero controller code changes \n
       • Built secure asynchronous CRUD endpoints featuring JWT authentication and DTO data-shaping to prevent over-posting vulnerabilities \n
       • Developed centralized error handling and isolated xUnit testing to eliminate untrusted database dependencies`,
    image: project4,
    link: ["https://github.com/thecoolersuy/aspnetcore-webapi-sandbox.git"],
    technologies: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQLite",
      "JWT Auth",
      "xUnit",
      "Swagger/OpenAPI",
    ],
    featured: true,
    button: ["GitHub"],
  },
  {
    id: 2,
    name: "Baakas",
    description: ` • Eliminated slow initial load by implementing route-based code splitting with React.lazy and added preloading ,separated vendor libraries into manual chunks to maximise browser cache reuse across deployments\n
       • Optimised rendering performance using memo/useCallback and selector-based Zustand subscriptions, preventing unnecessary re-renders \n \n
       • Implemented a custom useDebounce hook and centralised Axios instance with request/response interceptors `,
    image: project0,
    link: [
      "https://baakas-kappa.vercel.app/",
      "https://github.com/thecoolersuy/Baakas.git",
    ],
    technologies: [
      "React",
      "Zustand",
      "ReactQuery/TanStack",
      "Jest/Vitest",
      "TailwindCSS",
      "TypeScript",
    ],
    featured: true,
    button: "Try app",
    button: ["Try app", "GitHub"],
  },
  {
    id: 3,
    name: "Writr",
    description: [
      "Built a dev blogging platform where authenticated users can create, edit, and delete rich-text blog posts with image uploads.",
      "Implemented global auth state management using Redux Toolkit and protected routes with a custom AuthLayout.",
      "Integrated TinyMCE for rich content editing and Appwrite for database, file storage, and authentication.",
    ],
    image: project1,
    link: ["https://writr-omega.vercel.app/"],
    technologies: ["React", "Redux", "TinyMCE", "Appwrite", "TailwindCSS"],
    featured: true,
    button: ["Try app"],
  },
  {
    id: 4,
    name: "AQI Monitor & Weather Forecast App",
    description: [
      "Built a responsive, lightweight web app that displays real-time AQI data and weather forecasts for any location.",
      "Created the experience entirely with vanilla JavaScript using ES6 features and DOM manipulation without frameworks or dependencies.",
      "Showcased strong fundamentals in asynchronous API consumption and clean UI design.",
    ],
    image: project2,
    technologies: ["Vanilla JavaScript", "HTML", "CSS", "REST APIs"],
    link: "https://thecoolersuy.github.io/AQI-monitor-App/",
    featured: true,
    button: "Try app",
  },
];
