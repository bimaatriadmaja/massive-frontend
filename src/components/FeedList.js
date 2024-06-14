import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./admin.css";

const FeedList = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getFeeds();
  }, []);

  const getFeeds = async () => {
    const response = await axios.get("http://localhost:5000/feeds");
    setFeeds(response.data);
  };

  const deleteFeed = async (feedId) => {
    try {
      await axios.delete(`http://localhost:5000/feeds/${feedId}`);
      getFeeds();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-column">
        <div className="admin-div-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21dbecc2d40c839c7263c10dd4d8de944ebfab879c1a152ef5a2ab11531ce5dc?"
            className="admin-img"
          />
          <div className="admin-div-4">
            <Link to="/userlist" className="admin-link">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e008047b762b62edd51adacb7d980cb9a6cdcec7e747298f8760bde52248f671?"
                className="admin-img-2"
              />
              <div className="admin-div-5">User</div>
            </Link>
          </div>
          <div className="admin-div-6">
            <a className="admin-link">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b67c319295272a24999dfd4e0fcafeb2094cbdbaace9d06ad78b2f541b35d87b?"
                className="admin-img-3"
              />
              <div className="admin-div-7">Feeds</div>
            </a>
          </div>
          <div className="admin-div-8">
            <a href="/paymentlist" className="admin-link">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/629918e3374ae6c70d3e573bc67450ee821e3ac77a3cf3197cbc4988d16e38c0?"
                className="admin-img-4"
              />
              <div className="admin-div-9">Payment</div>
            </a>
          </div>
        </div>
      </div>

      <div className="admin-table-container">
        <div className="admin-div-10">Feed Table</div>
        <Link to="/addfeed">
          <button className="admin-button-addnew">Add New Feed</button>
        </Link>
        <table className="admin-table">
          <thead className="admin-thead">
            <tr>
            <th>No</th>
              <th>Name</th>
              <th>Image</th>
              <th>URL</th>
              <th>Caption</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feeds.map((feed, index) => (
              <tr key={feed.id}>
              <td>{index + 1}</td>
                <td>{feed.name}</td>
                <td>
                  <figure>
                    <img
                      src={feed.url}
                      alt="Image"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </figure>
                </td>
                <td>
                  <a href={feed.url} target="_blank" rel="noopener noreferrer">
                    {feed.url}
                  </a>
                </td>
                <td>{feed.caption}</td>
                <td className="admin-table-actions-feed">
                  <Link to={`../editfeed/${feed.id}`}>
                    <button className="admin-button-edit-feed">Edit</button>
                  </Link>
                  <button
                    onClick={() => deleteFeed(feed.id)}
                    className="admin-button-delete-feed"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedList;
