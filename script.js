const messages = [

    "I love you! ♡",

    "You're amazing! 🩷",

    "You make my heart skip a beat! 🩷",

    "I will love you forever and ever🩷",
    
    "You're the best thing  happened to me🩷",
    
    "I can't believe you are mine🩷",
   
    "I've always and will always love you, my little rosemary🩷",
  
    "Omaaaaar i love you, you are amazing🩷",
    
    "lyna + omar = ♡",

    "I will always keep akejeke to you🩷",
   
    "I can't believe i can call you mine🩷",
   
    " I have never and ever regretting being with you, love🩷",
   
    "Sometimes being with you feels too good to be true🩷",
  
    "You make me feel safe",
  
    "and loved",
   
    "and warm",
 
    "and cared for",
  
    "and special",
  
    "and really, really safe🩷",
   
    "You are amazing,",
    
    "caring,",
    
    "sweet,",
   
    "kind,",
  
    "smart,",
  
    "intelligent,",
  
    "funny,",
    
    "humorous,",
   
    "fun to be around,",
  
    "thoughtful,",
   
    "careful,",
  
    "and most importantly, you are you.",
  
    "there are things noone can do as well as you",
  
    "there are small tiny details that make you unique from anybody else 🩷",
  
    "You are handsome🩷",
  
    "Your nose is the perfect shape, manly and hot hehe🩷",
   
    "Your eyes are like Boba, so shiny and silky, like black pearls!🩷",
  
    "Your cheeks have the perfect ampunt of fat in them, i would love to boop🩷",

"Your lips are a beatiful shape that i would love to kiss🩷",

"Your jaw is masculine and sharp yet soft at the same time, i would love to hold🩷",

"Your neck is reaaaally really hot hehe🩷",

"Your eye brows are really pretty🩷",

"I love your eyelashes🩷",

"Your face looks handsome shaved and with a mustache, and with a beard, and with both.🩷",

"I'll stay with you🩷",

"I'll hug you whenever you need it🩷",

"I'll comfort you whenever you're sad🩷",

"I'll hold you whenever you want me to🩷",

"I'll cook you a delicious meal whenever you're hungry🩷",

"I'll bake you pastries whenever youre craving them🩷",

"I'll make you breakfast in bed whenever you're too tired to wake up🩷",

"I'll give you a massage whenever your body is aching🩷",

"I'll sweet talk you whenever you feel stressed, happy or sad🩷",

"I'll do all the previous ones without the conditions.🩷",

"I'll make you happy,",

"feel cared for,",

"feel special,",

"feel warm,",

"feel butterflies in your stomach,",

"feel safe🩷",

"I'll also be your sugar mommy, I'll buy you things you have always dreamt of🩷"
  

];

let index = 0;

document.getElementById("heart-button").addEventListener("click", function() {

    document.getElementById("message").textContent = messages[index];

    index = (index + 1) % messages.length;

});