import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./EditProfilePage.scss"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditProfilePage = () => {
  const { profile, auth } = useSelector((state) => state.firebase);
  const [userProfile, setUserProfile] = useState(profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userProfile);
  }

  const getDate = (dateCode) => {
    return dateCode ? (new Date(parseInt(dateCode))).toDateString() : ""; 
  }

  const handleBirthdayUpdate = (newDate) => {
    return setUserProfile({...userProfile, birthday: newDate });
  }

  useEffect(() => {
    setUserProfile(profile);
  }, []);

  return (
    <div className="edit-profile-page container">
      <Card>
        <Card.Header>Edit Profile</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={2}>
              <div className="panel" style={{margin: '10px'}} >
                <div className="panel-body">
                  <div className="profile__avatar">
                    <img src={profile.avatarUrl} alt="avater" />
                  </div>
                </div>
              </div>
              
              <Row className="px-4" style={{marginTop: '190px'}}>
                <Col>
                  <h4>Details</h4>
                  <hr/>
                  <div className="ml-2">
                    <p className="mb-0"><strong>Last Logged In: </strong></p>
                    <p className="ml-2">- {getDate(auth.lastLoginAt)}</p>
                    <p className="mb-0"><strong>First Logged In: </strong></p>
                    <p className="ml-2">- {getDate(auth.createdAt)}</p>
                    <p className="mb-0"><strong>Status: </strong></p>
                    <p className="ml-2">- {auth.emailVerified ? 'Email Verified' : 'Verification Required'}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={10}>
              <div className="panel" style={{margin: '10px'}}>
                <div className="profile__header">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col lg={12} className="px-3">
                        <Form.Group className="mb-3" controlId="firstName">
                          <Form.Label>Display Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter a display name" name="displayName" value={userProfile.displayName || ''} onChange={(e) => setUserProfile({...userProfile, displayName: e.target.value })} />
                        </Form.Group>  
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6} className="px-3">
                        <Form.Group className="mb-3" controlId="firstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter first name" name="firstName" value={userProfile.firstName || ''} onChange={(e) => setUserProfile({...userProfile, firstName: e.target.value })} />
                        </Form.Group>  
                      </Col>
                      <Col lg={6} className="px-3">
                        <Form.Group className="mb-3" controlId="lastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter last name" name="lastName" value={userProfile.lastName || ''} onChange={(e) => setUserProfile({...userProfile, lastName: e.target.value })}/>
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
                          <Form.Control type="text" placeholder="Enter (###)-###-####" name="phoneNumber" value={userProfile.phoneNumber || ''} onChange={(e) => setUserProfile({...userProfile, phoneNumber: e.target.value })}/>
                        </Form.Group>
                      </Col>
                    </Row>

                    <hr/>

                    <Row>
                      <Col lg={12} className="px-3">
                        <Form.Group className="mb-3" controlId="address1">
                          <Form.Label>Address 1</Form.Label>
                          <Form.Control type="text" placeholder="Enter address 1" name="address1" value={userProfile.address1 || ''} onChange={(e) => setUserProfile({...userProfile, address1: e.target.value })} />
                        </Form.Group>  
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="px-3">
                        <Form.Group className="mb-3" controlId="address2">
                          <Form.Label>Address 2</Form.Label>
                          <Form.Control type="text" placeholder="Enter address 2" name="address2" value={userProfile.address2 || ''} onChange={(e) => setUserProfile({...userProfile, address2: e.target.value })} />
                        </Form.Group>  
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4} className="px-3">
                        <Form.Group className="mb-3" controlId="state_province">
                          <Form.Label>State/Province</Form.Label>
                          <Form.Control type="text" placeholder="Enter state/province name" name="state_province" value={userProfile.state_province || ''} onChange={(e) => setUserProfile({...userProfile, state_province: e.target.value })}/>
                        </Form.Group>
                      </Col>
                      <Col lg={4} className="px-3">
                        <Form.Group className="mb-3" controlId="postal_zipcode">
                          <Form.Label>Postal/Zip Code</Form.Label>
                          <Form.Control type="text" placeholder="Enter postal/zip code" name="postal_zipcode" value={userProfile.postal_zipcode || ''} onChange={(e) => setUserProfile({...userProfile, postal_zipcode: e.target.value })}/>
                        </Form.Group>
                      </Col>
                      <Col lg={4} className="px-3">
                        <Form.Group className="mb-3" controlId="country">
                          <Form.Label>Country</Form.Label>
                          <Form.Control type="text" placeholder="Enter country name" name="country" value={userProfile.country || ''} onChange={(e) => setUserProfile({...userProfile, country: e.target.value })}/>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <br/>
                    <Button variant="primary" type="submit">Save</Button>
                    <Link to="/profile" className="btn btn-secondary ml-1">Cancel</Link>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
   );
}

export default EditProfilePage;