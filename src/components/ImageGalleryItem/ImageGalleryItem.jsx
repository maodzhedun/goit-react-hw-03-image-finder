const ImageGalleryItem = ({image, onClick}) => {

  return ( <li className="gallery-item">
    <img src={image.webformatURL} alt={image.tags} onClick={onClick}/>
  </li>)
}

export default ImageGalleryItem