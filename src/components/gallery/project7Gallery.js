import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import OpenRoadEnergy from '../../OpenRoadEnergy.png';
import OpenRoadEnergy2 from '../../OpenRoadEnergy2.png';
import OpenRoadEnergy3 from '../../OpenRoadEnergy3.png';

const images = [
  {
    original: OpenRoadEnergy,
    loading: lazy,
  },
  {
    original: OpenRoadEnergy2,
    loading: lazy,
  },
  {
    original: OpenRoadEnergy3,
    loading: lazy,
  }
];

class ProjectGallery7 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery7 ;