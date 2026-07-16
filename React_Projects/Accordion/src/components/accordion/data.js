const data = [
  {
    id: '1',
    question: "What is React?",
    answer: "React is a popular open-source JavaScript library developed by Meta for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components that manage their own state."
  },
  {
    id: '2',
    question: "Components: Functional vs. Class",
    answer: "Components are the building blocks of a React application. While older codebases use Class components, modern React primarily uses Functional components. They are simple JavaScript functions that accept 'props' (inputs) and return JSX to describe what the UI should look like."
  },
  {
    id: '3',
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code directly inside your JavaScript files. React transforms JSX into actual DOM elements behind the scenes."
  },
  {
    "id": '4',
    question: "State vs. Props",
    answer: "Props (short for properties) are read-only inputs passed down from a parent component to a child component. State is a local, mutable data storage managed within the component itself. When state changes, the component re-renders to reflect the update."
  },
  {
    id: '5',
    question: "The useState Hook",
    answer: "The useState hook is a built-in function that lets you add state to functional components. It returns an array with two elements: the current state value, and a state setter function that allows you to update the value and trigger a re-render."
  }
]

export default data;