import React, { useState } from 'react';
import "../../styles/imageModal.scss";

const ImageModal = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img onClick={handleOpen} src={src} alt={alt} className="default-view"/>
      {isOpen && (
        <div onClick={handleClose} className="modal-overlay">
          <div className="modal-content">
            <img src={src} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;