import React from 'react';
import { Accordion } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';
import './Blog.css'

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='Blog-container'>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
                    <Accordion.Body>
                        SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn't have to completely rely on a data store (or) database to save session information. JWTs can be encrypted, but they are typically encoded & signed..
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the difference between javascript and NodeJS</Accordion.Header>
                    <Accordion.Body>
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                    <Accordion.Body>
                        How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;