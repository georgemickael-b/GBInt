import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import TestComponent from './components/TestComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TestComponent></TestComponent>
    </QueryClientProvider>
  );
}

export default App;
