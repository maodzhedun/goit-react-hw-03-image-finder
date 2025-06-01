const ImageGalleryItem = ({image}) => {
  return ( <li className="gallery-item">
    <img src={image.webformatURL} alt={image.tags} />
  </li>)
}

export default ImageGalleryItem