import aiinpy as ai
import numpy as np
import inspect
import pickle
from importlib_metadata import version
import json

classes = np.array([], dtype=object)
source = np.array([])

title = np.array([])
model = np.array([])
discription = []
url = np.array([])
id = np.array([])
sourcecode = np.array([])

# discription, type
contentjson = json.load(open('src\\content.json'))
for i in range(len(contentjson)):
  if version('aiinpy') in contentjson[i].values(): 
    discription.append(contentjson[i]['discription'])

for name, obj in inspect.getmembers(ai):
  if inspect.isclass(obj):
    classes = np.append(classes, obj)

for i in range(len(classes)):
  # title, url, id, sourcecode
  title = np.append(title, 'aiinpy.' + classes[i].__name__)
  url = np.append(url, '/' + version('aiinpy') + '/' + classes[i].__name__)
  id = np.append(id, classes[i].__name__ )
  sourcecode = np.append(sourcecode, 'https://github.com/seanmabli/aiinpy/blob/' + version('aiinpy') + '/aiinpy/' + classes[i].__name__ + '.py')

  # model
  source = np.append(source, inspect.getsource(classes[i]))
  if source[i].find('__init__') != -1:
    model = np.append(model, 'aiinpy.' + classes[i].__name__ + source[i][source[i].find('__init__') + 8 : source[i].find('):') + 1])
  else:
    model = np.append(model, 'aiinpy.' + classes[i].__name__ + '()')

data = [{'title' : title.tolist()[i], 'model' : model.tolist()[i], 'discription' : discription[i], 'url' : url.tolist()[i], 'id' : id.tolist()[i], 'version' : version('aiinpy'), 'sourcecode' : sourcecode.tolist()[i]} for i in range(len(title))]
pickle.dump(data, open('dataextract/datatransfer.txt', 'wb'))