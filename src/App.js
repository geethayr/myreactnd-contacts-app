import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'


class App extends Component {
    state = {
        contacts : []
    }
    componentDidMount() {
        ContactsAPI.getAll()
            .then((contacts) => {
                this.setState(() => ({
                    contacts
                }))
            })
    }

    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts:currentState.contacts.filter((c) => {
            return c.id !== contact.id
        })
        }))
    }
    ContactsAPI.remove(contact)
    render () {
        return (
            <div>
                Hello World
                <ListContacts
                    contacts={this.state.contacts}
                    onDeleteContact = {this.removeContact}
                />
            </div>
        );
    }
}

export default App;
