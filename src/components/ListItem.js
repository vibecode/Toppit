import React, { Component } from 'react';


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
            <img src={this.props.itemImageUrl} alt={this.props.itemAlt}/>
          </div>
          <div className='middle aligned content'>
            <div className='ui grid'>
              <div className='three wide column'>
                <div className='ui basic center aligned segment'>
                  <a onClick={this.handleUpVote}>
                    <i className='large caret up icon'></i>
                  </a>
                  <p><b>{this.props.votes}</b></p>
                  <a onClick={this.handleDownVote}>
                    <i className='large caret down icon'></i>
                  </a>
                </div>
              </div>
              <div className='twelve wide column'>
                <div className='header'>
                  <a href={this.props.url}>
                    {this.props.title}
                  </a>
                </div>
                <div className='meta'>
                  <span></span>
                </div>
                <div className='description'>
                  <p>{this.props.description}</p>
                </div>
                <div className='extra'>
                  <span>Submitted by:</span>
                  <img
                      className='ui avatar image'
                      src={this.props.userAvatar}
                      alt={this.props.userName}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ListItem;