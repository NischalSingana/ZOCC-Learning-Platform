export const curriculumData = {
  title: "Web Development Learning Path",
  duration: "24 weeks",
  description: "Complete web development journey from beginner to advanced",
  modules: [
    {
      id: "module-1",
      title: "HTML & CSS Fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      isLocked: false,
      progress: 0,
      description: "Master the building blocks of web development with comprehensive HTML structure and CSS styling. Learn to create responsive, accessible websites from scratch.",
      totalLessons: 16,
      totalHours: 32,
      topics: [
        {
          id: "html-structure",
          title: "HTML Document Structure",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Learn the fundamental structure of HTML documents and essential elements.",
          keyConcepts: [
            "DOCTYPE Declaration",
            "HTML, Head, and Body Elements",
            "Meta Tags and Document Information",
            "Basic HTML Syntax"
          ],
          mindMap: {
            id: "root",
            title: "HTML Fundamentals",
            description: "Core concepts of HTML structure and elements",
            detailedDescription: "HTML (HyperText Markup Language) is the foundation of web development. It provides the structure and content for web pages using a system of tags and attributes.",
            children: [
              {
                id: "structure",
                title: "Document Structure",
                description: "Basic HTML document layout",
                examples: ["DOCTYPE declaration", "html, head, body tags", "meta tags"]
              },
              {
                id: "semantic",
                title: "Semantic Elements",
                description: "Meaningful HTML elements",
                examples: ["header, nav, main", "article, section", "aside, footer"]
              },
              {
                id: "forms",
                title: "Forms & Inputs",
                description: "User input collection",
                examples: ["input types", "validation", "form submission"]
              }
            ]
          },
          flowChart: [
            {
              id: "start",
              title: "Start Learning HTML",
              description: "Begin with understanding what HTML is and why it's important",
              type: "Introduction"
            },
            {
              id: "structure",
              title: "Learn Document Structure",
              description: "Understand the basic structure of an HTML document",
              type: "Concept",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`
            },
            {
              id: "elements",
              title: "Master HTML Elements",
              description: "Learn about different HTML elements and their purposes",
              type: "Practice",
              examples: [
                "Headings: h1, h2, h3, h4, h5, h6",
                "Text: p, span, strong, em",
                "Lists: ul, ol, li"
              ]
            },
            {
              id: "forms",
              title: "Create Forms",
              description: "Build interactive forms for user input",
              type: "Application",
              code: `<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <button type="submit">Submit</button>
</form>`
            }
          ],
          codeExamples: [
            {
              title: "Basic HTML Structure",
              language: "html",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Welcome to My Site</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <h2>Article Title</h2>
            <p>This is the main content of the article.</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`,
              explanation: "This example shows a complete HTML document with semantic elements including header, nav, main, article, and footer.",
              interactive: true,
              editable: true
            },
            {
              title: "HTML Form Example",
              language: "html",
              code: `<form action="/contact" method="post">
    <fieldset>
        <legend>Contact Information</legend>
        <div>
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
    </fieldset>
</form>`,
              explanation: "This form demonstrates proper form structure with labels, different input types, and validation attributes.",
              output: "A contact form with name, email, and message fields",
              interactive: true
            }
          ],
          practiceExercises: [
            {
              title: "Create a Personal Bio Page",
              description: "Build a simple HTML page with your personal information using semantic elements",
              difficulty: "Beginner"
            },
            {
              title: "Build a Contact Form",
              description: "Create a contact form with validation for name, email, and message fields",
              difficulty: "Intermediate"
            }
          ],
          project: {
            title: "Personal Portfolio Website",
            description: "Build a responsive portfolio using HTML and CSS",
            requirements: ["Semantic HTML", "CSS Grid/Flexbox", "Responsive Design"]
          },
          gitMission: {
            title: "Git Basics",
            description: "Learn version control fundamentals",
            tasks: ["Initialize repository", "First commit", "Basic branching"]
          }
        },
        {
          id: "css-basics",
          title: "CSS Styling & Layout",
          duration: "1 week",
          lessons: [
            {
              id: "css-selectors",
              title: "CSS Selectors & Properties",
              duration: "2 hours",
              type: "video",
              content: "Master CSS selectors and styling properties."
            },
            {
              id: "css-layout",
              title: "CSS Layout (Flexbox & Grid)",
              duration: "2.5 hours",
              type: "video",
              content: "Learn modern CSS layout techniques."
            }
          ],
          project: {
            title: "CSS Art Gallery",
            description: "Create artistic designs using pure CSS",
            requirements: ["CSS Animations", "Advanced Selectors", "Creative Layouts"]
          },
          gitMission: {
            title: "Git Workflow",
            description: "Practice branching and merging",
            tasks: ["Create feature branch", "Merge changes", "Resolve conflicts"]
          }
        }
      ]
    },
    {
      id: "module-2",
      title: "JavaScript Fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      isLocked: true,
      progress: 0,
      topics: [
        {
          id: "js-basics",
          title: "JavaScript Syntax & Variables",
          duration: "1 week",
          lessons: [
            {
              id: "js-intro",
              title: "JavaScript Basics",
              duration: "2 hours",
              type: "video",
              content: "Learn JavaScript syntax and data types."
            }
          ],
          project: {
            title: "Interactive Calculator",
            description: "Build a calculator with JavaScript",
            requirements: ["DOM Manipulation", "Event Handling", "Basic Logic"]
          },
          gitMission: {
            title: "Git Collaboration",
            description: "Learn to work with remote repositories",
            tasks: ["Clone repository", "Push changes", "Pull requests"]
          }
        }
      ]
    },
    {
      id: "module-3",
      title: "React Development",
      duration: "6 weeks",
      level: "Intermediate",
      isLocked: true,
      progress: 0,
      topics: [
        {
          id: "react-basics",
          title: "React Components & JSX",
          duration: "2 weeks",
          lessons: [
            {
              id: "react-intro",
              title: "Introduction to React",
              duration: "3 hours",
              type: "video",
              content: "Learn React fundamentals and component architecture."
            }
          ],
          project: {
            title: "Todo Application",
            description: "Build a full-featured todo app with React",
            requirements: ["Component State", "Props", "Event Handling"]
          },
          gitMission: {
            title: "Git Advanced",
            description: "Master advanced Git techniques",
            tasks: ["Rebasing", "Cherry-picking", "Git hooks"]
          }
        }
      ]
    },
    {
      id: "module-4",
      title: "Advanced React & State Management",
      duration: "4 weeks",
      level: "Intermediate",
      isLocked: true,
      progress: 0,
      topics: [
        {
          id: "react-hooks",
          title: "React Hooks & Context",
          duration: "2 weeks",
          lessons: [
            {
              id: "hooks-intro",
              title: "useState and useEffect",
              duration: "2.5 hours",
              type: "video",
              content: "Master React hooks for state and side effects."
            }
          ],
          project: {
            title: "E-commerce Frontend",
            description: "Build a shopping cart with React",
            requirements: ["State Management", "API Integration", "User Authentication"]
          },
          gitMission: {
            title: "CI/CD Pipeline",
            description: "Set up automated testing and deployment",
            tasks: ["GitHub Actions", "Automated testing", "Deployment pipeline"]
          }
        }
      ]
    },
    {
      id: "module-5",
      title: "TypeScript & Next.js",
      duration: "4 weeks",
      level: "Advanced",
      isLocked: true,
      progress: 0,
      topics: [
        {
          id: "typescript",
          title: "TypeScript with React",
          duration: "2 weeks",
          lessons: [
            {
              id: "ts-intro",
              title: "TypeScript Fundamentals",
              duration: "3 hours",
              type: "video",
              content: "Learn type safety and advanced TypeScript features."
            }
          ],
          project: {
            title: "Blog with Next.js",
            description: "Build a full-stack blog with Next.js and TypeScript",
            requirements: ["SSR/SSG", "SEO Optimization", "Type Safety"]
          },
          gitMission: {
            title: "Branch Protection",
            description: "Implement code review workflows",
            tasks: ["Branch rules", "Code reviews", "Automated checks"]
          }
        }
      ]
    },
    {
      id: "module-6",
      title: "Capstone Project",
      duration: "2 weeks",
      level: "Advanced",
      isLocked: true,
      progress: 0,
      topics: [
        {
          id: "capstone",
          title: "Full-Stack Application",
          duration: "2 weeks",
          lessons: [
            {
              id: "capstone-planning",
              title: "Project Planning & Architecture",
              duration: "4 hours",
              type: "video",
              content: "Plan and architect a full-stack application."
            }
          ],
          project: {
            title: "Full-Stack Next.js App",
            description: "Build a complete application with auth, payments, and deployment",
            requirements: ["Authentication", "Database", "Payment Integration", "Deployment"]
          },
          gitMission: {
            title: "Release Management",
            description: "Master production deployment",
            tasks: ["Release tags", "Production deployment", "Monitoring"]
          }
        }
      ]
    }
  ]
}

export const quizData = {
  "html-basics": [
    {
      id: 1,
      question: "What does HTML stand for?",
      type: "multiple-choice",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "HyperText Modern Language"
      ],
      correct: 0,
      explanation: "HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages."
    },
    {
      id: 2,
      question: "Which HTML element is used to create a hyperlink?",
      type: "multiple-choice",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1,
      explanation: "The <a> element is used to create hyperlinks in HTML."
    }
  ],
  "css-basics": [
    {
      id: 1,
      question: "What does CSS stand for?",
      type: "multiple-choice",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ],
      correct: 1,
      explanation: "CSS stands for Cascading Style Sheets, which is used to style HTML elements."
    }
  ]
}

export const practiceData = {
  "html-basics": {
    title: "HTML Practice Exercise",
    description: "Create a basic HTML structure with semantic elements",
    starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Page</title>
</head>
<body>
    <!-- Your HTML code here -->
</body>
</html>`,
    expectedOutput: "A properly structured HTML page with header, main, and footer elements",
    tests: [
      {
        description: "Should have a proper DOCTYPE declaration",
        test: "document.doctype !== null"
      },
      {
        description: "Should have a title element",
        test: "document.querySelector('title') !== null"
      }
    ]
  }
}
