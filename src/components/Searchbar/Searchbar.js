// Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы.
// Создает DOM - элемент следующей структуры.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  reset = () => {
    this.setState({ query: '' });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('write smth');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.reset();
  };

  onInpChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.onFormSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormBtn}>
            <span className={s.SearchFormBtnLabel}>Search</span>
          </button>
          <input
            onChange={this.onInpChange}
            className={s.SearchFormInput}
            value={this.state.query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
