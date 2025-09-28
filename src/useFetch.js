import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState (null);  // store the error in a state to output to the browser. 

    useEffect(() => { // setTimeout to simulate a real request that might be to some other server on the internet  
        setTimeout(() => {
            fetch(url) // dont hardcode endpoint because might nto be the same endpoint in other files
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => { // data in const [data, setData] not as same in here. In here is a local version inside function so doesn't matter that the name clashes. 
                    setData(data)
                    setIsLoading(false); // set loading message to false when data is fetched
                    setError(null); // set error to null as data is fetched
                }) // catches network error & fires a function
                .catch(err => { // error inside function as a parameter
                    setIsLoading(false);
                    setError(err.message); // can be throw Error message or network eror 
                }) 
        }, 1000); // function fires after 1 second then performs the fetch (dont do for a real world application, forcing user to wait an addtional second, only to simulate to make it a bit more realistic)
    }, [url]); // url as dependency - whenevcer url changes, will re-run this function to get the data for that endpoint
    return {data, isLoading, error} // can use an array but object is used because order of these properties doesn't matter when we're destructing , can get one without the other if we wanted

}
export default useFetch;