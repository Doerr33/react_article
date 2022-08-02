/*
 * @Descripttion: react 文章管理项目
 * @version: v1.0
 * @Author: @zhuling
 * @Date: 2022-08-02 09:39:49
 * @LastEditors: @zhuling
 * @LastEditTime: 2022-08-02 10:13:20
 */
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';


// 配置路由规则
export default function App(){
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}



