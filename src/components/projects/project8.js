// Project1.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery8 from '../gallery/project8Gallery';

function Project8() {
  return (
    <Box className="Project8">
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
            <Box as="h1">Project Delta Website</Box>
            <Box as="p" className="ProjectInfoBox" id="project6">This website was a design project for a minecraft server company. It is based in ReactJS and SCSS, and uses JavaScript
              to allow some basic user functions such as a FAQ's page, shop page, user events/popups, and more! Although less complex than other projects, this one was fun creatively and uses
              overlay video and animations.
            </Box>
            <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/project_delta.git" target="_blank">Link to Github Repo</Link></Box>
          </Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery8 className="image-gallery"/>
        </Box>
      </Box>
     </Box>
  );
}

export default Project8;