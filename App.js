import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import './App.css';
import MyCard from './myCard'

function App() {
  const[details,setDetails] = useState({})

   const fetchDetails = async()=>{
     const {data} = await Axios.get('https://randomuser.me/api/')
     console.log(data)

     const details= data.results[0]

     setDetails(details)
   }
   useEffect(()=>{
       fetchDetails()
   },[])
  return (
    <div className="App">
     <Container fluid className="p-4 bg-danger App">
       <Row>
         <Col md={4} className="offset-md-4 mt-4">
           <MyCard details={details}/>
         </Col>
       </Row>
       
     </Container>
    </div>
  );
}

export default App;
