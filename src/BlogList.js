import { Link } from "react-router-dom";

const  BlogList= ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2> {title}</h2>
        {/*fires a call back for each item, each item around we want to return jsx template & that's going to go inside parentheses*/ }        
        {blogs.map((blog) => ( 
            <div className="blog-preview" key={blog.id}>
                {/*dont want it in quotes because apart of it is gonna be dynamic, 
                the id and its gonna change for each blog. use curly braces to use js to output the string and use a template string instead to output variables inside it*/}
                <Link to= {`/blogs/${blog.id}`}> 
                <h2> {blog.title}</h2>
                <p>Written by {blog.author}</p>
                </Link>
            </div>
        ))} 
        </div>
    );
}
 
export default BlogList;