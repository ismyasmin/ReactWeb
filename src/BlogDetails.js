import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams(); // allows to grab route parameters from the route
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    return (  
        <div className="blog-details">
            {/* <h2>Blog details -  { id } </h2> */}
            {isPending && <div>Loading...</div>} {/*lgical AND: thing on the right only outputs if the thing on the left is right*/}
            {error && <div>{error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;