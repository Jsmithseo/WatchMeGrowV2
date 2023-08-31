import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Link from 'next/link';


function Popup(){
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(true);
    }, 3000);

    // Cleanup timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>🌟  Be a Cornerstone of Our New Center! 🌟 </ModalHeader>
        <ModalBody>
        Sponsor a room to fast-track the opening of our new center. Your sponsorship provides more than just a space; it creates a sanctuary for education and shelter. As a token of thanks, we'll prominently display your name or business in the room. Act now to make a lasting impact on our community.
        </ModalBody>
        <ModalFooter>
          <center>
          <Link href="/rooms">  <Button color="success" onClick={toggle}>Sponsor a Room</Button></Link>
          </center>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Popup;
