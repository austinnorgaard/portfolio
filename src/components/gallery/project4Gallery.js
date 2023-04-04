import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import TC1 from '../../TC1.gif';

const images = [
  {
    original: TC1,
    loading: lazy,
  },
];

class ProjectGallery4 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery4 ;