// Project5.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery5 from '../gallery/project5Gallery';

function Project5() {
  return (
    <Box className="Project5">
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
            <Box as="h1">Rest API</Box>
            <Box as="p" className="ProjectInfoBox" id="project5"> A backend Rest API written with ExpressJS on JavaScript. Handles the actions for the database in the FieldTrainer WebApp.
            </Box>
            <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/FTAPI.git" target="_blank">Link to Github Repo</Link></Box>
          </Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery5 className="image-gallery"/>
        </Box>
      </Box>
     </Box>
  );
}

export default Project5;