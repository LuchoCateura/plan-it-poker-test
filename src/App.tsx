import { Flex } from '@chakra-ui/react'
import Welcome from './views/Welcome'
import CreateRoomForm from './components/CreateRoomForm'
function App() {

  return (
    <Flex align="center" justify="center">
       {/* <Welcome/> */}
       <CreateRoomForm/>
    </Flex>
  )
}

export default App
