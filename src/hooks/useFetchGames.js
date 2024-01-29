import {authorization} from "../utils/authorizationAPI.js"

export const fetchGames = async (url, query = '') => {

    const response = await fetch(`https://api.rawg.io/api/${url}?${query}&key=${authorization}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const convert = await response.json();

    return convert;
}

export const getGameByGenre = async(genre) => {
    const result = await fetchGames('games', `genres=${genre}`);

    return result;
}

export const getSingleGame = async(gameId) => {
    const result = await fetchGames(`games/${gameId}`);

    return result;
}