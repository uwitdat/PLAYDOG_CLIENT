import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

const ProfileForm = ({ userProfile, handleBirthdayUpdate, handleSubmit, handleProfileUpdate }) => {
  const [states, setStates] = useState([[]]);

  const setCountry = (e) => {
		handleProfileUpdate(e);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "country": e.target.value });

    var requestOptions = {
      method: 'POST', headers: myHeaders,
      body: raw, redirect: 'follow'
    };

    return fetch("https://countriesnow.space/api/v0.1/countries/states?", requestOptions)
      .then(response => response.text())
      .then(result => setStates(JSON.parse(result).data.states))
      .catch(error => console.log('error', error));
  }

	return (
		<div className="panel" style={{ margin: '10px' }} id="profile">
			<div className="profile__header">
				<Form onSubmit={handleSubmit}>
					<Row>
						<Col lg={12} className="px-3">
							<Form.Group className="mb-3" controlId="firstName">
								<Form.Label>Display Name</Form.Label>
								<Form.Control type="text" placeholder="Enter a display name" name="displayName" value={userProfile.displayName || ''} onChange={(e) => handleProfileUpdate(e)} />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col lg={6} className="px-3">
							<Form.Group className="mb-3" controlId="firstName">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" placeholder="Enter first name" name="firstName" value={userProfile.firstName || ''} onChange={(e) => handleProfileUpdate(e)} />
							</Form.Group>
						</Col>
						<Col lg={6} className="px-3">
							<Form.Group className="mb-3" controlId="lastName">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" placeholder="Enter last name" name="lastName" value={userProfile.lastName || ''} onChange={(e) => handleProfileUpdate(e)} />
							</Form.Group>
						</Col>
					</Row>

					<Row>
						<Col lg={6} className="px-3">
							<Form.Group className="mb-3" controlId="firstName">
								<Form.Label>Date of Birth</Form.Label>
								<DatePicker showYearDropdown scrollableYearDropdown yearDropdownItemNumber={120} showMonthDropdown maxDate={new Date()} className="form-control" selected={userProfile.birthday || ''} onChange={handleBirthdayUpdate} />
							</Form.Group>
						</Col>
						<Col lg={6} className="px-3">
							<Form.Group className="mb-3" controlId="lastName">
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type="text" placeholder="Enter (###)-###-####" name="phoneNumber" value={userProfile.phoneNumber || ''} onChange={(e) => handleProfileUpdate(e)} />
							</Form.Group>
						</Col>
					</Row>

					<hr />

					<Row>
						<Col lg={12} className="px-3">
							<Form.Group className="mb-3" controlId="address1">
								<Form.Label>Address 1</Form.Label>
								<Form.Control type="text" placeholder="Enter address 1" name="address1" value={userProfile.address1 || ''} onChange={(e) => handleProfileUpdate(e)} />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col lg={12} className="px-3">
							<Form.Group className="mb-3" controlId="address2">
								<Form.Label>Address 2</Form.Label>
								<Form.Control type="text" placeholder="Enter address 2" name="address2" value={userProfile.address2 || ''} onChange={(e) => handleProfileUpdate(e)} />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col lg={4} className="px-3">
							<Form.Group className="mb-3" controlId="country">
								<Form.Label>Country</Form.Label>
								<Form.Select aria-label="Select Country" value={userProfile.country || ''} name="country" onChange={(e) => setCountry(e)}>
									<option>Select Country</option>
									<option value="canada">Canada</option>
									<option value="united states">United States</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Col lg={4} className="px-3">
							<Form.Group className="mb-3" controlId="state_province">
								<Form.Label>State/Province</Form.Label>
								<Form.Select aria-label="Select State/Province" value={userProfile.state_province || ''} name="state_province" onChange={(e) => handleProfileUpdate(e)}>
									{states.map((state) => {
										return <option key={state.state_code} value={state.state_code}>{state.name}</option>
									})}
								</Form.Select>
							</Form.Group>
						</Col>
						<Col lg={4} className="px-3">
							<Form.Group className="mb-3" controlId="postal_zipcode">
								<Form.Label>Postal/Zip Code</Form.Label>
								<Form.Control type="text" placeholder="Enter postal/zip code" name="postal_zipcode" value={userProfile.postal_zipcode || ''} onChange={(e) => handleProfileUpdate(e)} />
							</Form.Group>
						</Col>

					</Row>

					<br />
					<Button variant="primary" type="submit" style={{ height: '25px' }} ref={(el) => {
						if (el) {
							el.style.setProperty('font-size', '10px', 'important');
						}
					}}>Save</Button>
					<Link to="/profile" className="btn btn-secondary ml-1">Cancel</Link>
				</Form>
			</div>
		</div>
	)
}

export default ProfileForm;