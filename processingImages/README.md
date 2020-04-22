# Signal Processing in Numpy and Tensorflow

## Installation

This notebook uses `pipenv`. Use `pipenv install` to install all needed requirements. To open a notebook in jupyter, run this command:

```
pipenv run jupyter notebook ./path-to/file.ipynb
```

`pipenv` and `jupyter notebook` are compatible through installing `jupyter`. Read more about it [here](https://stackoverflow.com/questions/47295871/is-there-a-way-to-use-pipenv-with-jupyter-notebook).

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

Manipulating images with nothing more than matplotlib and numpy is hugely satisfying. I'm amazed that this can be done by such simple tools. Although I'm still a little fuzzy on the syntax that is used to select certain color channels (like so `img[:, :, 2]`), I find matplotlibs functions pretty straightforward. I wonder how image filters such as gaussian blur could be properly implemented this way without further requirements. Here's a stack overflow post that achieves this, albeit using `scipy`, an additional dependency.
