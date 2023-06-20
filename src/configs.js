export const intro = [
  {
    key: 1,
    section:
      "Hi! Before starting to introduce myself, I just want to take a second to thank you, whoever you are, for visiting my personal website. It means a lot that you are taking some time out of your day to get to know me and look at the things that I have built.",
  },
  {
    key: 2,
    section:
      "Now, without further ado… My name is Roger Zhang and I am first-generation Chinese born and raised in Quebec city, Qc, Canada. I graduated from Mcgill University with a BEng in Software Engineering. I am currently a Software Development Engineer at Publicis Sapient. ",
  },
  {
    key: 3,
    section:
      "What I enjoy the most in life is going on adventures by getting obsessed with different disciplines and learning new skills. For example, in the autumn of 2021, I decided I wanted to pursue boxing until I either injured myself or achieved an amateur fight. I then spent about a year training for around 2 hours a day 4-5 times a week. Spoiler alert: I didn’t end up getting an amateur fight.",
  },
  {
    key: 4,
    section:
      "All that to say, I love learning new things and creating friendships doing it. I am not afraid of getting out of my comfort zone, as my career path shows: From creating healthcare-related apps to working in the finance industry, to creating new AutoCAD modules for the mining industry, I am always willing to get my hands dirty and nerd out about a new field.",
  },
  {
    key: 5,
    section:
      "If you are recruiting, please view and download (print to PDF) my resume! ",
  },
];

export const jobs = [
  {
    date: "Jun 2021 - Present",
    location: "Toronto",
    jobTitle: "L1 Software Development Engineer",
    company: "Publicis Sapient",
    description:
      "Worked on Goldman Sachs's new investment initiative that could reach around 10 million customers and bring billions in revenue.",
    descriptionListForm: [
      {
        key: 1,
        item: "Worked on Goldman Sachs's new investment initiative that could reach around 10 million customers and bring billions in revenue.",
      },
      {
        key: 2,
        item: "Worked on Goldman Sach’s customer assistance tool to provide 24/7 support to millions of customers.",
      },
      {
        key: 3,
        item: "Consulted with businesses around the world to lead data-driven digital transformations toward a future of more efficient workflows, satisfied customers, and measurable growth.",
      },
      {
        key: 4,
        item: "Worked on the Goldman Sachs investment advisory tool used by more than 14 million customers.",
      },
    ],
    techStack: ["React", "Spring Framework", "Java"],
  },
  {
    date: "Jun 2020 - Aug 2020",
    location: "Toronto",
    jobTitle: "Software Engineering Intern",
    company: "Publicis Sapient",
    description:
      "Completely built, deployed, and presented proof of concept aiming to improve grocery pick-up scheduling to Lowblaws Inc. The project aimed to provide safe and efficient grocery prick-up for millions of customers across Canada during the height of COVID-19.",
    descriptionListForm: [
      {
        key: 1,
        item: "Completely built, deployed, and presented proof of concept aiming to improve grocery pick-up scheduling to Lowblaws Inc.",
      },
      {
        key: 2,
        item: "The project aimed to provide safe and efficient grocery prick-up for millions of customers across Canada during the height of COVID-19.",
      },
    ],
    techStack: ["GCP", "React", "Spring Framework", "Java"],
  },
  {
    date: "May 2019 - Aug 2019",
    location: "Quebec City",
    jobTitle: "Software Development Intern",
    company: "Promine Inc.",
    description:
      "Worked on maintaining and developing new Autocad plugins utilized by 100+ mining companies across the globe. Also spearheaded a new project to provide underground area mapping without the use of GPS that functions in mines hundreds of feet deep.",
    descriptionListForm: [
      {
        key: 1,
        item: "Worked on maintaining and developing new Autocad plugins utilized by 100+ mining companies across the globe.",
      },
      {
        key: 2,
        item: "Spearheaded a new project to provide underground area mapping without the use of GPS that functions in mines hundreds of feet deep.",
      },
    ],
    techStack: ["C#", "C", "Lisp"],
  },
  {
    date: "Jun 2018 - Aug 2018",
    location: "Beijing",
    jobTitle: "Software Research Intern",
    company: "Beihang University",
    description:
      "Redesigned android app that helps medical professionals share X-rays and ask colleagues for insights. Also worked on Tensorflow implementation for learning image-to-image input-output pairs.",
    descriptionListForm: [
      {
        key: 1,
        item: "Redesigned android app that helps medical professionals share X-rays and ask colleagues for insights.",
      },
      {
        key: 2,
        item: "Worked on Tensorflow implementation for learning image-to-image input-output pairs.",
      },
    ],
    techStack: ["Java", "Android Studio", "TenserFlow"],
  },
  {
    date: "Aug 2016 - Spt 2016",
    location: "Quebec City",
    jobTitle: "Research Assistant",
    company: "Quebec Heart and Lung Institute",
    description:
      "Compiled data for hundreds of patients for clinical research on bariatric surgeries and participated in an effort to digitalize the medical records of thousands of patients, helping the hospital free space for more important use.",
    descriptionListForm: [
      {
        key: 1,
        item: "Compiled data for hundreds of patients for clinical research on bariatric surgeries.",
      },
      {
        key: 2,
        item: "Participated in an effort to digitalize the medical records of thousands of patients, helping the hospital free space for more important use.",
      },
    ],
  },
];

