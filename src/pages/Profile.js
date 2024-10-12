import React, { Component } from "react";
import './Profile.css';
import profileImg from './profile.jpg'; // Đường dẫn đến hình ảnh trong thư mục pages


class Profile extends Component {
  render() {
    return (
      <>
        <div className="thanh">
          <span className="text">My Information</span>
        </div>
        <div className="profile-info">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <span>Name: Phạm Việt Hoàng</span>
          <span>Student code: B21DCCN393</span>
          <span>Class: D21HTTT05</span>
          <span>Email: pvhoang270201@gmail.com</span>
          <span>Phone: 0813226568</span>
          <span>Github: https://github.com/moneyinthebank18</span>
        </div>
      </>
    );
  }
}

export default Profile;
