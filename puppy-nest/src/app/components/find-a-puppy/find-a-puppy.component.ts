import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-find-a-puppy',
  templateUrl: './find-a-puppy.component.html',
  styleUrls: ['./find-a-puppy.component.css']
})
export class FindAPuppyComponent implements OnInit {

  constructor() { }
  search = '';

  puppies = [
    {
      "dogId": 1123,
      "name": "Jerry",
      "breedType": "Pug",
      "age": "Adult",
      "gender": "Male",
      "imgUrl": "assets/img/jerry.jpg",
      "description": "Friendly with everyone, need more pamparing and prefers no other dogs in home",
      "size": "Small",
      "color": "Brown",
      "habits": "",
      "health": "Vaccinations upto date"
    },
    {
      "dogId": 1124,
      "name": "ABBY",
      "breedType": "Parson Russell Terrier Mix ",
      "age": "Young",
      "gender": "Female",
      "imgUrl": "assets/img/abby.jpg",
      "description": "Okay with other dogs and prefers children in home",
      "size": "Small",
      "color": "White",
      "habits": "",
      "health": "Vaccinations upto date"
    },
    {
      "dogId": 1125,
      "name": "KING",
      "breedType": "Shepherd",
      "age": "Adult",
      "gender": "Male",
      "imgUrl": "assets/img/king.jpg",
      "description": "Preferes a home without children",
      "size": "Large",
      "color": "Brown",
      "habits": "",
      "health": "Vaccinations upto date"
    },
    {
      "dogId": 1126,
      "name": "Gee",
      "breedType": "Cocker Spaniel",
      "age": "senior",
      "gender": "Male",
      "imgUrl": "assets/img/gee.jpg",
      "description": "Likes to make dog friends",
      "size": "Small",
      "color": "Beige",
      "habits": "",
      "health": "Vaccinations upto date"
    },
    {
      "dogId": 1127,
      "name": "KONG",
      "breedType": "Black Labrador Retriever Mix",
      "age": "senior",
      "gender": "Male",
      "imgUrl": "assets/img/kong.jpg",
      "description": "preferes a home without children and other dogs",
      "size": "Medium",
      "color": "Black",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1128,
      "name": "BELLA",
      "breedType": "Labrador Retriever & Terrier Mix",
      "age": "Adult",
      "gender": "Female",
      "imgUrl": "assets/img/bella.jpg",
      "description": "Preferes a home without children and other dogs",
      "size": "Small",
      "color": "Brown",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1129,
      "name": "TEYO",
      "breedType": "Terrier Mix ",
      "age": "Adult",
      "gender": "Male",
      "imgUrl": "assets/img/teyo.jpg",
      "description": "He is smart dog, trainable mind and would love to find a family where he can spend more time.",
      "size": "Large",
      "color": "White",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1130,
      "name": "REMI",
      "breedType": "German Shepherd",
      "age": "Adult",
      "gender": "male",
      "imgUrl": "assets/img/remi.jpg",
      "description": "Once he's comfortable with someone he enjoys getting scratches and will greet you with tail wags",
      "size": "Large",
      "color": "Tan",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1131,
      "name": "IVY",
      "breedType": "Siberian Husky",
      "age": "Young",
      "gender": "Female",
      "imgUrl": "assets/img/ivy.jpg",
      "description": "Needs a home with no cats or small animals",
      "size": "Large",
      "color": "Black",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1132,
      "name": "TEDDY",
      "breedType": "Labrador Retriever",
      "age": "Young",
      "gender": "Male",
      "imgUrl": "assets/img/teddy.jpg",
      "description": "Once he's comfortable with you, he loves going on walks, sitting with you while you relax and getting lots of pets",
      "size": "Medium",
      "color": "Yellow",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1133,
      "name": "BIRDY",
      "breedType": "Labrador Retriever",
      "age": "Adult",
      "gender": "Female",
      "imgUrl": "assets/img/birdy.jpg",
      "description": "Birdy is a fun, easygoing, playful and loyal girl who would make a great addition to an active home. She is truly just the best!",
      "size": "Medium",
      "color": "Brown/Chocolate",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1134,
      "name": "BEEBOP",
      "breedType": "English Bulldog (mixed)",
      "age": "Young",
      "gender": "Female",
      "imgUrl": "assets/img/beebop.jpg",
      "description": "Needs a home with no other dog",
      "size": "Small",
      "color": "White",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
    {
      "dogId": 1135,
      "name": "ANNIE",
      "breedType": "Coonhound",
      "age": "Adult",
      "gender": "Female",
      "imgUrl": "assets/img/annie.jpg",
      "description": "Anyone who will join her in on her hobbies is more than welcome to join her as she thoroughly enjoys company",
      "size": "Medium",
      "color": "Brown",
      "habits": "",
      "health": "ANNIE STILL NEEDS TO UNDERGO HEARTWORM TREATMENT."
    },
    {
      "dogId": 1136,
      "name": "RONNIE",
      "breedType": "Bichon Frise",
      "age": "Adult",
      "gender": "Male",
      "imgUrl": "assets/img/ronnie.jpg",
      "description": "Okay with other dogs and cats",
      "size": "Small",
      "color": "White",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered and have a hypoallergenic."
    },
    {
      "dogId": 1137,
      "name": "WES",
      "breedType": "Staffordshire Bull Terrier Labrador Retrieve",
      "age": "Senior",
      "gender": "Male",
      "imgUrl": "assets/img/wes.jpg",
      "description": "He's well trained and perfectly house broken, though he will sneak onto the bed when you're not looking! Wes can be a little shy and get overwhelmed by certain things so he would do best in a household without small children or other pets",
      "size": "Medium",
      "color": "Tan",
      "habits": "",
      "health": "Vaccinations up to date, spayed / neutered."
    },
  ];

  ngOnInit(): void {
  }

}
