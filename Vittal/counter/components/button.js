import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function BootButton(props){
    return(<Button variant={props.color} onClick={props.fun} disabled={props.flag}>{props.content}</Button>)
}

export default BootButton;