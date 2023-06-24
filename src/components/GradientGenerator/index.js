import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  Heading,
  Paragraph,
  List,
  InputsContainer,
  InputContainer,
  Label,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    startColor: '#8ae323',
    endColor: '#014f7b',
    activeDirectionTab: gradientDirectionsList[0].directionId,
    directionValue: gradientDirectionsList[0].value,
  }

  onChangeActiveTab = directionId => {
    this.setState({
      activeDirectionTab: directionId,
    })
  }

  onChangeStartColor = event => {
    this.setState({startColor: event.target.value})
  }

  onChangeEndColor = event => {
    this.setState({endColor: event.target.value})
  }

  onClickChangeDirection = () => {
    const {activeDirectionTab} = this.state
    const filteredList = gradientDirectionsList.filter(
      eachDirection => eachDirection.directionId === activeDirectionTab,
    )
    this.setState({directionValue: filteredList[0].value})
  }

  render() {
    const {
      startColor,
      endColor,
      activeDirectionTab,
      directionValue,
    } = this.state
    return (
      <BgContainer
        startColor={startColor}
        endColor={endColor}
        data-testid="gradientGenerator"
        direction={directionValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <List>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              itemDetails={eachItem}
              onChangeActiveTab={this.onChangeActiveTab}
              isActiveTab={activeDirectionTab === eachItem.directionId}
            />
          ))}
        </List>
        <Paragraph>Pick the Colors</Paragraph>
        <InputsContainer>
          <InputContainer>
            <Label htmlFor="start-color">{startColor}</Label>
            <Input
              type="color"
              id="start-color"
              value={startColor}
              onChange={this.onChangeStartColor}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="end-color">{endColor}</Label>
            <Input
              type="color"
              id="end-color"
              value={endColor}
              onChange={this.onChangeEndColor}
            />
          </InputContainer>
        </InputsContainer>
        <GenerateButton onClick={this.onClickChangeDirection}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
