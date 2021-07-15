import React from "react";
import ReactDOM from 'react-dom'
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import {Link} from "react-router-dom";
import Modal from "../components/Modal";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

const BadgeDetails = (props) => {
    const badge = props.badge

    return(
        <div>
            <div className={'BadgeDetails__hero'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col 6'}>
                            <img src={confLogo} alt={'logo de la conferencia'}/>
                        </div>
                        <div
                            className={'col-6 BadgeDetails__hero-attendant-name'}>
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            jobTitle={badge.jobTitle}
                            twitter={badge.twitter} />
                    </div>
                    <div className={'col-6'}>
                        <h2> Actions</h2>
                        <div>
                            <Link
                                className={'btn btn-primary mb-4'}
                                to={`/badges/${badge.id}/edit`}>
                                Edit
                            </Link>
                        </div>
                        <div>
                            <button
                                className={'btn btn-danger'}
                                onClick={props.onOpenModal}
                            >
                                Delete
                            </button>
                            <DeleteBadgeModal
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}>

                            </DeleteBadgeModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BadgeDetails