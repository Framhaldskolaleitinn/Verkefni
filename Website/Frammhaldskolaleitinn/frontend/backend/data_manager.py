from mysql.connector import connect   
from mysql.connector import Error
from config import *

import json 



'''
class DataManager:
    def __init__(self):
        self.status = None
        try:
            self.conn = connect(host="142.93.37.81",
                                        user="admin",
                                password="3fac9e934892c683b45e41dded567df80185d5c6c00751de",
                                database="framhaldsskolaleit")
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
    
    def get_brautir(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM Brautir")
        result = cursor.fetchall()
        cursor.close()
        return result
    
    def get_afangar(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM Afangar")
        result = cursor.fetchall()
        cursor.close()
        return result

'''
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
    
    def get_brautir(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM Brautir")
        result = cursor.fetchall()
        cursor.close()
        return result
    
    def get_afangar(self):
        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM Afangar")
        result = cursor.fetchall()
        cursor.close()
        return result
