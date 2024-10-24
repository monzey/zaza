import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle({
  td: {
    color: 'gray.600', 
  },
  tr: {
    borderLeftWidth: "4px",
    borderColor: "gray.300"
  }
})

export default defineMultiStyleConfig({ baseStyle })
