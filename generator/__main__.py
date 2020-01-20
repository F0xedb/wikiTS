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
                populate(json.yamlToJsonFromString(buildDir.buildDir(args.input)))
            else:
                populate(json.yamlToJson(args.input))
        else:
            print("Your input looks wrong.") 
            print("Make sure the input is a valid yaml file or directory as specified in the github repo!")
            print("More information under the --version option")