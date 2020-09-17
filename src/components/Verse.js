import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Verse = props => {
    const [passage, setPassage] = useState([]);
    const [verse, setVerse] = useState([]);
    const [translation, setTranslation] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const clickHandler = () => {
        const randomChapter = Math.round(Math.random() * (31-1));
        const randomVerse = Math.round(Math.random() * (31-1));

        axiosWithAuth().get(`v3/passage/text?q=Proverbs+${randomChapter}:${randomVerse}`)
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
            })
    }

    useEffect(() => {
        clickHandler()
    }, [])

    return(
        <div className="generator">
            {loading ? <div>Loading Verse....</div> : null}
            {error ? <div>This server lacks wisdom...</div> : null}
            <div className="verse-card">
                <h2>{passage}</h2>
                <h2>{verse} {translation}</h2>
            </div>
            <div className="random-verse-button">
                <button onClick={clickHandler}>Random Verse!</button>
            </div>
        </div>
    )
}

export default Verse;