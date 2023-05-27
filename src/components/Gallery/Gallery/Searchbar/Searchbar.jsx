import { Component } from 'react';
import { Form } from './Searchbar.styled';

export class SearchBar extends Component {
    state = {
        searchQuery: '',
    };

    // Записуємо в стейт значення інпута
    handleChangeSearchQuery = e => {
        const searchQuery = e.currentTarget.value.toLowerCase();

        this.setState({ searchQuery });
    };

// Передаємо в App значення searchQuery і очищуємо форму
    handleSubmit = e => {
        e.preventDefauld();

        const { searchQuery } = this.state;
        const { onSubmit } = this.props;
        
        if (searchQuery.trim() === '') {
            return;
        } 

    onSubmit(searchQuery);
    this.setState({ searchQuery: '' });

    }

    
    render() {
        const searchQuery = this.state.searchQuery
        
        return (
            <header class="searchbar">
    <Form class="form" onSubmit={this.handleSubmit} >
    <button type="submit" class="button">
    <span class="button-label">Search</span>
    </button>

<input
    class="input"
    type="text"
    autocomplete="off"
    autofocus
    placeholder="Search images and photos"
    value={searchQuery}
    onChange={this.handleChangeSearchQuery}
    />
    </Form>
</header>
        )
    }
}
