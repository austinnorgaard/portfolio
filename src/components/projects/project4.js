// Project1.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery4 from '../gallery/project4Gallery';

function Project4() {
  return (
    <Box className="Project4">
      <Box as="header">
        <Box as="nav">
          <Sidebar />
            <ul id="nametag">
                <li><Link to="/" id="name">Austin Norgaard</Link></li>
            </ul>
            <ul className="desktop">
                <li><Link to="/">Home</Link></li>
                <li id="projectsLink"><Link to="/projects">Projects</Link></li>
                <li><Link to="/info">Contact Info/Links</Link></li>
            </ul>
        </Box>
      </Box>
      <Box as="main">
        <Box as="section" id="project">
          <Box>
            <Box as="h1">Project 4 - Temperature Unit Converter</Box>
            <Box as="p" id="project4"> A simple project that handles the conversion of degrees celsius to fahrenheit and vice-versa.
            </Box>
            <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/CelsiusToFahrenheit.git" target="_blank">Link to Github Repo</Link></Box>
          </Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery4 className="image-gallery"/>
        </Box>
      </Box>
     </Box>
  );
}

export default Project4;