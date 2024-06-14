import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../components/admin.css";

const FormAddFeed = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveFeed = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("caption", caption);
    try {
      await axios.post("http://localhost:5000/feeds", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/feeds");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addfeed-container">
      <div className="addfeed-form-container">
        <form onSubmit={saveFeed} className="addfeed-form">
          <div className="addfeed-form-group">
            <label className="addfeed-label">Username</label>
            <div className="addfeed-input-container">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Username"
                className="addfeed-input"
              />
            </div>
          </div>

          <div className="addfeed-form-group">
            <label className="addfeed-label">Image</label>
            <div className="addfeed-input-container">
              <div className="addfeed-file-input">
                <label className="addfeed-file-label">
                  <input type="file" onChange={loadImage} />
                  <span className="addfeed-file-text">
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="addfeed-form-group">
            <label className="addfeed-label">Caption</label>
            <div className="addfeed-input-container">
              <input
                className="addfeed-input"
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Caption"
              />
            </div>
          </div>

          {preview ? (
            <figure className="addfeed-figure">
              <img src={preview} alt="Preview" className="addfeed-preview-image" />
            </figure>
          ) : (
            ""
          )}

          <div className="addfeed-form-group">
            <div className="addfeed-button-container">
              <button type="submit" className="addfeed-button">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddFeed;
