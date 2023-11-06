import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

function FormInput(props)
{
    return (
        <Form>
            <Form.Group controlId={props.Id}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control type={props.type} placeholder={props.placeholder} size={props.size} value={props.value} onChange={props.onChange}/>
            </Form.Group>
        </Form>
    );
}

export default FormInput;