import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsChevronDown } from "react-icons/bs";
import * as Styled from './navitem.style'
import type * as Type from '../../types'

export const NavItem: React.FC<Type.INavItemProps> = ({
    label,
    to,
    subMenu,
    color
}) => {
    const router = useNavigate()

    const handleClick = () => {
        if (!subMenu) {
            router(to)
        }
    }

    return (
        <Styled.NavItemWrapper onClick={handleClick}>
            <Styled.NavLabel $color={color}>
                <span>{label}</span>
                {subMenu && <BsChevronDown size={12} />}
            </Styled.NavLabel>
            <Styled.SubMenuWrapper></Styled.SubMenuWrapper>
        </Styled.NavItemWrapper>
    )
}