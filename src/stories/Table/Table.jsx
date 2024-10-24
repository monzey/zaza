import { CheckIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { Tag, TagLabel, TagRightIcon, Box, Checkbox } from '@chakra-ui/react'
import { Table as BaseTable, Thead, Th, Tr, Td, Tbody, Tfoot, TableContainer, TableCaption } from '@chakra-ui/react'

import { stubs } from './stubs.js'
import { columns } from './columns.js'

export const Table = ({ ...props }) => ( 
  <TableContainer borderWidth='1px' borderColor="gray.300" borderRadius="lg" w="lg">
    <BaseTable variant='striped' size="sm">
      <Thead>
        <Tr>
          <Th position="sticky" left="0px"></Th>
          {columns.map((column, i) => (
            <Th key={i}>{column}</Th>
          ))}
          <Th position="sticky" bg="white" right="0px">Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {stubs.map((item, i) => (
          <Tr key={i}>
            <Td position="sticky" bg="white" left="0px"><Checkbox /></Td>
            {columns.map(column => (
              <Td>{column === 'status' ? <Status value={ONLINE} /> : item[column]}</Td>
            ))}
            <Td position="sticky" bg="white" right="0px">action</Td>
          </Tr>
        ))}
      </Tbody>
    </BaseTable>
  </TableContainer>
)

const ONLINE = 1
const OFFLINE = 0

const colorScheme = value => (
  value === ONLINE ? 'green' :
  value === OFFLINE ? 'red' :
  'blue' 
)

const label = value => (
  value === ONLINE ? 'Online' :
  value === OFFLINE ? 'Offline' :
  'Unknown' 
)

const icon = value => (
  value === ONLINE ? CheckIcon :
  value === OFFLINE ? NotAllowedIcon :
  null 
)

const Status = ({ value = ONLINE })  => ( 
  <Tag size="sm" variant='outline' colorScheme={colorScheme(value)}>
    <TagLabel>{label(value)}</TagLabel>
  </Tag>
)
