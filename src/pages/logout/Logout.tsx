// components
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'

// context functions
import { useLoginContext } from '../../context/loginContext/LoginContext'

function Logout() {
  const {handelLogout} = useLoginContext()
  return (
    <div>
      <Container >
        <Button onClick={() => (handelLogout())} className='' variant='danger' >
          خروج
        </Button>
      </Container>
    </div>
  )
}

export default Logout
