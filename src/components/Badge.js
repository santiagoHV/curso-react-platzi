import React from 'react'

import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'
import Gravatar from "./Gravatar";


class Badge extends React.Component{
    render(){
        // const firstName = 'Santiago'
        // const lastName = 'Herrera'

        return (
            <div className={'badge'}>
                <div className={'badge_header'}>
                    <img src={confLogo} alt={'logo conferencia'}/>
                </div>

                <div className={'badge_section-name'}>
                    <Gravatar
                        className={'badge_avatar'}
                        email={this.props.email}
                        alt={'avatar'}
                    />
                    <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                </div>
                <div className={'badge_section-info'}>
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className={'badge_footer'}>
                    #platzi
                </div>
            </div>
        )
    }
}

export default Badge