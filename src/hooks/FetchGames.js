import {id, authorization} from "../utils/authorizationAPI.js"

export const FetchGames = async (url, content) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': '*/*',
            'Client-ID': id,
            'Authorization': `Bearer ${authorization}`
        },
        body: content
    });

    const convert = await response.json();

    return convert;
}

export default FetchGames;