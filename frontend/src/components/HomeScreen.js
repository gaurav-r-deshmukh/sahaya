import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
//import {BrowserRouter as Route} from 'react-router-dom'
import Faq from './Faq';
import Footer from './partials/Footer';

const HomeScreen = () => {
	return (
		<Container className="section1" fluid>
			<Row className="mt-1">
				<Col className="c1">Do Not Ignore Mental Health!</Col>
				<Col className="c2">
					<Image
						style={{ height: '36rem', width: '50rem' }}
						src="https://cdn.pixabay.com/photo/2015/11/07/09/11/board-1030589_1280.jpg"
					/>
				</Col>
			</Row>
			{/*<Container className="faq-heading" fluid>
				<b>Frequently Asked Questions</b>
	</Container> */}
			<Faq />
			<Footer />
		</Container>
	);
};

export default HomeScreen;
