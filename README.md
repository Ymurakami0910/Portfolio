# Yuri's Studio - Portfolio Website

website url : lilyzvillage.ca
Welcome to Yuri's Studio, a personal portfolio showcasing my work as a brand designer. This project represents my creative vision through engaging animations and interactive elements, blending a dreamy and sky vibe.

Concept
The portfolio revolves around a cute tanuki logo with clouds, symbolizing creativity, playfulness, and imagination. The design incorporates floating and dreamy animations, enhancing the overall storytelling experience.

Features
1. Animations
GSAP and GSAP ScrollTrigger were used extensively to create dynamic animations:
Clouds gently floating across the screen.
Airplanes flying through the background.
General screen triggers for page scrolling 
2. Interactive Elements
Flip Cards: Visitors can click on cards to flip them, revealing hidden details.
Typewriter Effect: Adds a personal touch 
3. Routing
React Router: Ensures seamless navigation between pages.

Technologies Used
Framework: React.js
Animations: GSAP (GreenSock Animation Platform), GSAP ScrollTrigger
Third-party Packages:
React Router: For dynamic page navigation.
Typewriter Effect: Adds an animated typing experience.
Styling: Custom CSS (No Tailwind or pre-made frameworks were used).


Challenges and Solutions

- GSAP Animations
I faced challenges in creating smooth and dynamic animations, such as:
Cloud Movements: Achieving a natural floating effect.
Airplanes Flying: Coordinating multiple elements for synchronized movement.

Solution: The multiple attenpts on local sever and adust the css. I used ScrollTrigger to tie animations to the scroll position, ensuring responsiveness and control.

- State Management for Flip Cards
Toggling the flip states of individual cards required a flexible approach. I utilized the useState hook and map function for state updates:

How to Run
Clone this repository:
git clone <repository_url>
Navigate to the project directory:
cd Portfolio
Install dependencies:
npm install
Start the development server:
npm start
Open your browser and go to the localhost link to view the portfolio.

Future Improvements
- Expanding the portfolio with additional projects.
- add animation for more elements by gsap 

Acknowledgments
thanks to the resources and tools that made this possible:

GSAP Documentation
React Router
Typewriter 
