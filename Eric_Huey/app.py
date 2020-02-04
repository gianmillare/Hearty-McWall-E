import os
import pandas as pd
import numpy as np
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.config["SECRET_KEY"] = ""

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/deep", methods=["GET", "POST"])
def deep_learning():
    if request.method == "POST":

    return render_template("deep.html")

@app.route("/forest", methods=["GET", "POST"])
def random_forest():
    if request.method == "POST":

    return render_template("forest.html")

@app.route("logreg/", methods=["GET", "POST"])
def log_regression():
    if request.method == "POST":
        
    return render_template("logreg.html")

if __name__ == "__main__":
    app.run(debug=True)