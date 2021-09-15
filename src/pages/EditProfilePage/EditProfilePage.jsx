import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import "./EditProfilePage.scss"

const EditProfilePage = () => {
  const { profile, auth } = useSelector((state) => state.firebase);
  const [userProfile, setUserProfile] = useState(profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userProfile);
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
                          <Form.Control type="text" placeholder="MM/DD/YYY" name="birthday" value={userProfile.birthday || ''} onChange={(e) => setUserProfile({...userProfile, birthday: e.target.value })} />
                        </Form.Group>  
                      </Col>
                      <Col lg={6} className="px-3">
                        <Form.Group className="mb-3" controlId="lastName">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="text" placeholder="Enter (###)-###-####" name="phoneNumber" value={userProfile.phoneNumber || ''} onChange={(e) => setUserProfile({...userProfile, phoneNumber: e.target.value })}/>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <br/>
                    <Button variant="primary" type="submit">Save</Button>
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