import Modal from 'react-modal';

Modal.setAppElement('body');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalComponent = ({ item, handleModal }) => {
  console.log(item);
  return (
    <Modal
      //   id={item.id}
      isOpen={!!item}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={() => handleModal()}
      style={customStyles}
      contentLabel="Example Modal"
      //   ariaHideApp={false}
    >
      <img src={item.webformatURL} alt={item.webformatURL} />
    </Modal>
  );
};

export default ModalComponent;
