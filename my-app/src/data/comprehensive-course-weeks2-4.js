export const weeks2to4 = {
  week2: {
    id: "week-2",
    title: "Week 2: CSS Fundamentals",
    duration: "1 week",
    level: "Beginner",
    description: "Master CSS styling and layout techniques",
    topics: [
      {
        id: "css-intro",
        title: "Introduction to CSS",
        duration: "2 hours",
        difficulty: "Beginner",
        description: "Learn the fundamentals of CSS and how to apply styles to HTML elements",
        content: {
          overview: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and more.",
          keyConcepts: [
            "CSS Syntax and Rules",
            "Selectors (Element, Class, ID)",
            "Properties and Values",
            "CSS Box Model",
            "Inline, Internal, and External CSS"
          ],
          detailedContent: `
            <h3>Introduction to CSS</h3>
            <p>CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and more.</p>
            
            <h4>What CSS Does:</h4>
            <ul>
              <li><strong>Styling:</strong> Colors, fonts, sizes, backgrounds</li>
              <li><strong>Layout:</strong> Positioning, spacing, alignment</li>
              <li><strong>Responsiveness:</strong> Adapting to different screen sizes</li>
              <li><strong>Animations:</strong> Transitions and effects</li>
            </ul>
            
            <h4>CSS Syntax:</h4>
            <pre>
selector {
    property: value;
    another-property: another-value;
}
            </pre>
            
            <h4>Three Ways to Add CSS:</h4>
            <ol>
              <li><strong>Inline:</strong> Style attribute in HTML elements</li>
              <li><strong>Internal:</strong> &lt;style&gt; tag in HTML head</li>
              <li><strong>External:</strong> Separate .css file linked to HTML</li>
            </ol>
          `,
          codeExamples: [
            {
              title: "Basic CSS Syntax",
              code: `/* This is a CSS comment */

/* Element selector */
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}

/* Class selector */
.highlight {
    background-color: yellow;
    padding: 10px;
    border: 2px solid orange;
}

/* ID selector */
#main-title {
    color: red;
    font-weight: bold;
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}`,
              explanation: "This example shows basic CSS syntax with different types of selectors. Element selectors target HTML tags, class selectors use dots (.), and ID selectors use hash symbols (#)."
            }
          ],
          practiceExercises: [
            {
              title: "Style Your First Page",
              description: "Add CSS styling to your HTML bio page with colors, fonts, and spacing",
              requirements: [
                "Change the color of headings",
                "Add background colors to sections",
                "Adjust font sizes and families",
                "Add padding and margins to elements"
              ],
              starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Bio</title>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <h1>John Doe</h1>
    <p>Hi! I'm John, a passionate web developer.</p>
</body>
</html>`,
              solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Bio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        h1 {
            color: #333;
            font-size: 2.5em;
            text-align: center;
            background-color: #007bff;
            color: white;
            padding: 20px;
        }
        
        p {
            background-color: white;
            padding: 15px;
            border-left: 4px solid #007bff;
        }
    </style>
</head>
<body>
    <h1>John Doe</h1>
    <p>Hi! I'm John, a passionate web developer.</p>
</body>
</html>`
            }
          ]
        }
      }
    ]
  },
  week3: {
    id: "week-3",
    title: "Week 3: CSS Layouts and Positioning",
    duration: "1 week",
    level: "Beginner",
    description: "Learn modern CSS layout techniques with Flexbox and Grid",
    topics: [
      {
        id: "flexbox",
        title: "CSS Flexbox Layout",
        duration: "3 hours",
        difficulty: "Beginner",
        description: "Master Flexbox for creating flexible and responsive layouts",
        content: {
          overview: "Flexbox is a powerful layout method that allows you to arrange items in a container with flexible sizing and alignment. It's perfect for responsive designs.",
          keyConcepts: [
            "Flex Container and Flex Items",
            "Flex Direction and Wrapping",
            "Justify Content and Align Items",
            "Flex Grow, Shrink, and Basis"
          ],
          detailedContent: `
            <h3>CSS Flexbox Layout</h3>
            <p>Flexbox is a powerful layout method that allows you to arrange items in a container with flexible sizing and alignment. It's perfect for responsive designs.</p>
            
            <h4>Flexbox Basics:</h4>
            <ul>
              <li><strong>Flex Container:</strong> Parent element with display: flex</li>
              <li><strong>Flex Items:</strong> Direct children of flex container</li>
              <li><strong>Main Axis:</strong> Primary direction of flex items</li>
              <li><strong>Cross Axis:</strong> Perpendicular to main axis</li>
            </ul>
            
            <h4>Container Properties:</h4>
            <ul>
              <li><strong>flex-direction:</strong> row, column, row-reverse, column-reverse</li>
              <li><strong>flex-wrap:</strong> nowrap, wrap, wrap-reverse</li>
              <li><strong>justify-content:</strong> Align items on main axis</li>
              <li><strong>align-items:</strong> Align items on cross axis</li>
            </ul>
          `,
          codeExamples: [
            {
              title: "Basic Flexbox Layout",
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
              explanation: "This example shows a basic flexbox layout with three items. The container uses justify-content: space-between to distribute items evenly, and items have different flex values to control their sizing."
            }
          ],
          practiceExercises: [
            {
              title: "Create a Flexbox Layout",
              description: "Build a responsive layout using flexbox with a header, main content area, and sidebar",
              requirements: [
                "Create a flex container for the main layout",
                "Use flex properties to control item sizing",
                "Implement responsive behavior with flex-wrap",
                "Add proper spacing and alignment"
              ],
              starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Layout</title>
    <style>
        /* Add your flexbox styles here */
    </style>
</head>
<body>
    <div class="container">
        <header>Header</header>
        <div class="main-content">
            <main>Main Content</main>
            <aside>Sidebar</aside>
        </div>
        <footer>Footer</footer>
    </div>
</body>
</html>`,
              solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Layout</title>
    <style>
        .container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        
        header, footer {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        
        .main-content {
            display: flex;
            flex: 1;
        }
        
        main {
            flex: 2;
            background-color: #f0f0f0;
            padding: 1rem;
        }
        
        aside {
            flex: 1;
            background-color: #e0e0e0;
            padding: 1rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>Header</header>
        <div class="main-content">
            <main>Main Content</main>
            <aside>Sidebar</aside>
        </div>
        <footer>Footer</footer>
    </div>
</body>
</html>`
            }
          ]
        }
      }
    ]
  },
  week4: {
    id: "week-4",
    title: "Week 4: Responsive Design and Final Project",
    duration: "1 week",
    level: "Beginner",
    description: "Create responsive websites and build your final portfolio project",
    topics: [
      {
        id: "responsive-design",
        title: "Responsive Design Principles",
        duration: "3 hours",
        difficulty: "Beginner",
        description: "Learn how to create websites that work on all devices using responsive design techniques",
        content: {
          overview: "Responsive design ensures your website looks and works well on all devices, from mobile phones to desktop computers. It uses flexible layouts, images, and CSS media queries.",
          keyConcepts: [
            "Mobile-First Design Approach",
            "Media Queries and Breakpoints",
            "Flexible Images and Typography",
            "Viewport Meta Tag"
          ],
          detailedContent: `
            <h3>Responsive Design Principles</h3>
            <p>Responsive design ensures your website looks and works well on all devices, from mobile phones to desktop computers. It uses flexible layouts, images, and CSS media queries.</p>
            
            <h4>Mobile-First Approach:</h4>
            <ul>
              <li><strong>Start with mobile:</strong> Design for smallest screen first</li>
              <li><strong>Progressive enhancement:</strong> Add features for larger screens</li>
              <li><strong>Touch-friendly:</strong> Ensure buttons and links are easy to tap</li>
            </ul>
            
            <h4>Media Queries:</h4>
            <ul>
              <li><strong>Breakpoints:</strong> Specific screen sizes where design changes</li>
              <li><strong>Common breakpoints:</strong> 768px (tablet), 1024px (desktop)</li>
              <li><strong>Syntax:</strong> @media (min-width: 768px) { ... }</li>
            </ul>
          `,
          codeExamples: [
            {
              title: "Responsive Navigation",
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
              explanation: "This responsive navigation starts with a mobile-first approach, hiding the menu on small screens and showing it on larger screens. The menu toggle button is only visible on mobile."
            }
          ],
          practiceExercises: [
            {
              title: "Create Responsive Layout",
              description: "Build a responsive website that works on mobile, tablet, and desktop devices",
              requirements: [
                "Start with mobile-first design",
                "Add appropriate breakpoints",
                "Make images and text responsive",
                "Test on different screen sizes"
              ],
              starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Layout</title>
    <style>
        /* Add your responsive styles here */
    </style>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Welcome</h2>
        <p>This is a responsive website.</p>
    </main>
</body>
</html>`,
              solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Layout</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        
        header {
            background: #333;
            color: white;
            padding: 1rem;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            flex-direction: column;
        }
        
        nav li {
            margin: 0.5rem 0;
        }
        
        nav a {
            color: white;
            text-decoration: none;
        }
        
        main {
            padding: 2rem;
        }
        
        /* Tablet */
        @media (min-width: 768px) {
            nav ul {
                flex-direction: row;
                gap: 2rem;
            }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Welcome</h2>
        <p>This is a responsive website.</p>
    </main>
</body>
</html>`
            }
          ]
        }
      }
    ]
  }
}
