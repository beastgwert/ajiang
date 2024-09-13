import { Box, Typography } from "@mui/material";
import ProjectEntry from "./ProjectEntry";
import TableOfContents from "./TableOfContents";

export default function Projects(){
    return (
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

            <Box sx={{mt: 5, pl: '15%', pr: '15%', pt: 5, pb: 5}}>
                <ProjectEntry
                projectTitle='Anime Showdown'
                projectDate='August 2024'
                tags={['React', 'Express', 'Databases', 'Game']}
                caption='A single-player, progression based card game.'
                descriptions={['Anime Showdown is a card game featuring nearly a dozen of the most iconic anime characters each with unique in-game abilities. Fight alongside and against your favorite characters, create a synergistic team, and level up your cards to fight stronger bosses as you progress through levels.',
                    "This was my first time using framer motion, and my experience with it has been pleasantly surprising; although I didn't delve too deep into its capabilities, I was able to create clean, animated transitions relatively painlessly.", 
                    "I plan to revisit this project sometime in the far future and add a multiplayer functionality (plus other cool features)."
                ]}
                imgSrc={'anime_showdown.png'}
                linkNames={['Github', 'Website']}
                linkUrls={['https://github.com/beastgwert/anime-showdown', 'https://anime-showdown.vercel.app/']}
                />
            </Box>
            <Box sx={{mt: 5, pl: '15%', pr: '15%', pt: 5, pb: 5}}>
                <ProjectEntry
                projectTitle='A2C Resume Builder'
                projectDate='June 2024'
                tags={['React', 'Tailwind']}
                caption='Highly customizable resume builder for college apps.'
                descriptions={["Applying for college is hard enough and there's no reason to make it harder than necessary. This app is designed to help high schoolers build a personalized resume, or at the very least, get an idea of how their current activities translate into a professional setting",
                     "This project was my gateway into React, and transitioning from vanilla JS was quite a learning curve—especially considering the amount of interactivity required."]}
                imgSrc={'a2c_resume_builder.png'}
                linkNames={['Github', 'Website']}
                linkUrls={['https://github.com/beastgwert/a2c-resume-builder', 'https://a2c-resume-builder.vercel.app/']}
                />
            </Box>
            <Box sx={{mt: 5, pl: '15%', pr: '15%', pt: 5, pb: 5}}>
                <ProjectEntry
                projectTitle='Command Line Chess'
                projectDate='June 2023'
                tags={['Ruby', 'OOP']}
                caption='Interactive chess from the terminal against an unintelligent bot.'
                descriptions={["My description",
                     "This project was my gateway into React, and transitioning from vanilla JS was quite a learning curve—especially considering the amount of interactivity required."]}
                imgSrc={'command_line_chess.png'}
                linkNames={['Github']}
                linkUrls={['https://github.com/beastgwert/chess-game']}
                />
            </Box>
        </Box>
    )
}