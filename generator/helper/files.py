import os.path
from os import path

def exists(file):
    """
    Check if a file or directory exists based on its path
    """
    return path.exists(file)

def isDir(endpoint):
    """
    Check the path is a directory or not
    """
    return os.path.isdir(endpoint)