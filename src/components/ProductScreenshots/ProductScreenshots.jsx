import { useEffect, useRef, useState } from "react";
import "./ProductScreenshots.scss";
import useFetchGames from "../../hooks/useFetchGames";

export default function ProductScreenshots({gameId}){
//FETCH SCREENSHOTS TO API
    //Screenshots List
    const [screenshotsList, setScreenshotsList] = useState([]);
    //fetch
    const updateState = (imagesObject) => {
        const imagesArray = [];
        imagesObject.map((object) => {
            imagesArray.push(object.image);
        })


        setScreenshotsList(imagesArray);
        setSelectedScreenshot(imagesArray[0]);

    }
    const getScreenshots = async () => {
        try {
            const url = `games/${gameId}/screenshots`;
            const result = await useFetchGames(url);

            updateState(result.results);
        
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getScreenshots();
    }, []);

//CHANGE SCREENSHOT VISUAL FUNCTION
    //DOM Elements
    const screenshotsListElement = useRef({});

    //Selected Screenshot State
    const [selectedScreenshot, setSelectedScreenshot] = useState(screenshotsList[0]);
    
    //Handle change screenshot
    const handleChangeScreenshot = (e) => {
        screenshotsListElement.current.childNodes.forEach((el) => {
            el.classList.remove('selected');
        });

        const number = e.target.dataset.number;
        e.target.classList.add('selected');

        setSelectedScreenshot(screenshotsList[number]);
    }
    
    return (
        <section className="section-screenshots">
            <h2 className="section-title">Capturas de Tela</h2>
            <div className="main-screenshot">
                <img src={selectedScreenshot} alt="" />
            </div>

            <div className="screenshots-list" ref={screenshotsListElement}>
                <button className="screenshot-item selected" data-number="0" onClick={handleChangeScreenshot}>
                    <img src={screenshotsList[0]} alt="" />
                </button>
                <button className="screenshot-item" data-number="1" onClick={handleChangeScreenshot}>
                    <img src={screenshotsList[1]} alt="" />
                </button>
                <button className="screenshot-item" data-number="2" onClick={handleChangeScreenshot}>
                    <img src={screenshotsList[2]} alt="" />
                </button>
            </div>
        </section>
    )
}