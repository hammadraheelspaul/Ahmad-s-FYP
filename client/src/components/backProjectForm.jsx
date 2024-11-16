import axios from "axios";
import { useEffect, useState } from "react";



export default function BackProjectForm({ closeModal, projectId, userId }) {
    const [amount, setAmount] = useState('');
    const [imageURL, setImageURL] = useState("");
    // useEffect(() => {
    //  console.log(amount);
    // }, [amount])

    // useEffect(() => {
    //  console.log(imageURL);
    // }, [imageURL]);
    
    const handleImageChange = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('upload_preset', 'leep212'); // Replace with your upload preset

        axios.post('https://api.cloudinary.com/v1_1/dccckfgjb/image/upload', formData) // Replace with your Cloudinary cloud name
            .then(response => {
                const imageUr = response.data.secure_url;
                // console.log(imageUr);
                setImageURL(imageUr);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const handleSubmit = async () => {
        if (!amount || amount <= 0 || !imageURL ||!userId) {
          alert("Please provide a valid amount and upload a receipt image.");
          return;
        }
        // console.log(amount);
        // console.log(imageURL);
        // console.log(projectId, userId);
      
        try {
          const response = await axios.post(
            `http://localhost:5200/api/projects/${projectId}/backThisProject`,
            {
              userId,
              amount: parseFloat(amount),
              paymentReceiptURL: imageURL,
            }
          );
      
          alert("Your backing has been submitted successfully!");
          closeModal();
        } catch (error) {
          console.error(error);
          alert(error.response?.data?.error || "Failed to submit backing.");
        }

      };

    return (
        <div>
            <style>
                {
                    `
                    .form-group {
                        margin-bottom: 20px;
                    }
    
                    .form-group label {
                        display: block;
                        font-weight: bold;
                        
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
                        width: 150px;
                        height: 150px;
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
                    `
                }
            </style>

            <div className="fixed z-30 inset-0 flex items-center justify-center  backdrop-blur backdrop-brightness-75">
            
                <div className="bg-gray-900 p-8 rounded-lg shadow-2xl shadow-teal-500">
                    <h2 className="text-lg font-bold mb-4 text-teal-500">
                        Back Project Check Out Dialogue.
                    </h2>
                    <div className="text-yellow-500">
                        <p>You need to send us the amount you want to fund.</p>
                        <p>Upload the picture of receipt.</p>
                        <p>Enter the amount you sent.</p>
                        <p>Payments get verified in 5-7 working days. Untill then, status stays on "Pending".</p>
                    </div>
                    <div className="text-teal-600 my-3">
                    <h2 className="text-xl font-bold text-teal-500">Account Details</h2>
                        <div className="flex space-x-2">
                            <div className="font-bold">
                                Account Title:
                            </div>
                            <div>
                                Fictitious title
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="font-bold">
                                Account Number:
                            </div>
                            <div>
                                Fictitious account number
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="font-bold">
                                Bank Name:
                            </div>
                            <div>
                                Fictitious bank
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-teal-500">Provide the following details.</h2>
                    <div className="flex items-center border border-gray-300 rounded-lg p-2 mb-4">
                        <span className="text-white mr-2">Rs</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => { setAmount(e.target.value) }}
                            className="w-full outline-none bg-inherit text-white"
                            placeholder="Enter amount you sent"
                            min={1}
                            step={500}
                        />
                    </div>
                    <div className="form-group text-teal-500">
                        <label>Receipt Image</label>
                        <label className="upload-box" htmlFor="image-upload">
                            {
                                imageURL?
                                <div>
                                    <img src= {imageURL} alt="image" />
                                </div>
            
                                :
                                <div>
                                    UPLOAD IMAGE
                                </div>
                            }
                        </label>
                        <input
                            id="image-upload"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                        />
                        <small>Upload the photo of the receipt</small>
                    </div>
                    <div className="flex justify-end">
            
                        <button
                            onClick={closeModal}
                            className="mr-2 border border-teal-500 text-teal-500 px-4 py-2 rounded-lg hover:scale-105"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-indigo-500 text-white px-4 py-2 rounded-lg disabled:bg-slate-400"
                            disabled={amount <= 0 || !imageURL}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

