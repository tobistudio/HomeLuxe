import React from 'react'
import * as Styled from './index.style'
import { BsArrowRight } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { BiSolidPhoneCall } from 'react-icons/bi'

export const Contact: React.FC = () => {
    return (
        <Styled.ContactWrapper>
            <h2>Contactez-Nous</h2>
            <Styled.Info>
                <div>
                    <IoMdMail />
                    <span>Soutien@homeluxe.fr</span>
                </div>
                <div>
                    <BiSolidPhoneCall />
                    <span>(+33) 06 65 00 52 28</span>
                </div>
            </Styled.Info>
            <span></span>
            <Styled.InputContainer>
                <div>
                    <p>Full Name</p>
                    <input placeholder='Enter your full name' />
                </div>
                <div>
                    <p>Email Address</p>
                    <input placeholder='Enter your email address' />
                </div>
                <div>
                    <p>Message</p>
                    <textarea placeholder='Enter message' />
                </div>
                <Styled.Button>
                    Envoyer
                    <BsArrowRight />
                </Styled.Button>
            </Styled.InputContainer>
        </Styled.ContactWrapper>
    )
}