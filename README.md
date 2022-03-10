# `Introducing Data!`

This repo is designed to help you learn how to integrate a database into your react-app in 4 stages:
1. Hard-code your data
2. Move your data into an array ???
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

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. <br>

## Stage 1

Firstly I want to see a list of sprints that each have a name and a 'blurb' like this:

- "Sprint 1" "Introduction to HTML and CSS"

- "Sprint 2" "Introduction to JavaScript"

- "Sprint 3" "Logic in JavaScript"
 
- "Sprint 4" "Code Readability"

- "Sprint 5" "Introduction to React"

- "Sprint 6" "State in React"

Each of these sprints should be wrapped in their own `<div></div>` tags, with the className 'sprint-box'. <br>

Check out those cool looking sprints! 
We now have some hard-coded information that our app users can read, lets start to structure that information like a 'dataset'...

## Stage 2

In this next stage we are going to shift our list of sprints into an array called sprintData that looks like this: <br>

```
const sprintData = [
  {
    name: "Sprint Name",
    blurb: "Sprint Blurb"
  },
  {
    REPEAT...
  }
 ]
```
This array will sit inside your 'DashBoard.jsx' file inside the above the return.<br>

To use this dataset you need to replace each hard-coded value with the equivalent value stored in sprintData. 
Accessing the data for the first sprint box will look like this:

```
<div className='sprint-box'>
  <h1>{sprintData[0].name}</h1>
  <p>{sprintData[0].blurb}</p>
</div>
```
Some key things to note here are:
- [Array indexing starts at 0](https://blog.kevinchisholm.com/javascript/javascript-array-length-always-one-higher/#:~:text=Arrays%20in%20JavaScript%20are%20zero,2%E2%80%9D%2C%20and%20so%20on.)
- [Objects are made up of 'key: value' pairs](https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair/)

So here we are telling React: 
- Look into the sprintData array
- Select the first object in the array
- Give me the value of whatever has the 'name' key and display it inside the `<h1></h1>` tags
- Give me the value of whatever has the 'blurb' key and display it inside the `<p></p>` tags

