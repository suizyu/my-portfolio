import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import { Main2, Top } from './component/testComponent/main2/Main2';
import App from './component/testComponent/demo/App';
import Profile from './component/contents/about/profile/Profile';
import ContentArea from './component/common/contentArea/ContentArea';
import Scroll from './component/testComponent/scroll/Scroll';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Scroll />
    <Top />
    <ContentArea>
      <Main2 />
      <Profile to="/about"/>
      <Main2 />
    </ContentArea>
  </React.StrictMode>,
  document.getElementById('wrap')
);