import "./Banner.css";

export const Banner = ({bannerTitle, bannerSubtitle, backgroundImage }) => {

  const bannerStyle = {
    '--background-image': `url(${backgroundImage})`
  };

  return (
    <div className="Banner-container" style={bannerStyle}>
      <p className='Banner-title'>{bannerTitle}</p>
      <p className='Banner-subtitle'>{bannerSubtitle}</p>
    </div>
  )
};

