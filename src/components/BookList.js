
import React from 'react';
import Book from './Book';


const BookList = ({books, addBook, removeBook, dynamicBook}) => {
    return (
        <div>
            {books.map(book => (
                <Book 
                key={book.id}
                book={book} 
                addBook={addBook}
                removeBook={removeBook}
                dynamicBook={dynamicBook}
                />
            ))}
        </div>
    ); 
}


export default BookList;
