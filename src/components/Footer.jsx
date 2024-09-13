import { Box } from "@mui/material"

export default function Footer({mode}){
    return (
        <Box className='footer' sx={{width: '100%', display: 'flex', justifyContent: 'center', pb: 4, pt: 2, gap: 4}}>
            <div style={{position: "relative"}}>
                <a href="https://github.com/beastgwert"></a>
                <i className="fa-brands fa-github" style={{color: mode == 'light' ? 'black' : 'white'}}></i>
            </div>
            <div style={{position: "relative"}}>
                <a href="https://www.linkedin.com/in/ajiang19/"></a>
                <i className="fa-brands fa-linkedin" style={{color: mode == 'light' ? 'black' : 'white'}}></i>
            </div>
            <div style={{position: "relative"}}>
                <a href="mailto:ajiang6002@gmail.com"></a>
                <i className="fa-regular fa-envelope" style={{color: mode == 'light' ? 'black' : 'white'}}></i>
            </div>
            <div style={{position: "relative"}}>
                <a href="https://www.instagram.com/albert._.jiang/"></a>
                <i className="fa-brands fa-instagram" style={{color: mode == 'light' ? 'black' : 'white'}}></i>
            </div>
        </Box>
    )
}