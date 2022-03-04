import React from 'react'

export default function Book (props){
    return(
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                style={{ width: 128, height: 193,
                 backgroundImage: 
                 props.book.imageLinks &&
                 `url(${props.book.imageLinks.thumbnail})` }}></div>
                <div className={`book-shelf-changer ${props.book.shelf}`}>
                    <select value ={props.book.shelf||"none"} onChange={(e)=> props.updateBook(props.book,e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">
                {props.book.authors && props.book.authors.map(name => <p style ={{margin:0}}key={name} >{name}</p>)}</div>
            </div>
            </li>
    )

}