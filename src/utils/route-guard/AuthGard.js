import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const account = useSelector((state) => state.account);
    const { isLoggedIN } = account;

    if (!isLoggedIN) {
        return <Navigate to="/login" />;
    }

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
