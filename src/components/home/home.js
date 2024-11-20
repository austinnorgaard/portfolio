// Home.js
import Box from '@mui/material/Box';
import '../../index';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import ProjectsGallery from '../gallery/projectsGallery';
import headshot from '../../Headshot.png'

function Home() {
    return (
        <Box className="Home">
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
            <Box as="main" id="main">
                <Box as="section" id="home">
                    <Box as="section" id="MeBox">
                        <Box as="section" id="WhoIAmBox">
                            <Box as="h1">Who I Am</Box>
                            <Box as="p">My name is Austin Norgaard. I am a software engineer, with a focus
                                on working towards something meaningful for the betterment of everyone, and where
                                I truly make an impact. Something interesting about me is that I am a musician,
                                so I am not only technical, but also creative and like to think outside of the box in a lot of situations.
                            </Box>
                        </Box>
                        <img id="headshot" src={headshot} alt="headshot"></img>
                    </Box>
                    <Box as="section" id="about">
                        <Box as="h1">About Me</Box>
                        <Box as="p">I've worked on several projects and have experience in C++, Java, Python, HTML, CSS, JavaScript, and React.<br/><br/>
                                    My passion for being a software engineer began in middle school, when I realized that typing a bunch of weird words could
                                    create amazing things. <br/>From then to now, I have made sure to do my absolute best to learn as much as I can in a bunch of different
                                    areas of technology to further develop my knowledge and to satisfy my hunger of interest. Personally, my favorite language to
                                    use is C++, however as of late, I have been working mostly with React.JS and MySQL. <br/><br/>A random fact about me is that I love cars and
                                    snowboarding. Currently I am working part time at a ski resort (free season pass) and I drive a 2015 BMW 428i. :)
                        </Box>
                    </Box>
                    <Box as="section" id="projects">
                        <Box as="h2"><Link to="/projects">My Projects</Link></Box>
                    </Box>
                    <Box as="section" className="image-gallery-wrapper">
                        <ProjectsGallery className="image-gallery"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;