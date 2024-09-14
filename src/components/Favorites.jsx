import { Box, Fade, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import FavoriteEntry from "./FavoriteEntry";

const books = ['Tuesdays with Morrie (Mitch Albom)', 'When Breath Becomes Air (Paul Kalanithi)', 'Crying in H Mart (Michelle Zauner)', 'What If? (Randall Munroe)', 'The Happiest Refugee (Anh Do)', 'The Sea Wolf (Jack London)', 'Animal Farm (George Orwell)', "The Things They Carried (Tim O'Brien)", "The Courage to Be Disliked (Kishimi, Koga)"];
const shows = ['show1', 'show2', 'show3', 'show4']
export default function Favorites(){
    const [setCurPage] = useOutletContext();
    useEffect(() => {
        setCurPage("favorites");
    }, []);
    const [isOpen, setIsOpen] = useState({books: false, shows: false, animes: false})

    return (
        <Fade in={true} timeout={500}>
            <Box sx={{pl: '10%', pr: '10%', pt: 10, display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h3" sx={{fontWeight: 200, mb: 1}}>Favorites</Typography>
                <Typography sx={{fontSize: "1.2rem", mb: 2}}>Get to know a little bit more about me :)</Typography>

                <FavoriteEntry favoriteType='Books' items={books} isOpen={isOpen} setIsOpen={setIsOpen}/>
                <FavoriteEntry favoriteType='Shows' items={shows} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Box>
        </Fade>
    )
}