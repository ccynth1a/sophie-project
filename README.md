# Sophie Dashboard Project

![image](https://github.com/user-attachments/assets/e4b79237-602b-46e6-b1c3-165624ee78f6)

This is a quick project to fulfill a horrible set of requirements we got given over the Christmas break at college. Below are some instructions for how to clone and edit it to "provide a base to work off of" ;)

Actually very proud of how this turned out though, Phlobism did a great job with the design!!!!!!

## Made by Phlobism and CCynth1a
*it's not ikuyover till there's no [insert clever and witty pun here]*

## Setting up your Dev Environment

First, clone the repo. You can do this via git if you know how, or just download as a zip (press <>Code, then download zip). After that, open a terminal in your newly unzipped folder and

```bash
npm i
```

This will take a few seconds, and will install all of the dependencies.

You're then free to start editing. When you want to view your site, open a web server using:

```sh
npm run dev
```

I recommend installing the Svelte VSCode extension naturally, otherwise itll just be white text.

I've not included any adapters to actually deploy this application, so this is the only way you can use it for now until you add the adapter (i doubt sophie would want a production version anyways)

## I need to "edit" this repository, where should I start?

If you're unfamiliar with Sveltekit, the things you need to edit to avoid accusations of plagiarism are in the src/routes/+page.svelte, as well as the src/*.svelte files. Editing the CSS inside of these is probably enough.

In svelte you write HTML, CSS and JS in the same file. I've tried not to use too many fancy features here to keep it simple to edit.
