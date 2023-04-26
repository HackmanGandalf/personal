from flask import Flask, url_for, render_template, url_for
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculator')
def calculator():
    return render_template('calculator.html')

@app.route('/trivia')
def trivia():
    return render_template('trivia.html')


if __name__ == "__main__":
    app.run(debug=True)