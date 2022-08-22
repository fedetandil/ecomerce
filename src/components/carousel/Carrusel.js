import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from "./images/SliderBici.png"
import SecondSlide from "./images/SliderHeladeras.png"
import ThirdSlide from "./images/Slider18csi.png"

export default function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={FirstSlide}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={SecondSlide}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={ThirdSlide}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

