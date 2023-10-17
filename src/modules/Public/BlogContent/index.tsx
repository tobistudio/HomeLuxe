import React from 'react'
import * as Styled from './index.style'
import { BlogCard } from '../../../components'

export const BlogContent: React.FC = () => {
    const [info, setInfo] = React.useState({
        name: 'Pierre Dubois',
        date: '25 September 2023',
        bgImage: 'assets/img/Rectangle 1450 (1).png',
        avatar: 'assets/img/Ellipse.svg',
        title: 'L\'art des tables et chaises de salle à manger de luxe',
        content: "Dîner n\'est pas simplement une routine ; c'est une expérience, un moment de communion avec les amis et la famille, une occasion d'apprécier l'art culinaire et une chance de créer des souvenirs impérissables. Dans cette quête d\'une expérience culinaire exceptionnelle, le choix des tables et des chaises joue un rôle central. Les tables et chaises de salle à manger de luxe sont plus que de simples meubles fonctionnels ; ce sont des œuvres d'art exquises qui enrichissent l'ambiance de votre salle à manger et rehaussent toute l'expérience culinaire.Le choix des matériaux pour les tables et chaises de salle à manger de luxe est essentiel pour définir leur caractère et leur longévité. Les essences de bois exquises telles que l\'acajou, le noyer et le chêne sont souvent privilégiées pour leurs grains riches et leur beauté naturelle.La conception des pieds de table, des dossiers de chaise et des motifs de rembourrage peut être complexe et ornée ou minimaliste et élégante, selon le style souhaité. Le choix des finitions, qu'il s'agisse d'un vernis très brillant ou d'une texture mate, ajoute une autre couche de sophistication du design.Ils sont plus que des meubles ; ce sont des déclarations de raffinement et d\'appréciation pour les belles choses de la vie. Lorsque vous investissez dans du mobilier de salle à manger de luxe, vous n'améliorez pas seulement votre espace salle à manger ; vous améliorez toute votre expérience culinaire. Alors, la prochaine fois que vous vous réunirez autour de votre table à manger, rappelez-vous qu\'il ne s\'agit pas seulement d\'un meuble ; c'est une œuvre d'art, un symbole de luxe et une source de souvenirs impérissables.",
        author: 'Pierre Dubois',
        author_avatar: 'assets/img/Ellipse.svg',
        author_name: 'Pierre Dubois',
        author_intro: 'Managing Partner, Luxe Home'
    })

    return (
        <Styled.Public>
            <Styled.BlogContentWrapper>
                <h2>{info.title}</h2>
                <Styled.SubContent>
                    <img src={info.avatar} />
                    <p>{info.name}</p>
                    <p>|</p>
                    <p>{info.date}</p>
                </Styled.SubContent>
                <img src={info.bgImage} />
                <Styled.Content>
                    {info.content}
                </Styled.Content>
                <Styled.Author>
                    <img src={info.author_avatar} />
                    <div>
                        <h3>Written by</h3>
                        <h2>{info.author_name}</h2>
                        <p>{info.author_intro}</p>
                    </div>
                </Styled.Author>
            </Styled.BlogContentWrapper>
            <Styled.Between>
                <h4>Magasinez nos derniers meubles</h4>
                <button>Pièces</button>
            </Styled.Between>
            <Styled.BlogLists>
                <Styled.BlogContainer>
                    {
                        [...new Array(3)].map(ele => (
                            <BlogCard date={'23 septembre 2023'} subtitle={'Publié par David'} title={'L\'art des tables et chaises de salle à manger de luxe'} content={'Offrez-vous l\'opulence et le confort alors que nous dévoilons la quintessence de la sophistication culinaire. Découvrez le monde des tables et chaises de salle à manger de luxe chez HOME LUXE, où l\'artisanat exquis rencontre le design intemporel.'} image='assets/img/Rectangle 1450.png' />
                        ))
                    }
                </Styled.BlogContainer>
            </Styled.BlogLists>
        </Styled.Public>
    )
}
