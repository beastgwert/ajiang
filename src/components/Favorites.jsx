import { Box, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import FavoriteEntry from "./FavoriteEntry";

const books = ['Tuesdays with Morrie (Mitch Albom)', 'When Breath Becomes Air (Paul Kalanithi)', 'Crying in H Mart (Michelle Zauner)', 'What If? (Randall Munroe)', 'The Happiest Refugee (Anh Do)', 'The Sea Wolf (Jack London)', 'Animal Farm (George Orwell)', "The Things They Carried (Tim O'Brien)", "The Courage to Be Disliked (Kishimi, Koga)"];
const shows = ['Mushishi (2005-2006)', "Kino's Journey (2003)", '91 days (2016)', 'The Last of Us (2023)', 'Goblin (2016-2017)', 'Grand Blue (2018)', 'Katanagatari (2010)', 'Nodame Cantabile (2007)'];
const movies = ['Past Lives (2023)', 'Edge of Tomorrow (2014)', 'Across the Spider-Verse (2023)', 'Palm Springs (2020)', 'The Martian (2015)', 'Spirited Away (2001)', 'The House of Small Cubes (2008)', 'Maquia (2018)', 'Train to Busan (2016)']
const people = ['Jalen Brunson'];
const music = ['Late Registration (Kanye West)', 'Friday Night Lights (J. Cole)', '4:44 (Jay Z)', 'Swimming (Mac Miller)', 'Nothing Was the Same (Drake)', 'Attitude (Mrs. Green Apple)', 'Lilac (IU)', 'Sundays at the Village Vanguard (Bill Evans)'];
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
                <FavoriteEntry favoriteType='Movies' items={movies} isOpen={isOpen} setIsOpen={setIsOpen}/>
                <FavoriteEntry favoriteType='People' items={people} isOpen={isOpen} setIsOpen={setIsOpen}/>
                <FavoriteEntry favoriteType='Music' items={music} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </Box>
        </Fade>
    )
}