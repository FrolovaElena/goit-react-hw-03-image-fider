import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { value } = this.state;
    this.props.onSubmit(value);

    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.searchForm}>
        <input
          className={styles.input}
          value={value}
          onChange={this.handleChange}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
        />
      </form>
    );
  }
}
