import "./ImageScroller.scss";
import catPic from "../../Assets/Images/catPic.jpg";
import dogPic from "../../Assets/Images/dogPic.jpeg";
import nextIcon from "../../Assets/Icons/arrow-right.svg";
import previousIcon from "../../Assets/Icons/arrow-left.svg";
import { useEffect, useState } from "react";
import PostSvc from "../../Services/PostSvc";
import React from 'react';

function ImageScroller({ postId: PostId, username,imageList }) {
  const [images, setImages] = useState([]);
  const [currentImgIndex, setcurrentImgIndex] = useState(0);
  const [imgArrLength, setimgArrLength] = useState(0);

  useEffect(() => {
    setImages(imageList);
    setimgArrLength(imageList.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clickNext() {
    setcurrentImgIndex(
      currentImgIndex === imgArrLength - 1 ? 0 : currentImgIndex + 1
    );

  }

  function clickPrevious() {
    setcurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? imgArrLength - 1 : prevIndex - 1
    );

  }

  return (
    <div className="ImageScrollerContainer">
      <div className="ImageScrollerContent">
        <div className="ImageCarousel">

          {images.map((img, i) => {
            return (
              (
                <img
                  className={
                    currentImgIndex === i ? 'fade' : 'slide fade'
                  }
                  key={i}
                  src={img.location}
                  alt=""
                />

              )
            );
          })}

        </div>
        {imgArrLength > 1 && (
          <div className="imgBtnContainer">
            <div className="imgBtnPrevContainer">
              <img
                alt="previous button"
                src={previousIcon}
                onClick={clickPrevious}
              />
            </div>
            <div className="imgBtnNextContainer">
              <img alt="next button" src={nextIcon} onClick={clickNext} />
            </div>
            <div className='dots'>
              {images.map((photo, i) => (
                <span
                  key={i}
                  className={
                    currentImgIndex === i ? 'dot active' : 'dot'
                  }
                  onClick={() => setcurrentImgIndex(i)}
                ></span>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default ImageScroller;
