import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

export const Service = () => (
  <div>
    <CardDeck>
      <Card>
        <Card.Img variant='top' src={require('../src/assets/service-1.jpg')} />
        <Card.Body>
          <Card.Title>React to Company Website</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Additional information</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant='top' src={require('../src/assets/service-1.jpg')} />
        <Card.Body>
          <Card.Title>React to Portfolio Theme</Card.Title>
          <Card.Text>
            This card has supporting artists, developers, and business owners profile and a description.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Additional information</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant='top' src={require('../src/assets/service-1.jpg')} />
        <Card.Body>
          <Card.Title>React eCommerce Application</Card.Title>
          <Card.Text>
            This is a fantastic opportunity that requires no real estate. Just develop the products and market them by the Internet.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Additional information</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  </div>
);
