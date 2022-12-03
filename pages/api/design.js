export default function handler(req, res) {
   res.status(200).json(
      {
         highlights: [
            {
               title: "ScopeX Design System",
               type: "work",
               location: "ScopeX",
               tag: ["figma", "ps", "ai"],
               description: "ScopeX's Design System, featuring all of ScopeX's branding scheme and resource. (not all created design is shown on the featured link)",
               img: "/img/design/scopex.webp",
               live: "https://ghibli-movielist.netlify.app/"
            },
            {
               title: "Portfolio (2023)",
               type: "personal",
               tag: ["figma", "ps", "ai"],
               description: "Updated portfolio with featuring both ",
               img: "/img/development/portfolio.webp",
               live: "https://srawana-weather-app.netlify.app/"
            },

            {
               title: "Day in the Life of Animal Crossing",
               type: "education",
               location: "BCIT",
               tag: ["ae"],
               img: "/img/design/ac_animation.webp",
               description: "A small motion graphic animation based off the popular franchise Animal Crossing, created by crafting all assets in Illustrator and then animating using After Effects.",
               live: "https://www.youtube.com/watch?v=da6TO6zRZUs",
            },
         ],
         projects: [
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage"
            },
            {
               title: "Toyo Sushi Menu",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Japan Magazine",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "CookOff!",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Nutrition Tracker",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Logeee",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "SingleMingle",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Salish Airways",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Keybuild Magazine",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Gameboy Flyer",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "The Proms Brochure",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Brochure Cover",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },
            {
               title: "Clock Design",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
            },

         ]
      }
   )
}
