import React, {Component} from 'react';
import api from "../api";
import PageLoading from "../components/PageLoading";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import './styles/BadgeEdit.css'

class BadgeEdit extends Component {


    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            twitter: ''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async  e => {
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({loading: false, form: data})
        }catch (error){
            this.setState({loading: false, error: error})
        }
    }

    handleChange = e => {
        this.setState(
            {
                form: {
                    ...this.state.form,
                    [e.target.name]: e.target.value
                }
            }
        )
        console.log('onchange')
    }

    handleSubmit = async e => {
        e.preventDefault()

        try {
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({loading: false, error: null})

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({loading: false, error: error})
        }

    }

    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }
        return (
            <div>
                <div className={'BadgeEdit__hero'}>
                    <img
                        src={header}
                        alt={'logo'}
                        className={'img-fluid BadgeEdit__hero-image'}
                    />
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST NAME'}
                                lastName={this.state.form.lastName || 'LAST NAME'}
                                instagram={this.state.form.twitter || 'INSTAGRAM'}
                                email={this.state.form.email || 'EMAIL'}
                                degree={this.state.form.jobTitle || 'DEGREE'}
                            />
                        </div>
                        <div className={'col-6'}>
                            <h1>Edit attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeEdit;