# Welcome to the project

## Project info

**URL**: 

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to run the project?
 1. install dependencies by running `npm install` in your terminal
    and some more dependencies are:
    Core dependencies:
        React
        React DOM
        React Router DOM
        Framer Motion (for animations)
        Tailwind CSS (for styling)
        Typescript
        Vite (build tool)

    UI and animation dependencies:
        Lucide React (for icons)
        Class Variance Authority (for component variants)
        Clsx and Tailwind Merge (for conditional class names)
        Shadcn UI components 

 2. Run the project by executing `npm run dev` in your terminal. This will start the development server with auto-reloading and an instant preview.
 3. Directory structure is as follows:
     
     src/
├── components/
│   ├── AnimatedText.tsx       # Reusable text animations
│   ├── Contact.tsx            # Contact form section
│   ├── Footer.tsx             # Footer component
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section with typewriter effect
│   ├── Projects.tsx           # Projects showcase section
│   ├── ProjectCard.tsx        # Individual project card
│   ├── Skills.tsx             # Skills section with progress bars
│   ├── About.tsx              # About section with your information
│   ├── Transition.tsx         # Page transition animations
│   └── ui/                    # UI components
│       ├── button.tsx
│       ├── toast.tsx
│       └── ...
├── hooks/
│   ├── use-mobile.tsx         # Hook for responsive designs
│   └── use-toast.ts           # Toast notifications hook
├── lib/
│   └── utils.ts               # Utility functions
├── pages/
│   ├── Index.tsx              # Main page component
│   └── NotFound.tsx           # 404 page
├── App.tsx                    # Main app component with routes
├── main.tsx                   # Entry point
└── index.css                  # Global styles
