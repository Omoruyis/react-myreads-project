import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './home'
import Search from './search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    searchResults: []

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    

  } 

  search = (query) => {
    BooksAPI.search(query).then((book) => {
      this.setState({ searchResults: book})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books,
        currentlyReading: books.filter((cur) => cur.shelf === 'currentlyReading'),
        wantToRead: books.filter((cur) => cur.shelf === 'wantToRead'),
        read: books.filter((cur) => cur.shelf === 'read')
      })
    })
  }

  shelfUpdate = (book, shelf) => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(cur => cur.id !== book.id).concat([book]),
        currentlyReading: state.books.filter((cur) => cur.shelf === 'currentlyReading'),
        wantToRead: state.books.filter((cur) => cur.shelf === 'wantToRead'),
        read: state.books.filter((cur) => cur.shelf === 'read')
      }))
      BooksAPI.update(book, shelf)   
  }

  render() {
    return (
      <div className='app' >
        <Route exact path='/' render={() => {
          return  <Home
          books={this.state.books}
          currentlyReading={this.state.currentlyReading}
          wantToRead={this.state.wantToRead}
          read={this.state.read}
          update={this.shelfUpdate}
          />
        }}
        />

        <Route path='/search' render={() => {
          return <Search searching={this.search}
          searchResults={this.state.searchResults}
          books={this.state.books}
          update={this.shelfUpdate}
          />
        }}
        />
        
        
      </div>
    )
  }
}



export default BooksApp
