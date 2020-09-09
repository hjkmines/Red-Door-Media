import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 
            'Client-ID VE7dHBlfJnjUzOB7G4vP3vth2XkNZhZF_l3SWMgs1i8'
    }
}); 