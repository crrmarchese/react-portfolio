const cmarcData = {
    name: "Cathy Marchese",
    role: "Front-End Developer",
    baseURL: "https://crrmarchese.github.io/react-portfolio/",
    socialLinks: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/catherinemarchese/",
        className: "social_linkedin",
      },
      {
        name: "github",
        url: "https://github.com/crrmarchese",
        className: "social_github",
      }
    ],
    aboutme: "Who I Am",
    aboutdetails:
      "In June 2021, I will graduate from the University of New Hampshire's Full Stack Developer coding boot camp. I have several years experience working with WordPress and I'm looking for a new challenge. I am an analytical, fast learner with the desire to learn and apply new skills. I want my work to matter, and continually improve the work that I do.",
    aboutimage: "who-i-am.png",
    projects: [
      {
        id: 1,
        projName: "Password Generator",
        projImage: "password-generator.png",
        projDetails:
          "After only 3 weeks of school, the Password Generator assignment was to create a tool that the user can select the following criteria: password character length and character types such as uppercase letters, lowercase letters, numbers and/or special characters. Using vanilla JavaScript, I learned about variables, selecting DOM elements, arrays, creating functions and for loops. The app is deployed on GitHub pages.",
        projURL: "https://crrmarchese.github.io/Password-Generator/",
        projCodeURL: "https://github.com/crrmarchese/Password-Generator",
        projCategory: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: 2,
        projName: "Easy Recipeazy",
        projImage: "easy-recipeazy.jpg",
        projDetails:
          "For our first group project, we created a Meal and Drink Randomizer, with a specific ingredient selection feature. I was on a team of five people and we split up the front-end and back-end responsibilities. I worked with the front-end team, helping with design, colors, and layout. We used the Bulma CSS Framework which had a small learning curve compared to Bootstrap. I was responsible for putting together the food slideshow using the Owl Carousel, doing photo research, resizing photos and troubleshooting issues with the carousel. I learned about using GitHub on a team, specifically pull requests and how to resolve merge conflicts.",
        projURL: "https://www.tonipow3ll.com/drinks-and-dinner/",
        projCodeURL: "https://github.com/tonipow3ll/drinks-and-dinner",
        projCategory: ["HTML", "CSS","jQuery", "AJAX"],
      },
      {
        id: 3,
        projName: "National Grid Energy Explorer",
        projImage: "NGRID-energy-world.jpg",
        projDetails:
          "I worked on a redesign of the National Grid Energy Explorer website with my coworker Aron, who is a designer and project manager. I customized the child theme, built custom pages using HTML, CSS and jQuery as well as some creating artwork under the direction of the designer.",
        projURL: "https://ngridenergyworld.com/",
        projCodeURL: "",
        projCategory: ["HTML", "CSS", "jQuery", "WordPress"],
      },
      {
        id: 4,
        projName: "Employee Directory",
        projImage: "employee-directory.png",
        projDetails:
          "This employee directory table is using the Random User API to pull in data using Axios. I used the PrimeReact UI Kit DataTable component and added the Size and Striped styling as well as the Sort and Filter functionality.",
        projURL: "https://crrmarchese.github.io/employee-directory/",
        projCodeURL: "https://github.com/crrmarchese/employee-directory",
        projCategory: ["HTML", "CSS", "React"],  
      },
      {
        id: 5,
        projName: "Stretch and Strengthen",
        projImage: "stretch-n-strengthen.jpg",
        projDetails:
          "Anyone interested in fitness can use this workout app to choose an exercise by muscle group which then gives the user the option of adding it as a routine once an account is created. I worked on the front-end team with design and layout. I coded the HTML and used the Bulma CSS Framework. Since this application is using a database, it is deployed on Heroku so I learned about configuring environmental variables, autodeploying a GitHub repo to Heroku and using the NPM package dotenv.",
        projURL: "http://stretch-n-strengthen.herokuapp.com/",
        projCodeURL: "https://github.com/crrmarchese/stretch-n-strengthen",
        projCategory: ["NPM", "Express", "MySQL"],  
      },
    ],
  
  };
  
  export default cmarcData;
  