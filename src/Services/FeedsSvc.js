const FeedsSvc = (userName) => {

  const posts = [
    { username: "user1", desc: "the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfas afasdf asf asf the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfas afasdf asf asf the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfas afasdf asf asf the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfas afasdf asf asf  the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfas afasdf asf asf  the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdfthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf the desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf asfdasdf asdfas  asfdfthe desc afdasd asfddadfas afasdf asf asf asfasdfasf asf asfdasdf asdfas  asfdf ", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user2", desc: "the desc 2", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user3", desc: "Description 3", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user4", desc: "Description 4", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user5", desc: "Description 5", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user6", desc: "Description 6", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user7", desc: "Description 7", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user8", desc: "Description 8", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user9", desc: "Description 9", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user10", desc: "Description 10", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user48", desc: "Description 48", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user49", desc: "Description 49", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" },
    { username: "user50", desc: "Description 50", likes: Math.floor(Math.random() * 101) , pic: Math.random() < 0.5 ? "catPic.jpg" : "dogPic.jpg" }
  ];

    function getFollowingPosts() {
        return posts;
    };
  
  
    return {
        getFollowingPosts,

    };
  
  };

  export default FeedsSvc;