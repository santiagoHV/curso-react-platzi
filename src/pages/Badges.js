import React, {Component} from 'react';
import './styles/Badges.css'
import logo from '../images/badge-header.svg'
import BadgesList from "../components/BadgesList";
import {Link} from "react-router-dom";
import api from '../api'
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

class Badges extends Component {

    constructor(props) {
        super(props);

        console.log('1. constructor()');
        this.state = {
            loading: true,
            error: null,
        }

    }

    fetchData = async () =>{
        this.setState({
            loading: true,
            error: null
        })

        try{
            const data = await api.badges.list()
            this.setState({
                loading: false,
                data: data
            })
        }catch (error){
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    componentDidMount() {
        console.log('3. componentDidMount()');
        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState,
        });

        console.log({
            props: this.props,
            state: this.state,
        });
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId); //borra la peticion temporanea en caso de que se cierre antes el componente
        clearInterval(this.intervalId)


    }

    render() {
        console.log('2/4. render()');

        if(this.state.loading === true && !this.state.data){
            return <PageLoading />
        }

        if (this.state.error){
            return <PageError error={this.state.error} />
        }
        return (
            <div>
                <div className={'Badges'}>
                    <div className={'BadgeNew__hero'}>
                       <div className={'Badges__container'}>
                           <img
                               src={logo}
                               className={'Badges_conf-logo'}
                               alt={'conf logo'}
                           />
                       </div>
                    </div>
                </div>

                <div className={'Badges__container'}>
                    <div className={'Badges__buttons'}>
                        <Link to={'/badges/new'} className={'btn btn-primary'}>
                            New Badge
                        </Link>
                    </div>
                </div>

                <div className={'Badges__list'}>
                    <BadgesList badges={this.state.data} />
                    {this.state.loading ? <MiniLoader /> : ''}
                    <br/>
                </div>

            </div>
        );
    }
}

export default Badges;