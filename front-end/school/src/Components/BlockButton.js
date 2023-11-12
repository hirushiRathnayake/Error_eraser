import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import admin from '../Assets/admin.png';
import student from '../Assets/student.jpg';
import teacher from '../Assets/teacher.png';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Button variant="primary">{props.cButton}</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;