import {useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');

    const handleSubmit = (e) =>{
        e.preventDefault(); // prevents the page from being refreshed when button is clicked on
        //no need to create an id when a post request is made as json server will automatically create a unique id
        const blog = {title, body, author}; //blog object

        console.log(blog);
    }
    return (
        <div className="create">
            <h2>Add a Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}//change title when input value is changed. Target is this input
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create;