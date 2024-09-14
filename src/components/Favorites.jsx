import { Fade } from "@mui/material";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Favorites(){
    const [setCurPage] = useOutletContext();
    useEffect(() => {
        setCurPage("favorites");
    }, []);

    return (
        <Fade in={true} timeout={500}>
            <h1>Favorites Page</h1>
        </Fade>
    )
}