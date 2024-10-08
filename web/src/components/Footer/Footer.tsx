import Email from './Email'
import { Container } from './Footer.styled'
import Phone from './Phone'

const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="tel:804-307-4018">
            <Phone /> 804-307-4018
          </a>
        </li>
        <li>
          <a href="mailto:black.jackb44@gmail.com">
            <Email /> black.jackb44@gmail.com
          </a>
        </li>
      </ul>
      <small>&copy; {new Date().getFullYear()} Gourmet Getcha There</small>
    </Container>
  )
}

export default Footer
