import React, { Component } from 'react'
import { Router } from '@reach/router'
import Contact from '../components/Contact';
import Landing from '../components/Landing';
import Auction from '../components/Auction';
import Nav from '../components/Nav';
import About from '../components/About'
import Products from '../components/Products'
import Search from '../components/Search';
import Footer from './Footer';
import Users from '../components/Users';
import Feeds from './Feeds';



export class Main extends Component {
    render() {
        return (
            <div className="Main" phone={this.props.phone}>
                <Nav isAdmin={this.props.isAdmin} />
                <Router>
                    <Landing path="/" />
                    <Auction path="/auction" />
                    <Products path="/products" userId={this.props.userId} />
                    <About path="/about" />
                    <Contact path="/contact" />
                    {/* <Search path="/search"/> */}
                    <Users path="/users" />
                    <Feeds path="/feeds" />
                </Router>
                <Footer userId={this.props.userId} username={this.props.username}/>

            </div>
        )
    }
}

export default Main
