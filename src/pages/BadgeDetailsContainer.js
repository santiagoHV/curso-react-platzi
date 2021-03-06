import React, {Component} from 'react';
import './styles/BadgeDetails.css'
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";


class BadgeDetailsContainer extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading:false, data: data})
            console.log(data)
        }catch (error){
            this.setState({loading:false, error: error})
        }
    }

    handleOpenModal = () => {
        this.setState({modalIsOpen: true})
    }

    handleCloseModal = () => {
        this.setState({modalIsOpen: false})
    }

    handleDeleteBadge = async () => {
        console.log('esta llegando')
        this.setState({loading: true, error: null})

        try{
            await api.badges.remove(
                this.props.match.params.badgeId
            )
            this.props.history.push('/badges')
        }catch (error){
            this.setState({loading:false, error: error})
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />
        }

        return (
            <BadgeDetails
                badge={this.state.data}
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}/>
        );
    }
}

export default BadgeDetailsContainer;