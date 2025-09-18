import pic1 from "../assets/1.png"
import pic2 from "../assets/2.png"
import pic3 from "../assets/3.png"
import vid1 from "../assets/projects/php1.mp4"
import vid2 from "../assets/projects/laravel1.mp4"
import vid3 from "../assets/projects/laravel2.mp4"
import vid4 from "../assets/projects/asp1.mp4"
import vid5 from "../assets/projects/python1.mp4"
import vid6 from "../assets/projects/python2.mp4"
import vid7 from "../assets/projects/flutter1.mp4"
import vid8 from "../assets/projects/python3.mp4"
import vid9 from "../assets/projects/flutter2.mp4"
import vid10 from "../assets/projects/imageGen.mp4"
import vid11 from "../assets/projects/perplexity.mp4"
import vid12 from "../assets/projects/mern1.mp4"
import vid13 from "../assets/projects/mern2.mp4"
import vid14 from "../assets/projects/mern3.mp4"
import vid15 from "../assets/projects/flutter3.mp4"

export const HERO_CONTENT = `Hi, I’m Hafiz Md. Fazeel — a passionate and motivated Software Engineering student and aspiring Full-Stack Developer. I'm currently pursuing my degree with a strong focus on building real-world web applications using modern technologies like React, Node.js, Express, MongoDB, and more Frontend and Backend Development.

My learning journey revolves around blending design, logic, and clean code to solve problems and deliver user-friendly digital experiences. From front-end interfaces to back-end APIs, I enjoy working across the stack to bring projects to life.

I'm always eager to learn, collaborate, and grow within the tech community — whether it’s through building side projects, contributing to open-source, or connecting with like-minded developers.`;

export const ABOUT_TEXT = `I’m Hafiz Md. Fazeel — a passionate Software Engineering student with a deep interest in building scalable and intuitive web applications. Currently pursuing my degree and expanding my expertise in Full-Stack Development, I enjoy working across both the front-end and back-end to bring complete solutions to life.

Over the past few years, I’ve developed a solid foundation in Frontend , Backend  and Database. I’m consistently exploring modern frameworks and tools to stay ahead in the tech landscape. I love transforming ideas into functional digital products and take pride in writing clean, maintainable code.

My journey into software development began with curiosity and quickly evolved into a purpose-driven path. Whether it's designing responsive interfaces, developing secure RESTful APIs, or deploying full-stack applications, I approach every project with creativity, discipline, and a strong willingness to learn.

I’m also a believer in continuous learning and collaboration. I thrive in environments where I can grow alongside a team, solve meaningful problems, and build things that make a difference.
`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "WordPress Developer (Remote)",
    company: "GAO Tek",
    description: `Developed a clean, user-friendly e-commerce website using WordPress. Focused on smooth navigation, fast loading times, and SEO best practices to improve the overall shopping experience.`,
    technologies: ["WordPress", "HTML", "CSS", "SEO", "E-Commerce"],
  },
  {
    year: "2020",
    role: "Junior Web Designer",
    company: "Software House",
    description: `Designed and built an interactive analytics platform using HTML5, CSS3, and modern JavaScript (ES6). Collaborated with developers to create responsive, user-friendly websites tailored to client needs.`,
    technologies: ["HTML5", "CSS", "JavaScript (ES6)"],
  }
];

