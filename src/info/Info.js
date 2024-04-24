import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
   firstName: "Miao Day" ,
   lastName: "",
   initials: "M", // the example uses first and last, but feel free to use three or more if you like.
   position: "a Front-End Developer",
   selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
   gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
   baseColor: colors[0],
   miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
      {
         emoji: '☕',
         text: 'fueled by coffee'
      },
      {
         emoji: '🌎',
         text: 'based in the France & Taiwan'
      },
      {
         emoji: "💼",
         text: "Front-End Developer"
      },
      {
         emoji: "📧",
         text: "starryvero@gmail.com"
      }
   ],
   socials: [
      {
         link: "https://github.com",
         icon: "fa fa-github",
         label: 'github'
      },
      {
         link: "https://linkedin.com",
         icon: "fa fa-linkedin",
         label: 'linkedin'
      }
   ],
   bio: "Hello! I'm Miao, a Front-End Developer passionate about generating innovative ideas, creating new solutions and tackling challenges head-on. I thrive on continuous learning and pushing boundaries in technology. I believe my skills and enthusiasm make me a valuable asset to any team. Let's work together to bring our ideas to life and achieve great things!",
   skills:
      {
         proficientWith: ['javascript', 'react', 'git/github', 'bootstrap', 'html5', 'css3', 'sass', 'mongoDB'],
         exposedTo: ['nodejs', 'figma', 'adobe__creative']
      },
   hobbies: [
      {
         label: 'photography',
         emoji: '📷'
      },
      {
         label: 'traveling',
         emoji: '🏖️'
      },
      {
         label: 'movies',
         emoji: '🎥'
      },
      {
         label: 'cooking',
         emoji: '🌶'
      }
   ],
   portfolio: [
      {
         title: "Restaurants Booking",
         live: "https://miaoday.github.io/p4_ohmyfood/index.html", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
         source: "https://github.com/Miaoday/p4_ohmyfood", // this should be a link to the **repository** of the project, where the code is hosted.
         image: mock1
      },
      {
         title: "Hotels Website",
         live: "https://miaoday.github.io/p3_Booki/",
         source: "https://github.com/Miaoday/p3_Booki",
         image: mock2
      },
      {
         title: "Start-Up",
         live: "https://miaoday.github.io/p2_Riding_cities/",
         source: "https://github.com/Miaoday/p2_Riding_cities",
         image: mock3
      },
      {
         title: "Photographer Website",
         live: "https://github.com/Miaoday/p9_Nina_Carducci",
         source: "https://miaoday.github.io/p9_Nina_Carducci/",
         image: mock4
      },
      {
         title: "Company Website",
         live: "https://miaoday.github.io/p5_print_it/",
         source: "https://github.com/Miaoday/p5_print_it",
         image: mock5
      }
   ]
}