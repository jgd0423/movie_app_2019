import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav="bigmac" />
      <Food fav="mango" />
    </div>
  );
}

export default App;
