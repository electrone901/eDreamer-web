/******************************************************************************
Title           : LeftArrow.js
Description     : is the left arrow of our carousel  using font-awesome
******************************************************************************/

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class TextSlider extends Component {
    constructor() {
        super();
        this.state = {
            auth: false
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            console.log(' YES user logged this.props.auth.isAuthenticated', this.props)
            this.setState({
                auth: true
            })
        }
    }
    render() {
        return (
            <div className="tParent">
                {/* <div className="row">
                    <div className="col text-center">
                        <h1 className="textSliderTitle">DACA Application file got easier </h1>

                        <h2 className="textSliderPara">Complete yours in less time!</h2>
                        {
                            this.state.auth ? null : <Link to="/register" className="btn btn-primary btn-lg">Apply now</Link>
                        }
                    </div>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(TextSlider));


