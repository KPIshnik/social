import style from "./ProfileInfo.module.css";

export default function ProfileInfo(props) {
  const user = props.user;
  console.log(user);
  return (
    <div className={style.div}>
      <img src={user.photos.small} title="avatar" alt="" />
      <h1>Aloha, I am: {user.fullName}</h1>
      <h2>
        {user.aboutMe} my social network is: {user.contacts.vk}
      </h2>
    </div>
  );
}
