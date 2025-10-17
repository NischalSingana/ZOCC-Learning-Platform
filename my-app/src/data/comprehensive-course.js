export const comprehensiveCourse = {
  title: "HTML & CSS Fundamentals - Complete 4-Week Course",
  duration: "4 weeks",
  description: "Master web development from absolute beginner to building professional websites",
  level: "Beginner",
  totalLessons: 20,
  totalHours: 40,
  weeks: [
    {
      id: "week-1",
      title: "Week 1: HTML Fundamentals",
      duration: "1 week",
      level: "Beginner",
      description: "Learn the building blocks of web development with HTML",
      topics: [
        {
          id: "html-intro",
          title: "Introduction to HTML",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Understanding what HTML is and how it works",
          content: {
            overview: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure and content for web pages using a system of tags and attributes.",
            keyConcepts: [
              "What is HTML and why it's important",
              "How HTML works with browsers",
              "HTML vs other programming languages",
              "The role of HTML in web development"
            ],
            detailedContent: `
              <h3>What is HTML?</h3>
              <p>HTML stands for HyperText Markup Language. It's not a programming language, but a markup language used to structure content on the web.</p>
              
              <h4>Key Points:</h4>
              <ul>
                <li><strong>HyperText:</strong> Links between web pages</li>
                <li><strong>Markup:</strong> Tags that describe content</li>
                <li><strong>Language:</strong> Standardized way to communicate</li>
              </ul>
              
              <h4>How HTML Works:</h4>
              <ol>
                <li>You write HTML code</li>
                <li>Browser reads the HTML</li>
                <li>Browser displays the formatted content</li>
              </ol>
            `,
            codeExamples: [
              {
                title: "Your First HTML Page",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`,
                explanation: "This is the most basic HTML document structure. Every HTML page should start with DOCTYPE and include html, head, and body elements."
              }
            ],
            practiceExercises: [
              {
                title: "Create Your First HTML Page",
                description: "Create a simple HTML page with your name and a brief introduction",
                starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
</head>
<body>
    <!-- Add your content here -->
</body>
</html>`,
                solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
</head>
<body>
    <h1>My Name</h1>
    <p>Hi! I'm learning HTML and this is my first webpage.</p>
</body>
</html>`
              }
            ]
          }
        },
        {
          id: "html-structure",
          title: "HTML Document Structure",
          duration: "2 hours",
          difficulty: "Beginner",
          description: "Master the fundamental structure of HTML documents",
          content: {
            overview: "Every HTML document follows a specific structure that browsers understand. This includes the DOCTYPE declaration, html element, head section for metadata, and body section for content.",
            keyConcepts: [
              "DOCTYPE Declaration",
              "HTML Element and Language Attribute",
              "Head Section and Metadata",
              "Body Section and Content"
            ],
            detailedContent: `
              <h3>HTML Document Structure</h3>
              <p>Every HTML document has a specific structure that browsers expect. Understanding this structure is crucial for creating valid HTML.</p>
              
              <h4>1. DOCTYPE Declaration</h4>
              <p>The DOCTYPE declaration tells the browser which version of HTML to use. For HTML5, it's simply:</p>
              <code>&lt;!DOCTYPE html&gt;</code>
              
              <h4>2. HTML Element</h4>
              <p>The &lt;html&gt; element is the root element that contains all other elements:</p>
              <code>&lt;html lang="en"&gt;</code>
              <p>The <code>lang</code> attribute specifies the language of the document.</p>
              
              <h4>3. Head Section</h4>
              <p>The &lt;head&gt; section contains metadata about the document:</p>
              <ul>
                <li>Title of the page</li>
                <li>Character encoding</li>
                <li>Viewport settings</li>
                <li>Links to CSS and JavaScript</li>
              </ul>
              
              <h4>4. Body Section</h4>
              <p>The &lt;body&gt; section contains all the visible content that users see on the web page.</p>
            `,
            codeExamples: [
              {
                title: "Complete HTML Document Structure",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn HTML fundamentals">
    <title>HTML Learning - Complete Guide</title>
</head>
<body>
    <h1>Welcome to HTML Learning</h1>
    <p>This is where your content goes.</p>
</body>
</html>`,
                explanation: "This example shows a complete HTML5 document with proper structure, including DOCTYPE, html element, head section with metadata, and body with content."
              },
              {
                title: "HTML with Comments",
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
                explanation: "Comments in HTML use <!-- --> syntax and are not displayed to users. They help document your code for other developers."
              }
            ],
            practiceExercises: [
              {
                title: "Build a Proper HTML Structure",
                description: "Create an HTML document with proper structure and add comments explaining each section",
                requirements: [
                  "Include DOCTYPE declaration",
                  "Add html element with lang attribute",
                  "Create head section with title and meta tags",
                  "Add body section with content",
                  "Include comments explaining each section"
                ],
                starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your head content here -->
</head>
<body>
    <!-- Add your body content here -->
</body>
</html>`,
                solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Head section contains metadata -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML Page</title>
</head>
<body>
    <!-- Body section contains visible content -->
    <h1>Welcome to My Page</h1>
    <p>This is the main content of my webpage.</p>
</body>
</html>`
              }
            ]
          }
        },
        {
          id: "html-elements",
          title: "HTML Elements and Tags",
          duration: "3 hours",
          difficulty: "Beginner",
          description: "Master the most commonly used HTML elements for text, links, and media",
          content: {
            overview: "HTML elements are the building blocks of web pages. Each element has a specific purpose and can contain text, other elements, or both.",
            keyConcepts: [
              "Text Elements (h1-h6, p, span, strong, em)",
              "Link Elements (a)",
              "List Elements (ul, ol, li)",
              "Media Elements (img, video, audio)",
              "Semantic Elements (header, nav, main, article, section, aside, footer)"
            ],
            detailedContent: `
              <h3>HTML Elements and Tags</h3>
              <p>HTML elements are the building blocks of web pages. Each element has a specific purpose and can contain text, other elements, or both.</p>
              
              <h4>Text Elements</h4>
              <ul>
                <li><strong>Headings:</strong> h1, h2, h3, h4, h5, h6 (h1 is most important)</li>
                <li><strong>Paragraphs:</strong> p for text blocks</li>
                <li><strong>Inline text:</strong> span, strong, em, mark, small</li>
                <li><strong>Line breaks:</strong> br for line breaks</li>
              </ul>
              
              <h4>Link Elements</h4>
              <ul>
                <li><strong>Anchor tags:</strong> a for hyperlinks</li>
                <li><strong>Attributes:</strong> href (destination), target (how to open)</li>
                <li><strong>Types:</strong> External links, internal links, email links, phone links</li>
              </ul>
              
              <h4>List Elements</h4>
              <ul>
                <li><strong>Unordered lists:</strong> ul with li items</li>
                <li><strong>Ordered lists:</strong> ol with li items</li>
                <li><strong>Description lists:</strong> dl with dt (terms) and dd (descriptions)</li>
              </ul>
              
              <h4>Media Elements</h4>
              <ul>
                <li><strong>Images:</strong> img with src and alt attributes</li>
                <li><strong>Videos:</strong> video with controls</li>
                <li><strong>Audio:</strong> audio with controls</li>
              </ul>
            `,
            codeExamples: [
              {
                title: "Text Formatting Elements",
                code: `<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<p>This is a regular paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>

<p>You can also use <span style="color: blue;">inline styling</span> with the span element.</p>

<blockquote>
    <p>This is a blockquote for important text or quotes.</p>
</blockquote>

<hr> <!-- Horizontal rule for visual separation -->

<p>Line breaks<br>can be used<br>within paragraphs.</p>`,
                explanation: "This example demonstrates various text elements including headings (h1-h3), paragraphs, strong/em for emphasis, span for inline styling, blockquote for quotes, and hr for visual separation."
              },
              {
                title: "Links and Navigation",
                code: `<!-- External link -->
<a href="https://www.google.com" target="_blank">Visit Google</a>

<!-- Internal link to another page -->
<a href="about.html">About Us</a>

<!-- Link to section on same page -->
<a href="#contact">Go to Contact Section</a>

<!-- Email link -->
<a href="mailto:contact@example.com">Send Email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Link with image -->
<a href="https://example.com">
    <img src="logo.png" alt="Company Logo">
</a>`,
                explanation: "Links can point to external websites, internal pages, sections on the same page, email addresses, or phone numbers. The target='_blank' opens links in new tabs."
              },
              {
                title: "Lists and Organization",
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
</dl>

<!-- Nested list -->
<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrots</li>
            <li>Broccoli</li>
        </ul>
    </li>
</ul>`,
                explanation: "Lists help organize content. Use ul for unordered lists, ol for ordered lists, and dl for description lists with terms and definitions. Lists can be nested for complex organization."
              },
              {
                title: "Media Elements",
                code: `<!-- Image with alt text -->
<img src="image.jpg" alt="Description of image" width="300" height="200">

<!-- Video with controls -->
<video controls width="400" height="300">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<!-- Audio with controls -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
</audio>

<!-- Figure with caption -->
<figure>
    <img src="diagram.png" alt="HTML structure diagram">
    <figcaption>HTML Document Structure</figcaption>
</figure>`,
                explanation: "Media elements include images, videos, and audio. Always include alt text for images and provide multiple formats for video/audio. Use figure and figcaption for images with descriptions."
              }
            ],
            practiceExercises: [
              {
                title: "Create a Personal Bio Page",
                description: "Build an HTML page with your personal information using various elements",
                requirements: [
                  "Use h1 for your name",
                  "Include at least 3 paragraphs about yourself",
                  "Create a list of your hobbies or interests",
                  "Add a link to your social media or portfolio",
                  "Include an image (you can use a placeholder)"
                ],
                starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Bio</title>
</head>
<body>
    <!-- Add your content here -->
</body>
</html>`,
                solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Bio</title>
</head>
<body>
    <h1>John Doe</h1>
    <img src="profile.jpg" alt="John Doe's profile picture" width="200">
    
    <h2>About Me</h2>
    <p>Hi! I'm John, a passionate web developer learning HTML and CSS.</p>
    <p>I love creating beautiful and functional websites that provide great user experiences.</p>
    <p>When I'm not coding, you can find me reading tech blogs or exploring new technologies.</p>
    
    <h2>My Hobbies</h2>
    <ul>
        <li>Web Development</li>
        <li>Photography</li>
        <li>Hiking</li>
        <li>Reading</li>
    </ul>
    
    <h2>Connect With Me</h2>
    <p>Follow me on <a href="https://twitter.com/johndoe" target="_blank">Twitter</a> or check out my <a href="https://github.com/johndoe">GitHub</a>.</p>
</body>
</html>`
              }
            ]
          }
        },
        {
          id: "html-forms",
          title: "HTML Forms and Input Elements",
          duration: "3 hours",
          difficulty: "Beginner",
          description: "Learn to create interactive forms for user input",
          content: {
            overview: "Forms are essential for collecting user input on websites. HTML provides various input types and form elements to create interactive user interfaces.",
            keyConcepts: [
              "Form Structure and Attributes",
              "Input Types (text, email, password, number, etc.)",
              "Form Validation",
              "Labels and Accessibility",
              "Form Submission and Methods"
            ],
            detailedContent: `
              <h3>HTML Forms and Input Elements</h3>
              <p>Forms are essential for collecting user input on websites. HTML provides various input types and form elements to create interactive user interfaces.</p>
              
              <h4>Form Structure</h4>
              <ul>
                <li><strong>form element:</strong> Container for all form elements</li>
                <li><strong>action attribute:</strong> Where to send form data</li>
                <li><strong>method attribute:</strong> How to send data (GET or POST)</li>
                <li><strong>input elements:</strong> Various types of input fields</li>
                <li><strong>label elements:</strong> Labels for form controls</li>
              </ul>
              
              <h4>Common Input Types</h4>
              <ul>
                <li><strong>text:</strong> Single-line text input</li>
                <li><strong>email:</strong> Email address input with validation</li>
                <li><strong>password:</strong> Password input (hidden characters)</li>
                <li><strong>number:</strong> Numeric input</li>
                <li><strong>tel:</strong> Telephone number input</li>
                <li><strong>url:</strong> URL input with validation</li>
                <li><strong>date:</strong> Date picker</li>
                <li><strong>checkbox:</strong> Multiple choice selection</li>
                <li><strong>radio:</strong> Single choice selection</li>
                <li><strong>select:</strong> Dropdown menu</li>
                <li><strong>textarea:</strong> Multi-line text input</li>
              </ul>
              
              <h4>Form Validation</h4>
              <ul>
                <li><strong>required:</strong> Field must be filled</li>
                <li><strong>pattern:</strong> Custom validation pattern</li>
                <li><strong>min/max:</strong> Minimum/maximum values</li>
                <li><strong>minlength/maxlength:</strong> Text length limits</li>
              </ul>
            `,
            codeExamples: [
              {
                title: "Basic Contact Form",
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
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone">
        </div>
        
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
    </fieldset>
</form>`,
                explanation: "This form demonstrates proper form structure with labels, different input types, and validation attributes. The fieldset and legend provide better organization and accessibility."
              },
              {
                title: "Registration Form with Various Input Types",
                code: `<form action="/register" method="post">
    <h2>User Registration</h2>
    
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required minlength="3" maxlength="20">
    </div>
    
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required minlength="8">
    </div>
    
    <div>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="13" max="120">
    </div>
    
    <div>
        <label for="birthdate">Birth Date:</label>
        <input type="date" id="birthdate" name="birthdate">
    </div>
    
    <div>
        <label for="website">Website:</label>
        <input type="url" id="website" name="website" placeholder="https://example.com">
    </div>
    
    <div>
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="other">
        <label for="other">Other</label>
    </div>
    
    <div>
        <label>Interests:</label>
        <input type="checkbox" id="web" name="interests" value="web">
        <label for="web">Web Development</label>
        <input type="checkbox" id="design" name="interests" value="design">
        <label for="design">Design</label>
        <input type="checkbox" id="mobile" name="interests" value="mobile">
        <label for="mobile">Mobile Development</label>
    </div>
    
    <div>
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
        </select>
    </div>
    
    <div>
        <label for="bio">Bio:</label>
        <textarea id="bio" name="bio" rows="3" placeholder="Tell us about yourself..."></textarea>
    </div>
    
    <div>
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">I agree to the terms and conditions</label>
    </div>
    
    <button type="submit">Register</button>
    <button type="reset">Reset Form</button>
</form>`,
                explanation: "This comprehensive form demonstrates various input types, validation attributes, radio buttons, checkboxes, select dropdowns, and form controls. Each input has appropriate labels and attributes."
              }
            ],
            practiceExercises: [
              {
                title: "Create a Survey Form",
                description: "Build a survey form with various input types and validation",
                requirements: [
                  "Include text, email, and number inputs",
                  "Add radio buttons for single choice questions",
                  "Include checkboxes for multiple choice questions",
                  "Add a select dropdown for country selection",
                  "Include a textarea for comments",
                  "Add form validation attributes"
                ],
                starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Survey Form</title>
</head>
<body>
    <h1>Customer Satisfaction Survey</h1>
    <form action="/survey" method="post">
        <!-- Add your form elements here -->
    </form>
</body>
</html>`,
                solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Survey Form</title>
</head>
<body>
    <h1>Customer Satisfaction Survey</h1>
    <form action="/survey" method="post">
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="18" max="100">
        </div>
        
        <div>
            <label>How satisfied are you with our service?</label>
            <input type="radio" id="very-satisfied" name="satisfaction" value="very-satisfied">
            <label for="very-satisfied">Very Satisfied</label>
            <input type="radio" id="satisfied" name="satisfaction" value="satisfied">
            <label for="satisfied">Satisfied</label>
            <input type="radio" id="neutral" name="satisfaction" value="neutral">
            <label for="neutral">Neutral</label>
            <input type="radio" id="dissatisfied" name="satisfaction" value="dissatisfied">
            <label for="dissatisfied">Dissatisfied</label>
        </div>
        
        <div>
            <label>What features do you like? (Select all that apply)</label>
            <input type="checkbox" id="feature1" name="features" value="user-friendly">
            <label for="feature1">User-friendly interface</label>
            <input type="checkbox" id="feature2" name="features" value="fast">
            <label for="feature2">Fast loading</label>
            <input type="checkbox" id="feature3" name="features" value="mobile">
            <label for="feature3">Mobile responsive</label>
        </div>
        
        <div>
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
            </select>
        </div>
        
        <div>
            <label for="comments">Additional Comments:</label>
            <textarea id="comments" name="comments" rows="4" placeholder="Please share any additional feedback..."></textarea>
        </div>
        
        <button type="submit">Submit Survey</button>
    </form>
</body>
</html>`
              }
            ]
          }
        }
      ]
    },
    {
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
              },
              {
                title: "CSS Box Model Visualization",
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
/* Total width = 200px + 40px (20px each side) + 10px (5px each side) + 20px (10px each side) = 270px */

/* Box-sizing property */
.box-sizing-example {
    box-sizing: border-box; /* Includes padding and border in width */
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Total width is still 200px */
}`,
                explanation: "The CSS box model consists of content (width/height), padding (space inside), border (line around), and margin (space outside). This affects how elements are sized and spaced."
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
                  "Add padding and margins to elements",
                  "Use both class and ID selectors"
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
    <ul>
        <li>Web Development</li>
        <li>Photography</li>
        <li>Hiking</li>
    </ul>
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
            margin-bottom: 30px;
        }
        
        p {
            background-color: white;
            padding: 15px;
            border-left: 4px solid #007bff;
            margin: 20px 0;
        }
        
        ul {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        li {
            margin: 10px 0;
            padding: 5px;
        }
        
        li:hover {
            background-color: #e9ecef;
        }
    </style>
</head>
<body>
    <h1>John Doe</h1>
    <p>Hi! I'm John, a passionate web developer.</p>
    <ul>
        <li>Web Development</li>
        <li>Photography</li>
        <li>Hiking</li>
    </ul>
</body>
</html>`
              }
            ]
          }
        }
      ]
    }
  ]
}

export const courseQuizzes = {
  "html-intro": [
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
      question: "What is the purpose of HTML?",
      type: "multiple-choice",
      options: [
        "To program websites",
        "To structure and organize web content",
        "To style web pages",
        "To create animations"
      ],
      correct: 1,
      explanation: "HTML is used to structure and organize web content, not to program or style websites."
    }
  ],
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
    }
  ]
}
