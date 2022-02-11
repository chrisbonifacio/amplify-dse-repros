import logo from "./logo.svg";
import "./App.css";
import { Auth, Storage } from "aws-amplify";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    let user = null;

    try {
      user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = async (e) => {
    const file = e.target.files[0];

    try {
      await Storage.put(file.name, file, {
        contentType: "image/png",
        resumable: true,
        completeCallback: (event) => {
          //It never calls completeCallback
          console.log("completeCallback", event);
        },
        progressCallback: (progress) => {
          //It works fine
          console.log(`progressCallback: ${progress.loaded}/${progress.total}`);
        },
        errorCallback: (err) => {
          console.error("errorCallback", err);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="file" onChange={onChange} />
      </header>
    </div>
  );
}

export default App;
