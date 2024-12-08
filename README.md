# React Portfolio

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
  - [Run the Development Server](#run-the-development-server)
  - [Build for Production](#build-for-production)
  - [Deploy to Netlify](#deploy-to-netlify)
- [Contact Form with EmailJS](#contact-form-with-emailjs)
- [Projects](#projects)
- [License](#license)

---

## Description
This is a React-based developer portfolio showcasing work samples, skills, and experience. The application includes sections like **About Me**, **Portfolio**, **Contact**, and **Resume**, helping potential employers assess qualifications and work samples.

## Features
- Single-page application (SPA) built using React.
- Dynamic navigation bar highlighting the current section.
- Mobile-first responsive design with **TailwindCSS** and **DaisyUI**.
- Fully functional contact form powered by **EmailJS**.
- Six featured projects with links to live demos and GitHub repositories.
- Downloadable resume in PDF format.

---

## Technologies Used
- **React** for building the SPA.
- **React Router DOM** for navigation.
- **TypeScript** for type safety and better developer experience
- **Framer Motion** for animations.
- **EmailJS** for handling contact form submissions.
- **Vite** for a fast development and build setup.
- **TailwindCSS** and **DaisyUI** for styling.
- **Netlify** for deployment.

---

## Installation
Follow these steps to run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-portfolio.git

2. Navigate to the project directory:
    ```bash
    cd react-portfolio
    ```

3. Install dependencies
   ```bash
   npm install
   ```

## Usage
### Run The Development Server

 Start the development server:
   ```bash
   npm run dev
   ```

### Build for Production
Generate a production build:
  ```bash
  npm run build
  ```

### Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/).
2. Drag and drop your `dist` folder into the deployment area, or link your GitHub repository for continuous deployment.

---

### Contact Form with EmailJS

The contact form on this portfolio uses **EmailJS** to securely send messages to the developer's email.

#### How It Works:
1. Users fill out their name, email, and message on the form.
2. The form validates the inputs (e.g., email format) and displays feedback if required fields are empty or invalid.
3. Once submitted, **EmailJS** uses a predefined template to send the user's details (name, email, and message) directly to the developer's email.
4. A success or error message is displayed to the user after submission.

#### Why EmailJS?

- **Predefined Templates**: The use of templates ensures that every message follows a consistent format, making it easy to review and respond to.
- **No Back-End Required**: EmailJS eliminates the need for a back-end server, making it a lightweight and secure solution for handling form submissions.
- **Secure and Efficient**: By integrating EmailJS, the developer can manage contact form submissions in a secure and efficient manner while protecting sensitive information like email addresses.

The template ensures that the developer receives a structured email containing all necessary details, allowing for easy communication with users.


---

### License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

### Author

Developed by **Mirasol Davila**. You can contact me directly using the contact form on this portfolio.
