import React, {Component} from 'react'

class ListContacts extends Component {
    render() {
       // console.log('Props', this.props)
        return (
            <ol className='contacts-list'>
                {this.props.contacts.map((contact) => (
                    <li key = {contact.id}>
                        {contact.name}
                    </li>
                ))}
            </ol>
        );
    }
}

export default ListContacts;