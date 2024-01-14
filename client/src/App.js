import { useEffect } from "react";

function App() {
  useEffect(
    () => {
      fetch("/movies").then(r => r.json())
      .then((movies) => console.log(movies))
    }, []
  );

  return <h1>Check the console for the list of Movies!</h1>
}

export default App;