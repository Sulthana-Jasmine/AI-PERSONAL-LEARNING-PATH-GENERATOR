SkillBridge AI – Personal Learning Path Generator

Project Overview

SkillBridge AI is a web-based learning path generator that helps students identify the skills they need to develop for their desired career.

Users can select a career domain and enter their existing skills. The application compares their skills with predefined career requirements and generates a personalized learning roadmap.

Problem Statement

Students often find it difficult to identify the skills required for their target careers and determine what they should learn next.

Solution

SkillBridge AI helps users:

- Select a desired career domain.
- Enter their current skills.
- Identify matched and missing skills.
- View their career skill match percentage.
- Get a structured learning roadmap.

Key Features

- Career domain selection
- Existing skills input
- Skill gap identification
- Career skill match percentage
- Personalized learning roadmap
- Web-based user interface

Technology Stack

Frontend

- HTML
- CSS
- JavaScript

Backend

- Python
- Flask
- Flask-CORS

Project Structure

AI-PERSONAL-LEARNING-PATH-GENERATOR/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   └── app.py
├── requirements.txt
└── README.md

Installation and Setup

1. Clone the Repository

git clone https://github.com/Sulthana-Jasmine/AI-PERSONAL-LEARNING-PATH-GENERATOR.git

2. Navigate to the Project

cd AI-PERSONAL-LEARNING-PATH-GENERATOR

3. Install Dependencies

py -m pip install -r requirements.txt

4. Run the Backend

cd backend
py app.py

The Flask backend runs at:
"http://127.0.0.1:5000"

5. Run the Frontend

Open another terminal in the project root and run:

py -m http.server 8001

Open the frontend in your browser:
"http://127.0.0.1:8001/frontend/"

API Endpoints

Health Check

"GET /api/health"

Checks whether the backend server is running.

Generate Learning Path

"POST /api/learning-path"

Accepts the selected career domain and user's existing skills, then returns skill-matching information and a learning roadmap.

Current Project Status

The initial frontend and Flask backend have been created. Backend–frontend integration and further product development are planned for the next development stage.

Future Enhancements

- AI-powered personalized recommendations
- User registration and login
- Saving individual learning progress
- Course and resource recommendations
- Improved career skill database
- Responsive UI enhancements

Author

Sulthana Jasmin

License

This project is currently developed for academic and learning purposes.