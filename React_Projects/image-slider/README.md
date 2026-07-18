## React Image Slider Concepts

This project implements an interactive image slider component. Below are the key React and development concepts utilized in the code:

### 1. State Management (`useState`)
* **Data Fetching:** Tracks remote API data via an `images` array state.
* **UI Feedback:** Handles `loading` and `errMsg` conditional states to improve user experience during network requests.
* **Component Indexing:** Uses `currSlide` (integer) to actively track which image is currently in view.

### 2. Side Effects & Dependency Tracking (`useEffect`)
* Syncs the component state with an external API resource upon initial mount.
* Leverages a dependency array `[url, page, limit]` to trigger a fresh data fetch only when configuration props change.

### 3. Asynchronous Operations
* Implements a standard `async/await` pattern within a `try...catch` block to handle network responses safely and prevent component crashes on network errors.

### 4. Conditional Rendering
* Uses JavaScript ternary operators (`condition ? execution : null`) to conditionally load fallback UI states (loading text/error blocks) and prevent rendering crashes before data arrives.

