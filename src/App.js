import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("http://universities.hipolabs.com/search?country=Indonesia")
    .then((respones) => {
      console.log(respones.data[16]);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>HELLO WE'RE GROUP 3</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
