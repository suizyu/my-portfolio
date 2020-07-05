import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import Main2 from './component/testComponent/main2/Main2';
import App from './component/testComponent/demo/App';
import Profile from './component/profile/Profile';
import ContentArea from './component/common/contentArea/ContentArea';
import Scroll from './component/testComponent/scroll/Scroll';

const Demo = () => {
  return(
    <div>
      <div style={{ height: '1000px', backgroundColor: 'green'}}></div> 
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
      <div style={{height:'500px', textAlign:"center"}} className="/top">
          <span>KagaRe's</span>
          <span>Portfolio</span>
      </div>
    <Scroll />
    <ContentArea>
      <Main2 />
      <Profile to="/about"/>
      <Demo />
    </ContentArea>
  </React.StrictMode>,
  document.getElementById('wrap')
);