import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/userActions'

export class UserContainer extends React.Component {
    constructor(props) {
        super(props);
        const {actions} = this.props
        actions.fetchUsers('All')
    }

    render(){
        const {data} = this.props
        return(
            <div>
                <ul>
                    { data.users.map((user, i) => {
                        return <li key={i+1}>{i+1}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.usersReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)