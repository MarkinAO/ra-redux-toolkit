import FilmListItem from "./FilmListItem";
import { filmListItemProps } from "./types";
import type { RootState, AppDispatch } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getFilmList } from "./redux/filmListSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./styles/FilmList.module.scss";
import Loder from "./UI/Loder";

export default function FilmList() {
    const dispatch = useDispatch<AppDispatch>();
    const filmList = useSelector((state: RootState) => state.filmList.list)
    const loading = useSelector((state: RootState) => state.filmList.loading)
    
    useEffect(() => {
        dispatch(getFilmList())
    }, [dispatch])
    
    return(
        <>
            {loading && <Loder />}
            {!loading &&
            filmList.map((film: filmListItemProps) => {                
                return film.noresult ? "No result" :
                    <Link className={style.link} to={`/${film.imdbID}`} key={film.imdbID}>
                        <FilmListItem film={{...film}} />
                    </Link>                
            })}
        </>
    )
}