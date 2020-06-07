import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        // console.log(this.props.match)
        const category = this.props.match.params.fentities
        const name = this.props.match.params.name
        const fentity = this.props.state[category].find(a => a.name === name)
        return (
            !fentity ? <Redirect to="/notFound" /> :
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt=""/>
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
                <Link to={`/directory/${category}/`}><button>Go Back</button></Link>
            </div>
        )
    }
}

export default Fentity;
