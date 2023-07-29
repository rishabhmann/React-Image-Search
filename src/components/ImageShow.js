import "./ImageShow.css";

function ImageShow({ image }) {
  console.log(image.alt_description);
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
