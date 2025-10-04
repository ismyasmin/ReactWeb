import {useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    return (
        <div className="create">
            <h2>Add a Blog</h2>
            <form>
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