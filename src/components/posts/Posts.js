import "./post.scss";

const Posts = ({ post }) => {
  return (
      <div className="posts">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
  );
};

export default Posts;
