import React, { useState } from 'react';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    password: '********',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profileData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData({ ...formData });
    setIsEditing(false);
  };

  const mockTests = [
    {
      id: 1,
      name: 'Test 1',
      result: 'Passed',
      endTime: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
      isActive: true,
    },
    {
      id: 2,
      name: 'Test 2',
      result: 'Failed',
      endTime: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      isActive: false,
    },
    {
      id: 3,
      name: 'Test 3',
      result: 'In Progress',
      endTime: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
      isActive: true,
    },
  ];

  return (
    <div className="bg-light py-5" style={{ minHeight: "100vh" }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb bg-white p-2 rounded">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>

        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 mb-4">
            {/* Profile Card */}
            <div className="card text-center mb-4">
              <div className="card-body">
                <img
                  src="/api/placeholder/150/150"
                  alt="Profile"
                  className="rounded-circle mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    border: "4px solid #007bff",
                  }}
                />
                <h4 className="card-title">{profileData.name}</h4>
                <p className="card-text text-muted">Student</p>
                <p className="card-text text-muted">Learning Platform User</p>
                <div className="btn-group" role="group" aria-label="Profile actions">
                  <button className="btn btn-primary">Dashboard</button>
                  <button className="btn btn-outline-primary">Tests</button>
                </div>
              </div>
            </div>

            {/* Mock Tests Card */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Mock Tests</h5>
              </div>
              <ul className="list-group list-group-flush">
                {mockTests.map((test) => (
                  <li
                    key={test.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h6 className="mb-1">{test.name}</h6>
                      <small
                        className={
                          test.result === 'Passed'
                            ? "text-success"
                            : test.result === 'Failed'
                            ? "text-danger"
                            : "text-warning"
                        }
                      >
                        {test.result}
                      </small>
                    </div>
                    {test.isActive && (
                      <button className="btn btn-sm btn-primary">Go to test</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8">
            {/* Profile Details Card */}
            <div className="card mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Profile Details</h5>
                {!isEditing && (
                  <button onClick={() => setIsEditing(true)} className="btn btn-link">
                    Edit
                  </button>
                )}
              </div>
              <div className="card-body">
                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row mb-3">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-3">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-3">
                      <label className="col-sm-3 col-form-label">Phone</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-3">
                      <label className="col-sm-3 col-form-label">Password</label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="text-end">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...profileData });
                          setIsEditing(false);
                        }}
                        className="btn btn-outline-secondary me-2"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="row mb-3">
                      <label className="col-sm-3 fw-bold">Name</label>
                      <div className="col-sm-9">{profileData.name}</div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 fw-bold">Email</label>
                      <div className="col-sm-9">{profileData.email}</div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-3 fw-bold">Phone</label>
                      <div className="col-sm-9">{profileData.phone}</div>
                    </div>
                    <div className="row">
                      <label className="col-sm-3 fw-bold">Password</label>
                      <div className="col-sm-9">{profileData.password}</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Test Results and Performance Cards */}
            <div className="row">
              {/* Recent Test Results */}
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Recent Test Results</h5>
                  </div>
                  <div className="card-body">
                    {[
                      { label: 'Test 1 Score', score: 80 },
                      { label: 'Test 2 Score', score: 65 },
                      { label: 'Test 3 Score', score: 92 },
                    ].map((test, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between">
                          <small className="fw-bold">{test.label}</small>
                          <small className="fw-bold">{test.score}%</small>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${test.score}%` }}
                            aria-valuenow={test.score}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Test Performance */}
              <div className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Test Performance</h5>
                  </div>
                  <div className="card-body">
                    {[
                      { label: 'Numerical Reasoning', score: 75, color: 'bg-success' },
                      { label: 'Verbal Reasoning', score: 82, color: 'bg-success' },
                      { label: 'Logical Reasoning', score: 68, color: 'bg-warning' },
                    ].map((test, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between">
                          <small className="fw-bold">{test.label}</small>
                          <small className="fw-bold">{test.score}%</small>
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${test.color}`}
                            role="progressbar"
                            style={{ width: `${test.score}%` }}
                            aria-valuenow={test.score}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
