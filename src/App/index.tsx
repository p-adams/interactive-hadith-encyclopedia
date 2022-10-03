import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "./index.css";

const GET_BIOGRAPHIES = gql`
  query Query {
    biographies {
      id
      data
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BIOGRAPHIES);
  return (
    <div className="App">
      <header>
        <h2>Interactive Hadith Encyclopedia</h2>
      </header>
      <main>
        {error && <div className="error-view">error</div>}
        {loading && <div className="loading-view">loading...</div>}
        {/* TODO: extract to table component */}
        <div className="biographies-table rtl-text">
          <div className="cell">id</div>
          <div className="cell">data</div>
          {data?.biographies.map((biography: any, idx: number) => (
            <React.Fragment key={idx}>
              <div className="cell">{biography.id}</div>
              <div className="cell">{biography.data}</div>
            </React.Fragment>
          ))}
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
