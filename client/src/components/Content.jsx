import React, { useState, useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ProjectsContext } from '../contexts/ProjectsProvider';
import FAQ from './faqComponent';



const Content = ({ setActiveTab, fillStatus, setFillStatus }) => {

  const { compaignProject, setCompaignProject } = useContext(ProjectsContext); // Use the context
  
  const [faqs, setFaqs] = useState(compaignProject?.faqs || []);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const [story, setStory] = useState(compaignProject?.story || '');


  // useEffect(() => {
  //   console.log(faqs);
  // }, [faqs]);


  const handleAddFaq = () => {
    setFaqs([...faqs, { question: newQuestion, answer: newAnswer }]);
    setNewQuestion("");
    setNewAnswer("");
  };
  const handleRemoveFaq = (indexToRemove) => {
    setFaqs(faqs.filter((_, index) => index !== indexToRemove));
  };


  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const handleStoryChange = (value) => {
    if (value.replace(/<[^>]*>/g, '').length <= 1000) {
      setStory(value);
    }
  };

  // useEffect(() => {
  //  console.log(story);
  // }, [story])


  // useEffect(() => {
  //  console.log(faqs);
  // }, [faqs])

  const handleSaveAndContinue = () => {

    // Update the project data in the context
    setCompaignProject({ ...compaignProject, faqs, story });
    alert('Information saved successfully!');
    // console.log(compaignProject);
    // Continue to the next step or navigate to another page if needed.

    setFillStatus([...fillStatus, 2]);

    // setTimeout(() => {
    //   setActiveTab("Team");
    // }, 1000); //auto switching tab.

  };

  return (
    <div>
      <div className="team-container">

        <h1 className="title">Story</h1>
        <h1 className="subtitle">
          Tell potential contributors more about your campaign. Provide details that will motivate people to contribute. A good pitch is compelling, informative, and easy to digest.
          <br />
          <br />
          Images that are intended to span the width of the story section should have a minimum width of 695 pixels. Images wider than 695 pixels will be resized proportionally.
        </h1>

        <ReactQuill
          value={story}
          onChange={handleStoryChange}
          className="story-editor"
          theme="snow"
          placeholder="Write your story here..."
          style={{ height: '300px' }}
        />

        <br />

        <h1 className="title">FAQ</h1>
        <h1 className="subtitle">
          This FAQ section is designed to answer the key questions backers might have while evaluating your campaign. We will also supply common responses to queries about crowdfunding and how Leap functions.
          <br />
          <br />
        </h1>

        <div className="faq-container">
          <input
            type="text"
            placeholder="Question"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="input"
            maxLength="500"
          />
          <textarea
            placeholder="Answer"
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            className="input"
            maxLength="500"
            rows="4"
          />
        </div>

        <button onClick={handleAddFaq} className="bg-black text-white px-6 py-3 rounded-md ml-auto hover:scale-105">Save This FAQ</button>

        <div className='bg-slate-100 rounded-lg mx-3 p-5'>

          {
            faqs.map((faq, index) => (
              <div key={index} className='flex justify-between items-start mb-5'>
                <div className='w-2/3'>
                  <FAQ faq={faq} />
                </div>
                <button onClick={()=> handleRemoveFaq(index)} className='bg-red-600 text-white px-5 h-10  rounded-md hover:scale-105'>
                  Remove
                </button>
              </div>
            ))
          }
        </div>

        <div className="button-container">
          <button onClick={handleSaveAndContinue} className="save-button">Save and Continue</button>
        </div>
      </div>

      <style>
        {`
          .team-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 800px;
            margin: 0 auto;
            padding-top: 20px;
          }

          .title {
            font-size: 2.3em;
            font-weight: bold;
          }

          .subtitle {
            font-size: 1.2em;
          }

          .faq-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
          }

          .input {
            padding: 15px;
            font-size: 1.2em;
            margin-top: 10px;
            margin-bottom: 10px;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .button-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-end;
          }

          .add-faq-button {
            padding: 10px 15px;
            font-size: 1em;
            background-color: #000000;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            align-self: flex-start;
          }

          .add-faq-button:hover {
            background-color: #333333;
          }

          .save-button {
            padding: 15px 30px;
            font-size: 1.2em;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .save-button:hover {
            background-color: #218838;
          }

          .story-editor {
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
};


export default Content;