import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import { Main2, Top } from './component/testComponent/main2/Main2';
import App from './component/testComponent/demo/App';
import Profile from './component/contents/about/profile/Profile';
import ContentArea from './component/common/contentArea/ContentArea';
import { MenuBar, Footer } from './component/navigation/navigation';
import Contact from './component/contents/contact/Contact';
import Skills from './component/contents/skills/Skills';
import WorksSlider from './component/contents/works/worksSlider/WorksSlider';
import { InView } from 'react-intersection-observer';

interface TopCoverProps {
}

interface IShowState {
  isShow: boolean
}

class TopCoverAndMenu extends React.Component<TopCoverProps, IShowState> {
  constructor(props: TopCoverProps){
    super(props);
    this.state = {
      isShow: true
    };
  }
  
  changeIsView = (inView: boolean) => {
    this.setState({ isShow: inView });
  }

  componentDidMount() {
    this.changeIsView(this.state.isShow);
  }

  render() {
    return(
      <InView threshold={0} onChange={this.changeIsView}>
        <MenuBar isView={!this.state.isShow}/>
        <Top />
      </InView>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="bg" ></div>
    <TopCoverAndMenu />
    <ContentArea>
      <Profile to="/about"/>
      <WorksSlider to="/works" />
      <Skills to="/skills" />
      <Contact to="/contact"/>
    </ContentArea>
    <Footer />
  </React.StrictMode>,
  document.getElementById('wrap')
);