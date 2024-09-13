import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Favorites(){
    const [setCurPage] = useOutletContext();
    useEffect(() => {
        setCurPage("favorites");
    }, []);

    return (
        <>
            <h1>Favorites Page</h1>
        </>
    )
}