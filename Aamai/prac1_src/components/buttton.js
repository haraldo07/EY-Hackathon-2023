import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
function But(props){
 
    return(<Button onClick={props.onClick} variant={props.color}>{props.content}</Button>
)
}
export default But;
