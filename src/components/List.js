import React, { Component } from 'react';
import ListItem from './ListItem';
import data from '../data';

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
  //TODO on downwote make arrows red
  handleDownVote(itemId) {
    data.forEach((item) => {
      if (item.id === itemId) {
        item.votes--;
      }
    });
    this.updateState();
  }

  render() {
    const products = this.state.items.map((item) => {
      return (
          <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              url={item.url}
              itemAlt={item.title}
              itemImageUrl={item.itemImageUrl}
              votes={item.votes}
              submitter_avatar_url={item.userAvatar}
              userAlt={item.userName}
              onUpVote={this.handleUpVote}
              onDownVote={this.handleDownVote}
          />
      );
    });

    return (
        <div className='ui items'>
          {products}
        </div>
    );
  }
}

export default List;
