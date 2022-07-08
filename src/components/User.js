import React from 'react';
import {IoCloseCircleSharp} from 'react-icons/io5'
import {AiFillEdit} from 'react-icons/ai'

class User extends React.Component {
    user = this.props.user
    render() {
      return (
        <div className='user'>
            <IoCloseCircleSharp className='delete-icon' />
            <AiFillEdit className='edit-icon' />
            <h3>{this.user.firstname} {this.user.lastname}</h3>
            <p>{this.user.bio}</p>
            <b>{this.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>
        </div>
      )
    }
}

export default User