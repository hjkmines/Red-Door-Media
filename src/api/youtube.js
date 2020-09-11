import axios from 'axios'; 
const KEY = 'AIzaSyAedJTP3TNMjysG_M5bw-w4w2GlmEqeQ6I'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        type: 'video', 
        maxResults: 50, 
        key: KEY 
    }
}); 


