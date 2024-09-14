import { Box, Typography } from "@mui/material"

export default function Home({mode}){
    return (
        <>
            <Box className="home-content" sx={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, pt: 10}}>
              <Box component="img" sx={{ 
                  borderRadius: '50%',
                  border: 1,
                  borderColor: 'secondary.main',
                  maxHeight: '15rem',
                  maxWidth: '15rem',
                }}
                alt="Beautiful picture of Albert"
                src="/pfp.webp"
              />
              <Typography variant='h2' sx={{fontWeight: '400'}}>
                Hi, I'm Albert!
              </Typography>
              <Typography variant='h5' sx={{width: '40%', fontSize: "1.3rem", lineHeight: 1.5}}>
              I'm currently studying Computer Science at the University of Texas at Austin as a Turing Scholar. In the past, I was involved in research in theoretical computer science during which I worked on optimizing algorithms for all kinds of networks. Lately, I've been focusing on creating functional and engaging websites, but my interests range from app development to machine learning to mathematics.
              </Typography>
              <Typography variant='h5' sx={{width: '40%', fontSize: "1.3rem", lineHeight: 1.5}}>
              On a random day, you might find me hooping at the gym, reading a book, playing DOTA 2, or if you're really lucky, singing to myself while jogging outside at 2 AM. 
              </Typography>
              
            </Box>

            
        </>
    )
}