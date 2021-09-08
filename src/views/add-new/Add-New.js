import { useRef, useState } from 'react';
import loader from '../../assets/loader.gif'
import './add-new.scss'
import {useHistory} from 'react-router-dom'

const AddNew = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const titleRef = useRef()
    const userIdRef = useRef()
    const bodyRef = useRef()

    const onFormSubmit = (e) => {
        e.preventDefault()

        const data = {
          "title": titleRef.current.value,
          "body": bodyRef.current.value,
          "userId": userIdRef.current.value
        }
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setLoading(false)
          history.replace('/')
        })
    }

  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <h2>Add new Post</h2>
        {/* <p className="error">{error}</p> */}
        <div className="form--details">
          <label htmlFor="email">Title</label>
          <input
            type="text"
            ref={titleRef}
            name="title"
            id="title"
            placeholder="Title"
            required
          />
        </div>
        <div className="form--details">
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            ref={userIdRef}
            name="userId"
            id="userId"
            placeholder="User Id"
            required
          />
        </div>
        <div className="form--details">
          <label htmlFor="email">Body</label>
          <textarea
            type="text"
            ref={bodyRef}
            name="body"
            id="body"
            placeholder="Write your text here"
            required
          />
        </div>
        <button disabled={loading} className="btn btn-gradient">
          {loading && loading ? (
            <img src={loader} alt="Loading Circles" />
          ) : (
            "Add"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddNew;
