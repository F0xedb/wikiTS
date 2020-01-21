
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
"""
Converter for the WikiTS instance.
It Allows you to convert yaml declarations into a json version
See README.md on how to do this
"""
import argparse
import generator.converter as json
import generator.dir as buildDir
import generator.helper.files as file

parser = argparse.ArgumentParser(prog="WikiTS generator")

parser.add_argument('--json', '-j', help='Convert input yaml to json', action='store_true')
parser.add_argument('--version', '-v', help='Print version information', action='store_true')
parser.add_argument('--input', '-i', type=str,  help='yaml file or directory')
parser.add_argument('--log', '-l', help='Log the generate yaml file with line numbers', action='store_true')

args = parser.parse_args()

def populate(data):
    """
    Convert the input string into a json file
    """
    file = "declaration.json"
    with open(file, "w") as text_file:
        text_file.write(data)

if __name__ == "__main__":
    if args.version:
        print("WikiTS generator v0.01")
        print("Build by Tom Meyers")
        print("https://github.com/F0xedb/wikiTS")
        exit(0)

    if args.json:
        if file.exists(args.input):
            print("Building json file")
            if file.isDir(args.input):
                print("Detected input as directory. Checking for compatibility")
                yaml = buildDir.buildDir(args.input)
                if args.log:
                    for i, item in enumerate(yaml.split("\n")):
                        print("{} {}".format(i, item))
                populate(json.yamlToJsonFromString(yaml))
            else:
                populate(json.yamlToJson(args.input))
        else:
            print("Your input looks wrong.") 
            print("Make sure the input is a valid yaml file or directory as specified in the github repo!")
            print("More information under the --version option")