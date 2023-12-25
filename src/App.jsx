import ProductsPage from './components/ProductsPage';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <div className="max-w-[1250px] mx-auto px-5">
        <ProductsPage />
      </div>
    </MantineProvider>
  );
}

export default App;
