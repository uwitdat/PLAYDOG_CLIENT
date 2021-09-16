import React from 'react';
import "./Post.scss"

const Post = () => {
  return (
    <>
      <div className="timeline-entry">
        
        <div className="timeline-stat">
          <div className="timeline-icon">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="...." />
          </div>
          <div className="timeline-time">30 Min ago</div>
        </div>
        
        <div className="timeline-label">
          <p className="mar-no pad-btm">
            <strong>Maria J.</strong> shared an image
          </p>

          <div className="img-holder mt-4">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." className="img-md" />
          </div>
          
          <br/><hr/><br/>

          <blockquote className="bq-sm bq-open">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
          </blockquote>
        </div>
      </div>
    </>
   );
}

export default Post;