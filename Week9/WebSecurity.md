# Web Security

## Notes:

- Encription: way to send information without people knowing what info has been sent

- Sessions: only logged in for a certain amount of time
  - Track session using Cookies

- Cross Site Scripting: when attacker inserts baritrary HTML on web page
  - can change content of page / steal user information
  - if HTML includes script tag, can replace the page with a new one to get passwords, accounts, etc
  - kind of like creditcard reader scam

  - how to prevent:
    - don't allow HTML to be inserted using Backend libraries

- Distributed Denial of Service:
  - DDoS
  - overwhelm server with malicious requests to block regular users
  - biggest reason: website can't really tell if person is human or bot

  - how to prevent:
    - rate limiting: limit volume of requests from a user
    - throw out exces traffic at random: not good solution because may throw out some legitimate
    - use provider: provider will run server on virtual machine -- provider will get hit with DDoS before you

- person in the middle attack:
  - one sends to another, but there is attacker in between

  - how to prevent: encryption
  -    2 types: symmetric-key encryption / asymmetric-key encryption

- Browser-Server communication:
  - HTTPS = secure version of HTTP
    - data is encrypted
    - browser and server agree on key
    - handled by Secure Sockets Layer (SSL)