export const PROJECTS = [
  {
    title: "Full Authentication using MERN",
    video: vid14,
    description:
      "I developed a secure and modern user authentication system using the MERN stack (MongoDB, Express.js, React.js, Node.js), enhanced with JWT-based authentication, Twilio SMS OTP, and Nodemailer email verification. The app ensures safe user onboarding with account verification, password reset flows, and token-based session management, making it suitable for real-world production use.",
    technologies: ["React JS","Express JS","Node JS","MongoDB","Nodemon","JWT,bcrypt.js,cookie-parser,cors,dotenv","Two-Step Verification","SMS OTP via TWILIO","Email OTP via Nodemailer","Forgot-Reset Password"],
  },
   {
    title: "Blog APP",
    video: vid13,
    description:
      "I built a full-featured, AI-augmented blog application from scratch using the MERN stack (MongoDB, Express.js, React, Node.js), enhanced with Google Gemini for AI-assisted writing and ImageKit.IO for seamless media management. This project demonstrates my ability to combine full-stack development with AI integration and cloud-based image optimization.The app enables users to securely sign up, log in, and manage blogs with complete CRUD functionality, while leveraging AI to automatically generate titles, summaries, and content suggestions to spark creativity. For media, ImageKit ensures fast uploads, transformations, and CDN delivery, improving performance and user experience.",
    technologies: ["React JS","Express JS","Node JS","MongoDB","Nodemon","JWT,bcrypt.js,cookie-parser,cors,dotenv","React-Toastify","ImageKit.AI","Google Gemini AI"],
  },
   {
    title: "Event Planning",
    video: vid12,
    description:
      "I developed a full-stack Event Planning Web Application designed to simplify how users discover, plan, and manage events. This project was built using the MERN stack and gave me hands-on experience with both frontend and backend development while implementing secure authentication and responsive design.The app provides a dynamic and user-friendly interface with route protection to ensure only authenticated users can access event-related content. It follows a modular design with reusable components like Navbar, Services, About, and Contact, while leveraging real-time feedback for an interactive user experience.",
    technologies: ["React JS","Express JS","Node JS","MongoDB","Nodemon","JWT,bcrypt.js,cookie-parser,validator,cors,dotenv","React-Toastify"],
  },
   {
    title: "Perplexity AI Clone",
    video: vid11,
    description:
      "I've made a real-time Q&A app—just like Perplexity—using Flutter for the front end and FastAPI for the back end. Instead of relying on a built-in language model, this app fetches answers directly from credible sources using the Gemini AI API where users can ask questions and receive responses based on online sources. The aim of this making this project is to have a solid foundation of learning LLM and ML build a more complex AI powered application in Future.",
    technologies: ["Flutter & Dart","Google GeminiAI API","Fast API","Python Integration","LLM","ML using Python"],
  },
   {
    title: "Text to Image Generator",
    video: vid10,
    description:
      `This project is a Text-to-Image Generator App built with Flutter and powered by the Stability AI API to transform natural language prompts into high-quality digital artwork. With a clean and modern UI, the app delivers a smooth user experience while showcasing the power of AI-driven creativity.
The app uses Google Fonts and custom styling for a polished look, while a responsive layout with FutureBuilder ensures seamless image rendering. Users can input prompts in real time and instantly receive generated images, with built-in error handling and friendly prompts for reliability`,
    technologies: ["Flutter & Dart","Stability AI","Google Fonts",],
  },
  {
    title: "Chat Application",
    video: vid9,
    description:
      `This is a fully functional real-time chat application built with Flutter and Firebase, designed to deliver smooth one-to-one messaging with a clean and responsive user interface. The app features light and dark theme support, custom chat components, and a scalable architecture that makes it practical for real-world use. 
      I implemented Firebase Authentication for secure email login, and Cloud Firestore as the real-time database to send and receive messages instantly. With StreamBuilder and a dedicated ChatServices class, the app dynamically updates conversations while ensuring clean state management.`,
    technologies: ["Flutter & Dart","Firbase",],
  },
  {
    title: "E-book App",
    video: vid15,
    description:
      `I built a modern eBook Store App using Flutter with Firebase (Firestore, Authentication, Storage) as the backend. The app offers a smooth and engaging experience for readers with a clean, user-friendly interface enhanced by custom widgets, Google Fonts, and professional animations.
      It features dynamic book management, where the latest titles automatically appear in Popular and Newest categories, fully powered by Firebase integration. Users can securely sign up or log in, manage their profiles by updating their email, password, and profile picture, and even bookmark favorite books for quick access later.`,
    technologies: ["Flutter & Dart","Firbase-FireStore, Authentication and Storage","Google-Fonts"],
  },
   {
    title: "Crud in Flutter & Dart",
    video: vid7,
    description:
      "I made a Crud operation using Flutter & Dart , I used Firebase as Database",
    technologies: ["Flutter & Dart","Firbase"],
  },
     {
    title: "Weather App",
    video: vid8,
    description:
      "The Weather App is a simple and visually elegant desktop application built using Python with PyQt5. It fetches real-time weather data using the OpenWeatherMap API and displays temperature (in °C and °F) from the world, weather condition (like sunny, cloudy, etc.), and an appropriate emoji icon for better UX.",
    technologies: ["Python","PyQt5 for GUI","Request Library","OpenWeather Map"],
  },
   {
    title: "Rock, Paper & Scissor game",
    video: vid6,
    description:
      "I made a Rock, Paper & Scissor game in Python",
    technologies: ["Python"],
  },
         {
    title: "Quiz Game in Python",
    video: vid5,
    description:
      "I made a quiz game in Python",
    technologies: ["Python"],
  },
        {
    title: "Crud Operation in ASP.net ",
    video: vid4,
    description:
      " I made a Restful API using Swagger in ASP. Net . I create a CRUD Application in Restful API and for Database, I used SQL Server.",
    technologies: ["ASP.Net","SQL","Restful API uisng Swagger" ],
  },
      {
    title: "Coffee Website using Laravel",
    video: vid3,
    description:
      "I made a Coffee website Using LARAVEL.",
    technologies: ["Html","CSS","laravel" ],
  },
    {
    title: "Crud Operation in Laravel",
    video: vid2,
    description:
      "I made a CRUD Operation Using LARAVEL. I made a Employee description project using PHP's database . I just made Create, Read , Update and Delete functions.",
    technologies: ["laravel" ,"MySQL"],
  },
   {
    title: "Crud with Images",
    video: vid1,
    description:
      "CRUD with Images is a web application I built using PHP and MySQL that allows users to Create, Read, Update, and Delete records along with image uploads. The system is designed to demonstrate how to manage both text data and media files within a database-driven application",
    technologies: ["HTML", "CSS", "javascipt", "PHP", "MySQL"],
  },
  {
    title: "E-Commerce Website",
    image: pic3,
    description:
      "E-Commerce Website is a modern online shopping platform I developed to practice and demonstrate my web development skills. The project allows users to see products, view details, add items to the shopping cart to see and not proceed to checkout.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    url:"https://super-fudge-143651.netlify.app/"
  },
  {
    title: "Food Hut",
    image: pic2,
    description:
      "Food Hut Website is a beginner-friendly project I created using HTML, CSS, and JavaScript. The website showcases a modern food-themed landing page with sections for featured dishes, menu highlights, and customer call-to-actions.",
    technologies: ["HTML", "CSS", "Bootstrap","Javascript"],
    url:"https://jade-monstera-e5c3e7.netlify.app/"
  },
    {
    title: "Astronomical Webiste",
    image: pic1,
    description:
      "Astronomy is my very first web development project, built using HTML, CSS, and JavaScript. It’s a simple yet creative astronomy-themed website designed to introduce visitors to the beauty of space.",
    technologies: ["HTML", "CSS", "Bootstrap","Javascript"],
    url:"https://tranquil-astronomy-b0ad2d.netlify.app/"
  },
];

export const CONTACT = {
  address: "Karachi, Pakistan",
  phoneNo: "+923496339349 , +923151214368",
  email: "fazeelimam6@gmail.com",
};
