import React, {Component} from 'react';
import './App.css';
import db from './firebase-config'

class Deck extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this)
    }

    onDelete(e) {
        this.props.onDelete(this.props.id)
    }

    render() {
        let deck = this.props.deck;
        return (
            <div className="deck">
                <div className="deck-title">{deck.title}</div>
                <div className="cards-num">0 cards</div>
                <button className="delete-icon" onClick={this.onDelete}><i className="material-icons">close</i></button>
                <button className="learn">Learn</button>

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
        if (name != null) {
            this.props.addDeck(name);
        }
    }
}

class DeckList extends Component {
    render() {
        const decks = this.props.decks.map((deck) =>
            <Deck deck={deck.data()} id = {deck.id} key = {deck.id} onDelete={this.props.onDelete}/>
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
        this.onDelete = this.onDelete.bind(this);
        db.collection("decks").onSnapshot((snap) => {
           var decks = [];
           snap.forEach((deck) => {
               decks = [...decks, deck];
           });
           this.setState({decks: decks, currentId: 0})
        });
    }

    addDeck(title) {
        db.collection("decks").add({title: title});
    }

    onDelete(id) {
        db.collection("decks").doc(id).delete()
    }

    render() {
        return <DeckList decks={this.state.decks} addDeck={this.addDeck} onDelete={this.onDelete}/>
    }
}

export default App;
