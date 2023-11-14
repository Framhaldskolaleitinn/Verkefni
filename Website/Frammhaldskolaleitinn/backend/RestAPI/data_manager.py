from mysql.connector import connect   
from mysql.connector import Error
from config import *

import json

class DataManager:
    def __init__(self):
        self.status = None
        try:
            self.conn = connect(user=USER,
                                password=PASSWORD,
                                host=HOST,
                                database=DB,
                                auth_plugin=AUTH)
            if self.conn.is_connected():
                self.status = 'connected'
            else:
                self.status = 'connection failed.'

        except Error as error:
            self.status = error

    def get_skolar(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM Skolar")
        result = cursor.fetchall()
        cursor.close()
        return result

    