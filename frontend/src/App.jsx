import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArtical from './pages/WriteArtical'
import BlogTitle from './pages/BlogTitle'
import Community from './pages/Community'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'


const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/ai' element={<Layout/>}>
        <Route index element = {<Dashboard/>}/>
        <Route path='write-artical' element = {<WriteArtical/>}/>
        <Route path='blog-title' element = {<BlogTitle/>}/>
        <Route path='community' element = {<Community/>}/>
        <Route path='generate-images' element = {<GenerateImages/>}/>
        <Route path='remove-background' element = {<RemoveBackground/>}/>
        <Route path='remove-object' element = {<RemoveObject/>}/>
        <Route path='review-resume' element = {<ReviewResume/>}/>
      </Route>
    </Routes>
  )
}

export default App