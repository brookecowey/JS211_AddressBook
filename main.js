//create an array of multiple users

//list the users in book array by name and picture

//fetch multiple users in one request

//add a button to each user that will display dob, address, etc

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

{"results";
[   
      "name", {
        "title": "Miss",
        "first": "Karen",
        "last": "Cole",
        "dob": "1989-12-13",
        "street": "Grove Road",
        "number":4989,
        "city":"Swansea",
        "state":"Central",
        "country":"United Kingdom",
        "postcode":"D92 1GB",
      },
      "name", {
        "title": "Mr.",
        "first": "Victor",
        "last": "Mortensen",
        "dob": "1995-05-12",
        "street": "Bluebonnet Ridge",
        "number":4299,
        "city":"San Antonio",
        "state":"Texas",
        "country":"United States",
        "postcode":"78252",
      },
      
      "name", {
        "title": "Mrs.",
        "first": "Jasmine",
        "last": "Claire",
        "dob": "1963-09-24",
        "street": "Beach Breeze Way",
        "number":516,
        "city":"Miami",
        "state":"Florida",
        "country":"United States",
        "postcode":"33101",
      },
      ,]
}