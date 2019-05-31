# Adidas-Code-Challenge
## How to deploy
1. To run development environment
```bash
npm install && npm start
```
2.  To deploy on a server
```bash
npm install && npm run start:production:notest
```
3. To build and deploy on docker
```bash
npm run docker
```
## Requirements checklist
### Functional requirements
- [x] Route for searching product: [GET] /api/suggestions #5
- [x] Able to search for an article: [GET] /api/suggestions #2
- [x] Able to get a full wishlist: [GET] /api/wishlist/:identifier #6 #1
- [x] Able to add it to a wishlist: [POST] /api/wishlist/:identifier/item #3 #20
- [x] Able to delete from a wishlist: [DELETE] /api/wishlist/:identifier/item/:id #4 #8
### Non-functional requirements
- [x] Single Page Application (SPA) #14
- [x] Preferred technology stack: React & Redux #9 #10
- [x] In-memory storage backend #19
- [x] Dockerized application #12
- [ ] CI/CD Pipeline proposal #13
- [x] Documentation #34

## Reason for choosing technologies / methodologies 
- react-boilerplate
  - I have used this application template because I need speed.
  - It is pre-built and very easy to use
  - I don't have to take care of expressjs, react & redux integration
- alpine linux image
  - Light-weight and minimal linux image
  - Ready for production
- http-proxy-middleware
  - Reverse proxy for suggestions API
  - Prevent CORS issue
- agile work mode / feature branch
  - Better tracking
  - Prioritization

## Worklog
### Day 1
- Requirement analysis
- Issue/User story documentation
- Search for boilerplate projects
### Day 2
- Implement proxy for Adidas suggestions API
### Day 3
- Backend MVP completed
### Day 4
- Revisit concepts with React/Redux
- Frontend skeleton completed
- Implement display wishlist
- Implement search & display suggestions
### Day 5
- Implement add an item to wishlist
- Implement delete an item from wishlist
- Implement sharing functionality
- Implement scrollable view
- Documentation
### Day 6
- Build enhancement backlog

## Insiprations / Lesson learned
1. Connecting new concepts with existing knowledge

I believe linking new knowledge with the existing knowledge is the best way of learning.

| |New Knowledge|Existing Knowledge|
|:-:|:-------------:|:-------------:|
|1|Redux state/action concept|Makrov decision process|
|2|conditional render in React|*ngIf in angular|
|3|generator function in react-saga|generator function in python|

2. What's new in React ecosystem?

The last time I have used React & Redux was 2 years back. I felt in the latest version it is already a big difference:

| |New Concept|
|:-:|:-:|
|1|react-saga (async/await/yield) for API calls|
|2|hooks instead of component lifecycle|

3. Identifiers from repl.it

Inspired by the web application, I have used concatenated words for unique identification, i.e. WhimsicalCheapAdministrator