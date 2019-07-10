import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
//import escapeRegExp from 'escape-string-regexp'

class Home extends Component {

    updateShelf = (e) => {
        const x = e.target.id
        this.props.update(this.props[x][e.target.className], e.target.value)
    }

    render() {
        const { currentlyReading, wantToRead, read } = this.props

        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReading.map((cur, index) => (
                          <li key={cur.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
                              <div className="book-shelf-changer">
                                <select id={cur.shelf}  onChange={this.updateShelf} className={index} value={cur.shelf}>
                                  <option value="move" disabled>Move to...</option>
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToRead.map((cur, index) => (
                          <li key={cur.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
                              <div className="book-shelf-changer">
                                <select id={cur.shelf} onChange={this.updateShelf} className={index} value={cur.shelf}>
                                  <option value="move" disabled>Move to...</option>
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {read.map((cur, index) => (
                          <li key={cur.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
                              <div className="book-shelf-changer">
                                <select id={cur.shelf} onChange={this.updateShelf} className={index} value={cur.shelf}> 
                                  <option value="move" disabled>Move to...</option>
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
            <div className="open-search">
              <Link to='/search'>
              <button>Add a book</button>
              </Link>

            </div>
          </div>
        )
    }
}

export default Home 
















// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// //import sortBy from 'sort-by'
// import { Link } from 'react-router-dom'
// //import escapeRegExp from 'escape-string-regexp'

// class Home extends Component {

//     // componentDidMount() {
//     //   this.setState({
//     //     currentlyReading: this.props.books.filter((cur) => cur.shelf === 'currentlyReading'),
//     //     wantToRead: this.props.books.filter((cur) => cur.shelf === 'wantToRead'),
//     //     read: this.props.books.filter((cur) => cur.shelf === 'read')
//     //   })
//     // }

//     updateShelf = (e) => {
//         const x = e.target.id
//         this.props.update(this.props[x][e.target.className], e.target.value)
//     }
    

//     render() {

//         return (
//           <div className="list-books">
//             <div className="list-books-title">
//               <h1>MyReads</h1>
//             </div>
//             <div className="list-books-content">
//               <div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Currently Reading</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//                       {this.props.currentlyReading.map((cur, index) => (
//                           <li key={cur.id}>
//                           <div className="book">
//                             <div className="book-top">
//                               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
//                               <div className="book-shelf-changer">
//                                 <select id={cur.shelf}  onChange={this.updateShelf} className={index} value={cur.shelf}>
//                                   <option value="move">Move to...</option>
//                                   <option value="currentlyReading">Currently Reading</option>
//                                   <option value="wantToRead">Want to Read</option>
//                                   <option value="read">Read</option>
//                                   <option value="none">None</option>
//                                 </select>
//                               </div>
//                             </div>
//                             <div className="book-title">{cur.title}</div>
//                             <div className="book-authors">{cur.authors[0]}</div>
//                           </div>
//                         </li>
//                       ))}

//                     </ol>
//                   </div>
//                 </div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Want to Read</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//                         {this.props.wantToRead.map((cur, index) => (
//                           <li key={cur.id}>
//                           <div className="book">
//                             <div className="book-top">
//                               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
//                               <div className="book-shelf-changer">
//                                 <select id={cur.shelf} onChange={this.updateShelf} className={index} value={cur.shelf}>
//                                   <option value="move">Move to...</option>
//                                   <option value="currentlyReading">Currently Reading</option>
//                                   <option value="wantToRead">Want to Read</option>
//                                   <option value="read">Read</option>
//                                   <option value="none">None</option>
//                                 </select>
//                               </div>
//                             </div>
//                             <div className="book-title">{cur.title}</div>
//                             <div className="book-authors">{cur.authors[0]}</div>
//                           </div>
//                         </li>
//                         ))}
//                     </ol>
//                   </div>
//                 </div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Read</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//                         {this.props.read.map((cur, index) => (
//                           <li key={cur.id}>
//                           <div className="book">
//                             <div className="book-top">
//                               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cur.imageLinks.smallThumbnail})`}}></div>
//                               <div className="book-shelf-changer">
//                                 <select id={cur.shelf} onChange={this.updateShelf} className={index} value={cur.shelf}> 
//                                   <option value="move">Move to...</option>
//                                   <option value="currentlyReading">Currently Reading</option>
//                                   <option value="wantToRead">Want to Read</option>
//                                   <option value="read">Read</option>
//                                   <option value="none">None</option>
//                                 </select>
//                               </div>
//                             </div>
//                             <div className="book-title">{cur.title}</div>
//                             <div className="book-authors">{cur.authors[0]}</div>
//                           </div>
//                         </li>
//                         ))}
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="open-search">
//               <Link to='/search'>
//               <button onClick={() => this.props.display(this.props.read)}>Add a book</button>
//               </Link>

//             </div>
//           </div>
//         )
//     }
// }

// export default Home 

// //image = cur.imageLinks.smallThumbnail
// //author = curauthors[0]
// //title = cur.title
// //id = cur.id