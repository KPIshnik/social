import styles from "./MyPosts.module.css";
import react from "react";

const newPostField = react.createRef();

export default function MyPosts(props) {
  let posts = props.posts.map((post) => {
    return (
      <div key={post.post} className={styles.postItem}>
        <img
          src="https://townsquare.media/site/366/files/2019/05/godsmack-sully-erna-performing-live.jpg?w=980&q=75"
          alt=""
        />
        {post.post}
        <p>like: {post.likes}</p>
      </div>
    );
  });

  return (
    <div>
      <div className={styles.addPostArea}>
        <textarea
          name="new_post"
          cols="30"
          rows="5"
          ref={newPostField}
          value={props.newPostText}
          onChange={() => props.apdateNewPostText(newPostField.current.value)}
          onFocus={() => (newPostField.current.value = "")}
        />
        <br />
        <button
          className={styles.addPostButton}
          onClick={() => props.addPost()}
        >
          add post
        </button>
      </div>

      <div className={styles.posts}>{posts}</div>
    </div>
  );
}
