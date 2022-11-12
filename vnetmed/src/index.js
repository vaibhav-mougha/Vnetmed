import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider store={store}>
    <BrowserRouter>
        <ChakraProvider>
                <App />
        </ChakraProvider>
        </BrowserRouter>
    </Provider>




);
