# `Introducing Data!`

This repo is designed to help you learn how to integrate a database into your react-app in 4 stages:
1. Hardcode your data
2. Move your data into a seperate file and display it using the Array.map() method
3. Set up 'local storage' using Dexie.
4. Set up 'cloud storage' using MongoDB.


## Starting out...

In this exercise you are going to be building an app that displays a list of Sprints on the screen and lets you tick a checkbox to indicate you have completed that sprint.

To start, begin by having a look through the repository and familiarising yourself with it's contents. <br>
You will see that we are using React to break our app into components. <br>
You will also see that we are using Sass to break our CSS into different files too.<br>
Doing this makes things clearer and helps us (and others) understand our codebase better.<br>

For now the only file we are going to be working in is 'DashBoard.jsx' - so open that up alongside this file in splitscreen.<br>
If you click ctrl+shft+v now, this file will open in PREVIEW mode and will be a whole lot nicer to read...

Enter the following commands in your terminal to get this app up and running...

#### `npm i`
#### `npm i react`
#### `npm i sass`
#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Stage 1

Firstly I want to see a list of sprints that each have a name and a 'blurb' like this:

- "Sprint 1" "Introduction to HTML and CSS"

- "Sprint 2" "Introduction to JavaScript"

- "Sprint 3" "Logic in JavaScript"
 
- "Sprint 4" "Code Readability"

- "Sprint 5" "Introduction to React"

- "Sprint 6" "State in React"

Each of these sprints should be wrapped in their own `<div></div>` tags, with the className 'sprint-box'.



