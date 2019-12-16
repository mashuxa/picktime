import React from 'react';
import {API_URL} from "../../constants";
import * as actions from './actions';
import {connect} from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <h1>Hi there!</h1>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.homePageReducer.count,
        endDate: state.homePageReducer.endDate,
        isLoading: state.homePageReducer.isLoading,
        page: state.homePageReducer.page,
        perPage: state.homePageReducer.perPage,
        startDate:state.homePageReducer.startDate,
        textFilter: state.homePageReducer.textFilter,
        users: state.homePageReducer.users,
    };
};

export default connect(mapStateToProps)(Home);
