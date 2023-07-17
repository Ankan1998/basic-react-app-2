
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../header/header.component';

import CartSummary from '../pages/CartSummary.page';
import ProductDetail from '../pages/ProductDetail.page';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<CartSummary />} />
    <Route path="productdetails/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
