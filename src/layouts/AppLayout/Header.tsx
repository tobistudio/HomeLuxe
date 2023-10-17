import React from 'react'
import * as Styled from './layout.style'
import * as Comp from '../../components'
import * as Data from "./data"
import {
    BsHandbag
} from 'react-icons/bs'


const Header: React.FC = () => {
    const { headerNavsList } = Data
    const [name, setName] = React.useState<string>('Boutique')

    return (
        <Styled.HeaderWrapper>
            <img src={'assets/img/logo.png'} />
            <Styled.NavItemWrapper>
                {headerNavsList.map(ele => !ele.subMenu ? <Comp.NavItem label={ele.label} to={ele.to} /> : <Comp.NavItem label={ele.label} to={ele.to} subMenu={ele.subMenu} />)}
            </Styled.NavItemWrapper>
            <Styled.HeaderRight>
                <p>{name}</p>
                <BsHandbag />
                <Styled.badge>0</Styled.badge>
            </Styled.HeaderRight>
        </Styled.HeaderWrapper>
    )
}
export default Header