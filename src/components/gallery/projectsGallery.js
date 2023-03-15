import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import web from '../../websitedemo.jpg';
import lamp from '../../lampdemo.png';
import wip from '../../workinprogress.jpeg';

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
    original: wip,
    loading: lazy,
  },
];

class ProjectsGallery extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectsGallery ;