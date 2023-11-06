import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Bootbutton(props){
    return(
        <Button onClick={props.fun}>{props.content}</Button>
    )
}

export default Bootbutton;