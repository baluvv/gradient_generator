import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, onChangeActiveTab, isActiveTab} = props
  const {directionId, displayText} = itemDetails

  const onClickChangeTabId = () => {
    onChangeActiveTab(directionId)
  }

  return (
    <ListItem onClick={onClickChangeTabId} isActive={isActiveTab}>
      <CustomButton>{displayText}</CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
