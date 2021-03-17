import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Drawer from './Drawer'
import { connect } from "react-redux";
import { getTodos } from "../components/redux/actions/userActions";
import PropTypes from "prop-types";
import Loader from '../components/Loader';

const Navigation = (props) => {

    React.useEffect(() => { 
        props.getTodos();
      }, []);

    return (
        <NavigationContainer>
           <Drawer />
            {/* {
                props.user.loading ? (
                    <Loader />
                ): (
                    <Drawer />
                )
            } */}
        </NavigationContainer>
    )
}


Navigation.propTypes = {
    user: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    user: state.user,
  });
  
  const mapActionsToProps = {
    getTodos,
  };

export default connect(mapStateToProps, mapActionsToProps)(Navigation);
