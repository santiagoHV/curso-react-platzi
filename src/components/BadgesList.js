import React, {useMemo, useState} from 'react';
import './styles/BadgesList.css'
import {Link} from "react-router-dom";
import Gravatar from "./Gravatar";

const BadgesList = (props) => {

    const [query, setQuery] = useState('')
    const [filteredBadges, setFilteredBadges] = useState(props.badges)

    useMemo(() => {
            const result = props.badges.filter((badge) => {
                return `${badge.firstName} ${badge.lastName}`
                    .toLowerCase()
                    .includes(query.toLowerCase())
            })
            setFilteredBadges(result)
        },
        [props.badges, query]
    )

    const badgeItem = (badge) => {
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
                    <br/>@{badge.twitter}
                    <br/>
                    {badge.jobTitle}
                </div>
            </div>
        )
    }

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className={'form-group'}>
                    <label > Filter badges</label>
                    <input
                        type={'text'}
                        className={'form-control'}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}/>
                </div>
                <h3>No badges where found</h3>
                <Link to={'/badges/new'} className={'btn btn-primary'}>
                    Create a new badge
                </Link>
            </div>
        )
    }
    return (
        <div className={'BadgesList'}>
            <div className={'form-group'}>
                <label > Filter badges</label>
                <input
                    type={'text'}
                    className={'form-control'}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}/>
            </div>
            <ul className={'list-unstyled '}>
                {filteredBadges.map(
                    (badge) => {
                        return (
                            <li key={badge.id}>
                                <Link
                                    className={'text-reset text-decoration-none'}
                                    to={`/badges/${badge.id}`}>
                                    {badgeItem(badge)}
                                </Link>

                            </li>
                        )
                    }
                )}
            </ul>
        </div>

    );
}

export default BadgesList;