# Simple Chat AI

A lightweight AI chat web application built with pure HTML, CSS, and JavaScript. Users can interact with an AI directly through a clean and responsive chat interface, without any framework installation required.

> Read this documentation in another language: [Bahasa Indonesia](./README.md)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)

---

## About

Simple Chat AI is a lightweight chat application that leverages the OpenAI API through an external endpoint to generate conversational responses in real-time. The project is intentionally kept as simple as possible — no bundlers, no frameworks, no npm dependencies — so anyone can open and run it directly in a browser.

It is well-suited as a learning reference for beginners who want to understand how to integrate AI into a static web page.

---

## Features

- Welcome screen with a username input before starting a conversation
- Bubble-style chat display that distinguishes user messages from AI responses
- Skeleton loading animation while the AI is processing a response
- Copy button on every AI response
- Automatic scroll to the latest message
- Responsive design with a clean blue gradient

---

## Tech Stack

| Technology | Description |
|------------|-------------|
| HTML5 | Page structure |
| CSS3 | Styling, skeleton animation, and layout |
| JavaScript (Vanilla) | Application logic and DOM manipulation |
| Fetch API | Asynchronous communication to the AI endpoint |
| OpenAI API (via external endpoint) | AI response source |

---

## Getting Started

No installation is required. Simply follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/alhifnywahid/simple-chat-ai.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-chat-ai
   ```

3. Open `index.html` directly in your browser, or use the Live Server extension if you are using VS Code.

4. Enter your name on the welcome screen, then start chatting with the AI.

> **Note:** This application depends on an external API endpoint (`https://dikaardnt.com/api/tool/openai`). Make sure you have an active internet connection when running it. If the endpoint is unavailable, AI responses will not be displayed.

---

## Project Structure

```
simple-chat-ai/
├── index.html      # Main page, UI structure, and all CSS styles
├── main.js         # JavaScript logic: DOM management, API fetch, and user interaction
├── .gitignore      # Files excluded from the repository
├── README.md       # Documentation (Bahasa Indonesia)
└── README.en.md    # Documentation (English) — this file
```

---

## License

This project is licensed under the [MIT License](./LICENSE).

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software, provided that the original author attribution is retained.
