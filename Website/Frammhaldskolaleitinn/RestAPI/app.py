from flask import Flask, flash,json, render_template, request, session, redirect, url_for

import os 
import urllib.request  

app = Flask(__name__)

url = "https://superhero-search.p.rapidapi.com/api/heroes"

headers = {
	"X-RapidAPI-Key": "8b76ccc082msh3ee887e49ca1cbcp110237jsnb323db377361",
	"X-RapidAPI-Host": "superhero-search.p.rapidapi.com"
}

response = request.get(url, headers=headers)

print(response.json())