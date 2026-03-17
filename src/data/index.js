import {
  cause,
  noora,
  squirrel,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Faisal Hazmi",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "DKATALIS",
    date: "2020 - 2025",
    details: [
      "Covering and managing testing procedure for the bank apps from Unit test (Node.js), E2E <span style='color: #00f0ff;'>Flutter</span> mobile test (Dart), E2E <span style='color: #00f0ff;'>Flutter</span> Web apps (Dart), Performance testing with <span style='color: #00f0ff;'>JMeter and K6</span> (Java & Nodejs), <span style='color: #00f0ff;'>SFTP Test (Python)</span>, <span style='color: #00f0ff;'>Messaging Queue</span> System test (Node.js) and <span style='color: #00f0ff;'>coordinating and managing</span> QA's from all departement for using automatic migration from manual procedures.",
      "Integrating test flow to CICD inside the workflow which cover E2E Test and performance test with <span style='color: #00f0ff;'>Teraform</span>. Working with Bigdata to process the reporting, data layering, backup procedure, alerting discrepancies and create the automatic flow with <span style='color: #00f0ff;'>airflow</span> and <span style='color: #00f0ff;'>DAG</span> that writing in python",
      "<span style='color: #00f0ff;'>Optimize</span> the microservices apps that write in node.js to achieve zero restart in one day.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Max Interactives Technologies",
    date: "2019 - 2020",
    details: [
      "Build E-wallet Apps for Android with <span style='color: #00f0ff;'>kotlin</span> and IOS with <span style='color: #00f0ff;'>swift 5</span>.",
      "Developing features for existing API with <span style='color: #00f0ff;'>C# .NET 2.0</span> and <span style='color: #00f0ff;'>MS-SQL</span> databases.",
      "Covering the <span style='color: #00f0ff;'>monitoring system</span> implemented, <span style='color: #00f0ff;'>E2E Test automation</span> and <span style='color: #00f0ff;'>penetration testing</span> scenario runner.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "HOOPIPER",
    date: "2018 - 2019",
    details: [
      "Build and re-create SaaS application with <span style='color: #00f0ff;'>React</span> apps for Client-side and <span style='color: #00f0ff;'>Python</span> for Backend side and <span style='color: #00f0ff;'>Postgresql</span> Databases",
      "Developed and maintained <span style='color: #00f0ff;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: #00f0ff;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "MAENTRUS Digital Lab",
    date: "2017 - 2018",
    details: [
      "Built a <span style='color: #00f0ff;'>Mobile Games (IOS & Android)</span>.",
      "Develop game for mobile platform with <span style='color: #00f0ff;'>unity game engine and java API</span> for online games and Mysql for database. ",
      "Covering Automatic testing inside the engines and Perform the <span style='color: #00f0ff;'>performance testing and Penetration testing</span> for the API.",
    ],
  },
];

const portfolio = [
  {
    name: "Cause Run",
    description:
      "Initially Build Web apps for RUN event in 2018. Feature: Event ticketing and payment gateway, Communities Pools and discussion, User management, Run Statistic user board and build dashboard for admins to manage the event.",
    image: cause,
  },
  {
    name: "Squirrel Wingsuits",
    description:
      "Re-create, Technologies migration from PHP monolithic to Docker microservices in 2021. Writing e-commerce web apps and its API with typescript, postgresql database, redis auth cache and bullMQ messaging queue.",
    image: squirrel,
  },
  {
    name: "Noora AI story to video apps",
    description:
      "Build AI video generation application with trained LLMs, advanced models execution and optimized performance between server-side and client-side powered by clustered typescript with mem-cache and advanced redis implementation.",
    image: noora,
  },
];

export { experiences, portfolio };

