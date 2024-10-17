import React, { useState, useContext } from "react";
import axios from "axios";
import "../css/FileUploadComponent.css";
import AuthContext from "./AuthContext";

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const { authToken } = useContext(AuthContext);
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken.access}`, 
          },
        }
      );
      setResponseData(response.data);
    } catch (err) {
      setError("File upload failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Your File Here</h2>
      <input type="file" className="file-input" onChange={handleFileChange} />
      <button
        className="upload-button"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {error && <div className="error-message">{error}</div>}

      {responseData.length > 0 && (
        <div className="response-box">
          <h3>Response Data:</h3>
          <ul className="response-data-list">
            {responseData.map((item, index) => (
              <li key={index}>
                <strong>URL:</strong> {item.url} <br />
                <strong>Content:</strong> {item.content} <br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;
