import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Carousel.css";
import Slide1 from "../images/Slide1.png";
import Slide2 from "../images/Slide2.png";
import Slide3 from "../images/Slide3.png";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <Carousel>
                <Carousel.Item className="carousel__item">
                    <img
                        className="carousel__image"
                        src={Slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img
                        className="carousel__image"
                        src={Slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img
                        className="carousel__image"
                        src={Slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Jumbotron;
