import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home";
import Header from './Header';
import Footer from './Footer'
import ItemList from './pages/item/ItemList';
import ItemList2 from './pages/item/ItemList2';
import BlogDetail from './pages/Blog/BlogDetail';
import BlogInformation from './pages/Blog/blog-info-json';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/item" element={<ItemList2/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
