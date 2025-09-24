import { useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]); 

    const handleDelete = (id) => 
        {
            const newBlogs = blogs.filter(blog => blog.id !== id);{/*to store the filtered array temporarily*/}
            setBlogs(newBlogs);
        }


    return (  
        <div className="home">
            <BlogList blogs = {blogs} title ="All Blogs" handleDelete={handleDelete}/> {/* Property name in the tag with dynamic value*/}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title ="Mario's Blogs"/> fires a callback function for each item in the array, if it returns true, it keeps it in the array. if false, it filters out the array & returns a new array with only the items that we dont filter out of it included & we're passing that data in then as a prop */}
        </div>
    );
}
 
export default Home;