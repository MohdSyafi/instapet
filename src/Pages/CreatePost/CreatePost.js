import "./CreatePost.scss";
import uploadIcon from "../../Assets/Icons/upload.svg";
import { useState, useEffect } from "react";
import PostSvc from "../../Services/PostSvc";
import spinner from "../../Assets/Icons/Spinner.svg";
import Swal from "sweetalert2";
import utils from "../../Utils/utils";

function CreatePost() {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImages, setSelectedImages] = useState([]);
  const [postDescription, setPostDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedImages.length > 0) {
      setSelectedImage(selectedImages[selectedImages.length - 1]);
    }

    if (selectedImages.length === 0) {
      setSelectedImage(null);
    }
  }, [selectedImages]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImages((selectedImages) => [
          ...selectedImages,
          e.target.files[0],
        ]);
      }
    }
  };

  const clearPrev = (e) => {
    e.currentTarget.value = null;
  };

  const handleUploadClick = async () => {
    setIsLoading(true);
    const userId = localStorage.getItem("userId");
    let formData = new FormData();
    formData.append("PostId", 0);
    formData.append("UserId", userId);
    formData.append("Description", postDescription);
    formData.append("Likes", 0);
    formData.append("images", []);

    for (const image of selectedImages) {
      formData.append("formFiles", image);
    }
    await PostSvc().AddPost(formData);
    setIsLoading(false);
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Post has been created",
      customClass: utils().GetSwalCustomClass(),
    });

    setSelectedImage(null);
    setSelectedImages([]);
    setPostDescription("");
  };

  function removeImg(i) {
    setSelectedImages(selectedImages.filter((img, index) => index !== i));
  }

  return (
    <div className="CP-Container">
      <div className="CP-ImageUploader">
        <label
          htmlFor="file-upload"
          className="CP-ImageContainer custom-file-upload"
          style={{ backgroundImage: `url(${uploadIcon})` }}
        >
          {selectedImage && (
            <img
              className="mainPreviewImg"
              alt="preview"
              src={URL.createObjectURL(selectedImage)}
            ></img>
          )}
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          onClick={clearPrev}
        />
        <div className="CP-ImagePreviewGallery">
          {selectedImages.map((img, i) => {
            return (
              <img
                onClick={() => removeImg(i)}
                key={i}
                src={URL.createObjectURL(img)}
                className="imgPreview"
                alt="preview"
              ></img>
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
        {isLoading ? (
          <img src={spinner} alt="loading" />
        ) : (
          <input
          className="PostBtn"
          onClick={handleUploadClick}
          type="button"
          value="Post"
        />
        )}

      </div>
    </div>
  );
}

export default CreatePost;
