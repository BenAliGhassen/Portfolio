import '../../Styles/HomeStyle/Education/Carousel/Carousel.css'
import CardComp from './Card';
import Slider from "react-slick";
function CarouselComp({diplomes,description,univ,dates}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "1px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              centerPadding: "0px",
            }
          },
          {
            breakpoint: 768,
            settings: {
                infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              fade: true,
              className: "center",
              centerMode: true,
              waitForAnimate: false,
              centerPadding: "16px",
            }
          },
          {
            breakpoint: 480,
            settings: {
                infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              centerMode: true,
              centerPadding: "16px",
              waitForAnimate: false,
              arrows: false
            }
          }
        ]
      };

    return (
        <div className="slider-container d-felx justify-content-center">
          <Slider {...settings}>
            {diplomes.map((diplome,index)=>(
                <div>
              <CardComp diplome={diplome} description={description[index]} univ={univ[index]} date={dates[index]}/>
                </div>
            ))}
            
          </Slider>
        </div>
      );
    }
export default CarouselComp;
