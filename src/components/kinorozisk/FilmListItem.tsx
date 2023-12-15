import { filmListItemProps } from './types';
import style from './styles/FilmListItem.module.scss';

interface IFilm {
    film: filmListItemProps
}

export default function FilmListItem(props: IFilm) {
    const { film } = props;
    return(
        <div className={style.container}>
            <div className={style.poster}>
                <img src={film.Poster} alt="Poster" />
            </div>
            <div className={style.description}>
                <h2 className={style.title}>{film.Title}</h2>
                <div>Year of production: <b>{film.Year}</b></div>
            </div>
        </div>
    )
}