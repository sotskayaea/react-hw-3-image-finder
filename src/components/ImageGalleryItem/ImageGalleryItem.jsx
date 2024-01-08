const ImageGalleryItem = ({ item, handleModal }) => {
  return (
    <li class="gallery-item">
      <img
        onClick={() => handleModal(item)}
        src={item.webformatURL}
        alt={item.tags}
        width={300}
        height={200}
        id={item.id}
      />
    </li>
  );
};

export default ImageGalleryItem;
