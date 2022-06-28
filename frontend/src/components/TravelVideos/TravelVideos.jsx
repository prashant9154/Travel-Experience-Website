import React from "react";
import Headings from "../HomePage/Headings";
import FilterPannel from "../TravelExperiencePage/FilterPannel";
import VideoGallery from "../HomePage/VideoGallery";

const TravelVideos = () => {
  return (
    <>
      <Headings title="Travel Videos" />
      <FilterPannel />
      <div style={{ marginTop: "5rem" }}></div>
        <VideoGallery />
    </>
  );
};

export default TravelVideos;
