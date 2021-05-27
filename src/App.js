import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/login';
import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContent>
            <img src='https://yt3.ggpht.com/ytc/AAUvwnhZtcTvJEkvuZMdTzjhPLvZGIQSo9nel4btx7j9rg=s900-c-k-c0x00ffffff-no-rj'
            alt=''/>
        <Spinner
          name='ball-spin-fade-loader'
          color='purple'
          fadeIn='none'
        />
        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ):(
          <> 
            <Header/>
            <AppBody>
              <Sidebar/>
              <Switch>
                <Route path="/" exact>
                  <Chat/>
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;