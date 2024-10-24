import { useEffect } from 'react'
import { useToast, Box } from '@chakra-ui/react'

export const Notification = ({ show = true, ...props }) => { 
  const toast = useToast()

  useEffect(() => {
    if(show) {
      toast({ 
        duration: 9000,
        isClosable: true,
        position: 'top-right',
        render: () => (
          <Container {...props}/>
        ),
        ...props
      })
    }
  }, [show])

  return null
}

const Container = ({ children, ...props }) => {
  return <Box w="sm" h="16" bg="gray.500">
    {children}
  </Box>
}
