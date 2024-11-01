const axios = require('axios');

async function createProject() {
    try {
        const response = await axios.post('http://localhost:5200/api/projects', {
            title: "Sample Project",
            projectDetails: {
                media: ["https://example.com/media1.jpg", "https://example.com/media2.jpg"],
                description: "This is a sample project description.",
                location: "New York, USA",
                story: "This is the story behind the project.",
                risks: "Potential risks include market fluctuations.",
                FAQs: [
                    {
                        question: "What is this project about?",
                        answer: "This project aims to revolutionize the industry."
                    }
                ]
            },
            tagline: "Revolutionizing the industry",
            imageUrl: "https://example.com/project-image.jpg",
            createdBy: "64d45b94b1e3a6f4c5d7e2e1",  // Replace with actual User ObjectId
            neededAmount: 10000,
            collectedAmount: 500,
            startDate: "2024-09-01T00:00:00Z",
            endDate: "2024-12-01T00:00:00Z",
            status: "open",
            category: "Technology",
            subcategory: "Software",
            tags: ["innovation", "tech"],
            duration: "3 months",
            backers: [
                {
                    user: "64d45b94b1e3a6f4c5d7e2e2",  // Replace with actual User ObjectId
                    amount: 100
                }
            ],
            rewards: ["64d45b94b1e3a6f4c5d7e2e3"],  // Replace with actual Reward ObjectId
            updates: [
                {
                    body: "Project is on track!",
                    date: "2024-09-05T00:00:00Z"
                }
            ],
            isFeatured: true,
            reviews: [
                {
                    user: "64d45b94b1e3a6f4c5d7e2e4",  // Replace with actual User ObjectId
                    rating: 5,
                    comment: "Excellent project!"
                }
            ],
            comments: [
                {
                    user: "64d45b94b1e3a6f4c5d7e2e5",  // Replace with actual User ObjectId
                    comment: "Excited to see how this turns out!"
                }
            ],
            likedBy: ["64d45b94b1e3a6f4c5d7e2e6"],  // Replace with actual User ObjectId
            socialMediaLinks: [
                "https://twitter.com/sampleproject",
                "https://facebook.com/sampleproject"
            ]
        });

        console.log('Project created successfully:', response.data);
    } catch (error) {
        console.error('Error creating project:', error.response ? error.response.data : error.message);
    }
}

createProject();
