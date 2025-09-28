import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState (null);  // store the error in a state to output to the browser. 
    // const [name, setName] = useState('mario');

    useEffect(() => { // setTimeout to simulate a real request that might be to some other server on the internet  
        setTimeout(() => {
            fetch('http://localhost:8000/blogs') //Endpoint: http://localhost:8000/blogs
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    setBlogs(data)
                    setIsLoading(false); // set loading message to false when data is fetched
                    setError(null); // set error to null as data is fetched
                }) // catches network error & fires a function
                .catch(err => { // error inside function as a parameter
                    setIsLoading(false);
                    setError(err.message); // can be throw Error message or network eror 
                }) 
        }, 1000); // function fires after 1 second then performs the fetch (dont do for a real world application, forcing user to wait an addtional second, only to simulate to make it a bit more realistic)
    }, []);
    

    return (  
        <div className="home">
            {/*conditonal rendering */}
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/*conditonal templating, logical evaluates the left first & if true, evaluates the right then outputs. - how to conditionally output parts of templates*/}
            {blogs && <BlogList blogs = {blogs} title ="All Blogs"/>}  {/*Property name in the tag with dynamic value*/}
        </div>
    );
}
 

export default Home;