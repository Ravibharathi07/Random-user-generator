import React from 'react';
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';
import {FaEnvelope,FaMapMarkedAlt,FaPhone,FaGenderless} from 'react-icons/fa';


const myCard = function({details}){
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-success"
                src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                   <h1>
                       <span className="pr-2">{details.name?.title}</span>
                       <span>{details.name?.first}</span>
                       <span>{details.name?.last}</span>

                   </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt/>
                    {details.location?.city} 
                </CardText>
                <CardText>
                    <FaEnvelope/>
                    {details.email}
                </CardText>
                <CardText>
                <FaPhone/>
                    {details.phone} 
                </CardText>
                <CardText>
                  <FaGenderless/>
                    {details.gender}
                </CardText>
            </CardBody>
        </Card>
    )

}

export default myCard