import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import bible from "../assets/bible.png";

const Verse = props => {
    const [passage, setPassage] = useState([]);
    const [verse, setVerse] = useState([]);
    const [translation, setTranslation] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const isMobile = window.innerWidth <= 500;


    const clickHandler = () => {
        const randomChapter = Math.round(Math.random() * (31-1));
        const randomVerse = Math.round(Math.random() * (31-1));

        axiosWithAuth().get(`v3/passage/text?q=Proverbs+${randomChapter}:${randomVerse}/`)
            .then(response => {
                console.log(response.data)
                setPassage(response.data.passages);
                setVerse(response.data.query);
                setTranslation("ESV");
                setLoading(false);
            })
            .catch(error => {
                console.log(error)
                setError(true);
                setLoading(false);
            })
    }

    useEffect(() => {
        clickHandler()
    }, [])


    return(
        <>
            <div className="verse-card">
                {loading ? <div className="loading-message">Loading Verse....</div> : null}
                {isMobile 
                    ? 
                    <h1>Use Desktop to View Content</h1>
                    :
                    <>
                    <div className="bible">
                        <img src={bible} alt="a bible" />
                    </div>
                    <div className="passage">
                        <h2>{passage}</h2>
                    </div>
                    <div className="verse-title">
                        <h2>{verse} {translation}</h2>
                    </div>
                    <div className="random-verse-button">
                        <button onClick={clickHandler}>Random Verse!</button>
                    </div>
                    </>
                }
            </div>
        </>
    )
}

export default Verse;