import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Posts from './components/posts/posts';
import Post from './components/post/post';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path='contacts' element={<Contacts />}></Route>
        <Route path='posts' element={<Posts />}></Route>
        <Route path='posts/:id' element={<Post />}></Route>
        {/* <Route path='posts/:id' component={<Post />}></Route> */}
        {/* <Route path='posts/:id' element={<Post />}></Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
