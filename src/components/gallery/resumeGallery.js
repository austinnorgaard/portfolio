import React, {lazy} from "react";
import ImageGallery from 'react-image-gallery';
import resume1 from '../../resume-1.png';
import resume2 from '../../resume-2.png';

const images = [
  {
    original: resume1,
    loading: lazy,
  },
  {
    original: resume2,
    loading: lazy,
  },
];

class ResumeGallery extends React.Component {
  render() {
    return <ImageGallery items={images} onSlide={0} showPlayButton={false} defaultWait={0}/>;
  }
  }

  export default ResumeGallery ;