# `Introducing Data!`

This repo is designed to help you learn how to integrate a database into your react-app in 4 stages:
1. Hard-code your data
2. Make an array of objects that stores your data
3. Move your data into a seperate file and display it using the Array.map() method
4. Set up 'local storage' using Dexie.

## Starting out...

Open this readme file in VS Code and click ctrl+shft+v. This file will open in PREVIEW mode and will be a whole lot nicer to read...💥

In this exercise you are going to be building an app that displays a list of Sprints on the screen and lets you tick a checkbox to indicate you have completed that sprint.

To start, begin by having a look through the repository and familiarising yourself with it's contents. <br>
You will see that we are using React to break our app into components. <br>
You will also see that we are using Sass to break our CSS into different files too.<br>
Doing this makes things clearer and helps us (and others) understand our codebase better.<br>

For now the only file we are going to be working in is 'DashBoard.jsx' - so open that up alongside this file in splitscreen.<br>


Enter the following commands in your terminal to get this app up and running...

#### `npm i`
#### `npm i react`
#### `npm i sass`
#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. 🤙 <br> 

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
    name: "Sprint 1",
    blurb: "Introduction to HTML and CSS"
  },
  {
    name: "Sprint 2",
    blurb: "Introduction to JavaScript"
  },
  {
    You have to write the rest....
  }
 ]
```
This array will sit inside your 'DashBoard.jsx' file inside the above the return.<br>

Nice, you have just made a type of dataset known as 'Static Storage'.
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

Once you have finished replacing all of your hard-coded information with the data from your sprintData array, you have successfully integrated a 'dataset' into your front-end. Congrats! 😊<br>

In the next stage we are going to spice things up a bit ... 🌶️

## Stage 3

In this stage we are going to do two things:
1. Seperate our data into a different file.
2. Remove our list of sprints and replace it with a function that uses the Array.map() method to map out a list of our sprints for us.

### Part 1

- Cut your ```const sprintData = [...]``` array out of the DashBoard.jsx file and paste it into a new file in the src folder called 'sprintData.js'.
- Add the term ```export``` before the ```const``` at the start of the file. This allows the data on this page to be imported into other files. Click [here](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) to learn more about imports and exports.
- Import your data into DashBoard.jsx by adding the following command to the top of the file: ```import {sprintData} from './sprintData'```

Your sprints should still load just the same as before, the only difference is that React is looking for your data in a seperate file. Have a look in the browser to see if everything is working...

### Part 2

This part is a little more complicated so you might want to refresh your memory on using the [Array.map() method](https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/) and remember to save your work!

- Say goodbye to all of your hard work in the DashBoard.jsx file and delete the line that says <DashBoard /> inside App.jsx. 😢
- Open up the DashBoardMapped.jsx file 
- Inbetween the fragment ```<></>``` tags add some curly braces: ```{}```. This lets React know that it should read your code inside these braces as JavaScript.
- Inside the curly braces you are going to map over your sprintData array and return a sprint-box for each object in the array. Have a look at the first couple of pictures in [this example](https://linguinecode.com/post/how-to-use-map-react) to try and figure out how to do this. 
- This is hard, so I have provided a cheatsheet... Your code is going to look like this:

```
{sprintData.map(sprint => {
  return(
    <div className='sprint-box'>
      <h1>{sprint.name}</h1>
      <p>{sprint.blurb}</p>
    </div>
  )
})}
```

Basically what we are telling React here is:
- Look into the sprintData array
- Give each object the name 'sprint'
- For each of those sprints return a chunk of code that contains the values assigned to the 'name' key and the 'blurb' key. This is just like what we did in Stage 2 but without the ```[0]``` array index position. Here we don't need to provide an index position because our Array.map() function is mapping out literally every object inside the array.

Have a look in the browser to see if everything is working... If it is, nice work! You have successfully imported some data into a React component and displayed that data using an array method that returns a JSX element! 🔥🔥🔥

## Stage 4

Get off your high horse, things are about to get a whole lot tougher 🤣

In this section we are going to install an external library called 'Dexie' that will allow us to store our data beyond the shores of our humble VS Code island...🏝️ With Dexie will be able to store our data INSIDE the browser in what is known as 'Local Storage'.<br>

This may be a little confusing to get your head around but essentially localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.