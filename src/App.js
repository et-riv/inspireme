import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import SignInPage from './pages/sign-in/sign-in-page';
import RegisterPage from './pages/register-page/register-page';
import AboutPage from './pages/about/about-page';
import Navigation from './components/navigation/navigation';
import SignOutPage from './pages/sign-out-page/sign-out-page';
import LikedPage from './pages/liked-page/liked-page';
import UploadPage from './pages/upload-page/upload-page';
import UploadsPage from './pages/uploads-page/uploads-page';

class App extends Component {
  state = {
    isSignedIn: false,
    user: {
      id: '',
      name: ''
    },
    prevUserName: '',
    userMenuItems: [
      { linkText: 'Liked Insp.', linkPath: '/liked' },
      { linkText: 'Upload', linkPath: '/upload' },
      { linkText: 'My Uploads', linkPath: '/uploads' },
      { linkText: 'Sign Out', linkPath: '/sign-out' }
    ]
  }

  updateSignedInUser = (userId, userName) => {
    this.setState(prevState => ({
      isSignedIn: true,
      user: {
        ...prevState.user,
        id: userId,
        name: userName
      }
    }), () => {
      // this.props.history.push('/');
    });
  }

  handleSignOut = () => {
    if (this.state.user.id !== '') {
      this.setState(curState => ({
        isSignedIn: false,
        prevUserName: curState.user.name,
        user: {
          ...curState.user,
          id: '',
          name: ''
        }
      }), () => {
        // this.props.history.push('/');
      });
    }
  }

  render() {
    console.log('Rendering App with user:', this.state.user);
    return (
      <div className="App">
        <Navigation signedInUser={this.state.user} userMenuItems={this.state.userMenuItems} />
        <Switch>
          <Route exact path='/'>
            <HomePage signedInUser={this.state.user} />
          </Route>
          <Route path='/sign-in'>
            <SignInPage updateSignedInUser={this.updateSignedInUser} />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/about' component={AboutPage} />
          <Route path='/sign-out'>
            <SignOutPage handleSignOut={this.handleSignOut} prevUserName={this.state.prevUserName} />
          </Route>
          <Route path='/liked'>
            <LikedPage />
          </Route>
          <Route path='/upload'>
            <UploadPage />
          </Route>
          <Route path='/uploads'>
            <UploadsPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
