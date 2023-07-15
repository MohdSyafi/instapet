import axios from "axios";
import utils from "../Utils/utils";

const PostSvc = (userName) => {

  const PostUrl = utils().GetApiUrl() + '/Post/';

  const comments = [
    { username: "user1", comment: "the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user1", comment: "the desc", postId: "post1" },
    { username: "user2", comment: "the desc 2",  postId: "post2"  },
    { username: "user3", comment: "Description 3",postId: "post3"   },
    { username: "user4", comment: "Description 4", postId: "post3"  },
    { username: "user5", comment: "Description 5",postId: "post2"   },
    { username: "user6", comment: "Description 6", postId: "post2"  },
    { username: "user7", comment: "Description 7", postId: "post1"   },
    { username: "user8", comment: "Description 8", postId: "post1"   },
    { username: "user9", comment: "Description 9", postId: "post1"  },
    { username: "user10", comment: "Description 10", postId: "post4"  },
    { username: "user48", comment: "Description 48", postId: "post3"  },
    { username: "user49", comment: "Description 49",postId: "post1"  },
    { username: "user50", comment: "Description 50", postId: "post3" }
  ];

  const images = [
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post7" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post6" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post49" },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post2"  },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post3"   },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post3"  },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post2"   },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post2"  },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1"   },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post5"   },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1"  },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post4"  },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post50"  },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post1"  },
    {pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" , postId: "post3" }
  ];

    async function getFollowingPosts(UserId) {
      try {
        const response = await axios.get(PostUrl +'GetPosts', {
          params: {
            userId: UserId
          }
        });
        let posts = response.data;
        return posts;
      } catch (error) {
        console.log(error);
        return false;
      }
    };
  
    function getComments(postIdInput){
      return comments.filter(cmt=>cmt.postId ===postIdInput);
    }

    function getImages(postIdInput){
      return images.filter(pic=>pic.postId ===postIdInput);
    }

    async  function AddPost(param){
      try {
        const response = await axios.post( PostUrl +'AddPost', param);
        return response.data;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  
    return {
        getFollowingPosts,
        getComments,
        getImages,
        AddPost
    };
  
  };

  export default PostSvc;