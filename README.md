
# Simple CRM

The Simple CRM is a web-based application designed to help users securely create, retrieve, update, delete and list customer records.

![Project Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly web interface for managing records.
- Secure authentication system to protect your data.
- Categorization of records for easy organization.
- Advanced search functionality to quickly find specific records.
- File attachment support for important documents.
- Responsive design for seamless use on various devices.

## Technologies Used

- **Python**: Backend development.
- **Django**: Web framework for building robust web applications.
- **HTML/CSS**: Frontend user interface.
- **Postgresql**: Database for storing records and user data.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Python**: Make sure you have Python installed. You can download it from [python.org](https://www.python.org/downloads/).

### Installation

1. Clone the repository:

 
   git clone https://github.com/stephenchuks/simple-CRM.git
  

2. Navigate to the project directory:


   cd simple-crm


3. Create a virtual environment (optional but recommended):


   python -m venv venv


4. Activate the virtual environment:

   - On Windows:

     venv\Scripts\activate
    

   - On macOS and Linux:

    
     source venv/bin/activate
   

5. Install project dependencies:


   pip install -r requirements.txt


6. Apply database migrations:


   python manage.py migrate


7. Start the development server:

 
   python manage.py runserver
 

   The application will be available at `http://127.0.0.1:8000/` by default.

## Usage

1. Open a web browser and navigate to `http://127.0.0.1:8000/` (or the URL where your application is hosted).
2. Register for an account or log in if you already have one.
3. Start managing your personal records by adding, categorizing, and searching for them.

## Contributing

Contributions are welcome! Here's how you can get involved:

1. Fork the repository on GitHub.
2. Clone your forked repository locally.
3. Create a new branch for your feature or bug fix.
4. Make changes and commit them.
5. Push your changes to your fork on GitHub.
6. Create a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

