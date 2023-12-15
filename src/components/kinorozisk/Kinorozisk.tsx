import Search from "./Search";
import FilmCard from "./FilmCard";
import { Routes, Route } from "react-router-dom";

export default function Kinorozisk() {
    return(
        <Routes>
            <Route path="/" element={<Search />} />                
            <Route path="/:id" element={<FilmCard />} />
        </Routes>
    )
}