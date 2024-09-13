import { Box, Typography } from "@mui/material"

export default function Home({mode}){
    return (
        <>
            <Box className="home-content" sx={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2.5, pt: 10}}>
              <Box component="img" sx={{ 
                  borderRadius: '50%',
                  border: 1,
                  borderColor: 'secondary.main',
                  maxHeight: '15rem',
                  maxWidth: '15rem',
                }}
                alt="Beautiful picture of Albert"
                src="/pfp.jpeg"
              />
              <Typography variant='h2' sx={{fontWeight: '400'}}>
                Hi, I'm Albert!
              </Typography>
              <Typography variant='h5' sx={{width: '50%' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              
            </Box>

            
        </>
    )
}