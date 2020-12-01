import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



function Search (props) {
    function handelSubmit (e) {
        e.preventDefault();
        props.findBooks(props.keyword);
    }

    return (
    // <form className="search-form" onsubmit={handleSubmit}>
    //     <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)} />
    //     <input type="Submit" value="Search" />
    // </form>
    
    <Form onSubmit={handelSubmit}>
        <Form.Group controlID="searchKeyword">
            <Form.Label><br></br>Search Books </Form.Label>
            <Form.Control 
            type="keyword" 
            placeholder="Enter Keyword" 
            value={props.keyword} 
            onChange={(e) => props.setKeyword(e.target.value)} />
    <Button className="btn-light" type="submit">
        Submit
    </Button></Form.Group>
</Form>    

    );
}



export default Search;