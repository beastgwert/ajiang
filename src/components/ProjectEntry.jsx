import { Box, Button, Typography, Link } from "@mui/material";
import { useState, useEffect, useRef } from "react";

export default function ProjectEntry({projectTitle, projectDate, tags, caption, descriptions, imgSrc, linkNames, linkUrls}){
    const [isZoomed, setIsZoomed] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const timeoutRef = useRef(null);
    
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    
    const handleImageClick = (e) => {
        e.stopPropagation();
        setIsFadingOut(false);
        setIsZoomed(true);
    };
    
    const handleOverlayClick = () => {
        setIsFadingOut(true);
        
        timeoutRef.current = setTimeout(() => {
            setIsZoomed(false);
            setIsFadingOut(false);
        }, 300); 
    };
    
    return (
        <>
            <Box sx={{mt: 4, pl: '15%', pr: '15%', pt: 5, pb: 5}}>
                <Box id={projectTitle} className='project-entry' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box className="project-left" sx={{width: '60%'}}>
                        <Box className='project-header' sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Box className='project-top' sx={{display: 'flex', flexDirection: 'row', alignItems: 'end', gap: 1.5}}>
                                <Typography className="project-title" variant="h5" sx={{fontWeight: 700}}>{projectTitle}</Typography>
                                <Typography className="project-date" color="gray" sx={{fontSize: "1.2rem"}}>{projectDate}</Typography>
                            </Box>
            
                            <Box className='project-tags' sx={{display: 'flex', flexDirection: 'row', gap: 1}}>
                                {
                                tags.map((tag, i) => {
                                    return (<Button key={i} color="secondary" sx={{bgcolor: 'primary.hover', p: 0.5, pl: 1, pr: 1, minHeight: 0, minWidth: 0, borderRadius: 10, '&:hover': {cursor: 'auto'}}}> {tag} </Button>)
                                })
                                }
                            </Box>
                        </Box>
                        <Box className='project-info' sx={{mt: 2, display: 'flex', flexDirection: 'column', gap: 1.5}}>
                            <Typography sx={{fontSize: '1.3rem', fontWeight: 200}}>{caption}</Typography>
                            {
                                descriptions.map((description, i) => {
                                    return (<Typography key={i} sx={{ fontSize: "1.1rem", fontWeight: 350, lineHeight: 1.5}}>{description}</Typography>)
                                })
                            }
                            <Box className='project-links'>
                                <Typography sx={{fontWeight: 600}}>
                                    Links:
                                    {
                                        linkNames.map((linkName, i) => {
                                            return (<Link key={i} href={linkUrls[i]} sx={{fontSize: '1.1rem'}}color="secondary">{linkName}{i == linkNames.length - 1 ? '' : ','}</Link>)
                                        })
                                    }
                                </Typography>
                                
                            </Box>
                        </Box>
                    </Box>
                    <Box className='project-right' sx={{width: '30%'}}>
                        <Box 
                            component="img" 
                            sx={{ 
                                border: 1,
                                borderColor: 'secondary.main',
                                height: 'auto',
                                maxWidth: '100%',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                            alt="Project image"
                            src={`/${imgSrc}`}
                            onClick={handleImageClick}
                        />
                    </Box>
                </Box>
            </Box>
            {isZoomed && (
                <Box 
                    onClick={handleOverlayClick}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 99,
                        animation: isFadingOut ? 'fadeOut 0.3s ease-in forwards' : 'none'
                    }}
                >
                    <Box 
                        component="img"
                        sx={{
                            maxHeight: '90vh',
                            maxWidth: '90vw',
                            objectFit: 'contain',
                            animation: 'zoomIn 0.3s ease-out'
                        }}
                        src={`/${imgSrc}`}
                        alt="Project image (zoomed)"
                    />
                </Box>
            )}
        </>
    );
}