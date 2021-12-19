import React from 'react';
import { Box, Image, Badge, Text, HStack, Spacer } from '@chakra-ui/react';
import photo from '../assets/photo1.jpg';
import { FaHeart } from 'react-icons/fa';
import { BsHandThumbsDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addLikeAction, removeLikeAction } from '../redux/action';

const info = {
    imageUrl: photo,
    imageAlt: 'Model',
    text: 'One more beautiful day',
};

const Profile = () => {
    const dispatch = useDispatch();
    const likes = useSelector((state) => state.likesReducer.likes);

    const addLike = () => {
        dispatch(addLikeAction());
    };

    const removeLike = () => {
        dispatch(removeLikeAction());
    };

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={info.imageUrl} alt={info.imageAlt} />

             <HStack m='4'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        <Text>{info.text}</Text>
                    </Box>
                </Box>
               <Spacer />
                    <Box _hover={{ cursor: 'pointer' }}>
                        <FaHeart color='red' onClick={() => addLike()} />
                    </Box>
                    <Text>{likes}</Text>
                    <Box _hover={{ cursor: 'pointer' }}>
                        <BsHandThumbsDown onClick={() => removeLike()} />
                    </Box>
                </HStack>
            </Box>
        
    );
};

export default Profile;
