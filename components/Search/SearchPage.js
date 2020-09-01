import React from "react";
import ChannelRow from "./../Channel/ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./../VideoRow/VideoRow";
import "./SearchPage.css";

function SearchPage() {
  if(localStorage.store!=null){
    var a=localStorage.store;
  }
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images.pexels.com/photos/1428787/pexels-photo-1428787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        channel={a}
        verified
        subs="28K"
        noOfVideos={380}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://images.pexels.com/photos/2832022/pexels-photo-2832022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
    </div>
  );
}

export default SearchPage;
