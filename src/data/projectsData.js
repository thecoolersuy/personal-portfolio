import project1 from "../assets/othericons/project1.png"
import project2 from "../assets/othericons/aqiapp.png"
import project3 from "../assets/othericons/currencyconverter.png"

export const projectsData = [
  {
    id: 1,
    name: "Writr",
    description: "Built a dev blogging platform where authenticated users can create, edit, and delete rich-text blog posts with image uploads. Implemented global auth state management using Redux Toolkit, protected routes with custom AuthLayout, and integrated TinyMCE for rich content editing. Backend powered by Appwrite for database, file storage, and user authentication.",
    image: project1,
    link: "https://writr-omega.vercel.app/",    
    technologies: ["React", "Redux", "TinyMCE", "Appwrite", "TailwindCSS"],   
    featured: true
  },
  {
    id: 2,
    name: "AQI Monitor & Weather Forecast App",
    description: "A responsive, lightweight web application that displays real-time Air Quality Index data and weather forecasts for any location. Built entirely with vanilla JavaScript utilizing ES6 features and DOM manipulation — no frameworks, no dependencies. Demonstrates solid fundamentals in asynchronous API consumption and clean UI design.",
    image: project2,
    technologies:["Vanilla JavaScript", "HTML", "CSS","REST APIs"],
    link: "https://thecoolersuy.github.io/AQI-monitor-App/",
    featured: true
  },
  {
    id: 3,
    name: "Currency Converter App",
    description: "A clean, responsive currency converter built with React that fetches live exchange rates for 160+ currencies. Architected with a custom React hook (useCurrencyInfo) to handle API calls and state management, a reusable Card component for the input/output UI, and a swap feature to instantly reverse conversion direction. Styled with Tailwind CSS and deployed to GitHub Pages via gh-pages.",
    image: project3,
    technologies: ["React", "Tailwind CSS", "ExchangeRate API", "Vite"],
    link: "#",
    featured: false
  },
];
