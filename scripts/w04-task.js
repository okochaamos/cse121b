/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};


myProfile.push() = {
    'name' : 'Okocha Amos Mba',
    'myphoto' : ("src", "images/placeholder.jpg", alt = "Profile Picture"),
    'favoriteFood' : ['Rice', 'Fish Peppersoup', 'Ofe Nsala', 'Edika Ikon Soup', 'Rice'],
    'hobbies' : ['Football', 'Snooker', 'Table Tennis',],
    'placesLived' : [],

};


/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
    {
        Place : 'Umuahia', 

        Length: '12 Years',

        Place : 'Aba',

        Length : '20 Years',

        Place : 'Okigwe',

        Length : '5 Years'


    }
);


/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

document.querySelector('#favorite-foods').textContent = myProfile.favoriteFood;

document.querySelector('#hobbies').textContent = myProfile.hobbies;

document.querySelector('#places-lived').textContent = myProfile.placesLived;

document.querySelector('#photo') = myProfile.myphoto;


/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


