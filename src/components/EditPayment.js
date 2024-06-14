import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./admin.css";

const EditPayment = () => {
  const [title, setTitle] = useState("");
  const [email_or_hp, setEmail_or_hp] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPaymentById();
  }, []);

  const getPaymentById = async () => {
    const response = await axios.get(`http://localhost:5000/payments/${id}`);
    setTitle(response.data.name);
    setEmail_or_hp(response.data.email_or_hp);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  const loadImages = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updatePayment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("email_or_hp", email_or_hp);
    try {
      await axios.patch(`http://localhost:5000/payments/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/paymentlist");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addfeed-container">
      <div className="addfeed-form-container">
        <form onSubmit={updatePayment} className="addfeed-form">
          <div className="addfeed-form-group">
            <label className="addfeed-label">Name</label>
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
            <label className="addfeed-label">Email or Phone</label>
            <div className="addfeed-input-container">
              <input
                className="addfeed-input"
                type="text"
                value={email_or_hp}
                onChange={(e) => setEmail_or_hp(e.target.value)}
                placeholder="Email or Phone"
              />
            </div>
          </div>

          <div className="addfeed-form-group">
            <label className="addfeed-label">Transaction Proof</label>
            <div className="addfeed-input-container">
              <div className="addfeed-file-input">
                <label className="addfeed-file-label">
                  <input type="file" onChange={loadImages} />
                  <span className="addfeed-file-text">
                  </span>
                </label>
              </div>
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
              <button type="submit" className="addfeed-button">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPayment;
