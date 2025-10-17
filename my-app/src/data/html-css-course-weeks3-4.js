export const week3Layouts = {
  id: "week-3-layouts",
  title: "Week 3: Layouts and Positioning",
  duration: "1 week",
  level: "Beginner",
  isLocked: false,
  progress: 0,
  topics: [
    {
      id: "flexbox",
      title: "CSS Flexbox Layout",
      duration: "2 hours",
      difficulty: "Beginner",
      description: "Master Flexbox for creating flexible and responsive layouts.",
      keyConcepts: [
        "Flex Container and Flex Items",
        "Flex Direction and Wrapping",
        "Justify Content and Align Items",
        "Flex Grow, Shrink, and Basis"
      ],
      mindMap: {
        id: "flexbox-root",
        title: "CSS Flexbox",
        description: "One-dimensional layout method",
        detailedDescription: "Flexbox is a powerful layout method that allows you to arrange items in a container with flexible sizing and alignment. It's perfect for responsive designs.",
        children: [
          {
            id: "flex-container",
            title: "Flex Container",
            description: "Parent element with display: flex",
            examples: ["display: flex", "flex-direction", "flex-wrap", "justify-content"]
          },
          {
            id: "flex-items",
            title: "Flex Items",
            description: "Child elements of flex container",
            examples: ["flex-grow", "flex-shrink", "flex-basis", "align-self"]
          },
          {
            id: "alignment",
            title: "Alignment",
            description: "Controlling item positioning",
            examples: ["justify-content", "align-items", "align-content", "gap"]
          }
        ]
      },
      flowChart: [
        {
          id: "start",
          title: "Create Flex Container",
          description: "Set display: flex on parent element",
          type: "Setup",
          code: `.container {
    display: flex;
}`
        },
        {
          id: "direction",
          title: "Set Flex Direction",
          description: "Choose row or column layout",
          type: "Direction",
          code: `.container {
    display: flex;
    flex-direction: row; /* or column */
}`
        },
        {
          id: "alignment",
          title: "Align Items",
          description: "Control alignment along main and cross axes",
          type: "Alignment",
          code: `.container {
    display: flex;
    justify-content: center; /* main axis */
    align-items: center; /* cross axis */
}`
        },
        {
          id: "flex-properties",
          title: "Set Flex Properties",
          description: "Control how items grow and shrink",
          type: "Flexibility",
          code: `.item {
    flex: 1; /* grow shrink basis */
}`
        }
      ],
      codeExamples: [
        {
          title: "Basic Flexbox Layout",
          language: "css",
          code: `/* Flex Container */
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border: 2px solid #333;
}

/* Flex Items */
.flex-item {
    flex: 1;
    padding: 20px;
    background-color: lightblue;
    text-align: center;
}

/* Specific flex values */
.item-1 { flex: 2; } /* Takes twice the space */
.item-2 { flex: 1; } /* Takes normal space */
.item-3 { flex: 0 0 200px; } /* Fixed width of 200px */`,
          explanation: "This example shows a basic flexbox layout with three items. The container uses justify-content: space-between to distribute items evenly, and items have different flex values to control their sizing.",
          interactive: true,
          editable: true
        },
        {
          title: "Flexbox Navigation",
          language: "css",
          code: `/* Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.nav-links a:hover {
    background-color: #555;
}`,
          explanation: "This navigation example uses flexbox to create a responsive navbar with logo on the left and navigation links on the right, with proper spacing and hover effects.",
          interactive: true
        }
      ],
      practiceExercises: [
        {
          title: "Create a Flexbox Layout",
          description: "Build a responsive layout using flexbox with a header, main content area, and sidebar.",
          difficulty: "Beginner",
          requirements: [
            "Create a flex container for the main layout",
            "Use flex properties to control item sizing",
            "Implement responsive behavior with flex-wrap",
            "Add proper spacing and alignment"
          ]
        }
      ]
    },
    {
      id: "css-grid",
      title: "CSS Grid Layout",
      duration: "2 hours",
      difficulty: "Beginner",
      description: "Learn CSS Grid for creating complex two-dimensional layouts.",
      keyConcepts: [
        "Grid Container and Grid Items",
        "Grid Template Columns and Rows",
        "Grid Areas and Line Names",
        "Grid Gap and Alignment"
      ],
      mindMap: {
        id: "grid-root",
        title: "CSS Grid",
        description: "Two-dimensional layout system",
        detailedDescription: "CSS Grid is a powerful two-dimensional layout system that allows you to create complex layouts with rows and columns. It's perfect for page layouts and component design.",
        children: [
          {
            id: "grid-container",
            title: "Grid Container",
            description: "Parent element with display: grid",
            examples: ["display: grid", "grid-template-columns", "grid-template-rows", "gap"]
          },
          {
            id: "grid-items",
            title: "Grid Items",
            description: "Child elements positioned in grid",
            examples: ["grid-column", "grid-row", "grid-area", "justify-self"]
          },
          {
            id: "grid-areas",
            title: "Grid Areas",
            description: "Named grid areas for layout",
            examples: ["grid-template-areas", "grid-area", "Named lines", "Implicit grid"]
          }
        ]
      },
      flowChart: [
        {
          id: "start",
          title: "Create Grid Container",
          description: "Set display: grid on parent element",
          type: "Setup",
          code: `.grid-container {
    display: grid;
}`
        },
        {
          id: "define-grid",
          title: "Define Grid Structure",
          description: "Set up columns and rows",
          type: "Structure",
          code: `.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
}`
        },
        {
          id: "position-items",
          title: "Position Grid Items",
          description: "Place items in specific grid areas",
          type: "Positioning",
          code: `.header { grid-column: 1 / -1; }
.sidebar { grid-column: 1; }
.main { grid-column: 2; }`
        },
        {
          id: "responsive-grid",
          title: "Make Responsive",
          description: "Use media queries for different screen sizes",
          type: "Responsive"
        }
      ],
      codeExamples: [
        {
          title: "Basic Grid Layout",
          language: "css",
          code: `/* Grid Container */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    height: 100vh;
    padding: 20px;
}

/* Grid Items */
.header {
    grid-column: 1 / -1; /* Span all columns */
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

.sidebar {
    background-color: #f0f0f0;
    padding: 1rem;
}

.main-content {
    background-color: white;
    padding: 1rem;
}

.footer {
    grid-column: 1 / -1; /* Span all columns */
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}`,
          explanation: "This example creates a classic three-column layout with header and footer spanning the full width. The main content takes up twice the space of the sidebar.",
          interactive: true,
          editable: true
        },
        {
          title: "Grid Areas Layout",
          language: "css",
          code: `/* Grid with Named Areas */
.layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Responsive Grid */
@media (max-width: 768px) {
    .layout {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
}`,
          explanation: "This example uses named grid areas to create a clear layout structure. The responsive design stacks elements vertically on smaller screens.",
          interactive: true
        }
      ],
      practiceExercises: [
        {
          title: "Create a Grid Layout",
          description: "Build a complex layout using CSS Grid with multiple sections and responsive behavior.",
          difficulty: "Beginner",
          requirements: [
            "Create a grid container with multiple columns and rows",
            "Use grid areas to define layout sections",
            "Implement responsive design with media queries",
            "Add proper spacing and alignment"
          ]
        }
      ]
    }
  ]
}

export const week4Responsive = {
  id: "week-4-responsive",
  title: "Week 4: Responsive Design and Final Project",
  duration: "1 week",
  level: "Beginner",
  isLocked: false,
  progress: 0,
  topics: [
    {
      id: "responsive-design",
      title: "Responsive Design Principles",
      duration: "2 hours",
      difficulty: "Beginner",
      description: "Learn how to create websites that work on all devices using responsive design techniques.",
      keyConcepts: [
        "Mobile-First Design Approach",
        "Media Queries and Breakpoints",
        "Flexible Images and Typography",
        "Viewport Meta Tag"
      ],
      mindMap: {
        id: "responsive-root",
        title: "Responsive Design",
        description: "Creating adaptable web layouts",
        detailedDescription: "Responsive design ensures your website looks and works well on all devices, from mobile phones to desktop computers. It uses flexible layouts, images, and CSS media queries.",
        children: [
          {
            id: "mobile-first",
            title: "Mobile-First",
            description: "Design for mobile devices first",
            examples: ["Start with mobile layout", "Progressive enhancement", "Touch-friendly interfaces"]
          },
          {
            id: "media-queries",
            title: "Media Queries",
            description: "CSS rules for different screen sizes",
            examples: ["@media (min-width: 768px)", "Breakpoints", "Device-specific styles"]
          },
          {
            id: "flexible-content",
            title: "Flexible Content",
            description: "Content that adapts to screen size",
            examples: ["Fluid images", "Responsive typography", "Flexible layouts"]
          }
        ]
      },
      flowChart: [
        {
          id: "start",
          title: "Plan Mobile Layout",
          description: "Design for smallest screen first",
          type: "Planning"
        },
        {
          id: "add-viewport",
          title: "Add Viewport Meta Tag",
          description: "Ensure proper mobile rendering",
          type: "Setup",
          code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        },
        {
          id: "create-breakpoints",
          title: "Create Breakpoints",
          description: "Define screen size breakpoints",
          type: "Structure",
          code: `/* Mobile first */
.container { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { width: 1200px; }
}`
        },
        {
          id: "test-responsive",
          title: "Test on Devices",
          description: "Verify layout works on different screens",
          type: "Testing"
        }
      ],
      codeExamples: [
        {
          title: "Responsive Navigation",
          language: "css",
          code: `/* Mobile Navigation */
.navbar {
    display: flex;
    flex-direction: column;
    background: #333;
    color: white;
}

.nav-links {
    display: none; /* Hidden on mobile */
    flex-direction: column;
    width: 100%;
}

.nav-links.active {
    display: flex;
}

.menu-toggle {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
}

/* Tablet and Desktop */
@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-links {
        display: flex;
        flex-direction: row;
        width: auto;
    }
    
    .menu-toggle {
        display: none;
    }
}`,
          explanation: "This responsive navigation starts with a mobile-first approach, hiding the menu on small screens and showing it on larger screens. The menu toggle button is only visible on mobile.",
          interactive: true,
          editable: true
        },
        {
          title: "Responsive Grid System",
          language: "css",
          code: `/* Mobile First Grid */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        padding: 1.5rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        padding: 2rem;
    }
}

/* Responsive Images */
img {
    max-width: 100%;
    height: auto;
    display: block;
}`,
          explanation: "This grid system starts with a single column on mobile, expands to two columns on tablets, and three columns on desktop. Images are made responsive with max-width: 100%.",
          interactive: true
        },
        {
          title: "Responsive Typography",
          language: "css",
          code: `/* Mobile Typography */
body {
    font-size: 16px;
    line-height: 1.5;
}

h1 { font-size: 1.5rem; }
h2 { font-size: 1.25rem; }
h3 { font-size: 1.125rem; }

/* Tablet Typography */
@media (min-width: 768px) {
    body { font-size: 18px; }
    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
    h3 { font-size: 1.25rem; }
}

/* Desktop Typography */
@media (min-width: 1024px) {
    body { font-size: 20px; }
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.5rem; }
}`,
          explanation: "Responsive typography scales font sizes based on screen size. This ensures text is readable on all devices while maintaining proper hierarchy.",
          interactive: true
        }
      ],
      practiceExercises: [
        {
          title: "Create Responsive Layout",
          description: "Build a responsive website that works on mobile, tablet, and desktop devices.",
          difficulty: "Beginner",
          requirements: [
            "Start with mobile-first design",
            "Add appropriate breakpoints",
            "Make images and text responsive",
            "Test on different screen sizes"
          ]
        }
      ]
    },
    {
      id: "final-project",
      title: "Final Project: Personal Portfolio",
      duration: "2 hours",
      difficulty: "Beginner",
      description: "Create a complete responsive portfolio website showcasing your HTML and CSS skills.",
      keyConcepts: [
        "Complete Website Structure",
        "Responsive Design Implementation",
        "CSS Grid and Flexbox Layout",
        "Professional Styling and Typography"
      ],
      project: {
        title: "Personal Portfolio Website",
        description: "Build a complete responsive portfolio website that showcases your skills and projects.",
        requirements: [
          "Semantic HTML structure with proper headings",
          "Responsive design that works on all devices",
          "CSS Grid or Flexbox for layout",
          "Professional styling with consistent typography",
          "Navigation menu with smooth scrolling",
          "Contact form with proper form elements",
          "Project showcase section",
          "About section with your information",
          "Footer with social media links"
        ],
        deliverables: [
          "Complete HTML file with semantic structure",
          "CSS file with responsive styles",
          "Images and assets folder",
          "README file with project description",
          "Live demo or screenshots"
        ],
        evaluation: [
          "HTML structure and semantics (25%)",
          "CSS styling and layout (25%)",
          "Responsive design (25%)",
          "Code quality and organization (25%)"
        ]
      },
      codeExamples: [
        {
          title: "Portfolio HTML Structure",
          language: "html",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <div class="nav-brand">
                <h1>Your Name</h1>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <h2>Welcome to My Portfolio</h2>
            <p>I'm a web developer passionate about creating amazing digital experiences.</p>
            <a href="#projects" class="cta-button">View My Work</a>
        </section>

        <section id="about" class="about">
            <h2>About Me</h2>
            <p>Your bio and skills description here...</p>
        </section>

        <section id="projects" class="projects">
            <h2>My Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <h3>Project 1</h3>
                    <p>Project description...</p>
                    <a href="#" class="project-link">View Project</a>
                </div>
                <!-- More project cards -->
            </div>
        </section>

        <section id="contact" class="contact">
            <h2>Get In Touch</h2>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <div class="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
        </div>
    </footer>
</body>
</html>`,
          explanation: "This HTML structure provides a complete foundation for a portfolio website with semantic elements, proper navigation, and all necessary sections.",
          interactive: true,
          editable: true
        },
        {
          title: "Portfolio CSS Styles",
          language: "css",
          code: `/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #007bff;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 8rem 2rem 4rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    background: #fff;
    color: #333;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .hero p {
        font-size: 1rem;
    }
}`,
          explanation: "This CSS provides a modern, responsive design for the portfolio with a fixed navigation, gradient hero section, and mobile-friendly styles.",
          interactive: true
        }
      ],
      practiceExercises: [
        {
          title: "Complete Portfolio Project",
          description: "Build your complete portfolio website using all the skills learned in this course.",
          difficulty: "Beginner",
          requirements: [
            "Create semantic HTML structure",
            "Implement responsive CSS design",
            "Use CSS Grid or Flexbox for layout",
            "Add smooth navigation and interactions",
            "Include a contact form",
            "Make it mobile-friendly",
            "Test on different devices"
          ]
        }
      ]
    }
  ]
}
