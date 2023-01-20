import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>It is time to get your expenses under control</p>
            <button onClick={startLogin()}>Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    };
};

export default connect(mapDispatchToProps)(LoginPage);
// export default LoginPage;