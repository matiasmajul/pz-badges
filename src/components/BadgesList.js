import React from 'react';
import './styles/BadgesList.css';
import twitterIcon from '../images/twitter-icon.png'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="">
                {this.props.badges.map(badge => {
                    return (
                        <li className="Badge_list" key={badge.id}>
                            <div className="Badge_logo">
                                <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                            </div>
                            <div className="Badge_description">
                                <h2 className='Badge_name'> {badge.firsName}{badge.lastName}</h2>
                                <div className="Badge_twitter">
                                    <img src={twitterIcon} alt="" />
                                    <a href={badge.twitter}>{badge.twitter}</a>
                                    <p></p>
                                </div>
                                <p className="Badge_job">{badge.jobTitle}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;