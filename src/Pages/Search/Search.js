import "./Search.scss";
import spinner from "../../Assets/Icons/Spinner.svg"
import { useState, useEffect } from "react";
import placeholderPic from "../../Assets/Images/profilePic.png";
import SearchSvc from "../../Services/SearchSvc";
import Follow from "../../Components/Follow/Follow";
function Search() {

  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchInput !== "") {
        const userId = localStorage.getItem("userId");
        setIsSearching(true);
        setSearchResult([]);
        const res = await SearchSvc().GetUsers(searchInput, userId);
        setSearchResult(res.data);
        console.log(res.data);
        setIsSearching(false);
      } else
        setSearchResult([]);

    }, 1000)
    setIsSearching(false);
    return () => clearTimeout(timer)
  }, [searchInput])

  return (
    <div className="SearchContainer">

      <div className="SearchContent">
        <h1>Search</h1>
        <div className="SearchBar">
          <input
            type="text"
            name="Username"
            onChange={(e) => { setsearchInput(e.target.value) }}
          />
          {isSearching && <img src={spinner} alt="loading" />}
        </div>
        <div className="SearchResultContainer">

          {searchResult.map((result, i) => {
            return (
              <div className="postOwner" key={i}>
                <img src={placeholderPic} alt="profile"></img>
                <div className="UserNameContent">
                  <span>{result.username}</span>
                </div>
                <Follow id= {result.userId} following ={result.followed}></Follow>
              </div>
            )
          })}


        </div>
      </div>

    </div>
  );
}

export default Search;