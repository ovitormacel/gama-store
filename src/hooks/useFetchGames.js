import {authorization} from "../utils/authorizationAPI.js"

export const useFetchGames = async (url) => {

    const apiURL = "https://api.rawg.io/api/"

    const response = await fetch(`${apiURL}${url}?key=${authorization}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const convert = await response.json();

    return convert;
}

export default useFetchGames;