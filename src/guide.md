# How to Add a New Project

To add a newly completed project to your portfolio website, follow these simple steps:

1. Open the file `src/components/Projects.jsx`.
2. Find the `projects` array located near the top of the component file (around line 6).
3. Paste a new project object into the array using the following format:

```javascript
{
  title: "Your Project Name",
  description: "A short, engaging description of what the project does, the problem it solves, and the impact it makes.",
  tags: ["React", "Tailwind CSS", "Node.js"], // List of key technologies used
  icon: <Cpu size={24} />, // Replace 'Cpu' with any icon imported from 'lucide-react' at the top of the file
  githubLink: "https://github.com/BheeshamKS/your-repo-name",
  demoLink: "https://your-live-demo-url.com" // Important: completely remove this line if there is no live demo
}
```

## Note about Icons
The project cards use beautiful open-source icons from [Lucide React](https://lucide.dev/icons/). 

If you want a different icon for your project (for example, `<Monitor size={24} />`), make sure to import it at the very top of `Projects.jsx`:
```javascript
import { ExternalLink, Cpu, Film, Monitor } from "lucide-react";
```

4. Save the file and you're good to go! The site will automatically pull your new data, format it into a stunning glassmorphism card, and apply the entrance animations.

---

# How to Update the About Section
1. Open the file `src/components/About.jsx`.
2. Scroll to the `About Me Section` block (around line 20).
3. Directly beneath the `About Me` header component, you will find a list of `<p>` tags containing your bio text.
4. Simply edit the text inside these `<p>` tags or add new `<p>Your text</p>` elements to update your background information!

---

# How to Add Education & Awards
Education and Awards are both found inside the `src/components/About.jsx` file.

**To add a new Education entry:**
1. Open `src/components/About.jsx` and scroll down to the `Education Section` (around line 55).
2. You will see a `motion.div` block representing the "Dawood University" card. 
3. Select that entire `<motion.div ...> ... </motion.div>` card block, copy it, and paste it directly below to duplicate the card.
4. Update the title (`h3`), the dates, and the course details inside the copied block. 

**To add a new Award or Certificate:**
1. In the same `src/components/About.jsx` file, scroll further down to the `Awards Section` (around line 90).
2. Just like with education, you will see the Harvard CS50 glass card block.
3. Simply copy that entire `<motion.div>` block, paste a duplicate underneath it, and replace the certificate details!

---

# How to Update the Skills Section
1. Open the file `src/components/Skills.jsx`.
2. Locate the `skillCategories` array right at the top of the file (line 4).
3. To add a new skill to an existing category, just inject it into the comma-separated `skills` array. For example:
```javascript
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Vite", "Next.js"] // <-- Added Next.js
    }
```
4. To add an entirely **new category**, just add a new object to the end of the `skillCategories` list:
```javascript
    {
      title: "DevOps",
      skills: ["Docker", "AWS", "GitHub Actions"]
    }
```

---

# How to Save and Deploy Your Site

Whenever you make changes to your portfolio (like adding a new project, fixing a typo, or tweaking the design), you need to save your changes to GitHub and publish them so the live site updates.

### 1. Save Your Work (Commit to GitHub)
First, save your code changes to your main branch:

```bash
# Add all your updated files
git add .

# Commit with a short descriptive message
git commit -m "Added a new project to the portfolio"

# Push the source code to your main GitHub repository
git push
```

### 2. Deploy the Live Site (GitHub Pages)
Your site is a modern React application powered by Vite, which means the raw code needs to be "built" before it can be hosted.
Thankfully, I've noticed you already have the `gh-pages` package set up in your repository! 

To build your site and publish it directly to the web, just run this single command:

```bash
npm run deploy
```

*(This command automatically bundles your latest project code and uploads the final production site to your `gh-pages` branch.)*

Give it a minute or two, refresh your browser, and your live portfolio at `https://BheeshamKS.github.io` will be updated!
