import "./App.css";
import Catalog from "./components/Catalog";

import { items } from "./db.items.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Catalog items={items} />
      </div>
    </div>
  );
}

export default App;
