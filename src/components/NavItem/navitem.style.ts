import styled from "styled-components";

export const NavItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const NavLabel = styled.div<{ $color?: string; }>`
  color: ${props => props.$color || "rgba(0, 0, 0, 0.75)"};
  font-family: Khula;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 37px;

  & > :not(:first-child) {
    margin-left: 4px;
  }

  & svg {
    
  }
`;

export const SubMenuWrapper = styled.div``;