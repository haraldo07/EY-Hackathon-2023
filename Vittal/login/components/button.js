import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function BootButton(props){
    return(
        <Button color={props.color} onClick={props.fun} disabled={props.flag}>{props.content}</Button>
    )
}

export default BootButton;