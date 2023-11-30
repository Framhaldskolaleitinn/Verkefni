from flask import Flask, request, render_template, jsonify
import subprocess as sp
from pymongo import MongoClient
from mongopass import mongopass

app = Flask("myapp")

client = MongoClient(mongopass)
db = client.curd
mycollection = db.myColl

@app.route("/")
def my_home():
    date = sp.getoutput("date /t")
    return render_template('home.html', date=date)

@app.route("/curd")
def curd():
    return render_template('curd.html')

@app.route("/read")
def read():
    cursor = mycollection.find()
    for record in cursor:
        name = record["name"]
        print(record)
    return render_template('response.html', res = name)

@app.route("/insert")
def insert():
    name = request.args.get('name')
    address = request.args.get('address')
    myVal = {"name":name, "address":address}
    x = mycollection.insert_one(myVal)
    return render_template('response.html', res = x)