import style from "./userItem.module.css";

const defaultAvatar =
  "https://www.dlf.pt/dfpng/middlepng/276-2761324_transparent-default-avatar-png-profile-no-image-icon.png";

export default function UserItem(props) {
  const folow = props.user.isFolowed ? "unfolow" : "folow";
  const avatar = props.user.photos.small;
  return (
    <div className={style.user}>
      <div className={style.avatar}>
        <img
          src={avatar != null ? avatar : defaultAvatar}
          title="avatar"
          alt=""
        />
        <button
          className={style.toggleFollowButton}
          onClick={() => props.toggleFolow(props.user.id)}
        >
          {folow}
        </button>
      </div>
      <div className={style.userInfo}>
        <p>
          <span>{props.user.name}</span>
          <span>country</span>
          {/* <span>{props.user.country}</span> */}
        </p>
        <p>
          <span>{props.user.status}</span>
          <span> city</span>
          {/* <span>{props.user.city}</span> */}
        </p>
      </div>
    </div>
  );
}
