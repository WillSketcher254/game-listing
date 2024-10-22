import axios from "axios";


const key = '342e68505a734426935d9404269a17b8';

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key=' + key);
const getAllGames = axiosCreate.get('/games?key=' + key);
const getGamesByGenreId = (id) => axiosCreate.get('/games?key=' + key + '&genres=' + id)

export default {
    getGenreList,
    getAllGames,
    getGamesByGenreId
}