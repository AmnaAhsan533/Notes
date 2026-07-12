## Custom React Element & Rendering Engine

A low-level implementation of a custom UI rendering engine designed to simulate how React processes JSX, constructs Virtual DOM object nodes, and parses them into concrete browser DOM elements.

### Key Learnings & Architecture Concepts

* **The Virtual DOM Object Structure:** Explored how React translates JSX behind the scenes into a standard JavaScript object tree (Virtual DOM). Implemented a custom object contract detailing the node `type`, element `props` (attributes), and nested node `children`.
* **Dynamic DOM Reconstruction:** Developed a modular `customRender` engine using native Web APIs (`document.createElement`, `setAttribute`, and `appendChild`) to dynamically construct HTML elements from object blueprints.
* **Scalable Property Mapping:** Refactored the renderer from hardcoded attributes to a robust `for...in` loop iteration scheme. This approach dynamically filters out structural keywords (like `children`) and maps an arbitrary number of HTML attributes programmatically, mimicking React's element mounting lifecycle.

### Code Implementation Architecture
1. **The Blueprint (`reactElement`):** A dictionary modeling an `<a>` anchor tag container.
2. **The Compiler (`customRender`):** Iterates over the properties collection dynamically, flags internal structure values, injects properties, and mounts the final element to the application's root DOM injection node (`#root`).