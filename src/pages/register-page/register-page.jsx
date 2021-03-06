import React from 'react';
import './register-page.scss';
import Register from '../../components/register/register';
import cat from '../../images/bobtail.png';
import vImg from '../../images/paw.png';
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
    state = {
        successful: false,
        successfulMsg: false
    }

    handleSuccess = () => {
        this.setState({ successful: true }, () => {
            setTimeout(() => {
                this.setState({successfulMsg: true})
            }, 50); // Delay before presenting the success-msg
        });
    }

    render() {
        const registerClasses = ''
        + (this.state.successful ? ' faded-out' : '');
        return (
            <div className="register-page">
                <img src={cat} alt="Cat" className="cat-boxy" />
                <div className='form-boxy'>
                    <Register className={registerClasses} handleSuccess={this.handleSuccess} />
                    {/* On successful registration: */}
                    {this.state.successfulMsg ?
                        <div className="success-msg faded-in">
                            <img src={vImg} alt="Success" className="v-img"/>
                            <p>Registration completed successfuly!</p>
                            <Link to='/sign-in'
                                className="link-text">
                                Sign-in
                            </Link>
                        </div>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default RegisterPage;