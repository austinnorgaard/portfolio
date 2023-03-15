import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import wip from '../../workinprogress.jpeg';

const images = [
  {
    original: wip,
    loading: lazy,
  },
];

class ProjectGallery3 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery3 ;