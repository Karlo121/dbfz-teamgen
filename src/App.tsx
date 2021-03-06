import { characters } from "./data/data";
import { useState } from "react";
import Character from "./components/Character";

function App() {
  const [chars, setChars] = useState(characters);
  return (
    <div>
      <Character chars={chars} />
    </div>
  );
}

export default App;
