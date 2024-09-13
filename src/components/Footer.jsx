import { Box, Link } from "@mui/material"

export default function Footer({mode}){
    return (
        <Box className='footer' sx={{width: '100%', display: 'flex', justifyContent: 'center', pb: 4, pt: 2, gap: 4}}>
            <div style={{position: "relative"}}>
                <a href="https://github.com/beastgwert"></a>
                <Box className="footer-icon github fa-brands fa-github" sx={{color: mode == 'light' ? 'black' : 'white'}}></Box>
            </div>
            <div style={{position: "relative"}}>
                <a href="https://www.linkedin.com/in/ajiang19/"></a>
                <Box className="footer-icon linkedin fa-brands fa-linkedin" style={{color: mode == 'light' ? 'black' : 'white'}}></Box>
            </div>
            <div style={{position: "relative"}}>
                <a href="https://www.instagram.com/albert._.jiang/"></a>
                <Box className="footer-icon instagram fa-brands fa-instagram" style={{color: mode == 'light' ? 'black' : 'white'}}></Box>
            </div>
            <div style={{position: "relative"}}>
                <a href="https://open.spotify.com/user/12167111574"></a>
                <Box className="footer-icon email fa-brands fa-spotify" style={{color: mode == 'light' ? 'black' : 'white'}}></Box>
            </div>
        </Box>
    )
}