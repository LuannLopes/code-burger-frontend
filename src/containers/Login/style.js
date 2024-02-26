import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItens = styled.div`
  background-color: #373737;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 100px;
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin: 24px 0 5px 0;
`

export const Input = styled.input`
  width: 390px;
  height: 38px;
  background-color: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`

export const Button = styled.button`
  width: 182px;
  height: 36px;
  background-color: #9758a6;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #eeeeee;
  margin: 30px auto;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.4;
  }
`

export const SignInLink = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
