import React from 'react';
import BlogDetails from './blog-details/blog-details';
import { Navigate, Route, Routes } from 'react-router-dom';
import BlogGrid from './blog-grid/blog-grid';
import BlogList from './blog-list/blog-list';

const BlogRoutes = () => {
  const all_blogs_routes = [
    {
      path: '/blog-details',
      name: 'blogDetails',
      element: <BlogDetails />,
      route: Route,
    },
    {
      path: '/blog-grid',
      name: ' blogGrid',
      element: <BlogGrid />,
      route: Route,
    },
    {
      path: '/blog-list',
      name: ' blogList',
      element: <BlogList />,
      route: Route,
    },
    {
      path: '*',
      name: 'NotFound',
      element: <Navigate to="/" />,
      route: Route,
    },
  ];

  return (
    <>
      <Routes>
        <Route>
          {all_blogs_routes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default BlogRoutes;
