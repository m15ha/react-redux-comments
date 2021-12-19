import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </Provider>,
    rootElement
);
