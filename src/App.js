import * as React from 'react';
import { Container, HStack } from '@chakra-ui/react';
import Profile from './components/profile';
import Comments from './components/comments';
// import Spin from './components/Spin';
// import { useSelector } from 'react-redux';

function App() {
    // const error = useSelector((state) => state.appReducer.error);

    return (
        <Container maxW='container.lg' p={0}>
            <HStack h='80%' align='flex-start' justify='center' mt={20}>
                <Profile />
                {/* <Spin /> */}
                <Comments />
            </HStack>
        </Container>
    );
}

export default App;
