import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    
    return (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It is time to get your expenses under control</p>
            <Link className="button"
                    to="/dashboard">
                    Login with Google
            </Link>
        </div>
    </div>
)};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    };
};

export default connect(mapDispatchToProps)(LoginPage);
// export default LoginPage;