import React from 'react';
import { Row, Col, Container, Image, Carousel } from 'react-bootstrap';
//import {BrowserRouter as Route} from 'react-router-dom'
import Faq from './Faq';
import Footer from './partials/Footer';

const HomeScreen = () => {
	return (
		<>
			<Carousel interval={5000}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/3978594/pexels-photo-3978594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3 style={{ fontFamily: 'Titillium Web, sans-serif' }}>
							The only journey is the journey within.” – Rainer Maria Rilke
						</h3>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://cdn.pixabay.com/photo/2018/06/05/08/14/sunset-3454964_1280.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://cdn.pixabay.com/photo/2019/05/27/07/26/mental-health-4232031_1280.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3
							style={{
								fontFamily: 'Titillium Web, sans-serif',
								color: 'black',
							}}
						>
							Mental health…is not a destination, but a process. It’s about how
							you drive, not where you’re going.” – Noam Shpancer, PhD
						</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<Container className="section1" fluid>
				{/*<Row className="mt-1">
				<Col className="c1">Do Not Ignore Mental Health!</Col>
				<Col className="c2">
					<Image
						style={{ height: '36rem', width: '50rem' }}
						src="https://cdn.pixabay.com/photo/2015/11/07/09/11/board-1030589_1280.jpg"
					/>
				</Col>
	</Row> */}
				{/*<Container className="faq-heading" fluid>
				<b>Frequently Asked Questions</b>
	</Container> */}
				<Faq />
				<Footer />
			</Container>
		</>
	);
};

export default HomeScreen;
