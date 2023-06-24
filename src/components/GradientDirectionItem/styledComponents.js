import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 10px;
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  border: 0px solid none;
  border-radius: 5px;
  margin-right: 8px;
  width: 80px;
  text-align: center;
  opacity: ${props => (props.isActiveTab ? 1 : 0.5)};
`

export const CustomButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-family: 'Roboto';
  color: #014f7b;
`
