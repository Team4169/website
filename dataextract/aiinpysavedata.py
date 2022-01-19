import subprocess
import json
import pickle
import sys

versions = str(subprocess.Popen('pip index versions aiinpy', stdout=subprocess.PIPE, stderr=subprocess.PIPE).communicate()[0])
versions = versions[versions.find('Available versions') + 20: versions.find('0.0.11') + 6].replace(" ", "").split(",")
json.dump([{"currentversion" : versions[0], "versions" : versions}], open("src\\version.json", "w"), indent=2)

data = []

for version in versions:
  subprocess.run('pip install aiinpy==' + version)
  subprocess.run('python3 dataextract/aiinpyextractdata.py')
  data += pickle.load(open('dataextract/datatransfer.txt', 'rb'))
  
json.dump(data, open("src\content.json", "w"), indent=2)