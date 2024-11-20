import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import WeddingWebsite from '../../WeddingWebsite.png';
import WeddingLogin from '../../WeddingLogin.png';
import WeddingFAQs from '../../WeddingFAQs_1.mp4';
import WeddingRegistry from '../../WeddingRegistry_1.mp4';

const images = [
  {
    original: WeddingWebsite,
    loading: lazy,
  },
  {
    original: WeddingFAQs,
    loading: lazy,
  },
  {
    original: WeddingRegistry,
    loading: lazy,
  },
  {
    original: WeddingLogin,
    loading: lazy,
  },
];

class ProjectGallery6 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery6 ;