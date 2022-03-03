import React from "react";
import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { useAuthenticator } from "@aws-amplify/ui-react";

const UploadS3File = () => {
  const [file, setFile] = React.useState(null);

  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    await Storage.put(
      uuidv4(), // for unique key, otherwise file.name
      file,
      {
        resumable: true,
        completeCallback: (event) => {
          console.log(`Upload complete for ${event.key}`);
          //   handleCompleteUpload(event);
        },
        progressCallback: (progress) => {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
        errorCallback: (err) => {
          console.error("Unexpected error while uploading", err);
          //   handleErrorUpload(err);
        },
        metadata: {
          originalFileName: file.name,
        },
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={changeFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default UploadS3File;
