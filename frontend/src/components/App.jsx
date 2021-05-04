import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './partials/Header';
//import Footer from './partials/Footer';
import Signup from './Signup';
import Register from './Register';
import Questionnair from './Questionnair';
import Scores from './Scores';
import Profile from './Profile';
//import Faq from './Faq';
import Dummy from './Dummy';
import HomeScreen from './HomeScreen';
import AdminDashboard from './AdminDashboard';
import Analysis from './Analysis';
import Appointment from './Appointment';
import '../custom.css';

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Container className="below-navbar" fluid>
					<Switch>
						{/* <Route path='/' exact component={HomeScreen} /> */}
						<Route path="/" exact component={HomeScreen} />
						<Route path="/login" component={Signup} />
						<Route path="/register" component={Register} />
						<Route path="/questionair" component={Questionnair} />
						<Route path="/score" component={Scores} />
						<Route path="/dashboard" component={Dummy} />
						<Route path="/admindashboard" component={AdminDashboard} />
						<Route path="/analysis" component={Analysis} />
						{/* <Route path="/admindashboard/appointment" component={Appointment} /> */}

						{/* <Route path="/dashboard/profile/:id" component={Profile} /> */}
						<Route path="/profile/:id" component={Profile} />
					</Switch>
				</Container>
			</main>
			{/*<Faq />
      <Footer /> */}
		</Router>
	);
}

export default App;
