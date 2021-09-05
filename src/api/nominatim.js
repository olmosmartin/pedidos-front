import axios from 'axios';

export const getNominatimReverse = async (lat, lon)=>{
    return await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
}