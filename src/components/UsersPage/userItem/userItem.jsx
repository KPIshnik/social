import { NavLink } from "react-router-dom";
import style from "./userItem.module.css";
import * as axios from "axios";
const defaultAvatar =
  "https://www.dlf.pt/dfpng/middlepng/276-2761324_transparent-default-avatar-png-profile-no-image-icon.png";

export default function UserItem(props) {
  console.log(props.user.followed);
  const folow = props.user.followed ? "unfolow" : "folow";
  const avatar = props.user.photos.small;
  return (
    <div className={style.user}>
      <div className={style.avatar}>
        <NavLink to={"/profile/" + props.user.id}>
          <img
            src={avatar != null ? avatar : defaultAvatar}
            title="avatar"
            alt=""
          />
        </NavLink>
        <button
          className={style.toggleFollowButton}
          onClick={() => {
            if (props.user.followed) {
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "f29f15d9-daef-4e4c-bf61-557a9a73c91e",
                    },
                  }
                )
                .then((response) => {
                  if (response.data.resultCode === 0) {
                    props.toggleFolow(props.user.id);
                    console.log(props.user.followed);
                  }
                });
            } else {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "f29f15d9-daef-4e4c-bf61-557a9a73c91e",
                    },
                  }
                )
                .then((response) => {
                  console.log(response);
                  if (response.data.resultCode === 0) {
                    props.toggleFolow(props.user.id);
                    console.log(props.user.followed);
                  }
                });
            }
          }}
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
