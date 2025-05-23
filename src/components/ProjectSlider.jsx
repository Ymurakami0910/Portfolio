import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const ProjectSlider = ({ imageGroups }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const openModal = (image, group) => {
    setSelectedImage(image);
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedGroup(null);
  };

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    pauseOnFocus: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnFocus: true,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          pauseOnFocus: true,
        },
      },
    ],
  };

  const modalSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      {imageGroups.map((group, index) => (
        <Slider key={index} {...settings}>
          {group.map((image, imgIndex) => (
            <div key={imgIndex} onClick={() => openModal(image, group)}>
              <img src={image} alt={`Slide ${imgIndex + 1}`} />
            </div>
          ))}
        </Slider>
      ))}

      {/* Tooltip definition (rendered once) */}
      <Tooltip
        id="modal-tooltip"
        place="top"
        delayShow={300}
        className="responsive-tooltip"
      />

      {/* Modal with slider */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Slider {...modalSettings}>
              {selectedGroup?.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    src={image}
                    alt={`Expanded view ${imgIndex + 1}`}
                    data-tooltip-id="modal-tooltip"
                    data-tooltip-content="Click outside to close"
                  />
                </div>
              ))}
            </Slider>
            <button className="close-modal" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
