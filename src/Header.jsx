import { Box, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return <div>
         <Stack direction={'column'}>
      <Box display={'block'}
           alignItems={'center'}
           justifyContent={'center'}
           width={"100%"}
           height={"50%"}
           py={12}
           bgImage={"url('https://bit.ly/2Z4KKcF')"}
           bgPosition={"center"}
           bgRepeat={"no-repeat"}
           mb={2}
           >
            <p style={{ color: '#B98B6C', fontWeight: 'bold' }}>Domina el terreno</p>
            <ButtonGroup gap={"4"}>
              <Button colorScheme='whiteAlpha'>Ver Detalles</Button>
              <Button colorScheme='blackAlpha'>Ver video</Button>
            </ButtonGroup>
           </Box>

    </Stack>
    </div>
};
