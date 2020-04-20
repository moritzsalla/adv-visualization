# Signal Processing in Numpy and Tensorflow

- NOTEBOOK: https://github.com/ual-cci/MSc-Coding-2/blob/master/Week-6-Exercise-intro-to-image-data-and-tensorflow.ipynb
- Make a version of the Notebook with at least one major difference that you have introduced yourself (as follows):
- First, you must do some transformation on the image dataset that isn't included in the above document. You must use numpy to do this transformation.
- If you manage to do this, your next task is to collect and process your own dataset instead of the one provided.

## Installation 

This notebook uses `pipenv`. Use `pipenv install` to install all needed requirements. To open a notebook in jupyter, run this command: 

```
pipenv run jupyter notebook ./path-to/file.ipynb
```

*`pipenv` and `jupyter notebook` are compatible through installing `jupyter`. Read more about it [here](https://stackoverflow.com/questions/47295871/is-there-a-way-to-use-pipenv-with-jupyter-notebook).

### Issues with tensorflow

For the reasons listed [in this issue](https://github.com/pypa/pipenv/issues/2619), pipenv won't properly install tensorflow. This is the workaround I took:

```
pipenv install --verbose https://storage.googleapis.com/tensorflow/mac/cpu/tensorflow-1.9.0-py3-none-any.whl
```

Unfortunately this threw errors during import. I wasn't able to fix this using `pipenv`. When running this locally, it's best to just `pip install` the requirements. I've used `pipenv run pip freeze > requirements.txt` to convert the `Pipfile` to a `requirements.txt`. You can install with pip by running:

```
pip install -r requirements.txt 
```

Edit: not even this fixed it. Since I originally ran this on colab anyways, I won't bother much longer with finding the bug.

## Description

