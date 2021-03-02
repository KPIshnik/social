import styles from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

let AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="new_post"
        placeholder="new post here"
        cols="30"
        rows="5"
      />
      <br />
      <button className={styles.addPostButton} type="submit">
        add post
      </button>
    </form>
  );
};

AddPostForm = reduxForm({
  form: "addNewPost",
})(AddPostForm);

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

  function handleSubmit(data) {
    console.log(data);
    props.addPost(data.new_post);
  }
  return (
    <div>
      <div className={styles.addPostArea}>
        <AddPostForm onSubmit={handleSubmit} addPost={props.addPost} />
      </div>

      <div className={styles.posts}>{posts}</div>
    </div>
  );
}
