export const htmlCssCourse = {
  title: "HTML & CSS Fundamentals",
  duration: "4 weeks",
  description: "Master the building blocks of web development with HTML structure and CSS styling",
  level: "Beginner",
  totalLessons: 16,
  totalHours: 32,
  modules: [
    {
      id: "week-1-html-basics",
      title: "Week 1: Introduction to HTML",
      duration: "1 week",
      level: "Beginner",
      isLocked: false,
      progress: 0,
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
            id: "html-structure-root",
            title: "HTML Document Structure",
            description: "Understanding the foundation of HTML documents",
            detailedDescription: "Every HTML document follows a specific structure that browsers understand. This includes the DOCTYPE declaration, html element, head section for metadata, and body section for content.",
            children: [
              {
                id: "doctype",
                title: "DOCTYPE Declaration",
                description: "Tells browser which HTML version to use",
                examples: ["<!DOCTYPE html>", "HTML5 standard", "Must be first line"]
              },
              {
                id: "html-element",
                title: "HTML Element",
                description: "Root element containing entire document",
                examples: ["<html lang='en'>", "Language attribute", "Contains head and body"]
              },
              {
                id: "head-section",
                title: "Head Section",
                description: "Contains metadata and document information",
                examples: ["<title>", "<meta>", "<link>", "<style>"]
              },
              {
                id: "body-section",
                title: "Body Section",
                description: "Contains visible page content",
                examples: ["<h1> to <h6>", "<p>", "<div>", "<span>"]
              }
            ]
          },
          flowChart: [
            {
              id: "start",
              title: "Start HTML Document",
              description: "Begin with DOCTYPE declaration",
              type: "Introduction",
              code: "<!DOCTYPE html>"
            },
            {
              id: "html-element",
              title: "Create HTML Element",
              description: "Add root html element with language attribute",
              type: "Structure",
              code: `<html lang="en">
<!-- Document content goes here -->
</html>`
            },
            {
              id: "head-section",
              title: "Add Head Section",
              description: "Include metadata and document information",
              type: "Metadata",
              code: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>`
            },
            {
              id: "body-section",
              title: "Add Body Content",
              description: "Include visible page content",
              type: "Content",
              code: `<body>
    <h1>Welcome to My Website</h1>
    <p>This is the main content of the page.</p>
</body>`
            }
          ],
          codeExamples: [
            {
              title: "Complete HTML Document Structure",
              language: "html",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A sample HTML document">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph of text.</p>
    <p>HTML stands for HyperText Markup Language.</p>
</body>
</html>`,
              explanation: "This example shows a complete HTML5 document with proper structure, including DOCTYPE, html element, head section with metadata, and body with content.",
              interactive: true,
              editable: true
            },
            {
              title: "HTML with Comments",
              language: "html",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- This is a comment in the head section -->
    <meta charset="UTF-8">
    <title>Comments Example</title>
</head>
<body>
    <!-- Main content starts here -->
    <h1>Learning HTML Comments</h1>
    <p>Comments help document your code.</p>
    <!-- Comments are not visible to users -->
</body>
</html>`,
              explanation: "Comments in HTML use <!-- --> syntax and are not displayed to users. They help document your code for other developers.",
              interactive: true
            }
          ],
          practiceExercises: [
            {
              title: "Create Your First HTML Page",
              description: "Build a basic HTML document with proper structure and add a title and paragraph about yourself.",
              difficulty: "Beginner",
              starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Name Here</title>
</head>
<body>
    <!-- Add your content here -->
</body>
</html>`
            }
          ]
        },
        {
          id: "html-elements",
          title: "HTML Elements and Tags",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Master the most commonly used HTML elements for text, links, and media.",
          keyConcepts: [
            "Text Elements (h1-h6, p, span, strong, em)",
            "Link Elements (a)",
            "List Elements (ul, ol, li)",
            "Media Elements (img, video, audio)"
          ],
          mindMap: {
            id: "html-elements-root",
            title: "HTML Elements and Tags",
            description: "Building blocks of HTML content",
            detailedDescription: "HTML elements are the building blocks of web pages. Each element has a specific purpose and can contain text, other elements, or both.",
            children: [
              {
                id: "text-elements",
                title: "Text Elements",
                description: "Elements for displaying text content",
                examples: ["<h1> to <h6>", "<p>", "<span>", "<strong>", "<em>"]
              },
              {
                id: "link-elements",
                title: "Link Elements",
                description: "Elements for navigation and references",
                examples: ["<a>", "href attribute", "target attribute"]
              },
              {
                id: "list-elements",
                title: "List Elements",
                description: "Elements for organizing content in lists",
                examples: ["<ul>", "<ol>", "<li>", "<dl>", "<dt>", "<dd>"]
              },
              {
                id: "media-elements",
                title: "Media Elements",
                description: "Elements for images, videos, and audio",
                examples: ["<img>", "<video>", "<audio>", "alt attribute"]
              }
            ]
          },
          flowChart: [
            {
              id: "start",
              title: "Choose Element Type",
              description: "Decide what type of content you want to display",
              type: "Planning"
            },
            {
              id: "text-content",
              title: "Add Text Elements",
              description: "Use appropriate heading and paragraph elements",
              type: "Content",
              code: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>`
            },
            {
              id: "add-links",
              title: "Add Links",
              description: "Create navigation with anchor elements",
              type: "Navigation",
              code: `<a href="https://example.com">Visit Example</a>
<a href="#section1">Go to Section 1</a>`
            },
            {
              id: "add-media",
              title: "Add Media",
              description: "Include images and other media",
              type: "Media",
              code: `<img src="image.jpg" alt="Description of image">
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>`
            }
          ],
          codeExamples: [
            {
              title: "Text Formatting Elements",
              language: "html",
              code: `<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<p>This is a regular paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>

<p>You can also use <span style="color: blue;">inline styling</span> with the span element.</p>

<blockquote>
    <p>This is a blockquote for important text or quotes.</p>
</blockquote>`,
              explanation: "This example demonstrates various text elements including headings (h1-h3), paragraphs, strong/em for emphasis, span for inline styling, and blockquote for quotes.",
              interactive: true,
              editable: true
            },
            {
              title: "Links and Navigation",
              language: "html",
              code: `<!-- External link -->
<a href="https://www.google.com" target="_blank">Visit Google</a>

<!-- Internal link to another page -->
<a href="about.html">About Us</a>

<!-- Link to section on same page -->
<a href="#contact">Go to Contact Section</a>

<!-- Email link -->
<a href="mailto:contact@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>`,
              explanation: "Links can point to external websites, internal pages, sections on the same page, email addresses, or phone numbers. The target='_blank' opens links in new tabs.",
              interactive: true
            },
            {
              title: "Lists and Organization",
              language: "html",
              code: `<!-- Unordered list -->
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

<!-- Ordered list -->
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- Description list -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`,
              explanation: "Lists help organize content. Use ul for unordered lists, ol for ordered lists, and dl for description lists with terms and definitions.",
              interactive: true
            }
          ],
          practiceExercises: [
            {
              title: "Create a Personal Bio Page",
              description: "Build an HTML page with your personal information using headings, paragraphs, and lists.",
              difficulty: "Beginner",
              requirements: [
                "Use h1 for your name",
                "Include at least 3 paragraphs about yourself",
                "Create a list of your hobbies or interests",
                "Add a link to your social media or portfolio"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "week-2-css-basics",
      title: "Week 2: CSS Basics and Styling",
      duration: "1 week",
      level: "Beginner",
      isLocked: false,
      progress: 0,
      topics: [
        {
          id: "css-introduction",
          title: "Introduction to CSS",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Learn the fundamentals of CSS and how to apply styles to HTML elements.",
          keyConcepts: [
            "CSS Syntax and Rules",
            "Selectors (Element, Class, ID)",
            "Properties and Values",
            "CSS Box Model"
          ],
          mindMap: {
            id: "css-intro-root",
            title: "Introduction to CSS",
            description: "Understanding CSS fundamentals",
            detailedDescription: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and more.",
            children: [
              {
                id: "css-syntax",
                title: "CSS Syntax",
                description: "Rules, selectors, properties, and values",
                examples: ["selector { property: value; }", "Comments /* */", "Multiple properties"]
              },
              {
                id: "selectors",
                title: "Selectors",
                description: "Ways to target HTML elements",
                examples: ["Element selectors", "Class selectors", "ID selectors", "Attribute selectors"]
              },
              {
                id: "box-model",
                title: "Box Model",
                description: "How elements are sized and spaced",
                examples: ["Content", "Padding", "Border", "Margin"]
              }
            ]
          },
          flowChart: [
            {
              id: "start",
              title: "Understand CSS Purpose",
              description: "Learn what CSS does and why it's important",
              type: "Introduction"
            },
            {
              id: "syntax",
              title: "Learn CSS Syntax",
              description: "Master the basic structure of CSS rules",
              type: "Syntax",
              code: `selector {
    property: value;
    another-property: another-value;
}`
            },
            {
              id: "selectors",
              title: "Master Selectors",
              description: "Learn different ways to target elements",
              type: "Targeting",
              code: `/* Element selector */
p { color: blue; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 24px; }`
            },
            {
              id: "apply-styles",
              title: "Apply Styles",
              description: "Connect CSS to HTML and see results",
              type: "Application"
            }
          ],
          codeExamples: [
            {
              title: "Basic CSS Syntax",
              language: "css",
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
              explanation: "This example shows basic CSS syntax with different types of selectors. Element selectors target HTML tags, class selectors use dots (.), and ID selectors use hash symbols (#).",
              interactive: true,
              editable: true
            },
            {
              title: "CSS Box Model Visualization",
              language: "css",
              code: `/* Box Model Example */
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    background-color: lightblue;
}

/* Total width = width + padding + border + margin */
/* Total width = 200px + 40px (20px each side) + 10px (5px each side) + 20px (10px each side) = 270px */`,
              explanation: "The CSS box model consists of content (width/height), padding (space inside), border (line around), and margin (space outside). This affects how elements are sized and spaced.",
              interactive: true
            }
          ],
          practiceExercises: [
            {
              title: "Style Your First Page",
              description: "Add CSS styling to your HTML bio page with colors, fonts, and spacing.",
              difficulty: "Beginner",
              requirements: [
                "Change the color of headings",
                "Add background colors to sections",
                "Adjust font sizes and families",
                "Add padding and margins to elements"
              ]
            }
          ]
        },
        {
          id: "css-selectors",
          title: "CSS Selectors and Specificity",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Master different types of CSS selectors and understand specificity rules.",
          keyConcepts: [
            "Element, Class, and ID Selectors",
            "Descendant and Child Selectors",
            "Pseudo-classes and Pseudo-elements",
            "CSS Specificity Rules"
          ],
          mindMap: {
            id: "selectors-root",
            title: "CSS Selectors",
            description: "Different ways to target HTML elements",
            detailedDescription: "Selectors are patterns used to select and style HTML elements. Understanding different selector types helps you write more efficient and maintainable CSS.",
            children: [
              {
                id: "basic-selectors",
                title: "Basic Selectors",
                description: "Element, class, and ID selectors",
                examples: ["p", ".class", "#id", "* (universal)"]
              },
              {
                id: "combinators",
                title: "Combinators",
                description: "Ways to combine selectors",
                examples: ["Descendant (space)", "Child (>)", "Adjacent sibling (+)", "General sibling (~)"]
              },
              {
                id: "pseudo-selectors",
                title: "Pseudo-selectors",
                description: "Special state and position selectors",
                examples: [":hover", ":focus", ":nth-child()", "::before", "::after"]
              }
            ]
          },
          flowChart: [
            {
              id: "start",
              title: "Choose Target Element",
              description: "Identify which element you want to style",
              type: "Planning"
            },
            {
              id: "basic-selector",
              title: "Use Basic Selector",
              description: "Start with element, class, or ID selector",
              type: "Basic",
              code: `/* Element */
p { color: blue; }

/* Class */
.highlight { background: yellow; }

/* ID */
#header { font-size: 24px; }`
            },
            {
              id: "advanced-selector",
              title: "Use Advanced Selector",
              description: "Apply combinators or pseudo-selectors if needed",
              type: "Advanced",
              code: `/* Descendant */
div p { color: red; }

/* Child */
div > p { color: green; }

/* Pseudo-class */
a:hover { color: purple; }`
            },
            {
              id: "test-specificity",
              title: "Test Specificity",
              description: "Ensure your selector has enough specificity",
              type: "Validation"
            }
          ],
          codeExamples: [
            {
              title: "Basic Selectors",
              language: "css",
              code: `/* Element selector - targets all <p> elements */
p {
    color: blue;
    font-size: 16px;
}

/* Class selector - targets elements with class="highlight" */
.highlight {
    background-color: yellow;
    padding: 5px;
}

/* ID selector - targets element with id="main-title" */
#main-title {
    color: red;
    font-size: 32px;
    font-weight: bold;
}

/* Universal selector - targets all elements */
* {
    margin: 0;
    padding: 0;
}`,
              explanation: "Basic selectors are the foundation of CSS. Element selectors target HTML tags, class selectors (.) target elements with specific classes, and ID selectors (#) target elements with specific IDs.",
              interactive: true,
              editable: true
            },
            {
              title: "Combinator Selectors",
              language: "css",
              code: `/* Descendant selector - all <p> inside <div> */
div p {
    color: green;
}

/* Child selector - direct <p> children of <div> */
div > p {
    font-weight: bold;
}

/* Adjacent sibling - <p> immediately after <h2> */
h2 + p {
    margin-top: 0;
}

/* General sibling - all <p> after <h2> */
h2 ~ p {
    color: gray;
}`,
              explanation: "Combinator selectors help you target elements based on their relationships with other elements. This allows for more precise styling.",
              interactive: true
            },
            {
              title: "Pseudo-selectors",
              language: "css",
              code: `/* Pseudo-classes for states */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }

/* Pseudo-classes for position */
li:first-child { font-weight: bold; }
li:last-child { color: gray; }
li:nth-child(odd) { background: lightgray; }

/* Pseudo-elements for content */
p::before { content: "→ "; }
p::after { content: " ←"; }
p::first-line { font-weight: bold; }`,
              explanation: "Pseudo-selectors target elements in special states or positions. Pseudo-classes (:) target states like hover, while pseudo-elements (::) target parts of elements like first-line.",
              interactive: true
            }
          ],
          practiceExercises: [
            {
              title: "Selector Practice",
              description: "Create a page with various elements and practice using different selectors to style them.",
              difficulty: "Beginner",
              requirements: [
                "Use element selectors for basic styling",
                "Create classes and apply them to multiple elements",
                "Use ID selectors for unique elements",
                "Try descendant and child selectors"
              ]
            }
          ]
        }
      ]
    }
  ]
}

export const htmlCssQuizzes = {
  "html-structure": [
    {
      id: 1,
      question: "What is the purpose of the DOCTYPE declaration?",
      type: "multiple-choice",
      options: [
        "It tells the browser which version of HTML to use",
        "It creates a new document",
        "It adds styling to the page",
        "It links to external resources"
      ],
      correct: 0,
      explanation: "The DOCTYPE declaration tells the browser which version of HTML the document is written in, ensuring proper rendering."
    },
    {
      id: 2,
      question: "Which element contains the visible content of a web page?",
      type: "multiple-choice",
      options: ["<head>", "<html>", "<body>", "<title>"],
      correct: 2,
      explanation: "The <body> element contains all the visible content that users see on the web page."
    },
    {
      id: 3,
      question: "What is the correct order of HTML document structure?",
      type: "multiple-choice",
      options: [
        "DOCTYPE, html, head, body",
        "html, DOCTYPE, head, body",
        "head, body, DOCTYPE, html",
        "DOCTYPE, head, html, body"
      ],
      correct: 0,
      explanation: "The correct order is DOCTYPE declaration first, then html element containing head and body sections."
    }
  ],
  "html-elements": [
    {
      id: 1,
      question: "Which HTML element is used for the most important heading?",
      type: "multiple-choice",
      options: ["<h6>", "<h1>", "<title>", "<header>"],
      correct: 1,
      explanation: "<h1> is used for the most important heading on the page and should only appear once per page."
    },
    {
      id: 2,
      question: "What attribute is required for the <img> element?",
      type: "multiple-choice",
      options: ["src", "alt", "width", "height"],
      correct: 0,
      explanation: "The src attribute is required and specifies the path to the image file."
    },
    {
      id: 3,
      question: "Which element creates a hyperlink?",
      type: "multiple-choice",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1,
      explanation: "The <a> element creates hyperlinks and uses the href attribute to specify the destination."
    }
  ],
  "css-introduction": [
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
    },
    {
      id: 2,
      question: "Which CSS property is used to change the text color?",
      type: "multiple-choice",
      options: ["text-color", "color", "font-color", "text-style"],
      correct: 1,
      explanation: "The 'color' property is used to set the text color of an element."
    },
    {
      id: 3,
      question: "What is the correct CSS syntax?",
      type: "multiple-choice",
      options: [
        "selector { property: value; }",
        "selector ( property: value; )",
        "selector [ property: value; ]",
        "selector < property: value; >"
      ],
      correct: 0,
      explanation: "CSS uses curly braces {} to contain property-value pairs, with colons separating properties from values."
    }
  ],
  "css-selectors": [
    {
      id: 1,
      question: "Which selector targets elements with a specific class?",
      type: "multiple-choice",
      options: ["#class", ".class", "class", "*class"],
      correct: 1,
      explanation: "Class selectors use a dot (.) followed by the class name to target elements with that class."
    },
    {
      id: 2,
      question: "Which selector has the highest specificity?",
      type: "multiple-choice",
      options: ["Element selector", "Class selector", "ID selector", "Universal selector"],
      correct: 2,
      explanation: "ID selectors have the highest specificity, followed by class selectors, then element selectors."
    },
    {
      id: 3,
      question: "What does the descendant selector (space) do?",
      type: "multiple-choice",
      options: [
        "Selects direct children only",
        "Selects all descendants",
        "Selects adjacent siblings",
        "Selects parent elements"
      ],
      correct: 1,
      explanation: "The descendant selector (space) selects all elements that are descendants of the first element, at any level of nesting."
    }
  ],
  "flexbox": [
    {
      id: 1,
      question: "What property makes an element a flex container?",
      type: "multiple-choice",
      options: ["flex", "display: flex", "flexbox", "container: flex"],
      correct: 1,
      explanation: "Setting 'display: flex' on an element makes it a flex container and its children become flex items."
    },
    {
      id: 2,
      question: "Which property controls the main axis alignment in flexbox?",
      type: "multiple-choice",
      options: ["align-items", "justify-content", "align-content", "flex-direction"],
      correct: 1,
      explanation: "justify-content controls alignment along the main axis, while align-items controls the cross axis."
    },
    {
      id: 3,
      question: "What does flex: 1 mean?",
      type: "multiple-choice",
      options: [
        "The item takes up 1 pixel",
        "The item grows to fill available space",
        "The item shrinks to 1 pixel",
        "The item has a fixed width of 1px"
      ],
      correct: 1,
      explanation: "flex: 1 is shorthand for flex: 1 1 0, meaning the item can grow and shrink, with a flex-basis of 0."
    }
  ],
  "css-grid": [
    {
      id: 1,
      question: "What property makes an element a grid container?",
      type: "multiple-choice",
      options: ["grid", "display: grid", "gridbox", "container: grid"],
      correct: 1,
      explanation: "Setting 'display: grid' on an element makes it a grid container and its children become grid items."
    },
    {
      id: 2,
      question: "Which property defines the number and size of grid columns?",
      type: "multiple-choice",
      options: ["grid-rows", "grid-template-columns", "grid-columns", "columns"],
      correct: 1,
      explanation: "grid-template-columns defines the number and size of columns in a grid layout."
    },
    {
      id: 3,
      question: "What does 1fr mean in CSS Grid?",
      type: "multiple-choice",
      options: [
        "1 pixel",
        "1 fraction of available space",
        "1 row",
        "1 column"
      ],
      correct: 1,
      explanation: "1fr (fraction) means the element takes up 1 fraction of the available space in the grid."
    }
  ],
  "responsive-design": [
    {
      id: 1,
      question: "What is the mobile-first approach?",
      type: "multiple-choice",
      options: [
        "Designing for mobile devices only",
        "Designing for mobile first, then enhancing for larger screens",
        "Making everything very small",
        "Using only mobile-friendly colors"
      ],
      correct: 1,
      explanation: "Mobile-first means designing for mobile devices first, then using media queries to enhance the design for larger screens."
    },
    {
      id: 2,
      question: "Which meta tag is essential for responsive design?",
      type: "multiple-choice",
      options: [
        "<meta name='description' content='...'>",
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "<meta name='keywords' content='...'>",
        "<meta name='author' content='...'>"
      ],
      correct: 1,
      explanation: "The viewport meta tag ensures the page renders properly on mobile devices by setting the viewport width to the device width."
    },
    {
      id: 3,
      question: "What is a common breakpoint for tablets?",
      type: "multiple-choice",
      options: ["480px", "768px", "1024px", "1200px"],
      correct: 1,
      explanation: "768px is a common breakpoint for tablets, though breakpoints can vary based on design needs."
    }
  ]
}

export const htmlCssPractice = {
  "html-structure": {
    title: "HTML Structure Practice",
    description: "Create a properly structured HTML document",
    starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your head content here -->
</head>
<body>
    <!-- Add your body content here -->
</body>
</html>`,
    expectedOutput: "A complete HTML document with proper structure",
    tests: [
      {
        description: "Should have DOCTYPE declaration",
        test: "document.doctype !== null"
      },
      {
        description: "Should have html element with lang attribute",
        test: "document.documentElement.tagName === 'HTML'"
      },
      {
        description: "Should have head and body elements",
        test: "document.head !== null && document.body !== null"
      }
    ]
  },
  "html-elements": {
    title: "HTML Elements Practice",
    description: "Create a page with various HTML elements",
    starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Practice Page</title>
</head>
<body>
    <!-- Add your elements here -->
</body>
</html>`,
    expectedOutput: "A page with headings, paragraphs, links, and lists",
    tests: [
      {
        description: "Should have at least one heading",
        test: "document.querySelector('h1, h2, h3, h4, h5, h6') !== null"
      },
      {
        description: "Should have at least one paragraph",
        test: "document.querySelector('p') !== null"
      },
      {
        description: "Should have at least one link",
        test: "document.querySelector('a') !== null"
      }
    ]
  }
}
