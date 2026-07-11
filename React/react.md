## Why react was created?
- Ghost message problem
- State managed by --> JS and UI managed by --> DOM
- State and DOM didn't sync

React is a library (more freedom)

For mobile --> React-Native

For web --> React-DOM

Creating react app (don't use this, takes time alot )
```
npx create-react-app basicApp
npm run start
```
Creating react app using Vite Package
```
npm create vite@latest
```

ReactDOM --> creates a virtual DOM through which it can compare the differences with main DOM.

- Functions name should be capitalize
- File type should be jsx while returning html elements, if we have created the project with vite

## React Hooks

without hooks --> Problem in UI updation

React controls UI updation

### useState Hook
responsible for changing the state (propagate the change in the DOM), returns variable and a function

### Virtual DOM, Fibre and reconciliation

**createRoot** creates a DOM like structure and compare the changes and only updated the changed part

**React Fibre** is an ongoing implementation of React's core algorithm

Key features include:
- Ability to pause
- Abort
- Reuse the work

Reconcilation: the algorithm react uses to differenciate one tree with another