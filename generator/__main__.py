"""
Converter for the WikiTS instance.
It Allows you to convert yaml declarations into a json version
See README.md on how to do this
"""
import argparse
import generator.converter as json
import generator.helper.files as file

parser = argparse.ArgumentParser(prog="WikiTS generator")

parser.add_argument('--json', '-j', help='Convert input yaml to json', action='store_true')
parser.add_argument('--version', '-v', help='Print version information', action='store_true')
parser.add_argument('--input', '-i', type=str,  help='yaml file or directory')
args = parser.parse_args()

if args.version:
    print("WikiTS generator v0.01")
    print("Build by Tom Meyers")
    print("https://github.com/F0xedb/wikiTS")
    exit(0)

if args.json:
    if file.exists(args.input):
        print("Building json file")
    else:
        print("Your input looks wrong.") 
        print("Make sure the input is a valid yaml file or directory as specified in the github repo!")
        print("More information under the --version option")