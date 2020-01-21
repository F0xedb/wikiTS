
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
import generator.helper.files as files

def mergePaths(mount, file):
    """
    Merge a base path with a file. 
    eg 
    /path/ and file.txt become /path/file.txt
    but
    /path and file.txt also become /path/file.txt
    """
    if mount[:-1] == "/":
        return mount + file
    return "{}/{}".format(mount, file)

def check(directory):
    if not files.exists(mergePaths(directory, "footer.yaml")):
        print("footer.yaml is missing")
        exit(1)
    if not files.exists(mergePaths(directory, "general.yaml")):
        print("general.yaml is missing")
        exit(1)
    if not files.exists(mergePaths(directory, "navigation.yaml")):
        print("navigation.yaml is missing")
        exit(1)
    if not files.isDir(mergePaths(directory, "pages")):
        print("pages directory is missing")
        exit(1)

def getFile(file):
    """
    Read out a file and return a list of string representing each line
    """
    with open (file, "r") as out:
        return out.readlines()

def tabulate(lines):
    """
    Add a tab before each line in the list
    """
    out = []
    for line in lines:
         out.append(" {}".format(line))
    return out

def genFooter(footer):
    """
    Append values before the footer to generate a json compliant footer definition
    """
    footer = tabulate(footer)
    footer.insert(0, "sections:\n")
    footer = tabulate(footer)
    footer.insert(0, "footer:\n")
    return "".join(footer)

def genNavigation(navigation):
    """
    Append values before the footer to generate a json compliant footer definition
    """
    navigation = tabulate(navigation)
    navigation.insert(0, "navigation:\n")
    return "".join(navigation)

def genPages(pages):
    """
    Append values before the footer to generate a json compliant footer definition
    """
    pages = tabulate(pages)
    pages.insert(0, "pages:\n")
    return "".join(pages)

def genGeneral(general):
    """
    Append values before the general to generate a json compliant footer definition
    """
    return "".join(general)

def merge(lst):
    """
    Merge multiple lists of string into one giant string
    Usefull for concatinating strings
    """
    out = ""
    for item in lst:
        out += item
    return out

def getFiles(directory):
    """
    Returns all files found in a directory after concatinating them
    It returns 1 list containing all lines
    """
    out = []
    for file in files.getFilesFromDir(directory):
        out += getFile(mergePaths(directory, file))
    return out

def buildDir(directory):
    """
    Build the yaml directory with all its content
    These files should be present
    @ footer.yaml - the footer content
    @ general.yaml - general site information
    @ navigation.yaml - navigation around the page
    @ pages - a directory containing all pages
    @ pages/*.yaml a list of yaml files with each entry beeing a separate page
    """
    check(directory)
    print("All files detected")
    footer = getFile(mergePaths(directory, "footer.yaml"))
    general = getFile(mergePaths(directory, "general.yaml"))
    navigation = getFile(mergePaths(directory, "navigation.yaml"))
    pages = getFiles(mergePaths(directory, "pages"))
    return merge([
        genGeneral(general),
        genPages(pages),
        genNavigation(navigation),
        genFooter(footer)
    ])
