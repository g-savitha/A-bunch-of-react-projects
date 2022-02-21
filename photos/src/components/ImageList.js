import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

export default function ImageList(props) {
  const { images } = props;
  const imageList = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{imageList}</div>;
}
