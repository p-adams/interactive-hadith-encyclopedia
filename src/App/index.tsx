import React, { useEffect, useState } from "react";
import AppAccordion from "../components/AppAccordion";
import "./index.css";
type Biography = {
  id: string;
  data: string;
};

const ENDPOINT = import.meta.env.VITE_API_URL;
function App() {
  const [bios, setBios] = useState<Biography[]>([]);
  useEffect(() => {
    fetch(ENDPOINT)
      .then((r) => r.json())
      .then((res: Biography[]) => setBios(res.slice(0, 5)));
  }, []);
  return (
    <div className="App">
      <header>
        <h2>Interactive Hadith Encyclopedia</h2>
      </header>
      <main>
        {/* TODO: extract to table component */}
        <div className="biographies-table rtl-text">
          <div className="cell">id</div>
          <div className="cell">data</div>
          {bios.map((bio, idx) => (
            <React.Fragment key={idx}>
              <div className="cell">{bio.id}</div>
              <div className="cell">{bio.data}</div>
            </React.Fragment>
          ))}
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
