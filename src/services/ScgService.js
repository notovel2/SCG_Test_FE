import axios from 'axios';
import { endpoint } from '../constants/config';
export const getPlaces = async () => {
    let response = await axios.post(`${endpoint}places`)
    return response
}