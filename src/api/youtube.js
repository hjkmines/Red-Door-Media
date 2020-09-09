import axios from 'axios'; 
const KEY ='AIzaSyDI-hE15uAVe-mZJ_BXNDskuSUkTUgD9_c'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippt', 
        type: 'video', 
        maxResults: 10, 
        key: KEY 
    }
}); 


