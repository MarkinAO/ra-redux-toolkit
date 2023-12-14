import { useEffect, useState } from 'react';
import style from './Search.module.scss';
import type { AppDispatch } from "./redux/store";
import { useDispatch } from 'react-redux';
import { getFilmList } from "./redux/filmListSlice";

export default function Search() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    let setDelay = true;
    useEffect(() => {
        if(setDelay) {
            dispatch(getFilmList(query))
            setDelay = false;
            setTimeout(() => setDelay = true, 500)
        }        
    }, [query])

    return(
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
    )
}