import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Verse = props => {
    const [passage, setPassage] = useState([]);
    const [verse, setVerse] = useState([]);
    const [translation, setTranslation] = useState("");


    const clickHandler = () => {
        const randomChapter = Math.round(Math.random() * (31-1));
        const randomVerse = Math.round(Math.random() * (31-1));

        axiosWithAuth().get(`v3/passage/text?q=Proverbs+${randomChapter}:${randomVerse}`)
            .then(response => {
                console.log(response.data)
                const passage = response.data.passages;
                setPassage(passage);
                setVerse(response.data.query);
                setTranslation("ESV");
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        clickHandler()
    }, [])
    
    return(
        <div className="generator">
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