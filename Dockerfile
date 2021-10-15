FROM ubuntu
FROM node:latest AS node_base
RUN apt update
RUN apt install -y tzdata
RUN apt install -y wget
RUN apt install -y zip
RUN apt-get update && apt-get install -y gnupg
RUN apt-get install -y gnupg2
RUN apt-get install -y gnupg1
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
RUN apt update && apt-get -y install google-chrome-stable
RUN wget https://chromedriver.storage.googleapis.com/94.0.4606.61/chromedriver_linux64.zip
RUN unzip chromedriver_linux64.zip 
RUN mv chromedriver /usr/bin/chromedriver 
RUN chown root:root /usr/bin/chromedriver 
RUN chmod +x /usr/bin/chromedriver 
COPY . /app
WORKDIR /app/tests
CMD node test1.js
