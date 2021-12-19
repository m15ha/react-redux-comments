import React, { useEffect, useState } from 'react';
import {
    Box,
    Badge,
    Text,
    FormControl,
    Input,
    IconButton,
    HStack,
    Flex,
} from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate, commentsLoad } from '../redux/action';
import Comment from './comment';

const info = {
    comments: 'Comments',
    text: 'Comments',
    name: 'John Doo',
};

const Comments = () => {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector((state) => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    });
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            text: textComment,
            id: Date.now(),
        };
        dispatch(commentCreate(newComment));
        setTextComment('');
    };

    useEffect(() => {
        dispatch(commentsLoad());
    }, []);

    return (
        <Box w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='blue'>
                        {info.name}
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
                <HStack mt='4'>
                    <FormControl isRequired>
                        <Input
                            id='comment'
                            placeholder='Add comment'
                            value={textComment}
                            onChange={handleInput}
                        />
                    </FormControl>
                    <IconButton
                        aria-label='Add comment'
                        color='twitter.500'
                        variant={'outline'}
                        icon={<AiOutlinePlus />}
                        onClick={handleSubmit}
                    />
                </HStack>
                <Flex align='center' justify='center'></Flex>
                {!!comments.length &&
                    comments.map((res) => {
                        return <Comment key={res.id} data={res} />;
                    })}
            </Box>
        </Box>
    );
};

export default Comments;
