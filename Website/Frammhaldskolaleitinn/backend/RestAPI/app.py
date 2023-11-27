from flask import Flask, request, jsonify, json
import os

app = Flask(__name__)
# Hérna í my_app.py testum við DataManager klasann og virkni hans

@app.route('/api/data')
def get_data():
    with open(os.path.join(app.static_folder, 'skolar.json')) as json_file:
        data = json_file.read()
    print(data)
    return jsonify(data)
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)
@app.route('/')
def index():
    return 'raah'

if __name__ == '__main__':
    app.run(debug=True)
'''
from data_manager import DataManager

# Búum til nýtt object, dm sem er af taginu DataManager
dm = DataManager()

# sýnum fram á að status-breytan geymi upplýsingar um tenginguna.
print(dm.status)    


app = Flask(__name__)

skolar_gogn = dm.get_skolar()
brautir_gogn = dm.get_brautir()
afangar_gogn = dm.get_afangar()
print(skolar_gogn)
print(brautir_gogn)
print(afangar_gogn)

class my_dictionary(dict): 
 
    # __init__ function 
    def __init__(self): 
        self = dict() 
         
    # Function to add key:value 
    def add(self, key, value): 
        self[key] = value 


dict_gogn = my_dictionary()

for i in skolar_gogn:
    dict_gogn[i[0]] = {}
    dict_gogn[i[0]]["ID"] = i[0]
    dict_gogn[i[0]]["Skóli"] = i[1]
    dict_gogn[i[0]]["Heildarnemendur"] = i[2]
    dict_gogn[i[0]]["Fjöldi Útskriftarnema"] = i[3]

print(dict_gogn)

brautir_dict = my_dictionary()

for i in brautir_gogn:
    brautir_dict[i[0]] = {}
    brautir_dict[i[0]]["ID"] = i[0]
    brautir_dict[i[0]]["SkolaID"] = i[1]
    brautir_dict[i[0]]["Braut"] = i[2]
    brautir_dict[i[0]]["Heildarnemendur"] = i[3]
    brautir_dict[i[0]]["Fjöldi Útskriftarnema"] = i[4]
    brautir_dict[i[0]]["annir fyrir útskrift"] = i[5]
    brautir_dict[i[0]]["meðal annir fyrir útskrift"] = i[6]
    brautir_dict[i[0]]["Studentsptóf"] = i[7]
    brautir_dict[i[0]]["Fjöldi nemenda sem fara í háskóla"] = i[8]
    brautir_dict[i[0]]["Fjöldi nemenda sem klára nám"] = i[9]
    brautir_dict[i[0]]["Fjöldi nemenda sem hætta"] = i[10]


@app.get("/skolar")
def get_skolarnir():
    return jsonify(dict_gogn)

@app.get("/brautir")
def get_brautirnar():
    return jsonify(brautir_dict)
'''