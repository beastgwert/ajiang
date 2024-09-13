import { Button, Link } from "@mui/material"

export default function ContactMe(){
    return (
        <Button component={Link} href="mailto:ajiang6002@gmail.com" color="secondary" variant='outlined' sx={{fontWeight: 'bold', border: 2, fontSize: '1.2rem'}}>Contact Me</Button>
    )
}