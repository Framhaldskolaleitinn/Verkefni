from flask import Flask, request, jsonify

# Hérna í my_app.py testum við DataManager klasann og virkni hans
from data_manager import DataManager

# Búum til nýtt object, dm sem er af taginu DataManager
dm = DataManager()

# sýnum fram á að status-breytan geymi upplýsingar um tenginguna.
print(dm.status)    


app = Flask(__name__)

gogn = dm.get_skolar()
print(gogn)

class my_dictionary(dict): 
 
    # __init__ function 
    def __init__(self): 
        self = dict() 
         
    # Function to add key:value 
    def add(self, key, value): 
        self[key] = value 


dict_gogn = my_dictionary()

for i in gogn:
    dict_gogn[i[0]] = {}
    dict_gogn[i[0]]["ID"] = i[0]
    dict_gogn[i[0]]["Skóli"] = i[1]

print(dict_gogn)
@app.get("/skolar")
def get_skolarnir():
    return jsonify(dict_gogn)