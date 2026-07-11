## 🎨 Dynamic Background Color Changer

A mini-application designed to practice state-driven UI updates, inline dynamic styling, and utility-first responsive layout design using **React** and **Tailwind CSS**.

### Key Learnings & Concepts

* **Dynamic Inline Styles in JSX:** Learned how to pair React state directly with the HTML DOM `style` attribute using double curly braces `style={{ backgroundColor: color }}`. This enables the background layout to change instantly whenever the state updates.
* **State-Driven Event Handlers:** Used inline arrow functions inside `onClick` attributes (e.g., `onClick={() => setColor("red")}`) to safely pass parameters to the state dispatcher without triggering immediate execution on initial render.
* **Tailwind CSS Integration:** Implemented fully responsive layout utilities, absolute/fixed layout positioning (`fixed bottom-12`), flex container behaviors (`flex flex-wrap`), shadows, and rounded borders cleanly within standard class declarations.

### Code Snippet Breakdown
* **State Initialization:** `const [color, setColor] = useState("olive")` initializes the canvas theme.
* **State Updates:** Each interactive button explicitly invokes `setColor("color_name")`, triggering React's reconciliation loop to patch the background utility instantly without hard browser refreshes.