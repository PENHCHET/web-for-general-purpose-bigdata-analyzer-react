import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as UserActions from '../../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectLanguage from './SelectLanguage'
import RepoGrid from './RepoGrid'

class Popular extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(language) {
        this.setState(function() {
            return  {
                selectedLanguage: language,
                repos: null
            }
        });
        const {actions} = this.props
        
        actions.fetchUsers(language);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    render() {
        const {data} = this.props
        return(
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!data.users
                    ? <p>LOADING</p>
                    : <RepoGrid repos={data.users} />
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Popular)