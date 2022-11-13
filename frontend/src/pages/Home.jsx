import React from 'react'
import { Flex, Spacer, Box, Heading,Image,Text  } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'


const initData = [
    {id:1,name:'food1'},
    {id:2,name:'food1'},
    {id:3,name:'food1'},
    {id:4,name:'food1'},
    {id:5,name:'food1'},
    {id:6,name:'food1'},
    {id:7,name:'food1'},
]
const Home = () => {
    const [data, setData] = useState(initData)
    function getData(){

    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
     
      <Flex>
        <Box>
        <Image src='./food.png' alt='Dan Abramov' />
        </Box>
        <Spacer/>
        <Box >
        <Image src='./fre.png' alt='Dan Abramov' />
        </Box>
      </Flex>
      <Box>
      <Image src='./how.png' alt='Dan Abramov' />
      </Box>
      <Box>
      <Image src='./menu.png' alt='Dan Abramov' />
      </Box>
      <Box>
      <Image src='./flex.png' alt='Dan Abramov' />
      </Box>
      <Box>
      <Image src='./review.png' alt='Dan Abramov' />
      </Box>
      <Box>
      <Image src='./bottom2.png' alt='Dan Abramov' />
      </Box>
      <Box>
      <Image src='./botal.png' alt='Dan Abramov' />
      </Box>
      <Box>
      <Image src='./bottomflex.png' alt='Dan Abramov' />
      </Box>
      <Box>
      <Image src='./footer.png' alt='Dan Abramov' />
      </Box>
      {/* <Flex w='80%' m='auto' gap='15px' wrap='flex-wrap'>
        {
          data.map((el)=>(
            <Flex key={el.id} direction='column'>
                <Box>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>
                <Box>
                    <Text>{el.name}</Text>
                </Box>
            </Flex>
          )) 
        }
      </Flex> */}
    </>
  )
}

export default Home