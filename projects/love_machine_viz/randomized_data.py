import json
import random
#creates fake data to use for the visualization
# stores it in a json
random_list = []
for i in range(0,1500):
#template for fake data
    entry = {
      "Gender Identity": random.randint(1,3),
      "Sexual Orientation": random.randint(1,4),
      "Ethnicity": random.randint(1,12),
      "What kind of relationship are you looking for?": random.randint(1,7),
      "Are sports important to you?": random.randint(1,7),
      "How much time do you expect to spend with your partner?": random.randint(1,7),
      "It’s important that I make more money than my peers.": random.randint(1,7),
      "420?": random.randint(1,7),
      "I'm comfortable with my child being gay.": random.randint(1,7),
      "Rate the importance of sex in a relationship": random.randint(1,7),
      "I prefer politically incorrect humor.": random.randint(1,7),
      "Emotional vulnerability is an important part of my friendships.": random.randint(1,7),
      "If you do nothing for an entire day, how do you feel?": random.randint(1,7),
      "I prefer a partner with a similar ethnicity as myself": random.randint(1,7)
    }
    random_list.append(entry)
with open('love_data.json', 'w') as json_file:
        json.dump(random_list, json_file)
