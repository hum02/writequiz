import React, { Component } from 'react';
import { Route,Routes,  BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useNavigate } from 'react-router-dom';

import { Home,About,Write } from '../pages';
import styled from 'styled-components';
import { history } from '../redux/configureStore';

class App extends Component {
    render() {
        return (
          <React.Fragment>
              <Background>
                 <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/allpost" element={<About/>}/>
                    <Route path="/write/:id" element={<Write/>}/>
                    <Route path="/write" element={<Write/>}/>

                 </Routes>
              </Background>
          </React.Fragment>
        );
    }
}

const Background = styled.div`
  ${(props) => props.theme.border_box};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.main_bg_color};
`;

export default App;