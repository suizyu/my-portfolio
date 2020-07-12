import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import Main2 from './component/testComponent/main2/Main2';
import App from './component/testComponent/demo/App';
import Profile from './component/profile/Profile';
import ContentArea from './component/common/contentArea/ContentArea';
import Scroll from './component/testComponent/scroll/Scroll';
import Slider from './component/works/worksSlider/WorksSlider';
import FadeInTitle from './component/common/fadeInTitle/FadeInTitle';

ReactDOM.render(
  <React.StrictMode>
    <App />
      <div style={{height:'100px', textAlign:"center"}} className="/top">
          <FadeInTitle>
            Top
          </FadeInTitle>
          <span>KagaRe's</span>
          <span>Portfolio</span>
      </div>
    <Scroll />
    <ContentArea>
      <Slider />
      <Main2 />
      <FadeInTitle>
        About me!
      </FadeInTitle>
      <Profile to="/about"/>
      <Main2 />
    </ContentArea>
  </React.StrictMode>,
  document.getElementById('wrap')
);