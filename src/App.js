import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 
import BookList from './components/BookList';
import Search from './components/Search';
import About from './pages/About';
import Dynamic from './pages/Dynamic';
import data from './models/books.json';

const App = () => {
    const [books, setBooks] = useState(data);
    const [keyword, setKeyword] = useState('');
    const [bookcase, setBookcase] = useState([]);
    const [buyBook, setBuyBook] = useState([]);

    // Destructuring - Below has been simplified
    // const keyWordState = useState('');
    // const keyword = keyWordState[0];
    // const setKeyword = keyWordState[1];

// Use this code example for such this as loading animations after page has loaded the above.
// useEffect(()=> {
//     //
// });

function addBook(title, id) {
    const newBookList = books.filter(book => book.id !== id);
    const chosenBook = books.filter(book => book.id === id);
    setBooks(newBookList);
    setBookcase([...bookcase, ...chosenBook]);
    console.log(`The Book ${title} was clicked`)
}

function removeBook(title, id) {
    const removeBookList = books.filter(book => book.id !== id);
    const removeBook = books.filter(book => book.id === id);
    setBooks(removeBookList);
    setBookcase(removeBook);
}

function dynamicBook(title, id) {
    const dynamicList = bookcase.filter(book => book.id !== id);
    const dynamicBook = bookcase.filter(book => book.id === id);
    console.log(dynamicBook);
    console.log([dynamicBook]);
    setBuyBook ([...buyBook, ...dynamicBook]);
    setBookcase (dynamicList);
}

async function findBooks (term) {
const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`
).then(res => res.json());
    setBooks(results.items);
}


    return (
        <Router>
        <div className="frame">    
            <Route exact path="/" render={() => (
                <>
                    <Header />
                    <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
                    <BookList books={books} addBook={addBook} />
                </>
            )} />

            <Route exact path="/Bookcase" render={() => (
                <>
                    <Header />
                    <BookList books={bookcase} removeBook={(removeBook)} dynamicBook={(dynamicBook)} />
                </>
            )} />
            

            <Route exact path="/About" render={() => (
                <>
                    <Header />
                    <About books={books} addBook={addBook} />
                </> 
            )} />

            <Route exact path="/Dynamic" render={() => (
                <>
                    <Header />
                    <Dynamic />
                    <BookList books={buyBook}/>
                    <Link to="/About"><button className="dynamic-button">Back to Guidance</button></Link>
                    <Link to="/"><button className="dynamic-button">Add More Books</button></Link>
                </>
            )} />
        </div>        
    </Router>
); }




export default App;
