import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://newsapi.org/v2', 
    // header: {
    //     apiKey: 
    //         'X-Api-key 2a717d771d85444cb9cb8eda83414b88'
    // }
}); 