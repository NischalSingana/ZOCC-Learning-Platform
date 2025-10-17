# ZOCC Learning Platform

A comprehensive Web Development Learning Path Platform built with React, featuring a 24-week curriculum from beginner to advanced levels.

## 🚀 Features

### 📚 Course Structure
- **24-week comprehensive curriculum** covering HTML, CSS, JavaScript, React, TypeScript, Next.js, and more
- **Progressive learning path** with Beginner → Intermediate → Advanced stages
- **Module-based organization** with topics, lessons, projects, and Git missions
- **Lock/unlock system** ensuring prerequisites are completed

### 🎯 Learning Experience
- **Interactive Course Player** with three main tabs:
  - **Learn**: Video lessons, content blocks, and project requirements
  - **Concept Check**: Interactive quizzes with multiple choice questions
  - **Practice**: Monaco Editor integration for hands-on coding
- **Progress Tracking** with visual progress bars and completion badges
- **AI Assistant** for hints, debugging help, and concept explanations

### 🛠️ Technical Features
- **Modern UI** with TailwindCSS and shadcn/ui components
- **Dark/Light Mode** toggle for comfortable learning
- **Responsive Design** that works on all devices
- **Monaco Editor** for code practice with live preview
- **Quiz System** with immediate feedback and explanations
- **Git Integration** with missions for version control learning

## 📋 Curriculum Overview

### Month 1: HTML & CSS Fundamentals
- HTML Structure & Elements
- CSS Styling & Layout (Flexbox & Grid)
- **Project**: Personal Portfolio Website
- **Git Mission**: Basic version control

### Month 2: JavaScript Fundamentals
- JavaScript Syntax & Variables
- DOM Manipulation & Events
- **Project**: Interactive Calculator
- **Git Mission**: Collaboration workflows

### Month 3: React Development
- React Components & JSX
- Props & State Management
- **Project**: Todo Application
- **Git Mission**: Advanced Git techniques

### Month 4: Advanced React & State Management
- React Hooks & Context
- State Management Solutions
- **Project**: E-commerce Frontend
- **Git Mission**: CI/CD Pipeline setup

### Month 5: TypeScript & Next.js
- TypeScript with React
- Next.js SSR/SSG
- **Project**: Blog with Next.js
- **Git Mission**: Branch protection and code reviews

### Month 6: Capstone Project
- Full-Stack Application
- Authentication & Payments
- **Project**: Complete Next.js App
- **Git Mission**: Production deployment

## 🎨 UI Components

### Dashboard
- Course overview with progress tracking
- Module cards with lock/unlock states
- Upcoming projects and Git missions
- Overall progress statistics

### Sidebar Navigation
- Course modules with expandable topics
- Progress indicators for each module
- Quick access to AI Companion, Career Trainer, and Feedback
- Dark/Light mode toggle

### Course Player
- **Learn Tab**: Structured lessons with video content
- **Concept Check Tab**: Interactive quizzes with explanations
- **Practice Tab**: Monaco Editor with live preview
- Navigation controls and progress tracking
- AI Assistant integration

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: TailwindCSS with custom design system
- **Icons**: Lucide React
- **Editor**: Monaco Editor
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ZOCC-Learning-Platform/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Navigation sidebar
│   ├── Dashboard.jsx        # Main dashboard
│   ├── CoursePlayer.jsx     # Course content player
│   ├── QuizComponent.jsx    # Interactive quizzes
│   └── AIAssistant.jsx      # AI learning companion
├── data/
│   └── curriculum.js        # Course content and structure
├── lib/
│   └── utils.js            # Utility functions
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles with TailwindCSS
```

## 🎯 Key Features Explained

### Progress Tracking
- Visual progress bars for each module
- Lock/unlock system based on prerequisites
- Completion badges and achievements
- Overall course progress calculation

### Quiz System
- Multiple choice questions
- Immediate feedback with explanations
- Score calculation and retake options
- Topic-specific quiz content

### Code Practice
- Monaco Editor integration
- Live preview functionality
- Multiple language support
- Auto-save and reset capabilities

### AI Assistant
- Context-aware help and hints
- Debugging assistance
- Concept explanations
- Quick action buttons for common requests

## 🎨 Design System

The platform uses a comprehensive design system with:
- **Color Palette**: Primary, secondary, muted, and accent colors
- **Typography**: Consistent font sizing and weights
- **Spacing**: Systematic spacing using TailwindCSS
- **Components**: Reusable UI components with consistent styling
- **Dark Mode**: Full dark/light theme support

## 🔮 Future Enhancements

- **Backend Integration**: User authentication and progress persistence
- **Video Integration**: Embedded video lessons
- **Advanced Quizzes**: Drag-and-drop, code completion
- **Social Features**: Discussion forums and peer learning
- **Analytics**: Learning analytics and progress insights
- **Mobile App**: React Native version for mobile learning

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Happy Learning! 🚀**