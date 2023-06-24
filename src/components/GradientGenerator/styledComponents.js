import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.startColor},
    ${props => props.endColor}
  );
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 25px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff79;
  font-size: 18px;
`

export const List = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const InputsContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  align-items: center;
`

export const Label = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 12px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  width: 80px;
  padding: 10px;
  outline: none;
  border-width: 0px;
  text-decoration: none;
  background-color: ${props => props.value};
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border-width: 0px;
  font-family: 'Roboto';
  color: #1e293b;
  width: 100px;
  padding: 10px;
  border-radius: 6px;
  margin-top: 40px;
`
