import { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: null,
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const currentValue = e.currentTarget.elements.title.value.toLowerCase();
    this.setState({
      value: currentValue,
    });
    this.props.onSubmit(currentValue);
    e.currentTarget.reset();
  };

  render() {
    return (
      <header>
        <form onSubmit={this.onHandleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Search images and photos"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
