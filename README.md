![alt text](http://unwrittenagency.com/wp-content/uploads/2018/01/project-3.png)

## Team members
- Brandon Gatlin : Project Manager
- Fernando Fuentes : Git Master
- Dan
- Alex
- Will

## PROJECT PROPOSAL:

Create an app that will link businesses with extra food (grocery stores, restaurants, etc.) & Homeless shelters via volunteers who will deliver the food from A to B.

Volunteers, Donors & Recipients will each have logins and profiles, which will track their history with the app.

Work Flow:
Donor will log in and post what food they have, as well as quantity. The post will go up on the "donation board" and be visible via a pin in google maps.

A recipient will claim the donation by logging in and claiming it. Once claimed, the donation will pass to a "pick up" board where a pin will show its location.

Volunteers will pick a pin on the "pick up" board convenient to them, and the post will be moved to "spoken for" so no one else tries to pick it up. The volunteer will immediately be given directions via google maps from current location to the donor, and then from the donor to the recipient. The volunteer will go to business and the business (Donor) will check in the app that the food was picked up by the volunteer.

The volunteer will deliver the food and the recipient will log in and check in the app that the food was delivered.

The volunteer will receive points based on how much food was delivered and/or other things and donors will have their donations total displayed as well.

Notes:
db = we will use Sequelize
db will be named family
tables:
  (1) donors
  (2) volunteers
  (3) shelters
  (4) donations

  (1) id (auto_incremented), (business name), (business type), (email), (address), (phone number), (manager), (manager's cell #), (comments)


  (2)id (auto_incremented), (last name), (first name), (gender), (address), (phone number), (email), (comments)


  (3) id (auto_incremented), (shelter name), (address), (phone number), (email), (point of contact), (POC cell number) (comments)


  (4) id (auto_incremented), (date/time posted), (date/time picked up), (date/time delivered), (donor), (volunteer), (recipient)

  html pages:
  (1) home page/about (all types of users can log in/sign up) -> goes to user profile
  (2) volunteer (can see donation board, also see donations mapped using pins)
  (3) donor (can create donation, can approve volunteers who have picked up THEIR donations)
  (4) shelter (can see donation board, can request donation)

  (5) donation board (table of available donations, map of their locations)
