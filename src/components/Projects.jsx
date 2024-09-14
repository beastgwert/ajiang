import { Box, Typography, Fade } from "@mui/material";
import ProjectEntry from "./ProjectEntry";
import TableOfContents from "./TableOfContents";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function Projects(){
    const [setCurPage] = useOutletContext();
    useEffect(() => {
        setCurPage("projects");
    }, []);

    return (
        <Fade in={true} timeout={500}>
            <Box>
                <Box className = 'project-intro' sx={{pl: '25%', pr: '25%', pt: 15, display: 'flex', flexDirection: 'column', gap: 3}}>
                    <Typography variant="h2">Projects</Typography>
                    <Typography variant="subtitle1" sx={{fontSize: '1.2rem', lineHeight: 1.5}}>
                        What I try to accomplish each project varies, but all of them have personal significance—whether it be exploring interesting ideas or learning new concepts or frameworks. 
                    </Typography>
                    <Typography variant="subtitle1" sx={{fontSize: '1.2rem', lineHeight: 1.5}}>
                        I am always open to collaborate so feel free to shoot me a message if you have any suggestions!
                    </Typography>
                </Box>
    
                <TableOfContents/>
    
                <ProjectEntry
                projectTitle='Anime Showdown'
                projectDate='August 2024'
                tags={['React', 'Express', 'Databases', 'Game']}
                caption='A single-player, progression based card game.'
                descriptions={['Anime Showdown is a card game featuring nearly a dozen of the most iconic anime characters each with unique in-game abilities. Fight alongside and against your favorite characters, create a synergistic team, and level up your cards to fight stronger bosses as you progress through levels.',
                    "This was my first time using framer motion, and my experience with it has been pleasantly surprising; although I didn't delve too deep into its capabilities, I was able to create clean, animated transitions relatively painlessly.", 
                    "I plan to revisit this project sometime in the far future and add a multiplayer functionality (plus other cool features)."
                ]}
                imgSrc={'anime_showdown.webp'}
                linkNames={['Github', 'Website']}
                linkUrls={['https://github.com/beastgwert/anime-showdown', 'https://anime-showdown.vercel.app/']}
                />
                <ProjectEntry
                projectTitle='A2C Resume Builder'
                projectDate='June 2024'
                tags={['React', 'Tailwind']}
                caption='Highly customizable resume builder for college apps.'
                descriptions={["Applying for college is hard enough and there's no reason to make it more difficult than necessary. This app is designed to help high schoolers build a personalized resume, or at the very least, learn how their current activities translate into a professional setting",
                        "This project was my gateway into React, and transitioning from vanilla JS was quite a learning curve—especially considering the amount of interactivity required in a resume builder."]}
                imgSrc={'a2c_resume_builder.webp'}
                linkNames={['Github', 'Website']}
                linkUrls={['https://github.com/beastgwert/a2c-resume-builder', 'https://a2c-resume-builder.vercel.app/']}
                />
                <ProjectEntry
                projectTitle='Command Line Chess'
                projectDate='June 2023'
                tags={['Ruby', 'OOP']}
                caption='Interactive chess from the terminal against an unintelligent bot.'
                descriptions={["Unfortunately, replit terminated their hosting services so in order to play the game you need to run the commands in the repo. The interface is pretty primitive by nature of the command line and pieces may vary in size depending on your specs. It should be nearly impossible to lose since the bot makes random moves, but let me know if you do! ",
                        "I started this project to practice object oriented programming and I may attempt to make my own chess AI in the future (ideally with a prettier interface) using Alpha-Beta pruning."]}
                imgSrc={'command_line_chess.webp'}
                linkNames={['Github']}
                linkUrls={['https://github.com/beastgwert/chess-game']}
                />
            </Box>
        </Fade>
    )
}