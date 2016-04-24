Our final project, in brief, is to find an optimal layout of keyboard for three different languages: C, English and Chinese (in Pinyin).

We have analyzed corpus for these three languages, and then we count the frequency of transitions between letters, e.g. given the previous letter is a, what's the probability that the next letter is b?

With this information (in the three json files), I made this visualization. Every 300ms the program types a letter, according to the probability distribution. If the finger needs to move, the distance increment by 1. Admittedly this is a very naive method of counting distance, but this is our starting point.

By default it visualizes typing English text. To use other frequencies, use "index.html#cf" and "index.html#pinyinf".
