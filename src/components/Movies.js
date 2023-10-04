import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies,setMovies] = useState([]);

    useEffect( () => {
        let moviesList = [
            {
                id: 1,
                title:"Zoolander",
                release_date: "2001-08-27",
                runtime : 89,
                mpaa_rating : "R",
                despription : "Propelled to the top of the fashion world by a photogenic gaze he calls \"Blue Steel,\" dimwitted male model Derek Zoolander (Ben Stiller) thinks he's got a fourth consecutive win as Male Model of the Year in the bag. But, when his rival, Hansel (Owen Wilson), unexpectedly takes the crown, Derek is crushed. He becomes easy prey for fashion designer Jacobim Mugatu (Will Ferrell), who signs Derek to star in his \"Derelicte\" fashion show, then brainwashes him to kill Malaysia's prime minister."
            },
            {
                id: 2,
                title:"raiders of The Lost Ark",
                release_date: "1981-06-12",
                runtime : 115,
                mpaa_rating : "PG-13",
                despription : "Indiana jones"
            },

        ];
        setMovies(moviesList)
    },[]);
    return(
        <>
        <div className="text-center">
            <h2>Movies</h2>
            <hr />
            <table className="table table-sriped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`}>
                                    {m.title}
                                </Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Movies;