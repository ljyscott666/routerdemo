
import {Home} from './components/Home'
import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import { ProductList } from './components/ProductList';
import { ProductDetail} from './components/ProductDetail'
import { Contact} from './components/Contact'
import { Header } from './components/Header';
import { Footer} from './components/Footer'
import  Admin  from './components/Admin'




function App() {

/**
 *     
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<ProductList></ProductList>}></Route>
        <Route path='products/1001' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        
       </Routes>
     routes是外层路由 相当于是个总的 外层routes 包裹里面的route
       <Route path='products/1001' element={<ProductDetail></ProductDetail>}></Route> path是最后url 的结构 http://localhost:3000/Contact
       <Route path='contact' element={<Contact></Contact>}> element 是这个path对应的url对应的组件component

 */

  const user = true;


//   <Route path='products/:name/:id' element={<ProductDetail></ProductDetail>}></Route>  动态路由 useParams 用来匹配动态路由




  return (
  
    <div className="App">
      <Header></Header>
      <main>     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='products' element={<ProductList></ProductList>}></Route>
        <Route path='products/:id' element={<ProductDetail></ProductDetail>}></Route> 
        <Route path='contact' element={<Contact></Contact>}></Route>
            <Route path='admin' element={user? <Admin></Admin> : <Navigate to="/"></Navigate>}></Route>    
       </Routes>
       <Footer></Footer>
       </main>
  
    </div>
  );
}

export default App;
