import { useEffect, useState } from "react";
import FlickrAPI from "../api/FlickrAPI";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await FlickrAPI.get('?', {
                params: {
                    method: 'flickr.photos.search',
                    tags: searchTerm,
                    format: 'json',
                    nojsoncallback: 1,
                    api_key:'*YOUR_API_KEY*'
                }
            }
            );
            setResults(response.data.photos.photo);
           // console.log(response.data.photos.photo)
        } catch (err) {
            setErrorMessage('Something went wrong...');
        }

    };

    useEffect(() => {
        searchApi('cat');
    }, []);

    return [searchApi, results, errorMessage];
};