import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1'
})