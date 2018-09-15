import React, {Component} from 'react';
import './App.css';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(e) {
        this.props.onDelete(this.props.id)
    }

    render() {
        return (
            <div className="deck">
                <div className="deck-title">{this.props.title}</div>
                <button className="delete-icon" onClick={this.onDelete}><i className="material-icons">close</i></button>

            </div>
        )
    }
}

class AddDeck extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="deck add-deck" onClick={this.handleSubmit}>
            </div>
        )
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit() {
        let name = prompt("Name", "");
        this.props.addDeck(name);
    }
}

class DeckList extends Component {
    render() {
        const decks = this.props.decks.map((deck) =>
            <Deck title={deck.title} id = {deck.id} onDelete={this.props.onDelete}/>
        );
        return (
            <div className="deck-list">
                {decks}
                <AddDeck addDeck={this.props.addDeck}/>
            </div>
        )
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {decks: [], currentId: 0 };
        this.addDeck = this.addDeck.bind(this);
        this.onDelete = this.onDelete.bind(this)
    }

    addDeck(title) {
        let decks = this.state.decks;
        let currentId = this.state.currentId;
        this.setState({decks: [...decks, {title: title, id: currentId}], currentId: currentId + 1})
    }

    onDelete(id) {
        let decks = this.state.decks.filter((deck) => deck.id !== id);
        this.setState({decks: decks})
    }

    render() {
        return <DeckList decks={this.state.decks} addDeck={this.addDeck} onDelete={this.onDelete}/>
    }
}

export default App;
