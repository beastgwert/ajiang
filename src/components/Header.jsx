import { AppBar, Box, Button, Switch,} from "@mui/material"
import { Link } from 'react-router-dom';
import ContactMe from "./ContactMe";

export default function Header({toggleDark, curPage, changePage}){
    return (
        <AppBar position='none' elevation={0} sx={{pt: 3, pl: 6, pr: 6, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Switch defaultChecked color='primary.main' onClick={toggleDark}>

          </Switch>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', gap: 1.5}}>
            <Button component={Link} to="/" onClick={() => changePage('')} color="secondary" sx={{fontSize: '1.2rem', bgcolor: curPage == '' ? 'primary.hover' : null}}>Home</Button>
            <Button component={Link} to="/projects" onClick={() => changePage('projects')} color="secondary" sx={{fontSize: '1.2rem', bgcolor: curPage == 'projects' ? 'primary.hover' : null}}>Projects</Button>
            <Button component={Link} to="/favorites" onClick={() => changePage('favorites')} color="secondary" sx={{fontSize: '1.2rem', bgcolor: curPage == 'favorites' ? 'primary.hover' : null}}>Favorites</Button>
            <ContactMe/>
          </Box>
        </AppBar>
    )
}