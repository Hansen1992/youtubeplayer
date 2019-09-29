import axios from 'axios';

const KEY = 'AIzaSyBr6PBNUv1F0J_oU2tPTug-OZL4XG_POko';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})