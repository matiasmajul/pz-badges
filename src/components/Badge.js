import React from 'react';
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge_header">
                    <img src={confLogo} alt="Logo de conferencia"></img>
                </div>
                <div className="Badge_section-name">
                    <Gravatar
                        className="Badge_avatar"
                        email={this.props.email}
                        alt="Avatar"
                    />
                    <h1>{this.props.firstName}<br />{this.props.lastName}</h1>
                </div>

                <div className="Badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="Badge_footer">
                    <p> #platziconf</p>
                </div>
            </div>)
    }
}


export default Badge;