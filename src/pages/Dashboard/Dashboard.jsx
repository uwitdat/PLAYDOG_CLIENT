import React, { useEffect } from 'react';
import "./Dashboard.scss"
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import Post from 'components/Post/Post';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const { auth, profile } = useSelector((state) => state.firebase);

  useEffect(() => { }, []);

  const getDate = (dateCode) => {
    return dateCode ? (new Date(parseInt(dateCode))).toDateString() : "";
  }

  return (
    <div className="container dashboard">
      <Row>
        <Col lg="2" style={{position: 'fixed'}}>
          <Card style={{border: 'none'}}>
            <Card.Body style={{minHeight: '175px', padding: '12% 5%'}}>
              <div className="profile__avatar">
                <img src={profile.avatarUrl} alt="avater" />
              </div>
              <div className="profile__header">
                <h4>{profile.displayName}</h4>
                <p>{auth.email}</p>
                <p>Last Logged In: {getDate(auth.lastLoginAt)}</p>
              </div>
            </Card.Body>
          </Card>

          <br/><br/><br/>

          <Card className="links-section">
          <Card.Title><h3>Recently Viewed</h3></Card.Title>
            <Card.Body>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={{span: '9', offset: '3'}}>
          <Card>
            <Card.Body>
              <Card.Title><h3>Create Event</h3></Card.Title>
              <br/>
              <Card.Text>
                <textarea className="form-control" rows="4" placeholder="Post some details here...."></textarea>
              </Card.Text>
              
              <div className="mar-top clearfix mt-4">
                <button className="btn btn-sm btn-primary pull-right" type="submit">
                  <FontAwesomeIcon icon={faShare} /> 
                  &nbsp;Share
                </button>
              </div>
            </Card.Body>
          </Card>
          
          <br/><hr/><br/>

          <Card>
            <Card.Body>
              <div className="panel panel-body">
                <div className="timeline">
                  
                  <div className="timeline-header">
                    <div className="timeline-header-title">Now</div>
                  </div>
            
                  <Post />

                  <div className="timeline-header">
                    <div className="timeline-header-title">1 Hour ago</div>
                  </div>

                  <Post />
                  <Post />
                  <Post />

                  <div className="timeline-header">
                    <div className="timeline-header-title">3 Hours ago</div>
                  </div>

                  <Post />
                  <Post />
                  <Post />
                  <Post />
                  <Post />

                  <div className="timeline-header">
                    <div className="timeline-header-title">5 Hours ago</div>
                  </div>

                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Dashboard;