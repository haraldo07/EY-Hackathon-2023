import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function Input(props){
    return(
        <Form.Group id={props.id}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} size={props.size} value={props.value} onChange={props.fun}/>
        </Form.Group>
    )
}
export default Input;