import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = React.memo((props) => {
  const user = props.user;

  return (
    <div className={style.div}>
      <img src={user.photos.small} title="avatar" alt="" />
      <h1>Aloha, I am: {user.fullName}</h1>
      <h2>
        {user.aboutMe} my social network is: {user.contacts.vk}
      </h2>
    </div>
  );
});

export default ProfileInfo;
