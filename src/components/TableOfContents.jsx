import { Box, Divider, Typography } from "@mui/material";
import TableOfContentsEntry from "./TableOfContentsEntry";

export default function TableOfContents(){
    return (
        <Box className = 'table-contents' sx={{mt: 5, pl: '25%', pr: '25%', pt: 5, pb: 5, bgcolor: 'secondary.main'}}>
            <Typography variant="h5" color="primary" sx={{fontWeight: '800', mb: 2}}>
                Table of Contents
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                <TableOfContentsEntry projectName="Anime Showdown" projectDate="Aug 2024"/>
                <TableOfContentsEntry projectName="A2C Resume Builder" projectDate="Jun 2024"/>
                <TableOfContentsEntry projectName="Command Line Chess" projectDate="Jun 2023"/>
                
            </Box>
        </Box>
    )
}