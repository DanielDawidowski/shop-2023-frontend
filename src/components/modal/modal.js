import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalStyles } from "./modalStyles";
import { Icon } from "../globalStyles/icon";
import Image from "../image/image";
import imgSearch from "../../assets/SVG/search.svg";

const Modal = ({ showModal, setShowModal, children }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <ModalStyles
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="blackdrop"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal"
          >
            <motion.div
              className="modal--content"
              initial={{ y: 50 }}
              animate={{ y: 1 }}
              exit={{ y: 30 }}
            >
              <div className="modal--close">
                <Icon
                  noborder="false"
                  search="false"
                  viewBox="0 0 1024 1024"
                  onClick={() => setShowModal(false)}
                >
                  <path d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z" />
                </Icon>
              </div>
              {children}
              <div className="modal--image">
                <Image src={imgSearch} alt={imgSearch} />
              </div>
            </motion.div>
          </motion.div>
        </ModalStyles>
      )}
    </AnimatePresence>
  );
};

export default Modal;
