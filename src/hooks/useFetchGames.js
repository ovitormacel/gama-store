import {authorization} from "../utils/authorizationAPI.js"

export const fetchGames = async (url, query = '') => {

    try {
        const response = await fetch(`https://api.rawg.io/api/${url}?${query}&key=${authorization}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const convert = await response.json();

        return convert;

    } catch (error) {
        throw new Error(error.message);
    }
}

//GENRE
export const getGameByGenre = async(genre) => {
    const result = await fetchGames('games', `genres=${genre}`);

    return result;
}

//SINGLE
export const getSingleGame = async(gameId) => {
    const result = await fetchGames(`games/${gameId}`);

    return result;
}

//SEARCH GAMES
export const getSearchedList = async(query) => {
    const result = await fetchGames('games', `search=${query}`);

    return result;
}

//ALL GAMES
export const getAllGames = async() => {
    const result = await fetchGames('games');

    return result;
}

//SCREENSHOTS
export const getAListOfScreenshots = async(gameId) => {
    const result = await fetchGames(`games/${gameId}/screenshots`);

    return result;
}