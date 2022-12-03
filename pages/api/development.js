export default function handler(req, res) {
   res.status(200).json(
      {
         highlights: [
            {
               title: "Portfolio (2023)",
               description: "Updated personal portfolio using Next.js and Styled Components; utilizing the Static Site Generation technology to vastly reduce load time.",
               img: "/img/development/portfolio.webp",
               live: "takuyaktoyokawa.ca",
               github: "https://github.com/takuyadev/takuyadev-portfolio-2023"
            },
            {
               title: "Srawana Weather App",
               description: "Weather application using your geolocation as well as OpenWeather API.",
               img: "/img/development/srawana_weather.webp",
               live: "https://srawana-weather-app.netlify.app/",
               github: "https://github.com/takuyadev/ghibli-movielist-revamp"
            },
            {
               title: "Ghibli Movielist",
               description: "Movie searching application using both REST API as well as localStorage to store your favorite movies.",
               img: "/img/development/ghibli_movie.webp",
               live: "https://ghibli-movielist.netlify.app/",
               github: "https://github.com/takuyadev/ghibli-movielist-revamp"

            },


         ],
         projects: [
            {
               title: "Shelfie",
               img: "/img/development/shelfie.webp",
               live: "https://shelfie-takuyatoyokawa.vercel.app/Homepage",
               github: "https://github.com/takuyadev/shelfie"
            },
            {
               title: "Logeee",
               img: "/img/development/logeee.webp",
               live: "https://takuyadev.github.io/logeee/",
               github: "https://github.com/takuyadev/logeee"
            },
            {
               title: "Visionary Productions",
               img: "/img/development/visionary_prod.webp",
               live: "https://visionaryproductionsinc.com/",
            },
            {
               title: "Minimalist",
               img: "/img/development/windlist.webp",
               live: "http://windlist.netlify.app",
               github: "https://github.com/takuyadev/windlist-firebase",
            },
            {
               title: "DevCamper",
               img: "/img/development/devcamper.webp",
               live: "https://dev-camper-api.onrender.com/",
               github: "https://github.com/takuyadev/dev_camper_api"
            },
            {
               title: "Portfolio (2021)",
               img: "/img/development/portfolio_2021.webp",
               live: "https://portfolio.takuyatoyokawa.vercel.app",
               github: "https://github.com/takuyadev/takuyadev-portfolio-2021"
            },
            {
               title: "Luck Tester",
               img: "/img/development/luck_tester.webp",
               live: "https://takuyadev.github.io/luck-tester-webdev-finals/",
               github: "https://github.com/takuyadev/luck-tester-webdev-finals"
            },
            {
               title: "Video Game Quiz",
               img: "/img/development/game_quiz.webp",
               live: "https://react-quizzical-scrimba.netlify.app/",
               github: "https://github.com/takuyadev/react-quizzical-scrimba"
            },
            {
               title: "Sushi me!",
               img: "/img/development/sushime.webp",
               live: "https://takuyadev.github.io/sushime-styleguide/",
               github: "https://github.com/takuyadev/sushime-styleguide"
            },
            {
               title: "Toyo Sushi",
               img: "/img/development/toyosushi.webp",
               live: "https://www.toyosushi.ca/",
            },
            {
               title: "Unit Converter",
               img: "/img/development/unit_converter.webp",
               live: "https://takuyadev.github.io/unit-converter-scrimba/",
               github: "https://github.com/takuyadev/unit-converter-scrimba"
            },
            {
               title: "Dice Game",
               img: "/img/development/dice_game.webp",
               live: "https://takuyadev.github.io/dice-game-scrimba/",
               github: "https://github.com/takuyadev/dice-game-scrimba"
            },
            {
               title: "Password Generator",
               img: "/img/development/password_gen.webp",
               live: "https://takuyadev.github.io/password-generator-scrimba/",
               github: "https://github.com/takuyadev/password-generator-scrimba"
            },
            {
               title: "Invoice Generator",
               img: "/img/development/invoice_generator.webp",
               live: "https://takuyadev.github.io/invoice-generator-scrimba/",
               github: "https://github.com/takuyadev/invoice-generator-scrimba"
            },
            {
               title: "Vanilla JS Carousel",
               img: "/img/development/carousel.webp",
               live: "https://takuyadev.github.io/carousel-vanilla-js-scrimba/",
               github: "https://github.com/takuyadev/carousel-vanilla-js-scrimba"
            }
         ]
      }
   )
}
