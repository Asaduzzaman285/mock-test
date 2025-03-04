import React from 'react';

const Meeting = () => {
  return (
    <section className="upcoming-meetings" id="meetings">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Upcoming Meetings</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="categories">
              <h4>Meeting Categories</h4>
              <ul>
                <li><a href="#">Sed tempus enim leo</a></li>
                <li><a href="#">Aenean molestie quis</a></li>
                <li><a href="#">Cras et metus vestibulum</a></li>
                <li><a href="#">Nam et condimentum</a></li>
                <li><a href="#">Phasellus nec sapien</a></li>
              </ul>
              <div className="main-button-red">
                <a href="meetings.html">All Upcoming Meetings</a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              {[{
                date: 'Nov 10',
                title: 'New Lecturers Meeting',
                price: '$22.00',
                img: 'assets/images/meeting-01.jpg',
              }, {
                date: 'Nov 24',
                title: 'Online Teaching Techniques',
                price: '$36.00',
                img: 'assets/images/meeting-02.jpg',
              }, {
                date: 'Nov 26',
                title: 'Higher Education Conference',
                price: '$14.00',
                img: 'assets/images/meeting-03.jpg',
              }, {
                date: 'Nov 30',
                title: 'Student Training Meetup',
                price: '$48.00',
                img: 'assets/images/meeting-04.jpg',
              }].map((meeting, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>{meeting.price}</span>
                      </div>
                      <a href="meeting-details.html">
                        <img src={meeting.img} alt={meeting.title} />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>{meeting.date.split(' ')[0]} <span>{meeting.date.split(' ')[1]}</span></h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>{meeting.title}</h4>
                      </a>
                      <p>Morbi in libero blandit lectus<br />cursus ullamcorper.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
