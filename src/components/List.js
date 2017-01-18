import React, { Component } from 'react';
import ListItem from './ListItem';
import data from '../data';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const items = data.sort((a, b) => b.votes - a.votes);
    this.setState({items});
  }

  handleUpVote(itemId) {
    data.forEach((item) => {
      if (item.id === itemId) {
        item.votes++;
      }
    });
    this.updateState();
  }

  handleDownVote(itemId) {
    data.forEach((item) => {
      if (item.id === itemId) {
        item.votes--;
      }
    });
    this.updateState();
  }

  render() {
    const items = this.state.items.map((item) => {
      return (
          <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              url={item.url}
              itemAlt={item.title}
              itemImageUrl={item.itemImageUrl}
              userAvatar={item.userAvatar}
              userAlt={item.userName}
              userName={item.userName}
              votes={item.votes}
              onUpVote={this.handleUpVote}
              onDownVote={this.handleDownVote}
          />
      );
    });

    return (
        <div className='list-container'>
          {items}
        </div>
    );
  }
}

export default List;
