import React from 'react'
import * as Styled from './index.style'

export const ContactUs: React.FC = () => {
    return (
        <Styled.ContactWrapper>
            <Styled.Left>Vous souhaitez discuter
                d’un projet avec nous ? </Styled.Left>
            <Styled.Right>Contactez-Nous</Styled.Right>
        </Styled.ContactWrapper>
    )
}