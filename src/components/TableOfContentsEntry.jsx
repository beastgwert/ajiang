import { Box, Divider, Typography } from "@mui/material";

export default function TableOfContentsEntry({projectName, projectDate}){
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Typography className="TOC-entry" color="primary" sx={{fontSize: '1.1rem', '&:hover':{cursor: "pointer", opacity: 0.8}}} onClick={() => {
                const e = document.getElementById(projectName);
                e?.scrollIntoView({
                    behavior: "smooth"
                })
            }}>
                {projectName}
            </Typography>
            <Divider sx={{flexGrow: 1, ml: 1, mr: 1, color: 'primary.main', bgcolor: 'primary.main', opacity: 0.2}}/>
            <Typography color="primary">{projectDate}</Typography>
        </Box>
    )
}