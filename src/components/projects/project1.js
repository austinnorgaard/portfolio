// Project1.js
import '../../style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectGallery1 from '../gallery/project1Gallery';

function Project1() {
  return (
    <Box className="Project1">
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
            <Box as="h1">Portfolio Website</Box>
            <Box as="p" className="ProjectInfoBox" id="project1">I have frontend and backend experience in Angular, React.JS, MySQL, PostgreSQL, and some others. I enjoy working with these types of applications
              because I am often a creative person, and this is a great way to showcase that! Although this website is not very complex, most of the work I do with
              other sites is! Perhaps by the time you're reading this, I'll have greatly refreshed/updated this site, but for now please enjoy the simplicity :).
            </Box>
            <Box as="p" id="gitLink"><Link to="https://github.com/austinnorgaard/portfolio.git" target="_blank">Link to Github Repo</Link></Box>
          </Box>
        </Box>
        <Box as="section" className="image-gallery-wrapper">
          <ProjectGallery1 className="image-gallery"/>
        </Box>
      </Box>
     </Box>
  );
}

export default Project1;