// Project1.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery7 from '../gallery/project7Gallery';

function Project7() {
  return (
    <Box className="Project7">
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
            <Box as="h1">OpenRoad Energy Website</Box>
            <Box as="p" className="ProjectInfoBox" id="project6">This is a website I spent some time building for a mobile energy drink company.
            Currently running on ReactJS and SCSS, this web application is built to increase traffic and improve performance of sales/visitors using industry's latest standards
            for appearance and user experience.
            </Box>
            <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/openroad.git" target="_blank">Link to Github Repo</Link></Box>
          </Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery7 className="image-gallery"/>
        </Box>
      </Box>
     </Box>
  );
}

export default Project7;