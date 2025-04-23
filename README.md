# Simple Object Detector Web App

A minimalist web application that allows users to upload an image and detect common objects (e.g., car, dog) using a pre-trained machine learning model. The app displays bounding boxes around detected objects and lists their names with confidence scores. It features a clean, responsive UI and a status indicator for processing feedback.

## Features
- **Object Detection**: Uses the pre-trained COCO-SSD model (via TensorFlow.js) to identify 80 common object classes.
- **Client-Side Processing**: Fully runs in the browser, no backend required.
- **Responsive UI**: Modern, user-friendly design with a styled upload button and canvas display.
- **Status Indicator**: Shows progress (e.g., "Loading model...", "Analyzing image...") with a spinning loader.
- **Minimalist Codebase**: Organized with separate HTML, CSS, and JavaScript files.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Machine Learning**: TensorFlow.js, COCO-SSD model
The script fetches the COCO-SSD model library from the jsDelivr CDN, making the cocoSsd object available globally in the browser. This object provides methods like cocoSsd.load() and model.detect(), which are used in app.js.
https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd
- **No Backend**: Static web app

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge)
- Internet connection (for loading TensorFlow.js and COCO-SSD model)
- A local server (e.g., Python's `http.server` or VS Code's Live Server) for development

## Installation
1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/simple-object-detector.git
   cd simple-object-detector