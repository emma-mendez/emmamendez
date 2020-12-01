import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Book = (props) => {
    let {
        id,
        volumeInfo: {title, authors, description, imageLinks: {thumbnail, smallThumbnail}} = { imageLinks: {} },
        saleInfo: {listPrice} = {}
    } = props.book; 

const clickHandler = () => props.addBook(title, id);
const clickHandlerRemove = () => props.removeBook(title, id);
const clickHandlerDynamic = () => props.dynamicBook(title, id);
    return (
            <div className="book">
                <>
                <h2 className="description-text">{title}</h2>
                <img className="image" src={smallThumbnail || thumbnail} alt={title} />
                <p className="description-text">{authors ? authors.join(', ') : 'No authors'}</p>
                <h4 className="description-text">£{listPrice && listPrice.amount}</h4>
                <p className="description-text">{description}</p>
                {props.addBook && (
                    <Button 
                        onClick={clickHandler}
                        className="button-inner">
                            Add +
                    </Button>
                )}
                {props.removeBook && (
                    <Button
                        onClick={clickHandlerRemove}
                        className="button-inner">
                            Remove
                    </Button>    
                )}    
                {props.dynamicBook && (
                    <Link to="/Dynamic">
                    <Button
                    onClick={clickHandlerDynamic}
                    className="button-inner">
                        Buy Book
                </Button>   
                </Link>
                )}    
            </>
        </div> 
    );
}


export default Book;