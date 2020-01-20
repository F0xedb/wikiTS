import sys
import yaml
import json


def yamlToJson(file):
    """
    Convert the input file (which should be yaml) into a json string
    """
    y=yaml.load(open(file))
    return json.dumps(y)

def yamlToJsonFromString(str):
    """
    Convert the input string (which should be yaml) into a json string
    """
    y=yaml.load(str)
    return json.dumps(y)