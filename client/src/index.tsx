import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from './react-query';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
      {/* ReactQuery를 디버깅할 수 있게 해줌 */}
      <ReactQueryDevtools />
    </RecoilRoot>
  </QueryClientProvider>,
  // </React.StrictMode>,
);
