import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); 

    const [name, setName] = useState('mario');

        useEffect(() =>
            {
                fetch('http://localhost:8000/blogs') //Endpoint: http://localhost:8000/blogs
                .then(res =>{
                    return res.json()
                })
                .then((data) =>
                {
                    console.log(data);
                    setBlogs(data)
                })
            },[]);
            

    return (  
        <div className="home">
            {/*conditonal templating, logical evaluates the left first & if true, evaluates the right then outputs. - how to conditionally output parts of templates*/}
            {blogs && <BlogList blogs = {blogs} title ="All Blogs"/>}  {/*Property name in the tag with dynamic value*/}
        </div>
    );
}
 

export default Home;