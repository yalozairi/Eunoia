import React, {useState} from "react";
import {AuthButtonStyled} from "./styles"

//Components
import SignInModal from "../modals/SignInModal"

const SignInButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <div>
            <AuthButtonStyled onClick={openModal}>Sign In</AuthButtonStyled>
            <SignInModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
    )
}

export default SignInButton
