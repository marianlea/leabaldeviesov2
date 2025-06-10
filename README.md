# Lea Baldevieso - Developer Portfolio (v2)

---

# 📁 Developer Portfolio

Hi! I’m Lea, a **full-stack software engineer** passionate about building meaningful, accessible, and visually engaging web experiences.

This is my **personal portfolio project**, designed to:

- Showcase my technical skills in **React and TailwindCSS**
- Reflect my identity and design sensibilities
- Help recruiters and collaborators easily explore my projects and contact me

# 🎨 Project Overview

As I transition into a career in software engineering, I wanted to create a portfolio that reflects my core values as a developer: clarity, creativity, optimism, and thoughtful execution.

Visually, I took inspiration from **minimalist Japanese stationery** design and integrated a **Filipino cultural reference** through the use of the _Cubao_ typeface.

Below, you’ll find design iterations from wireframe to final design:

![initial wireframe](leabaldeviesov2%2020e8fc786ec68076a59fcdf16ec771db/wireframe1.jpg)

initial wireframe

![High-fidelity wireframe of homepage](leabaldeviesov2%2020e8fc786ec68076a59fcdf16ec771db/dafault.png)

High-fidelity wireframe of homepage

![Dark mode high-fidelity wireframe](leabaldeviesov2%2020e8fc786ec68076a59fcdf16ec771db/darkmode.png)

Dark mode high-fidelity wireframe

![About page high-fidelity wireframe](leabaldeviesov2%2020e8fc786ec68076a59fcdf16ec771db/84e01149-f3bc-4cd0-a0f5-cb30716c80cf.png)

About page high-fidelity wireframe

I chose a special font for my name called _Cubao_, connecting this portfolio to my Filipino heritage. This font is commonly used in signage on _jeepneys_ — a vibrant, iconic part of Filipino culture — symbolizing journeys, destinations, and community. Using this typography reminds me of home, family, and the value of purposeful design.

---

# ✨ Features

- 📂 Interactive **file-folder-style** sidebar navigation
- 🎨 **Dark Mode** toggle
- 📧 **Contact Form** integration via EmailJS
- 🖱️ Smooth navigation and engaging interactions
- 🖼️ Manually-built **carousel component**

---

# 🛠️ Tech Stack

- **React** (Vite)
- **EmailJS** for email submission
- **EmailValidator** for email validation
- **Feather Icons** for UI consistency
- **Custom CSS + Flex/Grid layouts**

---

# 🚀 Getting Started

1. Clone the repo

```bash
git clone <https://github.com/marianlea/leabaldeviesov2.git>

```

2. Install dependencies

```jsx
npm install
```

3. Run development server

```jsx
npm run dev
```

4. Open in your browser:

```jsx
http://localhost:5173
```

---

# 🚧 Challenges and Solutions

### ✅ Sidebar Complexity

One of the biggest technical challenges was creating a **multi-coloured, state-based sidebar navigation**. Tabs changed colours based on selection _and_ position within the sidebar flow, which made direct conditional styling unwieldy.

**My Solution:**

1. I diagrammed sidebar behaviours to visualise states.
2. Broke down the styling logic into smaller, manageable cases.
3. Used **state variables** and **helper functions** to systematically apply the right styles.

This iterative, visual-first approach helped me solve the complexity with confidence.

![First drawing of sidebar changes sequence](leabaldeviesov2%2020e8fc786ec68076a59fcdf16ec771db/sidebar1.jpg)

First drawing of sidebar changes sequence

- In my first drawing, I realised a few things:
  - { selected } case - when the user clicked on the tab
  - the 3rd and fourth tabs need to have 2 - 3 sections inside in order to create the illusion that the tabs on top of them continuously flow down to the bottom of the page
  - the first sections in column ‘a’ do not need to change their colours unless the tab they are a part of is { selected }
    These lead me to drawing again and writing down the detailed “cases” on which I used as building blocks for the sidebar.
    ![Final sidebar drawing: one of the main features that I strived to create with seamless functionality is the sidebar which consists of four main elements that render depending on the tab’s status or as I called it “case”.](leabaldeviesov2%2020e8fc786ec68076a59fcdf16ec771db/sidebar2.jpg)
    Final sidebar drawing: one of the main features that I strived to create with seamless functionality is the sidebar which consists of four main elements that render depending on the tab’s status or as I called it “case”.

### ✅ Dark Mode

Dark mode was a bit of a challenge as I had to navigate through the new TailwindCSS v4 updates but their well-written documentation with a little bit of hints from YouTube university helped me implement a persistent dark mode.

---

# ✨ Lessons I Learned

- 🖼️  I am a visual thinker so drawing and/or wireframing helps me a lot to draw out detailed and tactile strategy, solutions, and algorithm.
- 🔨  I believe in “break things, learn fast” but asking for help when you are stuck with a problem for more than 30-40 minutes will help me learn faster.
- 🖇️  How to use libraries such as EmailJS, FeatherIcons
- ⚙️  How to add dark mode using TailwindCSS v4, adding custom font, using theme to define colours
- 🎒  Refreshed my knowledge in react-router-dom, how to access localStorage

---

# **☎️ Contact & Links**

- 📧 mlbaldevieso@gmail.com
- 🌐
- 🔗 linkedin.com/marianlea
- 💻 github.com/marianlea

## Thank you for visiting! ✨
