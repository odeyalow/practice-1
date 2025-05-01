import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from '@/app/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Router>
    </Provider>
  </React.StrictMode>
)