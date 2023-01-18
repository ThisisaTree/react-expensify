import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import {signInWithGoogle} from '../firebase/firebase';

const LoginPage = () => (
    <div>
    <button onClick={signInWithGoogle}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

// export default connect(mapDispatchToProps)(LoginPage);
export default LoginPage;