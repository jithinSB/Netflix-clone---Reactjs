import axios from 'axios';
import { baseUrl, imageUrl } from './constants/constants';
const instance = axios.create({
    baseURL: baseUrl,


});
export default instance;