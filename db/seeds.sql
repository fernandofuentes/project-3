INSERT INTO Volunteers (
  volunteer_last_name,
  volunteer_first_name,
  phone_number,
  email_address,
  physical_address,
  vehicle
)
VALUES (
  "Smith",
  "Vinnie",
  "256-555-1234",
  "vinnie@mail.com",
  "1234 Main St.,
  Houston, TX 77300",
  "Car"
);



INSERT INTO Donors (
  business_name,
  business_type,
  phone_number,
  email_address,
  physical_address,
  city,
  donor_state,
  zip_code,
  manager_name,
  manager_phone_number
)

VALUES (
  "Ci Cis",
  "Restuarant",
  "256-520-0000",
  "cici@yahoo.com",
  "1 Leaf Street",
  "Houston",
  "Texas",
  "77001",
  "Cee Cee Thompson",
  "256-520-7777"
);


INSERT INTO Comments (
  review_type,
  reviewee,
  comment
)

VALUES (
  "Restuarant",
  "Donnie's Pizzeria",
  "Mama, mia, the-a pizza is-a fantastico!"
);

INSERT INTO Donations (
  donor_business_name,
  food_item,
  quantity
)

VALUES (
  "Donnie's Pizzeria",
  "Pepperoni Pizzas",
  10
);


INSERT INTO destinations (
  organization_name,
  organization_type,
  phone_number,
  email_address,
  physical_address,
  point_of_contact,
  poc_phone_number
)

VALUES (
  "Cross of Hope Shelter",
  "Shelter",
  "(555) 555-3333",
  "cross@hope.org",
  "111 Long St. Houston, TX 77300",
  "Sister Mary",
  "(555) 555-3333"
);
