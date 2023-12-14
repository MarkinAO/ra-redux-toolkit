import style from './FilmCard.module.scss';
import { filmCardProps } from './types';

interface IFilmCard {
    film: filmCardProps
}

export default function FilmCard(props: IFilmCard) {
    const { film } = props;

    return(
        <div className={style.container}>
            <div className={style.poster}>
                <img src={film.Poster} alt="" />
            </div>
            <div className={style.description}>
                <h3 className={style.title}>{film.Title}</h3>
                <div>Year of production: <b>{film.Year}</b></div>
                <div>Country: <b>{film.Country}</b></div>
                <div>Genre: <b>{film.Genre}</b></div>
                <div>Director: <b>{film.Director}</b></div>
                <div>Actors: <b>{film.Actors}</b></div>
                <div>imdbRating: <b>{film.imdbRating}</b></div>
                <div>Runtime: <b>{film.Runtime}</b></div>
            </div>            
        </div>
    )
}