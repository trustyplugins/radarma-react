import React from 'react'
import FooterOne from '../home/home-one/footer-one'
import BlogRoutes from './blog.routes'
import HomeHeader from '../home/header/home-header'

const Blog = () => {
  return (
    <>
      <HomeHeader type={2} />
      <BlogRoutes />
      <FooterOne />
    </>
  )
}

export default Blog
