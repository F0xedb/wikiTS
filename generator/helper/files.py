
# MIT License
# 
# Copyright (c) 2020 Meyers Tom
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
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