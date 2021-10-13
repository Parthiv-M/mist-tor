import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Breadcrumb, BreadcrumbItem, Container, Row, Col, ProgressBar } from "react-bootstrap"
import { Card, CardImg, } from "react-bootstrap"

const cardbody = {
    background: "#3C3644",
    boxShadow: "0px 0px 15px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "9px", 
    margin: "0 px",
    padding: "0 px",
    display: 'flex',
    flex: "1",
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
};

const button = {
    background: "#221F26",
    boxshadow: "0px 0px 15px 4px rgba(0, 0, 0, 0.25)",
    borderradius: "9px",
    border: "none",
};

const horizontalline = {
    width: "213.02px",
    height: "0 px",
    border: "1px solid #7D4696",
    padding: "none",
    margin: "none",
};
const date = {

    width: "163px",
    height: "20px",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "17px",
    color: "#F5F5F5",

};
const Title = {
    width: "163px",
    height: "20px",
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#F5F5F5",

};

const Text = {
    width: "411px",
    height: "71px",

    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "21px",
    textAlign: "center",

    color: "#F5F5F5",

};


const AnnnouncementCards = () => {
    return (
        <Card className="text-center">
            <Card.Body style={cardbody}>
                <Card.Title style={Title}>Announcement</Card.Title>
                <div style={horizontalline}></div>
                <div style={date}>Date</div>
                <Card.Text style={Text}>
                    This is announcement. This is announcement. This is very important.
                </Card.Text>
                <Button style={button}>Full Announcement</Button>
            </Card.Body>
        </Card>);
}
export default AnnnouncementCards;