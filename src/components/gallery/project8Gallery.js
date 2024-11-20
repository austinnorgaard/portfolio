import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import ProjectDelta from '../../ProjectDelta.png';
import ProjectDelta2 from '../../ProjectDelta2.png';

const images = [
  {
    original: ProjectDelta,
    loading: lazy,
  },
  {
    original: ProjectDelta2,
    loading: lazy,
  }
];

class ProjectGallery8 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery8 ;