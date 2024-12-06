// Importing images
import google from "../assets/Images/google.png";
import profilePic from "../assets/Images/profilePic.png";
import backgroundImage from "../assets/Images/hero-bg.png";
import gallery from "../assets/Images/gallery.png";

// JSON Data
const jsonData = {
  "niche": "HVAC",
  "businessName": "HVAC",
  "emailBusiness": "info@leeuwstudio.nl",
  "reviews": [
    {
      "name": "Esraa Elbagoury",
      "review": "I was able to get my driving license within 1 month with the top instructors Ibrahim and Murat. They are very good teachers, who give good constructive feedback when something can be improved or when something is already going well.",
      "rating": 5,
      "profilePic": profilePic, // Replace path with imported asset
    },
    {
      "name": "Renate Van Der Genugten",
      "review": "Would definitely recommend this driving school: it is well organized and clearly communicated. They let you drive with other instructors to practice exams, which is very useful to prepare for the real exam.",
      "rating": 5,
      "profilePic": profilePic, // Replace path with imported asset
    },
    {
      "name": "Seren Ozturk",
      "review": "Nazif is a fantastic driving instructor who helps you with patience. He is friendly and helpful.",
      "rating": 5,
      "profilePic": profilePic, // Replace path with imported asset
    }
  ],
  "uspContent": [
    {
      "number": 1,
      "title": "Punt 1",
      "description": "Wij Hebben Een Eigen Examen Reserveringssysteem Hierdoor Kunnen Wij Al Direct Je Examen Reserveren Zonder Lange Wachtijden."
    },
    {
      "number": 2,
      "title": "Geld Terug",
      "description": "Betaal Voor Wat Je Rijdt. Niet Gereden Uren Worden Terugbetaald. Bekijk De Pagina Help! Voor De Voorwaarden."
    },
    {
      "number": 3,
      "title": "Ryles",
      "description": "Plan Moeiteloos Je Eerste Rijles In Via De Ryles App, Geniet Van Het Gemak Van IDEAL-Betalingen, Houd Voortgang Bij Op Uw Digitale Leskaart En Maak Gebruik Van Onze Online Theoriecursus."
    }
  ],
  "photoContent": [
    {
      "id": 1,
      "title": "Photo 1",
      "description": "About photo",
      "imageUrl": gallery, // Replace path with imported asset
    },
    {
      "id": 2,
      "title": "Photo 2",
      "description": "About photo",
      "imageUrl": gallery, // Replace path with imported asset
    },
    {
      "id": 3,
      "title": "Photo 3",
      "description": "About photo",
      "imageUrl": gallery, // Replace path with imported asset
    }
  ],
  "faqContent": [
    {
      "id": 1,
      "question": "Moet ik eerst mijn {NICHE} halen?"
    },
    {
      "id": 2,
      "question": "Waarom beginnen {NICHE} een proefrijles?"
    },
    {
      "id": 3,
      "question": "Hoelang duurt een {NICHE}?"
    },
    {
      "id": 4,
      "question": "Moet ik eerst mijn theorie-examen {NICHE}?"
    }
  ]
};

export default jsonData;
