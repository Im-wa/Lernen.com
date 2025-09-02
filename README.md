# lernen-com-backend

This project is a simple Flask application that serves an HTML page styled with CSS. It is designed for educational purposes, specifically for a class named A2b.

## Project Structure

```
lernen-com-backend
├── app.py                # Main entry point of the Flask application
├── static                # Directory for static files (CSS, images, etc.)
│   └── styles.css        # CSS styles for the HTML page
├── templates             # Directory for HTML templates
│   └── startseite.html   # Main HTML page served by the application
└── README.md             # Documentation for the project
```

## Requirements

- Python 3.x
- Flask

## Setup Instructions

1. **Clone the repository** (if applicable):
   ```
   git clone <repository-url>
   cd lernen-com-backend
   ```

2. **Install Flask**:
   You can install Flask using pip. It is recommended to use a virtual environment.
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install Flask
   ```

3. **Run the application**:
   ```
   python app.py
   ```

4. **Access the application**:
   Open your web browser and go to `http://127.0.0.1:5000/files` to see the file listing or `http://127.0.0.1:5000/` to access the main page.

## Endpoints

- `GET /files`: Lists files in the specified directory.
- `GET /file?path=<filepath>`: Reads the content of the specified file.
- `POST /file`: Saves content to the specified file.

## License

This project is open-source and available under the MIT License.