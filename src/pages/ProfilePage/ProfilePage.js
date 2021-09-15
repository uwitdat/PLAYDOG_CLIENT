import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './ProfilePage.css'

const ProfilePage = () => {
  const { auth, profile } = useSelector((state) => state.firebase);
  
  useEffect(() => {}, []);

  const getDate = (dateCode) => {
    return dateCode ? (new Date(parseInt(dateCode))).toDateString() : ""; 
  }

  return (
    <div className="container profile-section">
      <div className="row">
        <div className="col-xs-12 col-sm-9">
        
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="profile__avatar">
                <img src={profile.avatarUrl} alt="avater" />
              </div>
              <div className="profile__header">
                <h4>{profile.displayName}</h4>
                <p>{auth.email}</p>
                <p>Last Logged In: {getDate(auth.lastLoginAt)}</p>
                <Link to="/profile/edit">Edit Profile</Link>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading">
            <h4 className="panel-title">Pets</h4>
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
                <h5 className="profile__contact-info-heading">Country</h5>
                {auth.country}
              </div>
            </div>
            <div className="profile__contact-info-item">
              <div className="profile__contact-info-icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="profile__contact-info-body">
                <h5 className="profile__contact-info-heading">Phone Number</h5>
                {profile.phoneNumber}
              </div>
            </div>
            <div className="profile__contact-info-item">
              <div className="profile__contact-info-icon">
                <i className="fa fa-envelope-square"></i>
              </div>
              <div className="profile__contact-info-body">
                <h5 className="profile__contact-info-heading">Verified</h5>
                {profile.isVerified}
              </div>
            </div>
          </div>

        </div>
      </div>       
    </div>
  )
}

export default ProfilePage;