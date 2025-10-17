import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Blogsingle(props) {
  return (
    <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
    
      </Card.Body>
    </Card>
  );
}

export default Blogsingle;