import "./CreatePost.scss";
import uploadIcon from "../../Assets/Icons/upload.svg";
import { useRef, useState,useEffect } from "react";
import catPic from "../../Assets/Images/catPic.jpg";
function CreatePost() {


  return (
    <div className="CP-Container">
      <div className="CP-ImageUploader">
        <div
          className="CP-ImageContainer"
          style={{ backgroundImage: `url(${uploadIcon})` }}
        >
            <input className="uploadBtn" type="submit" value="upload" />
        </div>
        <div className="CP-ImagePreviewGallery">
            <img data-key={1} src={catPic} className="imgPreview" alt="preview"></img>
            <img src={catPic} className="imgPreview" alt="preview"></img>
            <img src={catPic} className="imgPreview" alt="preview"></img>
            <img src={catPic} className="imgPreview" alt="preview"></img>
            <img src={catPic} className="imgPreview" alt="preview"></img>
            <img src={catPic} className="imgPreview" alt="preview"></img>
            <img src={catPic} className="imgPreview" alt="preview"></img>
            <img src={catPic} className="imgPreview" alt="preview"></img>
        </div>
      </div>
      <div className="CP-PostDetail">
        <label>Write about the post : </label>
          <textarea
            placeholder="...description"
            className="descTxtBox"
            name="postDesc"
          />
          <input className="PostBtn" type="submit" value="Post" />
        </div>
    </div>
  );
}

export default CreatePost;
