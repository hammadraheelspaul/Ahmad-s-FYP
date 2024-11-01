import React, { useState , useContext} from 'react';
import { ProjectsContext } from '../contexts/ProjectsProvider';
import axios from 'axios'
const Basics = () => {
    const [campaignDetails, setCampaignDetails] = useState({
        title: '',
        tagline: '',
        imageUrl: '',
        location: '',
        category: '',
        tags: '',
        duration: ''

    });
const [endDate, setEndDate] = useState(null);

    const [successMessage, setSuccessMessage] = useState('');
    const {setCompaignProject ,compaignProject } = useContext(ProjectsContext)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCampaignDetails({ ...campaignDetails, [name]: value });
    };

   const handleImageChange = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'leep212'); // Replace with your upload preset

    axios.post('https://api.cloudinary.com/v1_1/dccckfgjb/image/upload', formData) // Replace with your Cloudinary cloud name
        .then(response => {
            const imageUr = response.data.secure_url;
            console.log(imageUr)
            setCampaignDetails({ ...campaignDetails, imageUrl: imageUr });
        })
        .catch(err => {
            console.error(err);
        });
};
const handleSubmit = async (e) => {
    e.preventDefault();

    // Add endDate to campaignDetails
    const updatedCampaignDetails = { ...campaignDetails, endDate };

    if (compaignProject) {
        setCompaignProject({ ...compaignProject, ...updatedCampaignDetails });
    } else {
        setCompaignProject(updatedCampaignDetails);
    }
};

    return (
        <>
            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 20px;
                    box-sizing: border-box;
                }

                .campaign-form {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    // max-width: 1200px;
                    margin: 0px auto;
                    box-sizing: border-box;
                    margin-bottom:50px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .form-group input[type="text"],
                .form-group input[type="number"],
                .form-group input[type="file"],
                .form-group select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    margin-top: 5px;
                    box-sizing: border-box;
                    font-size: 14px;
                }

                .form-group input[type="file"] {
                    display: none;
                }

                .upload-box {
                    width: 220px;
                    height: 220px;
                    padding: 20px;
                    border: 2px dashed #ddd;
                    border-radius: 4px;
                    text-align: center;
                    cursor: pointer;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }

                .upload-box img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: cover;
                }

                .form-group select {
                    appearance: none;
                    background: #fff url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20viewBox%3D'0%200%204%205'%3E%3Cpath%20fill%3D'%23AAAAAA'%20d%3D'M2%200L0%202h4L2%200zM2%205L0%203h4L2%205z'/%3E%3C/svg%3E") no-repeat right 10px center;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 10px;
                    width: 100%;
                    box-sizing: border-box;
                    cursor: pointer;
                }

                .form-group select:focus {
                    border-color: #007bff;
                    outline: none;
                }

                .form-group small {
                    display: block;
                    margin-top: 5px;
                    color: #666;
                }

                .submit-button {
                    background-color: teal;
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                }

                .submit-button:hover {
                    background-color:  #7393B3;
                }

                .success-message {
                    color: blue;
                    font-weight: bold;
                    margin-top: 20px;
                }

                .section-container {
                    position: relative;
                    padding: 30px;
                    // border-radius: 8px;
                    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    // max-width: 1050px;
                    // margin-left:100px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                    
                }

                .section-header {
                    font-size: 24px;
                    font-weight: bold;
                    color:teal;
                }

                .section-description {
                    margin-bottom: 20px;
                }

                .section-buttons {
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    // flex-direction: column;
                    margin-top:10px;
                    margin-rigth:20px;
                    padding:5px;
                    color: gray;
                }

                .section-buttons button {
                     background-color: teal;
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                }

                .section-buttons button:hover {
                    background-color: #7393B3;
                }

                @media screen and (max-width: 768px) {
                    .campaign-form {
                        padding: 10px;
                    }
                    .section-buttons {
                        flex-direction: row;
                        position: static;
                        margin-top: 10px;
                    }
                    .section-buttons button {
                        margin-top: 0;
                        margin-left: 10px;
                    }
                }
            `}</style>
            <div className="section-container">
                <div className="section-header">BASICS</div>
                <div className="section-description">
                    Craft a compelling introduction: Outline the objectives of your campaign to captivate potential supporters and pique their curiosity. This foundational information plays a crucial role in defining your campaign's identity, shaping its presence on your campaign page, card, and in search results. Engage your audience from the start, inviting them to delve deeper into your cause and discover how they can contribute to its success.
                </div>
                
            </div>
            <form className="campaign-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Campaign Title *</label>
                    <input
                        type="text"
                        name="title"
                        value={campaignDetails.title}
                        onChange={handleChange}
                        placeholder="What is the title of your campaign?"
                        required
                    />
                </div>

                {/* Other form fields omitted for brevity */}

                <div className="form-group">
                    <label>Campaign Tagline *</label>
                    <input
                        type="text"
                        name="tagline"
                        value={campaignDetails.tagline}
                        onChange={handleChange}
                        placeholder="Provide a short description that best describes your campaign to your audience."
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Campaign Card Image *</label>
                    <label className="upload-box" htmlFor="image-upload">
                        {campaignDetails.image ? campaignDetails.image.name : "UPLOAD IMAGE"}
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    <small>Upload a square image that represents your campaign. 1080 x 1080 recommended resolution, 220 x 220 minimum resolution.</small>
                </div>

                <div className="form-group">
                    <label>Location *</label>
                    <input
                        type="text"
                        name="location"
                        value={campaignDetails.location}
                        onChange={handleChange}
                        placeholder="Choose the location where you are running the campaign."
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                        value={campaignDetails.country}
                        onChange={handleChange}
                        placeholder="Country"
                    />
                </div>

                <div className="form-group">
                    <label>Category *</label>
                    <select
                        name="category"
                        value={campaignDetails.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        <optgroup label="TECH & INNOVATION">
                            <option value="audio">Audio</option>
                            <option value="camera-gear">Camera Gear</option>
                            <option value="education">Education</option>
                            <option value="energy-green-tech">Energy & Green Tech</option>
                            <option value="fashion-wearables">Fashion & Wearables</option>
                            <option value="food-beverages">Food & Beverages</option>
                            <option value="health-fitness">Health & Fitness</option>
                            <option value="home">Home</option>
                            <option value="phones-accessories">Phones & Accessories</option>
                            <option value="productivity">Productivity</option>
                            <option value="transportation">Transportation</option>
                            <option value="travel-outdoors">Travel & Outdoors</option>
                            <option value="other-innovative-products">Other Innovative Products</option>
                        </optgroup>
                        <optgroup label="CREATIVE WORKS">
                            <option value="art">Art</option>
                            <option value="comics">Comics</option>
                            <option value="dance-theater">Dance & Theater</option>
                            <option value="film">Film</option>
                            <option value="music">Music</option>
                            <option value="photography">Photography</option>
                            <option value="podcasts-blogs-vlogs">Podcasts, Blogs & Vlogs</option>
                            <option value="tabletop-games">Tabletop Games</option>
                            <option value="video-games">Video Games</option>
                            <option value="web-series-tv-shows">Web Series & TV Shows</option>
                            <option value="writing-publishing">Writing & Publishing</option>
                            <option value="other-creations">Other Creations</option>
                        </optgroup>
                        <optgroup label="COMMUNITY PROJECTS">
                            <option value="culture">Culture</option>
                            <option value="environment">Environment</option>
                            <option value="human-rights">Human Rights</option>
                            <option value="local-businesses">Local Businesses</option>
                            <option value="wellness">Wellness</option>
                            <option value="other-community-projects">Other Community Projects</option>
                        </optgroup>
                    </select>
                </div>

                <div className="form-group">
                    <label>Tags *</label>
                    <input
                        type="text"
                        name="tags"
                        value={campaignDetails.tags}
                        onChange={handleChange}
                        placeholder="Enter a few tags for your campaign"
                        required
                    />
                    <small>Enter up to five keywords that best describe your campaign.</small>
                </div>
                <div className="form-group">
                    <label>Campaign Duration *</label>
                <input
    type="date"
    name="endDate"
    onChange={(e) => setEndDate(e.target.value)}
    required
/>
</div>


                <div className="form-group">
                    <label>Campaign Duration *</label>
                    <input
                        type="number"
                        name="duration"
                        value={campaignDetails.duration}
                        onChange={handleChange}
                        placeholder="How many days will you be running your campaign for?"
                        required
                        min="1"
                        max="60"
                    />
                    <small>60 day duration maximum. You can extend as many times as you want up until the 60 day duration maximum!</small>
                </div>

                <button className="submit-button" type="submit">Save and Continue</button>
                {successMessage && <div className="success-message">{successMessage}</div>}
            </form>
        </>
    );
};

export default Basics;