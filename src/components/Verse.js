import React, { useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Verse = props => {

        axiosWithAuth().get("v3/passage/text?q=Proverbs+2:4")
            .then(response => {
                console.log(response.data.passages)
            })
            .catch(error => {
                console.log(error)
            })
    


    return(
        <div className="verse-card">
        
        </div>
    )
}

export default Verse;