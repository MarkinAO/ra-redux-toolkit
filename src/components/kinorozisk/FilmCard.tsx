import style from './styles/FilmCard.module.scss';
import type { RootState, AppDispatch } from "./redux/store";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getFilmCard } from './redux/filmCardSlice';
import { useEffect } from 'react';
import Loder from './UI/Loder';

export default function FilmCard() {
    const dispatch = useDispatch<AppDispatch>();
    const film = useSelector((state: RootState) => state.filmCard.card)
    const loading = useSelector((state: RootState) => state.filmCard.loading)
    const { id } = useParams<string>();

    useEffect(() => {
        id && dispatch(getFilmCard(id))
    }, [dispatch])

    return(
        <>
            {loading && <Loder />}
            {!loading &&
            <>
                <div className={style.container}>
                    <div className={style.poster}>
                        <img src={film?.Poster} alt="" />
                    </div>
                    <div className={style.description}>
                        <h3 className={style.title}>{film?.Title}</h3>
                        <div>Year of production: <b>{film?.Year}</b></div>
                        <div>Country: <b>{film?.Country}</b></div>
                        <div>Genre: <b>{film?.Genre}</b></div>
                        <div>Director: <b>{film?.Director}</b></div>
                        <div>Actors: <b>{film?.Actors}</b></div>
                        <div>imdbRating: <b>{film?.imdbRating}</b></div>
                        <div>Runtime: <b>{film?.Runtime}</b></div>
                    </div>            
                </div>                
                <Link className={style.link} to={"/"}>Back</Link>
            </>            
            }
        </>        
    )
}