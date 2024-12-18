import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import web from '../../websitedemo.png';

const images = [
  {
    original: web,
    loading: lazy,
  },
];

class ProjectGallery1 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery1 ;