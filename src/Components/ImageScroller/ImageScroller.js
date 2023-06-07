import "./ImageScroller.scss";
import catPic from "../../Assets/Images/catPic.jpg";
import dogPic from "../../Assets/Images/dogPic.jpeg";
import nextIcon from "../../Assets/Icons/arrow-right.svg";
import previousIcon from "../../Assets/Icons/arrow-left.svg";
import { useEffect, useState, createRef } from "react";
import FeedsSvc from "../../Services/FeedsSvc";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from 'react';

function ImageScroller({ postId: PostId, username }) {
  const [images, setImages] = useState([]);
  const [currentImgIndex, setcurrentImgIndex] = useState(0);
  const [imgArrLength, setimgArrLength] = useState(0);
  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    let allImgList = [];
    const feedsSvc = FeedsSvc(username);
    allImgList = feedsSvc.getImages(PostId);
    allImgList = allImgList.map((item,index)=>{
      return({        
        pic : item.pic,
        postId : item.postId,
        nodeRef : createRef(null)}

      )
    })

    setImages(allImgList);
    setimgArrLength(allImgList.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function clickNext() {
    setIsNext(true);
    setcurrentImgIndex(
      currentImgIndex === imgArrLength - 1 ? 0 : currentImgIndex + 1
    );
   
  }

  function clickPrevious() {
    setIsNext(false);
    setcurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? imgArrLength - 1 : prevIndex - 1
    );

  }

  return (
    <div className="ImageScrollerContainer">
      <div className="ImageScrollerContent">
        {imgArrLength > 1 && (
          <>
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
          </>
        )}
        <TransitionGroup component={null}>
          {images.map((img, i) => {
            return (
              i === currentImgIndex && (
                <CSSTransition
                  timeout={1000}
                  classNames={isNext ? {
                    enter: 'right-to-left-enter',
                    enterActive: 'right-to-left-enter-active',
                    exit:'right-to-left-exit',
                    exitActive: 'right-to-left-exit-active'
                  }: {
                    enter: 'left-to-right-enter',
                    enterActive: 'left-to-right-enter-active',
                    exit:'left-to-right-exit',
                    exitActive: 'left-to-right-exit-active'
                  }}
                  key={i}
                >
                  <img
                    key={i}               
                    src={img.pic === "catPic.jpg" ? catPic : dogPic}
                    alt=""
                  />
                </CSSTransition>
              )
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default ImageScroller;
