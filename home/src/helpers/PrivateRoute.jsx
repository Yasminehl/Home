import useAuth from "../hooks/useAuth.jsx";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
 const { isAuthenticated, initialized } = useAuth();

 if(!initialized){
  return <div>Loading...</div>;
 }

 if(!isAuthenticated){
  return <div>Not Authenticated</div>;
 }

 return children;
};

export default PrivateRoute;

PrivateRoute.propTypes={
 children: PropTypes.node
}