import React from 'react'
import * as Styled from './layout.style'
import { headerNavsList } from './data'

const Footer: React.FC = () => {
    return (
        <Styled.FooterWrapper>
            <Styled.Container>
                <Styled.Top>
                    <Styled.Left>
                        <img src='assets/img/Rectangle.png' />
                        <div>
                            <p>15 avenue Georges Clémenceau 34500 Béziers - France</p>
                            <p>Tel: (+33) 06 65 00 52 28</p>
                            <p>SIRET: FR96 913 576 195</p>
                        </div>
                    </Styled.Left>
                    <Styled.Right>
                        <div>
                            <h2>Prestations de service</h2>
                            <p>Meubles de luxe</p>
                            <p>Consultation en design d'intérieur</p>
                            <p>Services de personnalisation</p>
                        </div>
                        <div>
                            <h2>Meubles</h2>
                            <p>Des lits</p>
                            <p>Chaise</p>
                            <p>Bibliothéques</p>
                        </div>
                        <div>
                            <h2>Suivez-nous</h2>
                            <p>
                                <img src='assets/img/001-facebook .svg' />
                                Facebook</p>
                            <p>
                                <img src='assets/img/004-instagram.svg' />
                                Snapchat</p>
                            <p>
                                <img src='assets/img/snapchat.svg' />
                                Instagram</p>
                        </div>
                    </Styled.Right>
                </Styled.Top>
                <Styled.Bottom>
                    <p>© 2023, Home Luxe. France</p>
                    <div>
                        <p>Termes et Conditions</p>
                        <p>Politique De Confidentialité</p>
                    </div>
                </Styled.Bottom>
            </Styled.Container>
        </Styled.FooterWrapper>
    )
}

export default Footer