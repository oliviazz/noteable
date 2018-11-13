import sqlite3
from sqlite3 import Error
 
 
def create_connection(db_file):
    """ create a database connection to a SQLite database """
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
    finally:
        conn.close()


def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)
 
if __name__ == '__main__':
    database_name = "noteable_database.sqlite"
    sql_create_projects_table = """ CREATE TABLE IF NOT EXISTS users (
                                        id integer PRIMARY KEY,
                                        username text NOT NULL,
                                        password text NOT NULL,
                                        firstname text,
                                        lastname text,
                                    ); """
    
    # create_connection(database_name)
    # create_table(database_name, sql_create_projects_table)
    conn = sqlite3.connect('noteable_database.sqlite')
    cur = conn.cursor()
    # cur.execute(""" CREATE TABLE IF NOT EXISTS Users ( id integer PRIMARY KEY, username text NOT NULL, password text NOT NULL, email text, firstname text, lastname text ); """)
    # for row in cur.execute("PRAGMA table_info('Users')").fetchall():
    #        print(row)

    #cur.execute(""" CREATE TABLE IF NOT EXISTS Articles ( article_id integer PRIMARY KEY, article_url text NOT NULL, title text NOT NULL, descrip text); """)
    for row in cur.execute("PRAGMA table_info('Articles')").fetchall():
           print(row)
