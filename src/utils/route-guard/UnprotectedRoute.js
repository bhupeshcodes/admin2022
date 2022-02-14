import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UnprotectedRoute = ({ children }) => {
    const account = useSelector((state) => state.account);
    const { isLoggedIN } = account;

    if (isLoggedIN) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

UnprotectedRoute.propTypes = {
    children: PropTypes.node
};

export default UnprotectedRoute;
