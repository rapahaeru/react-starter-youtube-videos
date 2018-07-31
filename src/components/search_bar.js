import React, { Component } from 'react';

//Class base component
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    onInputSearch(term) {
        this.setState({ term });
        this.props.onSearchChangeTerm(term);
    }

    render() {
        return (
            <div>
                <input
                    value={ this.state.term }
                    onChange={ event => this.onInputSearch(event.target.value)} />
            </div>
        );
    }

}

export default SearchBar;