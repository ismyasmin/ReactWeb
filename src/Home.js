import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
 
    // const [name, setName] = useState('mario');

        useEffect(() =>
            { //setTimeout to simulate a real request that might be to some other server on the internet  
                setTimeout(() =>
                {
                    fetch('http://localhost:8000/blogs') //Endpoint: http://localhost:8000/blogs
                        .then(res =>{
                            return res.json()
                        })
                        .then((data) =>
                        {
                            // console.log(data);
                            setBlogs(data)
                            setIsLoading(false);
                        }); // function fires after 1 second then performs the fetch (dont do for a real world application, forcing user to wait an addtional second, only to simulate to make it a bit more realistic)
                },1000);
            },[]);
            

    return (  
        <div className="home">
            {isLoading && <div>Loading...</div>}
            {/*conditonal templating, logical evaluates the left first & if true, evaluates the right then outputs. - how to conditionally output parts of templates*/}
            {blogs && <BlogList blogs = {blogs} title ="All Blogs"/>}  {/*Property name in the tag with dynamic value*/}
        </div>
    );
}
 

export default Home;