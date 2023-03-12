import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
  };
  return (
    <div className="w-full block">
      <Slider {...settings}>
        <img className=" h-auto md:h-[635px]" alt="img" src="/assets/images/banner1.jpg" />
        <img className="h-auto md:h-[635px]" alt="img" src="/assets/images/banner2.jpg" />
      </Slider>
    </div>
  );
}

export default SimpleSlider;
