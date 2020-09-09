import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://newsapi.org/v2/everything', 
    header: {
        Authorization: 
            '2a717d771d85444cb9cb8eda83414b88'
    }
}); 