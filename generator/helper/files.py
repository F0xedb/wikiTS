import os.path
from os import path
from os import listdir
from os.path import isfile, join
import fnmatch

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


def getFilesFromDir(directory, glob="*.yaml"):
    """
    Returns a list of paths to files in a given directory
    """
    onlyfiles = [f for f in listdir(directory) if isfile(join(directory, f))]
    list = fnmatch.filter(onlyfiles, glob)
    list.sort()
    return list