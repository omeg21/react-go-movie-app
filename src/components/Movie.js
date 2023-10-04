import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie,setMovie] = useState({});

    let{ id } = useParams();

    useEffect(() =>{
        let myMovie ={
            id: 1,
            title:"Zoolander",
            release_date: "2001-08-27",
            runtime : 89,
            mpaa_rating : "R",
            despription : "Propelled to the top of the fashion world by a photogenic gaze he calls \"Blue Steel,\" dimwitted male model Derek Zoolander (Ben Stiller) thinks he's got a fourth consecutive win as Male Model of the Year in the bag. But, when his rival, Hansel (Owen Wilson), unexpectedly takes the crown, Derek is crushed. He becomes easy prey for fashion designer Jacobim Mugatu (Will Ferrell), who signs Derek to star in his \"Derelicte\" fashion show, then brainwashes him to kill Malaysia's prime minister."
        }

        setMovie(myMovie);
    },[id])
    return(
        <>
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date},{movie.runtime} minutes,{movie.mpaa_rating}</em></small>
            <hr />

            <p>{movie.despription}</p>

        </div>
        </>
    )
}

export default Movie;