import React, { useEffect, useState } from 'react';
import { FormControl, Input, HStack, IconButton } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from '../redux/action';
import { AiOutlineClose } from 'react-icons/ai';

const Comment = (data) => {
    const [commentText, setCommentText] = useState('');
    const { text, id } = data.data;
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedComment = {
            id,
            commentText
        }
        dispatch(commentUpdate(updatedComment));
    };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(id));
    };

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    };

    return (
        <HStack mt='4'>
            <FormControl isRequired onSubmit={handleUpdate}>
                <Input
                    id='comment'
                    placeholder='comment'
                    value={commentText}
                    onChange={handleInput}
                />
            </FormControl>
            <IconButton
                aria-label='Delete comment'
                color='red.500'
                variant={'outline'}
                icon={<AiOutlineClose />}
                onClick={handleDelete}
            />
        </HStack>
    );
};

export default Comment;
