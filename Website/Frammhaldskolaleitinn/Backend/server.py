from flask import Flask
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

@app.route('/data')
def get_time():
        return{
                'name':'hreimur',
                'age':'19',
                'date':x,
                'programming':'python'
        }

if __name__ == '__main__':
        app.run(debug=True)