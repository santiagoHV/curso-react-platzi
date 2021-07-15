import React, {Component} from 'react';
import './styles/BadgesList.css'
import {Link} from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgesList extends Component {

    badgeItem = (badge) => {
        return (
            <div className="BadgesListItem">
                <Gravatar
                    className="BadgesListItem__avatar"
                    email={badge.email}
                    alt={`${badge.firstName} ${badge.lastName}`}
                />

                <div>
                    <strong>
                        {badge.firstName} {badge.lastName}
                    </strong>
                    <br />@{badge.twitter}
                    <br />
                    {badge.jobTitle}
                </div>
            </div>
        )
    }

    render() {
        if (this.props.badges.length === 0){
            return(
                <div>
                    <h3>No badges where found</h3>
                    <Link to={'/badges/new'} className={'btn btn-primary'}>
                        Create a new badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className={'list-unstyled BadgesList'}>
                {this.props.badges.map(
                    (badge) => {
                        return(
                            <li key={badge.id}>
                                <Link
                                    className={'text-reset text-decoration-none'}
                                    to={`/badges/${badge.id}`} >
                                    { this.badgeItem(badge) }
                                </Link>

                            </li>
                        )
                    }
                )}
            </ul>
        );
    }
}

export default BadgesList;