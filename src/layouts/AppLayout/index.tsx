import React from 'react'
import { AppLayoutWrapper, AppLayoutContainer } from './layout.style'
import Header from './Header'
import Footer from './Footer'

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    children,
}) => {
    return (
        <AppLayoutWrapper>
            <Header />
            <AppLayoutContainer>{children}</AppLayoutContainer>
            <Footer />
        </AppLayoutWrapper>
    )
}