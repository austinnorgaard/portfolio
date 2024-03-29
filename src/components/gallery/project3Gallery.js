import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import FG1 from '../../FG1.png';
import FG2 from '../../FG2.png';
import FG3 from '../../FG3.png';

const images = [
  {
    original: FG1,
    loading: lazy,
  },
  {
    original: FG2,
    loading: lazy,
  },
  {
    original: FG3,
    loading: lazy,
  },
];

class ProjectGallery3 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery3 ;