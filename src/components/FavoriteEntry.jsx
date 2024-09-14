import { Box, List, ListItem, Typography } from "@mui/material"

export default function FavoriteEntry({favoriteType, items, isOpen, setIsOpen}){
    return (
        <Box className="favorite-entry" sx={{transition: 'all 0.2s ease 0s'}}>
            <Typography onClick={() => setIsOpen({...isOpen, [favoriteType]: isOpen[favoriteType] ? false : true})} variant="h5" sx={{'&:hover': {cursor: "pointer"}, textDecoration: 'underline'}}>{favoriteType}</Typography>
            <List className={`list-content ${isOpen[favoriteType] ? 'open' : null}`} sx={{listStyleType: 'disc', ml: 2}}>
            {
                items.map((item) => {
                    return(
                        <ListItem className="list-item" key={item} sx={{p: 0, fontSize: "1.1rem", display: 'list-item'}}>
                            {item}
                        </ListItem>
                    )
                })
            }
            </List>
        </Box>
    )
}