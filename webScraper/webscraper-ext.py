from gensim.summarization import summarize
from gensim.summarization import keywords
import pandas
import numpy as np
from bs4 import BeautifulSoup
import urllib.request
from googlesearch import search

URL = "https://www.uva.co.uk/about"
WORD_COUNT = 100

hr = "—" * 80
print(hr)
print(f"SUMMARIZING {URL} INTO {WORD_COUNT} WORDS")
print(hr)

# Scrape Websites
URL = urllib.request.urlopen(URL).read()
URL = BeautifulSoup(URL, features="html.parser")

collection = ""

for text in URL.find_all("p"):
    collection += text.get_text()

# Summarize using gensim
collection = summarize(collection, word_count=WORD_COUNT)
print(collection)

print(hr)
print("EXTRACTED KEYWORDS")

key = keywords(collection)
print(key)
    
print(hr)
print("PERFORMING GOOGLE SEARCH ON TOP 3")
    
    
# google search first three keywords. write returned urls to array
urls = []
for keyword in key[0:3]:
    for result in search(keyword, tld="co.in", num=10, stop=1, pause=2):
        print(result)
        urls.append(result)
        
# scan new sites and beautify them
collection = ""

for i in urls:
    html = urllib.request.urlopen(i).read()
    beautyhtml = BeautifulSoup(html, features="html.parser")
    for text in beautyhtml.find_all("p"):
        collection += text.get_text()

print(hr)
print("SUMMARIZING SITES")

collection = summarize(collection, word_count=WORD_COUNT)
print(collection)
        
print(hr)
