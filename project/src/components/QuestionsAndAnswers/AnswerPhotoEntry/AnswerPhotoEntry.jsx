import React, { useState } from "react";
import ModalTemplate from "../ModalTemplate/ModalTemplate.jsx";
import AnswerPhotoModal from "../AnswerPhotoModal/AnswerPhotoModal.jsx";


var AnswerPhotoEntry = (props) => {
  //modal toggle
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  var { photo } = props;
  return (
    <div>
      <img className="answer-images" src={photo} alt="User Submitted Product Photo" onClick={() => setIsPhotoOpen(true)}></img>
      {buildAnswerPhotoModal(isPhotoOpen, setIsPhotoOpen, photo)}
    </div>
  );
};

var buildAnswerPhotoModal = (isOpen, setIsOpen, image) => {
  return (
    <ModalTemplate open={isOpen} onClose={() => setIsOpen(false)}>
      <AnswerPhotoModal image={image} />
    </ModalTemplate>
  )
}

AnswerPhotoEntry.propTypes = {};

export default AnswerPhotoEntry;