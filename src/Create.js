import {useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false); /*set to false because when page is first loaded, not making a request,
     only after form is submitted */

    const handleSubmit = (e) =>{
        e.preventDefault(); // prevents the page from being refreshed when button is clicked on
        //no need to create an id when a post request is made as json server will automatically create a unique id
        const blog = {title, body, author}; //blog object

        setIsPending(true);

        // asynchronous & returns a promise; make a post request to this endpoint to add in a new blog. json adds in unique ie.
        fetch('http://localhost:8000/blogs', {  // second argument get the data and define the type of request is sending
            method: 'POST',
            headers: {"Content-Type": "application/json"}, // telling server the type of content sending with this request is json data
            body: JSON.stringify(blog) // change object into a json string
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        })
     
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

                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}

export default Create;