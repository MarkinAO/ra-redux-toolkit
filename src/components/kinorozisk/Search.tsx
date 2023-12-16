import { useEffect, useState } from 'react';
import style from './styles/Search.module.scss';
import type { AppDispatch } from "./redux/store";
import { useDispatch } from 'react-redux';
import { getFilmList } from "./redux/filmListSlice";
import FilmList from './FilmList';

export default function Search() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const [abortController, setAbortController] = useState(new AbortController());

    useEffect(() => {           
        abortController.abort();
        const newController = new AbortController();
        setAbortController(newController);
        dispatch(getFilmList({query: query, abortSignal: newController.signal}));        
        return () => newController.abort();
    }, [query])

    return(
        <>
            <div className={style.container}>
                <h1>Movie search</h1>
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <FilmList />
        </>        
    )
}