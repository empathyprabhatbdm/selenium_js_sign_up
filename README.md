# selenium_js_sign_up
1.install selenium webdriver for javascript 
npm install selenium-webdriver

2.install google chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list
RUN apt update && apt-get -y install google-chrome-stable

3.install chromedriver
RUN wget https://chromedriver.storage.googleapis.com/94.0.4606.61/chromedriver_linux64.zip
RUN unzip chromedriver_linux64.zip 
RUN mv chromedriver /usr/bin/chromedriver 
RUN chown root:root /usr/bin/chromedriver 
RUN chmod +x /usr/bin/chromedriver 

note:the version of google chrome and chromedriver must be same
