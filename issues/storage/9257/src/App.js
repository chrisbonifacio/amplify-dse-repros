import logo from "./logo.svg";
import "./App.css";
import { Storage } from "@aws-amplify/storage";
import { v4 as uuidv4 } from "uuid";

function App() {
  const uploadImageToS3 = async (file, id, type) => {
    // Upload file to s3 bucket

    return new Promise((resolve, reject) => {
      Storage.put(`instituteImages/institute_image_${id}`, file, {
        contentType: type,
        contentEncoding: "base64",
      })
        .then((result) => {
          console.log("File successfully uploaded to s3", result);
          resolve(true);
        })
        .catch((err) => {
          // setError({
          //   show: true,
          //   errorMsg: InstitutionBuilderDict[userLanguage]['messages']['uploaderr'],
          // });
          console.log("Error in uploading file to s3", err);
          reject(err);
        });
    });
  };

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
        <input
          type="file"
          onChange={(e) =>
            uploadImageToS3(e.target.files[0], uuidv4(), "image/jpeg")
          }
        />
      </header>
    </div>
  );
}

export default App;
