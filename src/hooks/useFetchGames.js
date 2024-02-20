const authorization = import.meta.env.VITE_API_AUTHORIZATION;

const generatePrice = () => {
    const random = Math.random()*350;

    return random.toFixed(2);
}

export const fetchGames = async (url, query = '') => {

    try {
        const response = await fetch(`https://api.rawg.io/api/${url}?${query}&key=${authorization}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let convert = await response.json();

        //Add random price to games
        if(convert.results){
            const results = convert.results;

            let newResultsArray = [];
            results?.forEach((game) => {
                const gamePrice = generatePrice();
                const newGame = {...game, price: gamePrice}
                newResultsArray.push(newGame);
            })

            convert.results = newResultsArray;
        } else{
            const gamePrice = generatePrice();
            convert = {...convert, price : gamePrice}
        }

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

//POPULAR GAMES
export const getPopularGames = async(query = '') => {
    
    const result = await fetchGames(`games/lists/greatest`, `${query}`);

    return result;
}

//SCREENSHOTS
export const getAListOfScreenshots = async(gameId) => {
    const result = await fetchGames(`games/${gameId}/screenshots`);

    return result;
}