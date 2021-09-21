import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Tabs, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import "./EditProfilePage.scss"
import ProfileForm from './ProfileForm';
import ProfilePets from './ProfilePets';



const EditProfilePage = () => {
  const { profile, auth } = useSelector((state) => state.firebase);
  const [userProfile, setUserProfile] = useState(profile);
  const [key, setKey] = useState('profile');
  
  const getDate = (dateCode) => {
    return dateCode ? (new Date(parseInt(dateCode))).toDateString() : "";
  }

  const handleBirthdayUpdate = (newDate) => {
    return setUserProfile({ ...userProfile, birthday: newDate });
  }

  const handleProfileUpdate = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    setUserProfile({ ...userProfile, [key]: val });
  }

	const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userProfile);
  }

  useEffect(() => {
    setUserProfile(profile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="edit-profile-page container">
      <Card>
        <Card.Header>Edit Profile</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={2}>
              <div className="panel" style={{ margin: '10px' }} >
                <div className="panel-body">
                  <div className="profile__avatar">
                    <img src={profile.avatarUrl} alt="avater" />
                  </div>
                </div>
              </div>

              <Row className="px-4" style={{ marginTop: '190px' }}>
                <Col>
                  <h4>Details</h4>
                  <hr />
                  <div className="ml-1">
                    <p className="mb-1"><strong>Last Logged In: </strong></p>
                    <p className="ml-1">- {getDate(auth.lastLoginAt)}</p>
                    <p className="mb-1"><strong>First Logged In: </strong></p>
                    <p className="ml-1">- {getDate(auth.createdAt)}</p>
                    <p className="mb-1"><strong>Status: </strong></p>
                    <p className="ml-1">- {auth.emailVerified ? 'Email Verified' : 'Verification Required'}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={10}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 mt-4">
                  <Tab eventKey="profile" title="Profile">
                    <ProfileForm userProfile={userProfile} handleBirthdayUpdate={handleBirthdayUpdate} handleSubmit={handleSubmit} handleProfileUpdate={handleProfileUpdate} />
                  </Tab>
                  <Tab eventKey="pets" title="Pets">
                    <ProfilePets />
                  </Tab>
                  <Tab eventKey="advanced" title="Advanced">
                    
                  </Tab>
              </Tabs>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EditProfilePage;