import "./CreatePost.scss";
import uploadIcon from "../../Assets/Icons/upload.svg";
import { ChangeEvent,useRef, useState, useEffect } from "react";
import PostSvc from "../../Services/PostSvc";

function CreatePost() {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImages, setSelectedImages] = useState([]);
  const [postDescription, setPostDescription] = useState("");

  useEffect(()=>{
    if(selectedImages.length >0){
      setSelectedImage(selectedImages[selectedImages.length - 1]);
    }

    if(selectedImages.length === 0){
      setSelectedImage(null)
    }
 
  },[selectedImages])

  const handleFileChange = (e) => {
    if (e.target.files) {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImages(selectedImages => [...selectedImages, e.target.files[0]])
      }
    }
  };

  const clearPrev = (e)=>{
    e.currentTarget.value = null
  }

  const handleUploadClick = async () => {
    const username = localStorage.getItem("username");

    let formData = new FormData();
    formData.append("PostId",0);
    formData.append("UserId",1);
    formData.append("Description",postDescription);
    formData.append("Likes",0);
    formData.append("images",[]);

    for (const image of selectedImages) {
      formData.append("formFiles",image)
    }
    const res = await PostSvc().AddPost(formData);
    console.log(res);
  };

  function removeImg (i){
    setSelectedImages(selectedImages.filter((img,index)=> index !== i ))
    
  }

  return (
    <div className="CP-Container">
      <div className="CP-ImageUploader">
        <label htmlFor="file-upload"  className="CP-ImageContainer custom-file-upload"
          style={{ backgroundImage: `url(${uploadIcon})`}}> 
          {
            selectedImage &&(
              <img className="mainPreviewImg" alt="preview" src={URL.createObjectURL(selectedImage)}></img>
            ) 
          }
        </label>
        <input id="file-upload" type="file" onChange={handleFileChange} onClick={clearPrev} />
        <div className="CP-ImagePreviewGallery">
          {selectedImages.map((img,i)=>{
            return(
              <img onClick={()=>removeImg(i)} key={i} src={URL.createObjectURL(img)} className="imgPreview" alt="preview"></img>

            );

          })}
  
        </div>
      </div>
      <div className="CP-PostDetail">
        <label>Write about the post : </label>
        <textarea
          placeholder="...description"
          className="descTxtBox"
          name="postDesc"
          onChange={(e) => setPostDescription(e.target.value)}
        />
        <input className="PostBtn" onClick={handleUploadClick} type="button" value="Post" />
      </div>
    </div>
  );
}

export default CreatePost;
