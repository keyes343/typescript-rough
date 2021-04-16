import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Context } from './Pages/index';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={client}>
            <Context />
        </QueryClientProvider>
    );
}

export default App;
