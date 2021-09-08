import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../components/posts/Posts";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setLoading(false)
      });
  }, []);

  if(loading) {
    return <div className="posts-container">Loading...</div>
  }

  return (
    <>
      <div className="dropdown">
        <p>{user.displayName} &#x27B7;</p>
        <div className="dropdown-content">
          <p>Logout!</p>
        </div>
      </div>

      <main className="posts-container">
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </main>
      <div className="add-new">
        <Link to="/add-new">Add new &#x271B;</Link>
      </div>
    </>
  );
};

export default Home;
