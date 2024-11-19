FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/ProgrammerDark/Toxic-MD /root/Toxic-MD
# RUN rm -rf /root/Toxic-MD/.git
WORKDIR /root/Toxic-MD
RUN npm install
EXPOSE 8000
CMD ["node","server.js" ]
