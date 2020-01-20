import sys
import yaml
import json


def yamlToJson(file):
    y=yaml.load(open(file))
    return json.dumps(y)