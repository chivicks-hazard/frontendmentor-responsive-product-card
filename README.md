# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

I learnt how to display SVG images on React using the vite-plugin-svgr plugin for Vite React projects.

#### How to use The Plugin 
1. Install the plugin by run this command on your terminal.
    ```sh
        npm i vite-plugin-svgr --save-dev
    ```

2. In the vite.config.js file, import the vite-plugin-svgr plugin and add to the plugins object.
    ```js
        import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        import vitePluginSvgr from 'vite-plugin-svgr'

        // https://vitejs.dev/config/
        export default defineConfig({
        plugins: [react(), vitePluginSvgr()],
        })
    ```
3. In the App.jsx file, import the SVG file as a component like this:
    ```js
        import MyLogo from './assets/icon-cart.svg?react';
    ```
4. Then you add the SVG component in where you want to use it. For this project, I used it in the CTA button.
    ```jsx
        <button className='block mt-4 px-4 py-2 bg-cream text-white rounded-lg text-center hover:bg-green-950'><MyLogo className="inline mb-1 mr-2" /> Add To Cart</button>
    ```



### Useful resources

- [ChaGPT](https://chat.openai.com) - This  was very helpful in debugging my codes and making adjustments to the project.
- [Github Docs for ](https://github.com/pd4d10/vite-plugin-svgr) - This helped me in learning how to use the VIte SVG plugin.

## Author

- Website - [Victor Chigbo](https://chivickshazard.vercel.app)
- Frontend Mentor - [@chivicks-hazard](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@chivicks_hazard](https://www.twitter.com/chivicks_hazard)