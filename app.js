 // --- Data ---
      const coreSkills = [
        "TypeScript",
        "ReactJS",
        "Redux",
        "VueJS",
        "Vuex",
        "Pinia",
        "NextJS",
        "JavaScript ES6",
        "VanillaJS",
        "SASS/LESS",
        "SCSS",
        "CSS3",
        "HTML5",
        "GitHub",
        "Microsoft Azure",
        "Bitbucket",
        "GitLab",
        "NPM",
        "VS Code",
      ];
      const additionalSkills = [
        "React Native",
        "NodeJS",
        "Express JS",
        "MongoDB",
        "Python",
        "Django",
        "noSQL",
        "Bootstrap",
        "JQuery",
        "Passport JS",
        "SVN",
        "Jenkins",
        "Trello",
        "Google Analytics",
        "Linux",
      ];
      const certificates = [
        {
          name: "Build your first end-to-end test with Playwright",
          src: "https://learn.microsoft.com/en-us/users/svetozariliev-6545/achievements/4c7hvask",
        },
        {
          name: "Vue.js 3 Fundamentals with the Composition API",
          src: "https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api",
        },
        {
          name: "Vue JS 3 Composition API (with Pinia & Vite)",
          src: "https://www.udemy.com/course/vue-js-3-composition-api/?couponCode=ST16MT230625A",
        },
        {
          name: "Vue - The Complete Guide (incl. Router & Composition API)",
          src: "https://www.udemy.com/course/vuejs-2-the-complete-guide/?couponCode=ST16MT230625A",
        },
        {
          name: "Next.js & React - The Complete Guide(incl. Two Paths!)",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZBLb8IwEIT%2FSuR7HrZDIBZEAtJHVFLRFgrtzXWcYCmxg%2B0E%2Bu8b6IVeellppZ1vdmZqaFO3ZN7Zg3zlx44b66TDEJJaoeQMHKxtDfH9WlVCeo1gWhlVWiVrIbnHVONHbARZNIrduBghN4S0dCewHLtFwWGEJwGfQOxfbBBw3rk2VyzyAuBk6QxkAT3toyeE4WOpq0O8S5f9Or1%2F2FYv8TfKWT8%2Bnb5Qv9iF6a7tn%2FMj1nSz%2F8hXi2J7lw0MYzqeSWOptAM2QKELAzfAG4gJCgnEHkboEzjnppaGXNPOQKclUdQIQyRtuCGWkbd5viLDV6TVyiqmapBML9fkaqBv9P%2FLqTFcX6oDyVrIaqmk5MxO%2FRtW8rv9bT35AQ%3D%3D&RelayState=I0awX6K231Hfrgh9WDCvPDFGUgQ9y2Mcv7wwb2vBW4DWpvNMq3raTXYMLBdUEI",
        },
        {
          name: "Next.js by Example",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZDNbsIwEIRfJfLdieOYQCyIRAutEH8RUKr2FhkToibr1OuU8vYN9EIvvay00s43OzPEvK4aOW7dCTb6s9XovEk3SshdaWBETs41KIOgMkUJfl0qa9AcnYGqBO0rUwex6oUq7iU0OfQ4FWF%2BpIPw2KeHgw7jaMD0IIyCqw0n3l5bvGG5z4g3m4zIjKHiWTGn4hnEVC%2ByubLV%2FvLBvtabl9W66Yu3s9aLpa3mmiVPPFsV23OzexD2dTuedgzEVs8AXQ6uwzIuaMgoi3ZhJLmQUd%2FncfJOvO%2B6ApS3tCPSWpAmxxIl5LVG6ZTcjpcL2X0lG2ucUaYi6fB6LW8G9k7%2FvzxH1PZaHUmzEopHA6CVGwZ3rPR3%2B9t6%2BgM%3D&RelayState=I0sc2PgK-4Gn4EeLPKcrlVyk0vORUNOp74YweeLMrlKe09F2PNgSwpTB4rWSAE",
        },
        {
          name: "React and Typescript: Build a Portfolio Project",
          src: "https://www.udemy.com/certificate/UC-e090c701-efb4-4611-84f2-cad1ae41d17f/",
        },
        {
          name: "Advanced React.js",
          src: "https://app.pluralsight.com/learner/user/courses/reactjs-advanced/certificate",
        },
        {
          name: "Testing React Applications with Jest ",
          src: "https://app.pluralsight.com/learner/user/courses/testing-react-applications-jest/certificate",
        },
        {
          name: "React Web App Testing With NodeJs, Cypress WebDriverIO",
          src: "https://www.udemy.com/course/react-web-app-testing-with-nodejs-cypress-and-webdriverio/",
        },
        {
          name: "Building Applications with React and Redux",
          src: "https://app.pluralsight.com/learner/user/courses/react-redux-react-router-es6/certificate",
        },
        {
          name: "Building Applications with React and Flux",
          src: "https://app.pluralsight.com/learner/user/courses/react-flux-building-applications/certificate",
        },
        {
          name: "React: Getting Started",
          src: "https://app.pluralsight.com/learner/user/courses/react-js-getting-started/certificate",
        },
        {
          name: "Python Django - The Practical Guide",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZDNbsIwEIRfBfmeHzsJCRZEogUVpIIQIGi5VMaYxG2yTr1O6eM30Au99LLSSjPf7M4QRV01fNy6Etbqs1XoepNuaBBOGxiR0rkGeRBUptDg11pag%2BbsDFQalC9NHfRlQmU%2FGXiDU8K8mIqzl9Fz6p1OivajLFQZjYJrDCO9nbJ4wzI%2FJL35ZETmIS5asXufPTXZUZvmKxWX5mVRHG04K5bxRe1ZeVhN2UOKLqbFfj0tN29bu2zj1%2F3HoWMgtmoO6AS4Dhuy2KOhF0ZbGnEW8yTxaZp1uu%2B6AuS3b0ektcCNQI0cRK2QO8k348Uz767ijTXOSFORfHhV81uAvfP%2FbxeIyl6rI%2FlKQ%2FFoAJR0w%2BCOlf9uf1vPfwA%3D&RelayState=I0sMuaVjHGp8biopv7awpXMgbr0HgN4weW2hZPE2B7st41gWREhS_TrNu4YWkZ",
        },
        {
          name: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZDNbsIwEIRfJfLdSZw%2FggWRUtKqFJAQVEXiZowhRsk62E5UePqG9EIvvay00s43OzMxrK4amre2hI24tsJYp%2BiHBGalgikqrW0M9bxKnSW4teRaGXWyCioJwuWq9hIeE57EYzw%2BxgGOCDvhlJxG%2BHgUJAlTX6Qk9B42AXK%2BhDYDNnB95MyLKZr7%2B5EcyzvBt5ysq4%2Fta7PFl81usdJNcShWOe6ie75QL4uO3d6u3exQRpflqHtn5TXZ9QxjWjEHYxnYHusHESY%2B9sNPEtIgpiR1AxLvkfNdV2DokHaKWg1UMSMNBVYLQy2n23y1pP1XtNHKKq4qlE0e13Qw0E%2F6%2F%2BXMGKEf1aFsLeE8UwCC24n3xMp%2Bt7%2BtZz8%3D&RelayState=I0Z7i9iz1-yA1PlJSEpS-jRWKMrpDbDMA-v4zAKoBKvayFqvCbh4jL7vHahq6W",
        },
        {
          name: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZDNbsIwEIRfJfI9xM4fwYJIqLQiKqiFpqD2UhnjgEuypl5HKjx9A73QSy8rjTTzjXaGKJr6yMet28NSfbUKnTfpjgbhtIER2Tt3RB4Etdlp6DVaWoOmcgZqDaonTROkMmEyTQb%2BYJuEfsxE5Wes6vvbrWJplFGVsSi41ITEWymLV2zYo8QrJiNSUKPLB5dkppn1x5vp4mnxdv50h8e1Xc3Lj5NfbeAgqrSM6Wo9BSeKAW5qutTn%2B%2Fo16hiIrSoAnQDXYWkY%2B4z6NCpZzCnlYVeUJu%2FE%2B25qQH79dkRaC9wI1MhBNAq5k%2FxlPJ%2FxzsyP1jgjTU3y4cXNrwX2Jv9%2FXCAqe5mO5M8adncGQEk3DG5Y%2Ba%2F6u3r%2BAw%3D%3D&RelayState=I0oiTFt58omL7AbHQOQYzjtkKWrVMT_y-fbnkaf6T40VWHntaI9sbl0RizElU3",
        },
        {
          name: "MongooseJS Essentials - Learn MongoDB for Node.js",
          src: "https://www.udemy.com/certificate/UC-IM34X7GG/",
        },
        {
          name: "Coding and testing an authentication API [NodeJs + Cypress]",
          src: "https://www.udemy.com/course/coding-and-testing-an-authentication-api-nodejs-cypress/",
        },
        {
          name: "React Native - The Practical Guide[2022]",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZBfa8IwFMW%2FSsl72qT%2FbEMtVGVQUJQpG%2FoiIcY2mCYuSbe6T7%2FqXtzLXi5cuOd37jmFpZ28kqp3rXrlHz23zluMQyjqhFZT0Dp3tSQIpG6E8jvBjLb67LSSQnGf6S5IWYJZmuQwPyUhjDE9wwyfJ%2FB04jiNMsQzHAV3mxB4b9zYBzb0EfDqxRTUaBZfjHyZu3repNthvWzfq9uwynUujp%2FQZAe6Pi6H236TTNwi322bYZ9%2FyYvs2%2B9qNjKs7XmtrKPKjVgUxhAjiKIdjkiUkxj5COMD8IZOKkseaaegN4poaoUlinbcEsfItlotyfgVuRrtNNMSlMX9mjwMzJP%2Bfzm1lpt7daDcCNXMtVKcuSJ4YpW%2F29%2FWyx8%3D&RelayState=I0B4krlFCtICg6SxOLhWAyxM9o9i_v-r8ZaO_LxyYP57tD9TSgxY9wlkluhzAB",
        },
        {
          name: "Fastlane for React Native: Deploy your app autonomously!",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZBfa8IwFMW%2FSsl726QxtQYtaGVS2ETq2KgvkqWpBtobl6T78%2B1X3Yt72cuFC%2Ff8zj1n7kTfXfhy8Geo1PugnA%2FW49AgvDawQGfvL47HcWdOGqJeS2ucab2BToOKpOnjVDIiUzYLZw1LwgkRbZiRdho2jSIpzbDKCI2vNgkKXpR1N2wSYRSU6wUq8YYNVfEh60MlGQ7L%2Bvt83ArI4PXhtPLUmpo2Im0%2Bj12xYkUi37ZVvdtIWbaHvR4Zzg2qBOcF%2BBGLk0lIcIjpM6E8YZyyCE%2FJAQVffQeO39Iu0GCBG%2BG04yB65biXfL98euTjV%2FxijTfSdCifX6%2F5zcDe6f%2BXC%2BeUvVaH8p2GU2EAlPTz%2BI6V%2F25%2FW89%2FAA%3D%3D&RelayState=I0G5uRCvcYZRc50-IYyh_Nan8nWFgBt3roY3da6dw_lCB5C2cbNRYPGccIfZSi",
        },
        {
          name: "Master React Native Animations",
          src: "https://login.microsoftonline.com/6c51c659-9d52-41af-81f7-dde16380e813/saml2?SAMLRequest=fZBBb4JAEIX%2FCtn7Aguu1Y2SELWNjTRWWw%2Fetusia2GWMktD%2B%2BsL9mIvvUwyybzvzXszlFVZi7R1Bez0R6vRect%2BGJDOWJiTwrkaRRCU9mzAr4xqLNrcWSgNaF%2FZKhgrztSYT%2Bn0xCM6YjKnE5bf0dNJs3E8CfWExcFgExHvoBu8YiM%2FJN56OSfrsMi7lNJp1i7u28hALlNm4bl6fdJm%2F37UF0ZXD4dNV38W3TbjX2%2Br3SV73NdZVuJ3z0Bs9RrQSXA9NoxGlIU0jF9YLCIueOzHPDwSr6tKQHFNOydtA8JKNChAVhqFU2KfZhvRfyXqxjqrbEmS2XAtrgbNjf5%2FuUTUzVAdSbYGzgsLoJWbBTes5Hf723ryAw%3D%3D&RelayState=I0hfxA--9MuCFu2infaA1onQmUNeiSkZej1-EGVLxpvhxPM5ybERjMJSpMMlsz",
        },

        {
          name: "DEVELOPMENT, DESIGN AND ARCHITECTURE OF MODERN SOFTWARE SYSTEMS BASED ON SALESFORCE PLATFORM",
          src: "https://i.ibb.co/vS8QhC7/Screenshot-550.png",
        },
        {
          name: "API Testing with JavaScript and Cypress 10",
          src: "https://www.udemy.com/course/api-testing-with-javascript-and-cypress-10/",
        },
        {
          name: "CYPRESS | Step-by-Step for Beginners | Hands-On Training",
          src: "https://www.udemy.com/course/cypress-step-by-step-for-beginners-hands-on-training",
        },
        {
          name: "Cypress 10 Component Testing Tutorial",
          src: "https://www.udemy.com/course/cypress-10-component-testing-tutorial/",
        },
        {
          name: "Complete JavaScript Course For Beginners to Master - 2019",
          src: "https://www.udemy.com/certificate/UC-ba55b644-7dec-451c-9384-4431c9bf6c03/",
        },
        {
          name: "ExpressJS Fundamentals",
          src: "https://www.udemy.com/certificate/UC-617I2F70/",
        },
        {
          name: "MongoDB Essentials - Understand the Basics of MongoDB",
          src: "https://www.udemy.com/certificate/UC-MTY59VZL/",
        },
        {
          name: "Bootstrap 4 Quick Start: Code Modern Responsive Websites",
          src: "https://www.udemy.com/certificate/UC-5V4BPVZ8/",
        },
        {
          name: "Complete Regex Crash Course",
          src: "https://www.udemy.com/certificate/UC-K4B5RSON/",
        },
        {
          name: "Front End Libraries Project",
          src: "https://www.freecodecamp.org/certification/netbk13tu/Front-end-development-libraries",
        },
        {
          name: "JavaScript Algorithms and Data Structures",
          src: "https://www.freecodecamp.org/certification/netbk13tu/javascript-algorithms-and-data-structures",
        },
        {
          name: "Responsive Web Design",
          src: "https://www.freecodecamp.org/certification/netbk13tu/responsive-web-design",
        },
        {
          name: "SVG basics for beginners - concepts explained with examples",
          src: "https://www.udemy.com/certificate/UC-RDPOI4FO/",
        },
        {
          name: "Sass Workflow",
          src: "https://www.udemy.com/certificate/UC-PTE9G58U/",
        },
        {
          name: "npm - Mastering the Basics",
          src: "https://www.udemy.com/certificate/UC-SA3OZKHR/",
        },
        {
          name: "JavaScript Tutorial",
          src: "https://www.sololearn.com/Certificate/CT-BJWMJTKZ/pdf",
        },
        {
          name: "Learn Webpack 2 from scratch",
          src: "https://www.udemy.com/certificate/UC-F175FKFG/",
        },
        {
          name: "Regex Academy: An Introduction To Text Parsing Sorcery",
          src: "https://www.udemy.com/certificate/UC-TT8DPQU6/",
        },
      ];
      const experiences = [
        {
          company: "Pegasus Software Ltd.",
          period: "July 2025 - August 2026",
          position: "Senior Software Developer",
          project: "Building 2 online casinos and betting platforms as SPA.",
          responsibilities: [
            "Separated a Vue 3 Front-end from a nested PHP codebase to support a standalone SPA architecture.",
            "Integrated live chat tools to improve in-product communication workflows.",
            "Built end-to-end test coverage with Cypress and Playwright to improve release confidence.",
            "Replaced the feather-icons dependency with a custom icon package to simplify maintenance.",
            "Integrated Pusher into payment-related flows to support real-time application behavior.",
            "Set up pre-commit hooks for formatting and error checks to improve code consistency before merge.",
          ],
          technologies: [
            "Vue 3",
            "Vue 2",
            "Pinia",
            "Vite",
            "TypeScript",
            "Comm100",
            "Intercom",
            "Tailwind 4",
            "ESlint",
            "Prettier",
            "Cypress v14",
            "Playwright",
            "feather-icons",
            "SASS",
            "GitLab",
          ],
        },
        // {
        //   company: "Dream Dev",
        //   period: "March 2025 - April 2025",
        //   position: "Senior Software Developer",
        //   project:
        //     "SPA that allows users to create and chat with a person using AI.",
        //   responsibilities: [
        //     "Work on the FE part of the project",
        //     "Create reusable components",
        //     "Create landing pages ",
        //     "Working with SCSS and bootstrap",
        //   ],
        //   technologies: ["Vue JS", "SCSS", "Bootstrap"],
        // },
        {
          company: "Hades Defense Systems",
          period: "July 2023 - May 2024",
          position: "Senior Software Developer",
          project:
            "Building management and operation software for drones. Including real-time streaming, mission management and monitoring.",
          responsibilities: [
            "Built Front-end features for drone management software used for mission planning and operations.",
            "Wrote unit tests to improve code reliability and reduce regression risk.",
            "Used CSS Modules to maintain scoped, reusable styling across the application.",
            "Developed mission creation and editing workflows using maps and elevation data.",
          ],
          technologies: [
            "NextJS",
            "Redux",
            "React Router",
            "Iconify",
            "JSX",
            "Figma",
            "React Google Maps",
            "ESlint",
            "Datepicker",
            "ChartJS",
            "Prettier",
            "Axios",
            "JSON web token",
            "Jest",
            "SASS",
            "Vite",
            "React Query",
            "Hooks",
          ],
        },
        //#region Mentormate SUMMARY
        {
          company: "Mentormate",
          period: "July 2020 - May 2022",
          position: "Senior Software Developer",
          project: "Five different projects.",
          responsibilities: [
            "Worked as a Front-end Developer across five client projects, contributing to UI implementation and feature delivery.",
          ],
          technologies: [
            "React",
            "Redux",
            "React Query",
            "React Router",
            "JSX",
            "Vite",
            "Context API",
            "Hooks",
            "TypeScript",
            "Vue JS",
            "Vuex",
            "Vue Router",
            "Figma",
            "Azure",
            "Swagger",
            "Chakra UI",
            "Axios",
            "Formik",
            "react-datepicker",
            "SCSS",
            "date-fns Lodash",
            "Bootstrap 4",
            "moment.js",
            "HTML5 Local Storage",
            "Chai",
            "Mocha Testing",
            "Playwright",
            "AWS",
          ],
        },
        //#endregion
        //#region Mentormate by projects
        // {
        //   company: "Mentormate",
        //   period: "January 2022 - May 2022",
        //   position: "Senior Software Developer",
        //   project:
        //     "There where two projects for the biggest and world known Basketball Association. The first project was a CMS Project for the clients (basketball teams) to manage there own website pages - add, remove, arrange different elements in every page. The second project was to work on all websites for all Basketball teams. Managing the websites, make changes to them, deal with adds, merchandise.",
        //   responsibilities: [
        //     "Work on the FE part of both projects",
        //     "Writing unit test for components and logical JS files",
        //     "Using CSS modules",
        //     "Doing tasks on CMS webside that will send data to the FE websites of all NBA teams and working on the FE tasks on that project as well",
        //     "Handling embed codes and retrieving info from them to generate different components",
        //   ],
        //   technologies: [
        //     "React (with ContextAPI and Hooks)",
        //     "Redux",
        //     "React - Router",
        //     "JSX",
        //     "Figma",
        //     "Azure",
        //     "Swagger",
        //     "SCSS",
        //     "Chakra UI",
        //     "Axios",
        //     "date-fns",
        //     "Formik",
        //     "react-datepicker",
        //     "Lodash",
        //   ],
        // },
        // {
        //   company: "Mentormate",
        //   period: "October 2021 - November 2021",
        //   position: "Senior Software Developer",
        //   project:
        //     "The project intended to create a new interface for an analytics flagship software product. The old version of the app was a desktop one, the new one is a web-based app. The main priority was to improve the user experience for the parts of the application that are used by users most frequently. The application's aim is to provide in-depth analysis and simulation of electricity markets, based on numerous data items that represent real-life entities like energy sources (power stations, renewables, and many more), energy consumption (electricity load) and weather variability, prices, financial instruments, portfolio management and resource planning. ",
        //   responsibilities: [
        //     "Created, edited, deleted and managed data and graphs for solar panels and windmill. Worked with items history data",
        //     "Gave the user option to see and edit data",
        //     "Uploaded and downloaded data for items in Excel format",
        //     "Showed items location on the map",
        //   ],
        //   technologies: [
        //     "React",
        //     "Redux",
        //     "React - Router",
        //     "React (with Hooks)",
        //     "JSX",
        //     "Figma",
        //     "Azure",
        //     "Swagger",
        //     "SCSS",
        //     "Chakra UI",
        //     "Axios",
        //     "date-fns",
        //     "Formik",
        //     "Lodash",
        //     "react-datepicker",
        //   ],
        // },
        // {
        //   company: "Mentormate",
        //   period: "July 2021 - September 2021",
        //   position: "Senior Software Developer",
        //   project:
        //     "The client is creating a blood sample testing device that will accept a cartridge containing a blood sample, and provide the user with options for performing automated tests on the sample. MentorMate assisted with the software development. This was a staff augmentation project.",
        //   responsibilities: [
        //     "Created a new admin website Managed ",
        //     "and edited drugs and their info Wrote ",
        //     "Unit tests with Mocha and Chai",
        //   ],
        //   technologies: [
        //     "VueJS",
        //     "Vuex",
        //     "Vue-Router",
        //     "SCSS",
        //     "Lodash",
        //     "Axios",
        //     "Bootstrap 4",
        //     "Mocha Testing",
        //     "moment JS",
        //     "Chai",
        //   ],
        // },
        // {
        //   company: "Mentormate",
        //   period: "February 2021 - June 2021",
        //   position: "Senior Software Developer",
        //   project:
        //     "A highly customizable idea-sharing platform, tailored to fit the needs of our client's clients. Svetozar's work is concentrated on the FE implementation of the product and to provide not only quality but well-tested solutions as well.",
        //   responsibilities: [
        //     "Created a new admin website",
        //     "Rewrote and maintained one of their old websites",
        //     "Used different routing for different user roles",
        //     "Worked on cross-platform",
        //     "E2E testing with Playwright",
        //   ],
        //   technologies: [
        //     "React",
        //     "TypeScript",
        //     "React (with Hooks)",
        //     "Redux",
        //     "React - Router",
        //     "JSX",
        //     "SCSS",
        //     "Local Storage",
        //     "Playwright",
        //   ],
        // },
        // {
        //   company: "Mentormate",
        //   period: "July 2020 - January 2021",
        //   position: "Senior Software Developer",
        //   project:
        //     "Web application that helps people with diabetes to check their readings using a glucometer, upload them, and see them through in this web application. The web app is based on the existing website but is written with the latest ReactJS version at the time. Svetozar's work was concentrated on the FE implementation of the product.",
        //   responsibilities: [
        //     "Created new React app",
        //     "Worked on Website with accessibility features",
        //     "Used of different routing for different user roles",
        //     "Made demos to the client with the new features every couple of weeks",
        //   ],
        //   technologies: [
        //     "React",
        //     "React (with Hooks)",
        //     "JSX",
        //     "SCSS",
        //     "Local Storage",
        //     "Swagger",
        //     "AWS",
        //   ],
        // },
        // {
        //   company: "Price International",
        //   period: "June 2020 - July 2020",
        //   position: "Front-end Developer",
        //   project: "SPA application that manages Mobile companies.",
        //   responsibilities: [
        //     "Create new Vue JS project",
        //     "Create reusable components",
        //     "Usage of Vuex",
        //     "Usage of routing",
        //   ],
        //   technologies: ["VueJS", "Vuex", "CSS3", "SASS/LESS"],
        // },
        //#endregion
        {
          company: "1 ForFit",
          period: "October 2019 - April 2020",
          position: "Front-end Developer",
          project:
            "Websites for generating diets. Svetozar's work was concentrated on the FE implementation of the product.",
          responsibilities: [
            "Started development of a new Vue.js single-page application.",
            "Built SASS-based animations to reduce reliance on JavaScript for visual effects.",
            "Optimized legacy functions to improve Front-end performance.",
            "Implemented routing to support SPA navigation",
          ],
          technologies: [
            "Vanilla JS",
            "VueJS",
            "Vuex",
            "CSS3",
            "CSS Animations",
            "SASS/LESS",
          ],
        },
        {
          company: "EGT",
          period: "April 2018 - October 2019",
          position: "Software Developer",
          project:
            "Responsive online casino games that work on all devices and browsers. Svetozar's work was concentrated on the FE implementation of the product.",
          responsibilities: [
            "Developed new online games for browser-based casino products.",
            "Built new gameplay features across multiple titles.",
            "Ensured games worked reliably across devices and browsers.",
            "Rewrote legacy games in Vue.js to modernize the front end.",
          ],
          technologies: [
            "Vanilla JS",
            "VueJS",
            "Vuex",
            "CSS3",
            "CSS Animations",
            "SASS/LESS",
          ],
        },
        {
          company: "DB Office",
          period: "September 2017 - April 2018",
          position: "Software Developer",
          project:
            "Create bot to scrape websites, create offers for clients and send them.",
          responsibilities: [
            "Learned UBot Studio to support web scraping and automation work.",
            "Reviewed an existing bot codebase to understand prior implementation.",
            "Built a new bot that automated workflows across four websites.",
          ],
          technologies: ["Vanilla JS", "UbotStudio"],
        },
      ];

      // --- DOM Elements ---
      const coreSkillsHolder = document.getElementById("core-skills-holder");
      const additionalSkillsHolder = document.getElementById(
        "additional-skills-holder",
      );
      const certificatesHolder = document.getElementById("certificates-holder");
      const jobsHolder = document.getElementById("jobs-holder");
      const educationHolder = document.getElementById("education-holder");
      const bodyEl = document.body; // Use body directly
      const sections = document.getElementsByClassName("section");
      const navButtons = document.querySelectorAll(".buttons-hodler .btn");

      // --- Functions ---

      // Populate Skills
      function populateSkills(skills, holder) {
        holder.innerHTML = ""; // Clear existing
        skills.forEach((skill) => {
          const li = document.createElement("li");
          const span = document.createElement("span"); // Wrap skill in span for styling
          span.textContent = skill;
          li.appendChild(span);
          holder.appendChild(li);
        });
      }

      // Populate Certificates
      function populateCertificates() {
        certificatesHolder.innerHTML = ""; // Clear existing
        certificates.forEach((course) => {
          const container = document.createElement("div"); // Container for each cert
          container.style.marginBottom = "1.5rem"; // Add space between certs

          const h4 = document.createElement("h4");
          h4.textContent = course.name;
          container.appendChild(h4);

          const anchor = document.createElement("a");
          anchor.className = "certf-anchor";
          anchor.href = course.src;
          anchor.textContent = "View Certificate";
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer"; // Security best practice
          container.appendChild(anchor);

          certificatesHolder.appendChild(container);
        });
      }

      // Populate Experience
      function populateExperience() {
        jobsHolder.innerHTML = ""; // Clear existing
        const projectStr = "Project: ";
        const responsibilitiesStr = "Responsibilities:";
        const technologiesStr = "Technologies Used:";

        experiences.forEach((experience, index) => {
          const entryDiv = document.createElement("div");
          entryDiv.className = "job-entry"; // Card container

          // Header part
          const headerDiv = document.createElement("div");
          headerDiv.className = "job-header";
          const company = document.createElement("h4");
          company.textContent = experience.company;
          const period = document.createElement("p");
          period.textContent = experience.period;
          const position = document.createElement("span");
          position.className = "position";
          position.textContent = experience.position;
          headerDiv.appendChild(company);
          headerDiv.appendChild(period);
          headerDiv.appendChild(position);
          entryDiv.appendChild(headerDiv);

          // Project description
          const projectHolder = document.createElement("div");
          const projectWord = document.createElement("b");
          projectWord.textContent = projectStr;
          projectHolder.appendChild(projectWord);
          const projectDesc = document.createElement("span");
          projectDesc.textContent = experience.project;
          projectHolder.appendChild(projectDesc);
          entryDiv.appendChild(projectHolder);

          // Responsibilities
          const responsibilitiesTitle = document.createElement("span");
          responsibilitiesTitle.className = "job-section-title";
          responsibilitiesTitle.textContent = responsibilitiesStr;
          entryDiv.appendChild(responsibilitiesTitle);

          const responsibilitiesUl = document.createElement("ul");
          experience.responsibilities.forEach((resp) => {
            const li = document.createElement("li");
            li.textContent = resp.trim(); // Trim whitespace
            responsibilitiesUl.appendChild(li);
          });
          entryDiv.appendChild(responsibilitiesUl);

          // Technologies
          const technologiesTitle = document.createElement("span");
          technologiesTitle.className = "job-section-title";
          technologiesTitle.textContent = technologiesStr;
          entryDiv.appendChild(technologiesTitle);

          const technologiesUl = document.createElement("ul");
          technologiesUl.className = "technologies-list"; // Class for tag styling
          experience.technologies.forEach((tech) => {
            const li = document.createElement("li");
            li.textContent = tech;
            technologiesUl.appendChild(li);
          });
          entryDiv.appendChild(technologiesUl);

          jobsHolder.appendChild(entryDiv);

          // No need for <hr> between jobs if using cards
        });
      }

      // Handle Section Change
      const onInfoChange = (elID) => {
        // Hide all sections
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove("show");
        }
        // Remove active class from all buttons
        navButtons.forEach((btn) => btn.classList.remove("active"));

        // Show the target section
        const targetSection = document.getElementById(elID);
        if (targetSection) {
          targetSection.classList.add("show");
        }

        // Add active class to the clicked button
        const activeButton = document.querySelector(
          `.btn[onclick="onInfoChange('${elID}')"]`,
        );
        if (activeButton) {
          activeButton.classList.add("active");
        }
      };

      // Handle Theme Change
      const onThemeChange = () => {
        bodyEl.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          bodyEl.classList.contains("dark") ? "dark" : "light",
        );
      };

      // Initialize theme based on localStorage or system preference (optional)
      function initializeTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === null) {
          return;
        }
        if (savedTheme === "dark") {
          bodyEl.classList.add("dark");
        } else {
          bodyEl.classList.remove("dark");
        }
      }

      // --- Initialization ---
      document.addEventListener("DOMContentLoaded", () => {
        initializeTheme(); // Set initial theme
        populateExperience();
        populateSkills(coreSkills, coreSkillsHolder);
        populateSkills(additionalSkills, additionalSkillsHolder);
        populateCertificates();

        // Show the initial section (e.g., Work Experience) and set its button active
        onInfoChange("jobs-section");
      });
    
