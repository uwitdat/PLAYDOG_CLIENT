import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './ProfilePage.css'

const ProfilePage = () => {
  const auth = useSelector((state) => state.firebase.auth);

  useEffect(() => {
    
  }, []);

  const getDate = (dateCode) => {
    console.log("DateCode: ", dateCode);
    return dateCode ? (new Date(parseInt(dateCode))).toDateString() : ""; 
  }

  return (
    <div className="container profile-section">
      <div className="row">
        <div className="col-xs-12 col-sm-9">
        
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="profile__avatar">
                <img src={auth.photoURL} alt="avater" />
              </div>
              <div className="profile__header">
                <h4>{auth.displayName}</h4>
                <p>{auth.email}</p>
                <p>Last Logged In: {getDate(auth.lastLoginAt)}</p>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
            <h4 className="panel-title">User info</h4>
            </div>
            <div className="panel-body">
              <table className="table profile__table">
                <tbody>
                  <tr>
                    <th><strong>Location</strong></th>
                    <td>{auth.country}</td>
                  </tr>
                  <tr>
                    <th><strong>Company name</strong></th>
                    <td>Simpleqode.com</td>
                  </tr>
                  <tr>
                    <th><strong>Position</strong></th>
                    <td>Front-end developer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
            <h4 className="panel-title">Community</h4>
            </div>
            <div className="panel-body">
              <table className="table profile__table">
                <tbody>
                  <tr>
                    <th><strong>Comments</strong></th>
                    <td>58584</td>
                  </tr>
                  <tr>
                    <th><strong>Member since</strong></th>
                    <td>Jan 01, 2016</td>
                  </tr>
                  <tr>
                    <th><strong>Last login</strong></th>
                    <td>1 day ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
            <h4 className="panel-title">Latest posts</h4>
            </div>
            <div className="panel-body">
              <div className="profile__comments">
                <div className="profile-comments__item">
                  <div className="profile-comments__controls">
                    <button type="button"><i className="fa fa-share-square-o"></i></button>
                    <button type="button"><i className="fa fa-edit"></i></button>
                    <button type="button"><i className="fa fa-trash-o"></i></button>
                  </div>
                  <div className="profile-comments__avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                  </div>
                  <div className="profile-comments__body">
                    <h5 className="profile-comments__sender">
                      Richard Roe <small>2 hours ago</small>
                    </h5>
                    <div className="profile-comments__content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, corporis. Voluptatibus odio perspiciatis non quisquam provident, quasi eaque officia.
                    </div>
                  </div>
                </div>
                <div className="profile-comments__item">
                  <div className="profile-comments__controls">
                    <button><i className="fa fa-share-square-o"></i></button>
                    <button><i className="fa fa-edit"></i></button>
                    <button><i className="fa fa-trash-o"></i></button>
                  </div>
                  <div className="profile-comments__avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." />
                  </div>
                  <div className="profile-comments__body">
                    <h5 className="profile-comments__sender">
                      Richard Roe <small>5 hours ago</small>
                    </h5>
                    <div className="profile-comments__content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolor laboriosam dolores magnam mollitia, voluptatibus inventore accusamus illo.
                    </div>
                  </div>
                </div>
                <div className="profile-comments__item">
                  <div className="profile-comments__controls">
                    <button><i className="fa fa-share-square-o"></i></button>
                    <button><i className="fa fa-edit"></i></button>
                    <button><i className="fa fa-trash-o"></i></button>
                  </div>
                  <div className="profile-comments__avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
                  </div>
                  <div className="profile-comments__body">
                    <h5 className="profile-comments__sender">
                      Richard Roe <small>1 day ago</small>
                    </h5>
                    <div className="profile-comments__content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, esse, magni aliquam quisquam modi delectus veritatis est ut culpa minus repellendus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-xs-12 col-sm-3" style={{paddingTop: '5%'}}>          
          <div className="profile__contact-info">
            <div className="profile__contact-info-item">
              <div className="profile__contact-info-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="profile__contact-info-body">
                <h5 className="profile__contact-info-heading">Work number</h5>
                (000)987-65-43
              </div>
            </div>
            <div className="profile__contact-info-item">
              <div className="profile__contact-info-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="profile__contact-info-body">
                <h5 className="profile__contact-info-heading">Mobile number</h5>
                (000)987-65-43
              </div>
            </div>
            <div className="profile__contact-info-item">
              <div className="profile__contact-info-icon">
                <i className="fa fa-envelope-square"></i>
              </div>
              <div className="profile__contact-info-body">
                <h5 className="profile__contact-info-heading">E-mail address</h5>
                <a href="mailto:admin@domain.com">admin@domain.com</a>
              </div>
            </div>
            <div className="profile__contact-info-item">
              <div className="profile__contact-info-icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="profile__contact-info-body">
                <h5 className="profile__contact-info-heading">Work address</h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
            </div>
          </div>

        </div>
      </div>       
    </div>
  )
}

export default ProfilePage;