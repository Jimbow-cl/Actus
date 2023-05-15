import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSink(props) {
  return (
    <Card style={{
      width: '28rem', minHeight: '900px', backgroundColor: 'rgb(241, 215, 181)'
    }}>
      <Card.Img variant="top" src={props.urlToImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text><strong>Publié le: </strong>{props.publishedAt}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item><strong>Auteur:</strong> {props.author}</ListGroup.Item>
        <ListGroup.Item><strong>Description: </strong>{props.description}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className='align' href={props.url}>En savoir plus</Card.Link>

      </Card.Body>
    </Card >
  );
}

export default KitchenSink;