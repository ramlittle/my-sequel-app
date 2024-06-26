import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {BrowserRouter} from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      <ReactQueryDevtools initialisopen={true}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
