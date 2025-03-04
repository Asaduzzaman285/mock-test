import React, { useState } from 'react';
import './MockTestList.css';

const MockTestList = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0, total: 0 });

  // Mock data for tests
  const mockTests = [
    {
      id: 1,
      title: 'Cambridge 11 Test 1',
      price: '$14.00',
      date: { month: 'Mar', day: '12' },
      description: 'Reading and writing test for Cambridge 11',
      category: 'soon',
      questions: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        question: `What is your ${i === 0 ? 'country' : 'city'} name?`,
        options: ['Bangladesh', 'India', 'Pakistan', 'Nepal'],
        correctAnswer: 0,
      })),
    },
    {
      id: 2,
      title: 'Cambridge 11 Test 2',
      price: '$22.00',
      date: { month: 'Mar', day: '14' },
      description: 'Listening test for Cambridge 11',
      category: 'imp',
      questions: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        question: `What is the capital of ${
          i === 0 ? 'France' : 'Germany'
        }?`,
        options: ['Paris', 'Berlin', 'London', 'Rome'],
        correctAnswer: i === 0 ? 0 : 1,
      })),
    },
    {
      id: 3,
      title: 'Cambridge 11 Test 3',
      price: '$24.00',
      date: { month: 'Mar', day: '16' },
      description: 'Speaking test for Cambridge 11',
      category: 'soon',
      questions: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        question: `Which language is spoken in ${
          i === 0 ? 'Brazil' : 'Japan'
        }?`,
        options: ['English', 'Portuguese', 'Spanish', 'Japanese'],
        correctAnswer: i === 0 ? 1 : 3,
      })),
    },
    {
      id: 4,
      title: 'Cambridge 11 Test 4',
      price: '$32.00',
      date: { month: 'Mar', day: '18' },
      description: 'Comprehensive test for Cambridge 11',
      category: 'att',
      questions: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        question: `What is the largest continent?`,
        options: ['Asia', 'Africa', 'Europe', 'North America'],
        correctAnswer: 0,
      })),
    },
    {
      id: 5,
      title: 'Cambridge 12 Test 1',
      price: '$34.00',
      date: { month: 'Mar', day: '22' },
      description: 'Reading test for Cambridge 12',
      category: 'att',
      questions: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        question: `What is the currency of ${
          i === 0 ? 'UK' : 'USA'
        }?`,
        options: ['Dollar', 'Pound', 'Euro', 'Yen'],
        correctAnswer: i === 0 ? 1 : 0,
      })),
    },
    {
      id: 6,
      title: 'Cambridge 12 Test 2',
      price: '$45.00',
      date: { month: 'Mar', day: '24' },
      description: 'Listening test for Cambridge 12',
      category: 'imp',
      questions: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        question: `Which ocean is the largest?`,
        options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
        correctAnswer: 0,
      })),
    },
  ];

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setCurrentQuestion(0);
    setAnswers({});
    setTestSubmitted(false);
  };

  const handleOptionSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < selectedTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Simulate an API call or local calculation of results
  const handleSubmitTest = () => {
    const totalQuestions = selectedTest.questions.length;
    let correctCount = 0;

    selectedTest.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const wrongCount = totalQuestions - correctCount;

    // Save the score to state
    setScore({
      correct: correctCount,
      wrong: wrongCount,
      total: totalQuestions,
    });

    setTestSubmitted(true);
  };

  const goBackToTests = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setTestSubmitted(false);
  };

  // 1) If no test selected, show test list
  if (!selectedTest) {
    return (
      <section className="tests-page mt-5" id="tests">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Filters */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="filters">
                    <ul>
                      <li data-filter="*" className="active">
                        All Tests
                      </li>
                      <li data-filter=".soon">Soon</li>
                      <li data-filter=".imp">Important</li>
                      <li data-filter=".att">Attractive</li>
                    </ul>
                  </div>
                </div>
                {/* Test Cards */}
                <div className="col-lg-12">
                  <div className="row grid">
                    {mockTests.map((test) => (
                      <div
                        key={test.id}
                        className={`col-lg-4 templatemo-item-col all ${test.category}`}
                      >
                        <div
                          className="test-item"
                          onClick={() => handleTestClick(test)}
                        >
                          <div className="thumb">
                            <div className="price">
                              <span>{test.price}</span>
                            </div>
                            <a href="#">
                              <img
                                src={`assets/images/test-0${
                                  (test.id % 3) + 1
                                }.jpg`}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="down-content">
                            <div className="date">
                              <h6>
                                {test.date.month}{' '}
                                <span>{test.date.day}</span>
                              </h6>
                            </div>
                            <a href="#">
                              <h4>{test.title}</h4>
                            </a>
                            <p>{test.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Pagination (Optional) */}
                <div className="col-lg-12">
                  <div className="pagination">
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            Copyright ©
            <span> 2025 </span>Mock Test Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </section>
    );
  }

  if (testSubmitted) {
    return (
      <div className="score-card-container">
        <div className="score-card-content">
          <h2>Your quiz has been submitted!</h2>
          <div className="score-card">
            <div className="score-item">
              <h4>Correct Answers</h4>
              <p>{score.correct}</p>
            </div>
            <div className="score-item">
              <h4>Total Questions</h4>
              <p>{score.total}</p>
            </div>
            <div className="score-item">
              <h4>Wrong Answers</h4>
              <p>{score.wrong}</p>
            </div>
          </div>
          <button className="go-back-button" onClick={goBackToTests}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // 3) If test is selected and not submitted, show questions
  return (
    <div className="test-question-container">
      <div className="question-navigation">
        <h2>{selectedTest.title}</h2>
        <div className="question-list">
          {selectedTest.questions.map((q, index) => (
            <div
              key={q.id}
              className={`question-number ${
                index === currentQuestion ? 'active' : ''
              } ${answers[q.id] !== undefined ? 'answered' : ''}`}
              onClick={() => setCurrentQuestion(index)}
            >
              Question {String(q.id).padStart(2, '0')}
            </div>
          ))}
        </div>
        <button className="back-button" onClick={goBackToTests}>
          Back to Tests
        </button>
      </div>

      <div className="question-content">
        <div className="question-header">
          <h3>
            Question{' '}
            {String(selectedTest.questions[currentQuestion].id).padStart(
              2,
              '0'
            )}
          </h3>
          <div className="timer">Time left: 01:30:00</div>
        </div>

        <div className="question-body">
          <p>{selectedTest.questions[currentQuestion].question}</p>
          <div className="options">
            {selectedTest.questions[currentQuestion].options.map(
              (option, index) => (
                <div key={index} className="option">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name={`question-${selectedTest.questions[currentQuestion].id}`}
                    checked={
                      answers[selectedTest.questions[currentQuestion].id] ===
                      index
                    }
                    onChange={() =>
                      handleOptionSelect(
                        selectedTest.questions[currentQuestion].id,
                        index
                      )
                    }
                  />
                  <label htmlFor={`option-${index}`}>
                    {String.fromCharCode(65 + index)}: {option}
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        <div className="question-footer">
          <button
            className="prev-button"
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion < selectedTest.questions.length - 1 ? (
            <button className="next-button" onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <button className="submit-button" onClick={handleSubmitTest}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockTestList;
