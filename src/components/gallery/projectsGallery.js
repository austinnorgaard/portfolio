import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import web from '../../websitedemo.jpg';
import lamp from '../../lampdemo.png';
import Api from '../../Api2.png';
import fg from '../../FG1.png'
import TC from '../../TC1.gif';

const images = [
  {
    original: lamp,
    loading: lazy,
  },
  {
    original: web,
    loading: lazy,
  },
  {
    original: fg,
    loading: lazy,
  },
  {
    original: Api,
    loading: lazy,
  },
  {
    original: TC,
    loading: lazy,
  },
];

class ProjectsGallery extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectsGallery ;