import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 20px;
`
export const PageLink = styled.a`
  font-size: 16px;
  line-height: 19px;
  color: ${props => (props.$isActive ? '#9758A6' : '#555555')};
  cursor: pointer;
  text-decoration: none;
  font-weight: ${props => (props.$isActive ? 'bold' : 'normal')};
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`

export const ContainerText = styled.div`
  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    color: #555555;
  }
`

export const PageLinkExit = styled.a`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: #9758a6;
  cursor: pointer;
  text-decoration: none;
`
