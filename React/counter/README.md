## Project Learnings: React Hooks & State

In this project, I learned the core fundamentals of React state management and why Hooks are essential:

* **The Problem (Without Hooks):** Regular JavaScript variables change their values behind the scenes, but they **do not trigger a UI re-render**. The UI remains frozen because React doesn't know it needs to update the DOM.
* **The Solution (`useState`):** React Hooks solve this problem. `useState` allows us to create state variables. When the state changes, React automatically intercepts the change and re-renders the component, instantly updating the UI.

### Key Implementation
* Implemented a Counter application utilizing the `useState` hook.
* Learned how to update state safely using handler functions (`addValue` and `removeValue`).