import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import Api1 from '../../Api1.png';
import Api2 from '../../Api2.png';

const images = [
  {
    original: Api1,
    loading: lazy,
  },
  {
    original: Api2,
    loading: lazy,
  },
];

class ProjectGallery5 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery5 ;