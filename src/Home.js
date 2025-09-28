import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

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