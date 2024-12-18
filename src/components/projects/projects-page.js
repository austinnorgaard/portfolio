import Box from '@mui/material/Box';
import '../../style.css';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import p1img from '../../websitedemo.png'
import p2img from '../../logdemo2.gif'
import p3img from '../../FG1.png';
import p4img from '../../TC1.gif';
import p5img from '../../Api2.png';
import p6img from '../../WeddingWebsite.png';
import p7img from '../../OpenRoadEnergy.png';
import p8img from '../../ProjectDelta.png';

function Projects() {
    return (
        <Box className="Projects">
            <Box as="header">
                <Box as="nav">
                    <Sidebar />
                    <ul id="nametag">
                        <li><Link to="/">Austin Norgaard</Link></li>
                    </ul>
                    <ul className="desktop">
                        <li><Link to="/">Home</Link></li>
                        <li id="projectsLink"><Link to="/projects">Projects</Link></li>
                        <li><Link to="/info">Contact Info/Links</Link></li>
                    </ul>
                </Box>
            </Box>
            <Box as="main" className="ProjectPage" id="main">
                <Box as="section" id="projects">
                    <Box as="h2" id="projectHeader">My Projects</Box>
                    <Box as="section" id="projectPacks">
                        <Link to="/projects/project1" id="projectPack">
                            <Link to="/projects/project1">Portfolio Website</Link>
                            <Link to='/projects/project1'><img src={p1img} alt="Project 1 img"/></Link>
                        </Link>
                        <Link to="/projects/project6" id="projectPack">
                            <Link to="/projects/project6">Wedding Website</Link>
                            <Link to='/projects/project6'><img src={p6img} alt="Project 6 img"/></Link>
                        </Link>
                        <Link to="/projects/project7" id="projectPack">
                            <Link to="/projects/project7">OpenRoad Website</Link>
                            <Link to='/projects/project7'><img src={p7img} alt="Project 6 img"/></Link>
                        </Link>
                        <Link to="/projects/project8" id="projectPack">
                            <Link to="/projects/project8">Project Delta Website</Link>
                            <Link to='/projects/project8'><img src={p8img} alt="Project 6 img"/></Link>
                        </Link>
                        <Link to="/projects/project2" id="projectPack">
                            <Link to="/projects/project2">3D Engine/Renderer</Link>
                            <Link to='/projects/project2'><img src={p2img} alt="Project 2 img"/></Link>
                        </Link>
                        <Link to="/projects/project3" id="projectPack">
                            <Link to="/projects/project3">Fuel Gauge</Link>
                            <Link to='/projects/project3'><img src={p3img} alt="Project 3 img"/></Link>
                        </Link>
                        <Link to="/projects/project4" id="projectPack">
                            <Link to="/projects/project4">Temperature Unit Converter</Link>
                            <Link to='/projects/project4'><img id="tcimg" src={p4img} alt="Project 4 img"/></Link>
                        </Link>
                        <Link to="/projects/project5" id="projectPack">
                            <Link to="/projects/project5">Rest API</Link>
                            <Link to='/projects/project5'><img src={p5img} alt="Project 5 img"/></Link>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Projects;