from flask import Flask, request, jsonify
from utils import *

app = Flask(__name__)


@app.route('/', methods=['POST'])
def upload_file():
    """Handles the upload of a file."""
    d = {}
    try:
        file = request.files['file_from_react']
        filename = file.filename
        print(f"\nUploading file {filename}\n")
        file_bytes = file.read()
        initial_dict = yaml_to_dict(file_bytes)

        print(initial_dict)
        d['status'] = 1

    except Exception as e:
        print(f"Couldn't upload file {e}")
        d['status'] = 0

    print(d)

    return jsonify(d)


if __name__ == "__main__":
    app.run()
