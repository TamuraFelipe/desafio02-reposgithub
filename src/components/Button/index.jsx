import {
    ButtonContainer,
} from './styles';

export const Button = ({title, type, onClick}) => {

  

  return (
    <ButtonContainer 
    type={type}
    onClick={onClick}
    >
      {title}
    </ButtonContainer>
  )
}
export default Button
