// Project1.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery6 from '../gallery/project6Gallery';

function Project6() {
  return (
    <Box className="Project6">
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
            <Box as="h1">Wedding Website</Box>
            <Box as="p" className="ProjectInfoBox" id="project6">This is my wedding website. I started from scratch, but this website is a fullstack application.
            Currently running on ReactJS, MySQL, ExpressJS/Node, apis, and SCSS, this web application is able to make requests to the backend for functions involving guest lists, user accounts,
            and even registry tracking from multiple sources!
            </Box>
            <Box as="p" id="gitLink"><Link to="https://wedding.norgaardfamily.com/" target="_blank">Link to Website</Link></Box>
            <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/wedding-web-application.git" target="_blank">Link to Github Repo</Link></Box>
          </Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery6 className="image-gallery"/>
        </Box>
      </Box>
     </Box>
  );
}

export default Project6;