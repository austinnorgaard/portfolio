import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import github from '../../github.png';
import linkedin from '../../linkedin.png';
import instagram from '../../instagram.png';

const email = "norgaustin@gmail.com";

function Info() {
    return (
        <Box className="Info">
            <Box as="header">
                <Box as="nav">
                    <ul id="nametag">
                        <li><Link to="/">Austin Norgaard</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li id="projectsLink"><Link to="/projects">Projects</Link></li>
                        <li><Link to="/info">Contact Info/Links</Link></li>
                    </ul>
                </Box>
            </Box>
            <Box as="main" id="main">
                <Box as="h1" id="content">Contact Info:
                    <Box as="p">austin norgaard</Box>
                    <Box as="p">email: <Link id="link" to={'mailto:' + email}>norgaustin@gmail.com</Link></Box>
                    <Box as="p">phone: 503-987-2311</Box>
                </Box>
                <Box as="h1" id="links">Links:<br/>
                    <Box>
                    <Link id="link" to="https://github.com/austinnorgaard" target="_blank"><Box as="img" src={github} alt="github" /></Link>
                    <Link id="link" to="https://linkedin.com/in/austinnorgaard" target="_blank"><Box as="img" src={linkedin} alt="linkedin" /></Link>
                    <Link id="link" to="https://instagram.com/austin_norgaard" target="_blank"><Box as="img" src={instagram} alt="instagram" /></Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Info;