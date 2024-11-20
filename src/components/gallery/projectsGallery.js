import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import web from '../../websitedemo.png';
import lamp from '../../lampdemo.png';
import Api from '../../Api2.png';
import fg from '../../FG1.png';
import TC from '../../TC1.gif';
import WeddingWebsite from '../../WeddingWebsite.png';
import ProjectDelta from '../../ProjectDelta.png';
import OpenRoadEnergy from '../../OpenRoadEnergy.png';

const images = [
  {
    original: web,
    loading: lazy,
  },
  {
    original: OpenRoadEnergy,
    loading: lazy,
  },
  {
    original: ProjectDelta,
    loading: lazy,
  },
  {
    original: WeddingWebsite,
    loading: lazy,
  },
  {
    original: lamp,
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