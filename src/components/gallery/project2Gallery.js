import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import log1 from '../../logdemo.png';
import log2 from '../../logdemo2.png';
import log3 from '../../logdemo3.png';
import log3gif from '../../logdemo3.gif';
import log2gif from '../../logdemo2.gif';
import lamp from '../../lampdemo.png';
import lampclip from '../../lampclippingdemo.png';

const images = [
  {
    original: lamp,
    loading: lazy,
  },
  {
    original: log2gif,
    loading: lazy,
  },
  {
    original: log1,
    loading: lazy,
  },
  {
    original: lampclip,
    loading: lazy,
  },
  {
    original: log2,
    loading: lazy,
  },
  {
    original: log3,
    loading: lazy,
  },
  {
    original: log3gif,
    loading: lazy,
  },
];

class ProjectGallery2 extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showFullscreenButton={false} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ProjectGallery2 ;