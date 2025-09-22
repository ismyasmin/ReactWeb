import { useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]); 


    return (  
        <div className="home">
            {/*fires a call back for each item, each item around we want to return jsx template & that's going to go inside parentheses*/ }        
            <p> {blogs.map((blog) => ( 
                <div className="blog-preview" key={blog.id}> 
                    <h2> {blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}</p>   
        </div>
    );
}
 
export default Home;