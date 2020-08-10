import React, {useState} from "react";
import {AuthButtonStyled} from "./styles"

//Components
import SignUpModal from "../modals/SignUpModal"

const SignUpButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <div>
            <AuthButtonStyled onClick={openModal}>Sign Up</AuthButtonStyled>
            <SignUpModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
    )
}

export default SignUpButton
