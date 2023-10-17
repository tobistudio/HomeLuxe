import React, { useState, useMemo } from 'react'
import * as Styled from './index.style'
import { BlogCard, Pagination } from '../../../components'
import { data } from './data'

let PageSize = 10;

export const Blog: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <Styled.BlogWarrpper>
            <h1>Blog</h1>
            <p>Élevez chaque coin de votre maison avec la quintessence de l'artisanat et de l'excellence du design, où chaque pièce raconte une histoire de prestige, de confort et de style inégalé.</p>
            <Styled.BlogItems>
                {
                    data.map(ele => (
                        <BlogCard date={'23 septembre 2023'} subtitle={'Publié par David'} title={'L\'art des tables et chaises de salle à manger de luxe'} content={'Offrez-vous l\'opulence et le confort alors que nous dévoilons la quintessence de la sophistication culinaire. Découvrez le monde des tables et chaises de salle à manger de luxe chez HOME LUXE, où l\'artisanat exquis rencontre le design intemporel.'} image='assets/img/Rectangle 1450.png' />
                    ))
                }
            </Styled.BlogItems>
            <Styled.page>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={PageSize}
                    onPageChange={(page: any) => setCurrentPage(page)}
                />
            </Styled.page>
        </Styled.BlogWarrpper>
    )
}
