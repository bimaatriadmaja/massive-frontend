import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./admin.css";

const EditFeed = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [caption, setCaption] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getFeedById();
  }, []);

  const getFeedById = async () => {
    const response = await axios.get(`http://localhost:5000/feeds/${id}`);
    setTitle(response.data.name);
    setFile(response.data.image);
    setPreview(response.data.url);
    setCaption(response.data.caption);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateFeed = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("caption", caption);
    try {
      await axios.patch(`http://localhost:5000/feeds/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/feedlist");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-form-container">
        <form onSubmit={updateFeed} className="edit-form">
          <div className="edit-form-group">
            <label className="edit-label">Username</label>
            <div className="edit-input-container">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Username"
                className="edit-input"
              />
            </div>
          </div>

          <div className="edit-form-group">
            <label className="edit-label">Image</label>
            <div className="edit-input-container">
              <div className="edit-file-input">
                <label className="edit-file-label">
                  <input type="file" onChange={loadImage} />
                  <span className="edit-file-text">
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="edit-form-group">
            <label className="edit-label">Caption</label>
            <div className="edit-input-container">
              <input
                className="edit-input"
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Caption"
              />
            </div>
          </div>

          {preview ? (
            <figure className="edit-figure">
              <img src={preview} alt="Preview" className="edit-preview-image" />
            </figure>
          ) : (
            ""
          )}

          <div className="edit-form-group">
            <div className="edit-button-container">
              <button type="submit" className="edit-button">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFeed;