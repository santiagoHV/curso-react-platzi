import React, {Component} from 'react';

class BadgeForm extends Component {

    handleClick = () => {
        console.log('crack')
    }

    // handleSubmit = (e) => {
    //     e.preventDefault() //no permite el envio del formulario por defecto
    //     // console.log(this.state)
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <div className={'form-group'}>
                        <label>First Name</label>
                        <input
                            className={'form-control'}
                            type={'text'}
                            name={'firstName'}
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className={'form-group'}>
                        <label>Last Name</label>
                        <input
                            className={'form-control'}
                            type={'text'}
                            name={'lastName'}
                            onChange={this.props.onChange}
                            value={this.props.formValues.lastName}

                        />
                    </div>
                    <div className={'form-group'}>
                        <label>Email</label>
                        <input
                            className={'form-control'}
                            type={'text'}
                            name={'email'}
                            onChange={this.props.onChange}
                            value={this.props.formValues.email}

                        />
                    </div>
                    <div className={'form-group'}>
                        <label>Job Title</label>
                        <input
                            className={'form-control'}
                            type={'text'}
                            name={'jobTitle'}
                            onChange={this.props.onChange}
                            value={this.props.formValues.jobTitle}

                        />
                    </div>
                    <div className={'form-group'}>
                        <label>Twitter</label>
                        <input
                            className={'form-control'}
                            type={'text'}
                            name={'twitter'}
                            onChange={this.props.onChange}
                            value={this.props.formValues.twitter}

                        />
                    </div>
                    <button
                        className={'btn btn-primary'}
                        onChange={this.handleClick}
                    >
                        Submit
                    </button>
                </form>
                {this.props.error && (
                    <p className="text-danger">{this.props.error.message} </p>
                ) }
            </div>
        );
    }
}

export default BadgeForm;