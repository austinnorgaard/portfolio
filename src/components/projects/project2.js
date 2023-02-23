// Project2.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

function Project2() {
  return (
    <Box className="Project1">
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
      <Box as="main">
        <Box as="section" id="home">
          <Box as="h1">Project 2</Box>
          <Box as="p">This is my second project.</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Project2;