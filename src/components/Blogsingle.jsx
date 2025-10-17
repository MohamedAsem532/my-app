import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Headerc.css'
import Hcomponent from './Hcomponent';
function Blogsingle(props) {
  return (
    <Card className='shadow p-3 mb-5 bg-body rounded striped bordered hover card-hover' >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
    
      </Card.Body>
    </Card>
  );
}

export default Blogsingle;