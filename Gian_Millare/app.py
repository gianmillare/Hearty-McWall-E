import os
import pandas as pd
import numpy as np
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.config["SECRET_KEY"] = "fInAlPrOjEcTs"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/index.html")
def home():
    return render_template("index.html")

@app.route("/about_us.html")
def about():
    return render_template("about_us.html")

@app.route("/deep_learning.html", methods=["GET", "POST"])
def deep_learning():
    if request.method == "POST":
        input_age = request.form["name"]
        gender = request.form["gender"]
        height = request.form["height"]
        weight = request.form["weight"]
        cholesterol = request.form["chol"]
        bp_lo = request.form["bp_lo"]
        bp_hi = request.form["bp_hi"]
        glucose = request.form["glucose"]
        smoke = request.form["smoke"]
        alc = request.form["alc"]
        active = request.form["active"]

    return render_template("deep_learning.html")

@app.route("/svm_gs.html", methods=["GET", "POST"])
def random_forest():
    if request.method == "POST":
        input_age = request.form["name"]
        gender = request.form["gender"]
        height = request.form["height"]
        weight = request.form["weight"]
        cholesterol = request.form["chol"]
        bp_lo = request.form["bp_lo"]
        bp_hi = request.form["bp_hi"]
        glucose = request.form["glucose"]
        smoke = request.form["smoke"]
        alc = request.form["alc"]
        active = request.form["active"]
        
    return render_template("svm_gs.html")

@app.route("/logistic_regression.html", methods=["GET", "POST"])
def log_regression():
    if request.method == "POST":
        input_age = request.form["name"]
        gender = request.form["gender"]
        height = request.form["height"]
        weight = request.form["weight"]
        cholesterol = request.form["chol"]
        bp_lo = request.form["bp_lo"]
        bp_hi = request.form["bp_hi"]
        glucose = request.form["glucose"]
        smoke = request.form["smoke"]
        alc = request.form["alc"]
        active = request.form["active"]

    return render_template("logistic_regression.html")

if __name__ == "__main__":
    app.run(debug=True)