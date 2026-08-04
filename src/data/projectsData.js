import project1 from "../assets/othericons/project1.png";
import project2 from "../assets/othericons/aqiapp.png";
import project3 from "../assets/othericons/currencyconverter.png";
import project0 from "../assets/othericons/project0.png";

export const projectsData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  {
    id: 4,
    name: "Currency Converter App",
    description: [
      "Built a clean, responsive currency converter with React that fetches live exchange rates for 160+ currencies.",
      "Architected the app with a custom useCurrencyInfo hook for API calls and state management, plus a reusable card-based UI.",
      "Added a swap feature to instantly reverse conversion direction and styled the experience with Tailwind CSS.",
    ],
    image: project3,
    technologies: ["React", "Tailwind CSS", "ExchangeRate API", "Vite"],
    link: "https://github.com/thecoolersuy/Currency-Converter-App.git",
    featured: true,
    button: "GitHub",
  },
];
