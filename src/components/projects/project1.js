// Project1.js
import './p1style.css';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

function Project1() {
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
        <Box as="section" id="project">
          <Box as="h1">Project 1</Box>
          <Box as="p">This is my first project (of my showcase). No literally, this entire website was built by me! 
           <br/><br/>I have experience in Angular and React, and I figured even if I don't necessarily want to work with it
          all the time, why not showcase it anyways :)</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Project1;