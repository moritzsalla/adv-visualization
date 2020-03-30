from gensim.summarization import summarize
import pandas
import numpy as np
from bs4 import BeautifulSoup
import urllib.request

# URL = "https://en.wikipedia.org/wiki/Coronavirus"
# WORD_COUNT = 100

print("————————————————————————————————————————————————")

URL = input("URL: ")
WORD_COUNT = input("WORD COUNT: ")
WORD_COUNT = int(WORD_COUNT)

print("————————————————————————————————————————————————")

print(f"SUMMARIZING {URL} INTO {WORD_COUNT} WORDS")

print("————————————————————————————————————————————————")

# Scrape Websites

URL = urllib.request.urlopen(URL).read()
URL = BeautifulSoup(URL, features="html.parser")

collection = ""

for text in URL.find_all("p"):
    if len(text) > 10:
        collection += text.get_text()

# Summarize using gensim

collection = summarize(collection, word_count=WORD_COUNT)

print(collection)
