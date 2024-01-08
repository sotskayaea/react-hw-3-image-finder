const LoadMore = ({ onLoadMore, page }) => {
  const newPage = page + 1;
  const onAddPage = () => {
    onLoadMore(newPage);
  };
  return (
    <button type="button" onClick={onAddPage}>
      Load More
    </button>
  );
};

export default LoadMore;
