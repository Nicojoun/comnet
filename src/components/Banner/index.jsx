import '../../assets/styles/Banner.scss';

function Banner({ bannerText, bannerClass }) {
  return (
    <div className={`banner ${bannerClass}`}>
      <p className='banner-title'>
        {bannerText}
      </p>
    </div>
  );
}

export default Banner;