export const projects = [
  {
    date: "Jun 2023",
    name: "Thrive Webserver",
    description:
      "A webserver designed to POST a new item to a Webflow CMS when it receives a POST from a Webflow webhook.",
    descriptionListForm: [
      {
        key: 1,
        item: "Helped a friend build a web server designed to post a new item to a Webflow CMS when it receives a POST from a Webflow webhook.",
      },
      {
        key: 2,
        item: "Replaces 3rd party software such as Zapier which charges 27$/month for the same service.",
      },
      {
        key: 3,
        item: "Built using Go, deployed using Docker and Google Cloud Run.",
      },
      {
        key: 4,
        item: "Webflow website can be found " + <a href="https://thrive-artwork-afefc46898-d9f19e4ce600d.webflow.io/where-art-thrives">"here"</a>,
      },
    ],
    githubLink: "https://github.com/rog22rz/thrive-webserver",
    techStack: ["Go", "Docker", "Google Cloud Run"],
  },
  {
    date: "Jan 2023",
    name: "This website!",
    description:
      "A dual-purpose web app aimed at helping patients manage access to their health information, and providing EMTs with crucial medical data.",
    descriptionListForm: [
      {
        key: 1,
        item: "My personal website presenting my experience, projects, and more details about me!",
      },
      {
        key: 2,
        item: "Built using NextJS and deployed with Netlify",
      },
    ],
    githubLink: "https://github.com/rog22rz/personal-website",
    techStack: ["NextJS", "Netlify"],
  },
  {
    date: "Jun 2022",
    name: "NuHealth: Publicis Sapient Hackathon Finalist",
    description:
      "A dual-purpose web app aimed at helping patients manage access to their health information, and providing EMTs with crucial medical data.",
    descriptionListForm: [
      {
        key: 1,
        item: "A dual-purpose web app aimed at helping patients manage access to their health information, and providing EMTs with crucial medical data.",
      },
      {
        key: 2,
        item: "Hoping to help provide the 15 million people of Ontario with easier access to their medical records.",
      },
      {
        key: 3,
        item: "Created and deployed within 36 hours alongside 3 other teammates.",
      },
      {
        key: 4,
        item: "Built a sleek and responsive UI with NextJS, used Google Firebase to store user data, and deployed with Netlify.",
      },
    ],
    githubLink: "https://github.com/rog22rz/nuhealth_public",
    techStack: ["NextJS", "Google Firebase", "Netlify"],
  },
  {
    date: "Jan 2019 - May 2019",
    name: "Parking Reservation Application",
    description:
      "Application allowing users to temporarily rent parking spaces to other users.",
    descriptionListForm: [
      {
        key: 1,
        item: "Application allowing users to temporarily rent parking spaces to other users.",
      },
      {
        key: 2,
        item: "Led the back-end development of a team of 16 people.",
      },
      {
        key: 3,
        item: "The back end was developed using the Spring boot framework and the front end utilizes React.",
      },
    ],
    githubLink: "https://github.com/rog22rz/ParkingBackEnd",
    techStack: ["React", "Spring Framework", "Hibernate"],
  },
  {
    date: "Feb 2019",
    name: "McHacks Hackathon",
    description:
      "Extracted and analyzed mock medical data from an FHRI API in the scope of detecting patterns indicative of medical conditions such as diabetes and high dyslipidemia",
    descriptionListForm: [
      {
        key: 1,
        item: "Extracted and analyzed mock medical data from an FHRI API in the scope of detecting patterns indicative of medical conditions such as diabetes and high dyslipidemia.",
      },
      {
        key: 2,
        item: "Led the back-end development of a team of 16 people.",
      },
      {
        key: 3,
        item: "Used a spring backend to parse and analyze the data. Use a VueJS frontend to display the computed patterns.",
      },
    ],
    techStack: ["VueJS", "Spring Framework"],
  },
];
