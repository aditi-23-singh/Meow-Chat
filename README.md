**Meow Chat - A Real-Time Chat Application**
Meow Chat is a simple and intuitive real-time chat application designed to facilitate instant communication between multiple users. It leverages the power of WebSockets to provide a seamless and interactive chat experience, allowing users to join a common room, exchange messages, and stay updated on who enters or leaves the conversation.

**✨ Features**

1.**Real-time Messaging:** Send and receive messages instantly, ensuring a fluid and dynamic conversation flow without page reloads.

2.**User Join/Leave Notifications:** Automatically announces when a new user joins the chat or an existing user leaves, keeping everyone informed.

3.**Personalized Usernames:** Users are prompted to enter a name upon joining, making conversations more personal.

4.**Sound Notifications:** A subtle "ding" sound alerts users to incoming messages (on the receiving end).

5.**Responsive Design:** The application's interface adapts gracefully to various screen sizes, providing an optimal viewing and interaction experience on desktops, tablets, and mobile phones.

6.**Clean and Minimalist UI:** A user-friendly design focused on readability and ease of use.

**🚀 Technologies Used**
-->**Frontend:**

HTML5: Provides the structural foundation of the chat interface.

CSS3: Styles the application, ensuring a modern and responsive look across devices.

Vanilla JavaScript: Handles all client-side logic, including DOM manipulation and interaction with the Socket.IO client.

-->**Backend:**
Node.js: The JavaScript runtime environment that powers the server-side of the application.

Socket.IO: A robust library enabling real-time, bidirectional, and event-based communication between the web client and the Node.js server.

**📦 Project Structure**
├── public/                # Directory for static assets (optional, if you serve them)
│   ├── css/
│   │   └── style.css      # Your application's CSS styles
│   ├── img/
│   │   └── img.png        # Your logo image
│   ├── audio/
│   │   └── ding2-89720.mp3 # Your message notification sound
│   └── index.html         # The main HTML file for the chat interface
├── client.js              # Frontend JavaScript logic for Socket.IO client and UI interactions
└── server.js              # Backend Node.js server with Socket.IO setup
└── package.json           # Node.js project configuration and dependencies
(Note: If your index.html, css, img, and audio files are directly in the root alongside client.js and server.js, you can omit the public/ directory in this structure.)

**🛠️ Installation & Setup**
To get Meow Chat up and running on your local machine, follow these simple steps:

**Clone the repository:**

Bash

git clone <your-repository-url>
cd <your-project-folder-name>

**Install Node.js dependencies:**
Navigate to the project's root directory in your terminal and run:

Bash

npm install

This command will install socket.io and any other dependencies listed in package.json.

**Start the server:**
Execute the server file using Node.js:

Bash

node server.js

You should see a confirmation message in your terminal, typically indicating Socket.IO server listening on port 8000.

**Access the application**:
Open your preferred web browser and navigate to the following URL:

http://127.0.0.1:8000
(You can also try http://localhost:8000 if 127.0.0.1 doesn't resolve immediately.)

**📖 How to Use**
1. Upon opening the application in your browser, a prompt will appear asking for your name. Enter a desired username and click "OK".
   
2. The chat interface will load. Type your message into the input field at the bottom of the screen.
   
3. Press the "Send" button or hit the Enter key to send your message.
 
4. To experience the real-time chat, open the same URL (http://127.0.0.1:8000) in another browser tab or on a different device. You'll be prompted for a name again, and then you can start chatting between the two instances!
