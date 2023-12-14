import FilmListItem from "./FilmListItem";
import { filmListItemProps } from "./types";
import type { RootState, AppDispatch } from "./redux/store";
import { useSelector, useDispatch } from 'react-redux';
import { getFilmList } from "./redux/filmListSlice";
import { useEffect } from "react";


export default function FilmList() {
    const dispatch = useDispatch<AppDispatch>();
    const filmList = useSelector((state: RootState) => state.filmList.list)
    const loading = useSelector((state: RootState) => state.filmList.loading)
    
    useEffect(() => {
        dispatch(getFilmList())
    }, [dispatch])

    return(
        <>
            {!loading &&
            filmList.map((film: filmListItemProps) => {
                return <FilmListItem film={{...film}} key={film.imdbID} />
            })}
        </>
    )
}