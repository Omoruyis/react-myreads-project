  import React, { Component } from 'react'
  import PropTypes from 'prop-types'
  //import sortBy from 'sort-by'
  import { Link } from 'react-router-dom'
  //import escapeRegExp from 'escape-string-regexp'

  class Search extends Component {

    state= {
      query: '',
    }

    updateQuery = (query) => {
      this.setState({ query: query.trim() })
    }


    showValue = (val) => {
      let v
      this.props.books.forEach((c, i) => {
        if (c.shelf) {
          if(val === c.id) {
            v = c.shelf
          }
        }
      })
      return v
    }

    updateShelf = (e) => {
      this.props.update(this.props.searchResults[e.target.className], e.target.value)
    }

    render() {
      const { searching, searchResults } = this.props      

      let showingBooks
      if(this.state.query) {
        searching(this.state.query)
        showingBooks = searchResults
      } else {
        showingBooks = []
      }

        return (
          <div className="app">
              <div className="search-books">
                <div className="search-books-bar">
                  <Link to='/'>
                  <button className="close-search" >Close</button>
                  </Link>

                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query}
                    onChange={(e) => {
                      this.updateQuery(e.target.value)
                    }}>
                    </input>
                    <div className="bookshelf">
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {showingBooks.map((cur, index) => (
                          <li key={cur.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
                              <div className="book-shelf-changer">
                                <select id={cur}  onChange={this.updateShelf} className={index}
                                value={this.showValue(cur.id)}
                                >
                                  <option value="move">Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{cur.title}</div>
                            <div className="book-authors">{cur.authors[0]}</div>
                          </div>
                        </li>
                      ))}

                    </ol>
                  </div>
                </div>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
              </div>
          </div>
        )
    }
  }

  export default Search










  // class Search extends Component {

  //   state= {
  //     query: '',
  //   }

  //   updateQuery = (query) => {
  //     this.setState({ query: query.trim() })
  //     console.log(query)
  //   }


  //   showValue = (val) => {
  //     let v
  //     this.props.books.forEach((c, i) => {
  //       if (c.shelf) {
  //         if(val === c.id) {
  //           v = c.shelf
  //         } 
  //       }
  //     })
  //     return v
  //   }

  //   updateShelf = (e) => {
  //     const x = e.target.id
  //     console.log(e.target.id)

  //     console.log(e.target.value)
  //     console.log(e.target.className)
  //     console.log(e.target.value)
  //     this.props.update(this.props.searchResults[e.target.className], e.target.value)
  //     console.log(this.props.searchResults) 
  //     console.log(this.props.books)  
  //   }

  //   render() {
  //     const { searching, searchResults, books, currentlyReading, wantToRead, read, update } = this.props 

  //     let showingBooks
  //     if(this.state.query) {
  //       searching(this.state.query)
  //       showingBooks = searchResults
  //     } else {
  //       showingBooks = []
  //     }

  //       return (
  //         <div className="app">
  //             <div className="search-books">
  //               <div className="search-books-bar">
  //                 <Link to='/'>
  //                 <button className="close-search" >Close</button>
  //                 </Link>

  //                 <div className="search-books-input-wrapper">
  //                   <input type="text" placeholder="Search by title or author" value={this.state.query}
  //                   onChange={(e) => {
  //                     this.updateQuery(e.target.value)
  //                   }}>
  //                   </input>
  //                   <div className="bookshelf">
  //                 <div className="bookshelf-books">
  //                   <ol className="books-grid">
  //                     {showingBooks.map((cur, index) => (
  //                         <li key={cur.id}>
  //                         <div className="book">
  //                           <div className="book-top">
  //                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
  //                             <div className="book-shelf-changer">
  //                               <select id={cur}  onChange={this.updateShelf} className={index}
  //                               value={this.showValue(cur.id)}
  //                               >
  //                                 <option value="move">Move to...</option>
  //                                 <option value="currentlyReading">Currently Reading</option>
  //                                 <option value="wantToRead">Want to Read</option>
  //                                 <option value="read">Read</option>
  //                                 <option value="none">None</option>
  //                               </select>
  //                             </div>
  //                           </div>
  //                           <div className="book-title">{cur.title}</div>
  //                           <div className="book-authors">{cur.authors[0]}</div>
  //                         </div>
  //                       </li>
  //                     ))}

  //                   </ol>
  //                 </div>
  //               </div>
  //                 </div>
  //               </div>
  //               <div className="search-books-results">
  //                 <ol className="books-grid"></ol>
  //               </div>
  //             </div>
  //         </div>
  //       )
  //   }
  // }

  // export default Search