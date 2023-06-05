const FeedsSvc = (userName) => {

  const posts = [
    { postId: "post1", username: "user1", desc: "the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfasthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfasthe desc afdasd asfddadfas afasdf asf asf asfas afdasd asfddadfas afasdf asf asf asfas ", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post2",username: "user2", desc: "the desc 2", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post3",username: "user3", desc: "Description 3", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post4",username: "user4", desc: "Description 4", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post5",username: "user5", desc: "Description 5", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post6",username: "user6", desc: "Description 6", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post7",username: "user7", desc: "Description 7", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post1",username: "user8", desc: "Description 8", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post2",username: "user9", desc: "Description 9", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post3",username: "user10", desc: "Description 10", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post4",username: "user48", desc: "Description 48", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post5",username: "user49", desc: "Description 49", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { postId: "post6",username: "user50", desc: "Description 50", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" }
  ];

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

    function getFollowingPosts() {
        return posts;
    };
  
    function getComments(postIdInput){
      return comments.filter(cmt=>cmt.postId ===postIdInput);
    }
  
    return {
        getFollowingPosts,
        getComments
    };
  
  };

  export default FeedsSvc;