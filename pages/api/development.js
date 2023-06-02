export default function handler(req, res) {
  res.status(200).json({
    highlights: [
      {
        title: "Personalize.ai",
        description:
          "Coldmailing software that mass personalizes introductions to emails and pushes to your campaign by importing your own sheet file.",
        type: "education",
        location: "Lighthouse Labs",
        tags: [
          "react",
          "next.js",
          "sass",
          "framer motion",
          "postgresql",
          "prisma",
          "passport",
          "jsonwebtoken",
        ],
        img: "/img/development/personalize-ai.webp",
        details: "https://github.com/takuyadev/personalize-ai",
      },
      {
        title: "Portfolio (2023)",
        description:
          "Updated personal portfolio using Next.js and Styled Components; utilizing the Static Site Generation to vastly increase performance and load time.",
        type: "personal",
        location: "Personal",
        tags: [
          "react",
          "API",
          "javascript ES6",
          "next.js",
          "styled components",
          "framer motion",
        ],
        img: "/img/development/portfolio.webp",
        live: "https://www.takuyaktoyokawa.ca",
        github: "https://github.com/takuyadev/takuyadev-portfolio-2023",
      },
      {
        title: "Srawana Weather App",
        description:
          "Weather application that detects your current location, and calls the OpenWeather API to grab current weather conditions around your area.",
        type: "personal",
        location: "Personal",
        tags: ["react", "API", "framer motion", "styled components"],
        img: "/img/development/srawana_weather.webp",
        live: "https://srawana-weather-app.netlify.app/",
        github: "https://github.com/takuyadev/ghibli-movielist-revamp",
      },
    ],
    projects: [
      {
        title: "Interview Scheduler",
        img: "/img/development/shelfie.webp",
        type: "education",
        location: "Ligthouse Labs",
        tags: ["react", "storybook", "cypress", "jest"],
        github: "https://github.com/takuyadev/interview-scheduler",
      },
      {
        title: "Logeee",
        img: "/img/development/logeee.webp",
        type: "education",
        location: "BCIT",
        tags: ["html", "css", "javascript ES6"],
        live: "https://takuyadev.github.io/logeee/",
        github: "https://github.com/takuyadev/logeee",
      },
      {
        title: "Shelfie",
        img: "/img/development/shelfie.webp",
        type: "education",
        location: "BCIT",
        tags: ["react", "node", "next.js", "styled components"],
        github: "https://github.com/takuyadev/shelfie",
      },
      {
        title: "Tiny App",
        img: "/img/development/shelfie.webp",
        type: "education",
        location: "Ligthouse Labs",
        tags: ["jquery", "node.js", "express"],
        github: "https://github.com/takuyadev/tinyapp",
      },
      {
        title: "Visionary Productions",
        img: "/img/development/visionary_prod.webp",
        type: "work",
        location: "Visionary Productions",
        tags: ["wordpress", "elementor"],
        live: "https://visionaryproductionsinc.com/",
      },
      {
        title: "Portfolio (2021)",
        img: "/img/development/portfolio_2021.webp",
        type: "personal",
        location: "Personal",
        tags: ["react", "next.js", "tailwindCSS"],
        live: "https://portfolio.takuyatoyokawa.vercel.app",
        github: "https://github.com/takuyadev/takuyadev-portfolio-2021",
      },
      {
        title: "Minimalist",
        img: "/img/development/windlist.webp",
        type: "personal",
        location: "Personal",
        tags: ["react", "API", "tailwindCSS", "firebase"],
        live: "http://windlist.netlify.app",
        github: "https://github.com/takuyadev/windlist-firebase",
      },
      {
        title: "Luck Tester",
        img: "/img/development/luck_tester.webp",
        type: "education",
        location: "BCIT",
        tags: ["html", "css", "javascript ES6"],
        live: "https://takuyadev.github.io/luck-tester-webdev-finals/",
        github: "https://github.com/takuyadev/luck-tester-webdev-finals",
      },
      {
        title: "Video Game Quiz",
        img: "/img/development/game_quiz.webp",
        type: "education",
        location: "Scrimba",
        tags: ["react", "API"],
        live: "https://react-quizzical-scrimba.netlify.app/",
        github: "https://github.com/takuyadev/react-quizzical-scrimba",
      },
      {
        title: "Sushi me!",
        img: "/img/development/sushime.webp",
        type: "education",
        location: "BCIT",
        tags: ["html", "css"],
        live: "https://takuyadev.github.io/sushime-styleguide/",
        github: "https://github.com/takuyadev/sushime-styleguide",
      },
      {
        title: "Toyo Sushi",
        img: "/img/development/toyosushi.webp",
        type: "work",
        location: "Toyo Sushi",
        tags: ["wix", "photoshop"],
        live: "https://www.toyosushi.ca/",
      },
      {
        title: "Salish Airways",
        img: "/img/design/salish_airways.webp",
        type: "education",
        location: "BCIT",
        tags: ["wordpress", "elementor"],
        live: "http://salishairway.altervista.org/",
      },
      {
        title: "Unit Converter",
        img: "/img/development/unit_converter.webp",
        type: "education",
        location: "Scrimba",
        tags: ["html", "css", "javascript ES6"],
        live: "https://takuyadev.github.io/unit-converter-scrimba/",
        github: "https://github.com/takuyadev/unit-converter-scrimba",
      },
      {
        title: "Dice Game",
        img: "/img/development/dice_game.webp",
        type: "education",
        location: "Scrimba",
        tags: ["html", "css", "javascript ES6"],
        live: "https://takuyadev.github.io/dice-game-scrimba/",
        github: "https://github.com/takuyadev/dice-game-scrimba",
      },
      {
        title: "Password Generator",
        img: "/img/development/password_gen.webp",
        type: "education",
        location: "Scrimba",
        tags: ["html", "css", "javascript ES6"],
        live: "https://takuyadev.github.io/password-generator-scrimba/",
        github: "https://github.com/takuyadev/password-generator-scrimba",
      },
      {
        title: "Invoice Generator",
        img: "/img/development/invoice_generator.webp",
        type: "education",
        location: "Scrimba",
        tags: ["html", "css", "javascript ES6"],
        live: "https://takuyadev.github.io/invoice-generator-scrimba/",
        github: "https://github.com/takuyadev/invoice-generator-scrimba",
      },
    ],
  });
}
