import React from "react";
import VideoCard from "./VideoCard/VideoCard";
import "./style/RecommendedVideos.css";

function RecommendedVideos() {
  function runafunb(e) {
    e.preventDefault();
   var a= prompt("This clone was created by Pratyush Shivam. Instagram : @pratyushshivam. Did you like it?")
   if(a=="yes" || a=="Yes"){
     alert("Thankyou So Much!")
   }
   else{
     alert("Whoops! Will work harder next time!")
   }
  }
  return (
    <div className="recommendedVideos">
      <h2  onClick={runafunb} style={{cursor: "pointer"}}>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="Gold Glitter Ornament Decor Photograph"
          views="335K Views"
          timestamp="8 months ago"
          channelImage="https://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="4K Drone Shots"
          image="https://images.pexels.com/photos/1669068/pexels-photo-1669068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <VideoCard
          title="Mountain Beside Body of Water with Aurora Borealis"
          views="603K Views"
          timestamp="23 days ago"
          channelImage="https://images.pexels.com/photos/4084268/pexels-photo-4084268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Mountains Revisited"
          image="https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <VideoCard
          title="Formation near Calm Body of Water | Mountain Sights"
          views="4.5M Views"
          timestamp="5 years ago"
          channelImage="https://images.pexels.com/photos/3181458/pexels-photo-3181458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Water Bodies"
          image="https://images.pexels.com/photos/258136/pexels-photo-258136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <VideoCard
          title="Glaciers in Antarctica Drone Footage 4K | Drone World"
          views="34K Views"
          timestamp="15 days ago"
          channelImage="https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Antarctica Unfolded"
          image="https://images.pexels.com/photos/3147058/pexels-photo-3147058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <VideoCard
          title="Foggy Mountains in Canada 4K Drone Footage | Drone World"
          views="2.9M Views"
          timestamp="11 months ago"
          channelImage="https://images.pexels.com/photos/4586228/pexels-photo-4586228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Canadian Wanders"
          image="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <VideoCard
          title="Antarctica Glaciers revisited by Antonio Harrard"
          views="1.8M Views"
          timestamp="5 days ago"
          channelImage="https://images.pexels.com/photos/4466814/pexels-photo-4466814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="4K Drone Footage"
          image="https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
         <VideoCard
          title="Some of the Best 4k Images for your Wallpaper!"
          views="80K Views"
          timestamp="4 months ago"
          channelImage="https://images.pexels.com/photos/3047315/pexels-photo-3047315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Drone Footages"
          image="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
         <VideoCard
          title="Top 5 rarest Ocean Creatures in the world!"
          views="124K Views"
          timestamp="7 months ago"
          channelImage="https://images.pexels.com/photos/3235566/pexels-photo-3235566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Top Five"
          image="https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
         <VideoCard
          title="Best Moments of Purple Sky in Sweden!"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/3358793/pexels-photo-3358793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Mystery of Sky"
          image="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
         <VideoCard
          title="Drone Footage across the Mount Robson (Canada)"
          views="1.3M Views"
          timestamp="2 years ago"
          channelImage="https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          channel="Canadian Wanders"
          image="https://images.pexels.com/photos/2674064/pexels-photo-2674064.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-2674064.jpg&fm=jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
