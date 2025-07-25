/* eslint-disable @typescript-eslint/no-explicit-any */
import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Provider } from 'react-redux';
import store from './core/data/redux/store';
import "../src/style/icon/tabler-icons/webfont/tabler-icons.css";
import "../src/style/icon/feather/css/iconfont.css";
import 'aos/dist/aos.css';
import AllRoutes from './feature-module/router/router';
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter >
          <AllRoutes />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
} else {
  console.error("Element with id 'root' not found.");
}
