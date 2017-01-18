import React, { Component } from 'react';
import './ListItem.css';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);

  }

  handleUpVote() {
    this.props.onUpVote(this.props.id);
  }

  handleDownVote() {
    this.props.onDownVote(this.props.id);
  }

  render() {
    return (
        <div className='item'>
          <div className='image'>
            <img src={this.props.itemImageUrl} alt={this.props.itemAlt} />
          </div>
              <div className='content'>
                <div className='content__header'>
                  <a href={this.props.url}>
                    {this.props.title}
                  </a>
                </div>

                <div className='content__description'>
                  <p>{this.props.content}</p>
                </div>

                <div className='author'>
                  <div className='avatar'>
                    <img
                        src={this.props.userAvatar}
                        alt={this.props.userName}
                    />
                  </div>
                  <span>{this.props.userName}</span>
                </div>
              </div>

              <div className='voter'>
                  <a onClick={this.handleUpVote}>
                    <MdArrowDropUp size={40} color='#666'/>
                  </a>
                  <p className='counter'>{this.props.votes}</p>
                  <a onClick={this.handleDownVote}>
                    <MdArrowDropDown size={40} color='#666'/>
                  </a>
              </div>
        </div>
    );
  }
}

export default ListItem;