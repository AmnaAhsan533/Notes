# Star Rating Component

In this project, I built a highly interactive star rating component to master mouse events, dynamic styling, and complex index-based state tracking in React. 

### Key Technical Implementations & Learnings:

* **Dual-State Interaction:** Managed two separate states—`rating` (to save the finalized click selection) and `hover` (to track temporary visual previews as the mouse moves across the stars).
* **Array Reconstruction:** Utilized the JavaScript spread operator with `Array(noOfStars)` to dynamically generate a loopable array structure, converting a number prop into individual interactive elements.
* **Synchronized Mouse Events:** Implemented three distinct mouse event handlers to control the user experience flow:
  * `onClick` updates the permanent `rating` state to the selected index.
  * `onMouseEnter` temporarily updates the `hover` state to show a live preview of the highlight.
  * `onMouseLeave` resets the `hover` state back to the current active `rating` so the stars accurately revert to the saved selection.
* **Fallout Selection Logic:** Solved the state-fallback equation using logical OR (`hover || rating`) to determine which stars to color. Using a 1-based index calculation (`index <= (hover || rating)`), the UI dynamically assigns an `active` or `inactive` CSS class to render the correct number of highlighted stars.
* **Icon Integration:** Integrated third-party vector SVGs via the `react-icons` library (`FaStar`), manipulating their size and classes dynamically inside the map loop.