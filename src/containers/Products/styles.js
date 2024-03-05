import styled from 'styled-components'

export const Container = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  font-size: 17px;
  line-height: 20px;
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  background: none;
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  padding-bottom: 4px;
  cursor: pointer;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 40px;
  justify-content: center;
  margin-top: 20px;
`
