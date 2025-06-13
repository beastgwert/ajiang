import { Box, Fade, Link, Typography } from "@mui/material"

export default function Home(){
    return (
        <Fade in={true} timeout={1000}>
            <Box className="home-content" sx={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, pt: "4.5em"}}>
              <Box component="img" sx={{ 
                  borderRadius: '50%',
                  border: 1,
                  borderColor: 'secondary.main',
                  maxHeight: {xs: '25rem', md: '20rem'},
                  maxWidth: {xs: '25rem', md: '20rem'},
                }}
                alt="Beautiful picture of Albert"
                src="/pfp.webp"
              />
              <Typography variant='h2' sx={{fontWeight: '400'}}>
                Hi, I'm Albert!
              </Typography>
              <Typography variant='h5' sx={{width: {xs: '60%', md: '40%'}, fontSize: {xs: "1.5rem", md: "1.3rem"}, lineHeight: 1.5}}>
              I'm currently studying Computer Science at the University of Texas at Austin as a <Link href="https://www.cs.utexas.edu/turing-scholars" sx={{color: "secondary.main", textDecoration: "underline"}}>Turing Scholar</Link> 
              . In the past, I was involved in research in theoretical computer science during which I worked on optimizing algorithms for all kinds of networks. Lately, I've been focusing on creating functional and engaging apps, but my interests range from web development to machine learning to mathematics.
              </Typography>
              <Typography variant='h5' sx={{width: {xs: '60%', md: '40%'}, fontSize: {xs: "1.5rem", md: "1.3rem"}, lineHeight: 1.5}}>
              On a random day, you might find me hooping at the gym, reading a book, playing DOTA 2, or if you're really lucky, singing to myself while jogging outside at 2 AM. 
              </Typography>
              
            </Box>

            
        </Fade>
    )
}