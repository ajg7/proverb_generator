import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Verse = props => {
    const [passage, setPassage] = useState([])

    useEffect(() => {
        const randomChapter = Math.round(Math.random() * (31-1));
        const randomVerse = Math.round(Math.random() * (31-1));

        axiosWithAuth().get(`v3/passage/text?q=Proverbs+${randomChapter}:${randomVerse}`)
            .then(response => {
                const passage = response.data.passages;
                setPassage(passage)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return(
        <div className="verse-card">
            <h2>{passage}</h2>
        </div>
    )
}

export default Verse;