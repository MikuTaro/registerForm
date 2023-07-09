from flask import Flask, render_template, redirect, request
import json

app = Flask(__name__, template_folder = './templates/', static_folder = './static/')


@app.route("/process_input", methods=["POST"])
def process_input():
    #the below line is to get the json from javascript data
    data = request.get_json()
    #and this line is getting the data from the JS and sent to the backend
    if len(data) == 6:
            print(f"{data}")
    else:
        print("error getting data from JS")

    
    #print(len(data))
    return f"Input value received: {data}"


@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.run(debug=True)