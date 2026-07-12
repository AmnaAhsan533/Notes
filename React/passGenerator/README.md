## 🔐 Advanced State Synchronization & Optimization (Password Generator)

An algorithmic utility application engineered to explore performance optimization hooks (`useCallback`), lifecycle managers (`useEffect`), and direct DOM referencing abstractions (`useRef`) within React.

### Key Learnings & Hook Architecture

* **`useCallback` (Performance Optimization & Memoization):** Learned how to optimize memory allocation by caching (memoizing) functions across component re-renders. Instead of recreating the core random generation algorithm on every micro-state change, `useCallback` structuralizes the function inside memory, regenerating it *only* when its specified dependencies (`length`, `numAllowed`, `charAllowed`) mutate.
* **`useEffect` (Lifecycle Automation):** Coupled the execution of the password generator directly to the state lifecycle. Any interactive adjustments made by the user (modifying the length slider or toggling checkboxes) instantly synchronize via dependencies to execute the side-effect automatically.
* **`useRef` (Direct DOM Referencing):** Used `useRef` to bridge the declarative state flow with imperative native Web APIs. By assigning a mutable reference (`passwordRef`) to the text input field, the app can directly trigger viewport focus behaviors, such as programmatic text range highlighting (`select()`) during user clipboard interactions.

### Code Implementation Metrics & State Architecture
1. **Memoized Logic Matrix:** Caches `passGenerator` and `copyPassToClip` routines to minimize downstream rendering overhead.
2. **Safe State Toggling:** Implemented functional state setter updates (`setNum((prev) => !prev)`) to secure race-condition immunity against rapid UI updates.
3. **Browser API Abstraction:** Integrates standard platform interfaces (`window.navigator.clipboard.writeText`) seamlessly into the functional component lifecycle.