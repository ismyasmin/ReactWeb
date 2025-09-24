const  BlogList= ({blogs, title, handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2> {title}</h2>
        {/*fires a call back for each item, each item around we want to return jsx template & that's going to go inside parentheses*/ }        
        {blogs.map((blog) => ( 
            <div className="blog-preview" key={blog.id}> 
                <h2> {blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)} >Delete blog</button>
            </div>
        ))} 
        </div>
    );
}
 
export default BlogList;