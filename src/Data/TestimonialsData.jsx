const storedValueTestimonialsData = localStorage.getItem('ValueTestimonialsData');
const valueCardData = storedValueTestimonialsData ? JSON.parse(storedValueTestimonialsData) : [
  {
    userName: "Sara T",
    opinion:
      "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
  },
  {
    userName: "John D",
    opinion:
      "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
  },
  {
    userName: "Emily G",
    opinion:
      "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
  },
  {
    userName: "Alaa A",
    opinion:
      "I really appreciated how you kept me up to date on yourank — it helped me coordinate with our stakeholders, and I’m excited to share that we’re on track to launch. I’m impressed with the services you’re introducing.",
  },
  {
    userName: "Joudy S",
    opinion:
      "The whole team is there to help. YourBank have gone above and beyond this week to make sure banking with (BN) is easy and hassle-free and this is consistent with how we’ve always been treated by everyone at this branch.",
  },
  {
    userName: "Eline S",
    opinion:
      "This bank has an awesome team and a dedicated staff. I am very impressed by their vision, hard work, outstanding performance, and wonferful team-mates. Always welcoming and eager to help you.",
  },
  {
    userName: "Ammen F",
    opinion:
      "I’ve been with YourBank for a few years, and every single encounter w them has been exceptional despite my comparatively small-status among businesses they likely serve. Always welcoming and eager to help you.",
  },
  {
    userName: "Asmmaa M",
    opinion:
      "The sweetest, most accommodating, professional, proficient bank in these United States. I have never encountered a bank that totally helps as well as understands their customers. Always welcoming and eager to help you.",
  },
  {
    userName: "Mustafa R",
    opinion:
      "Lovely bank, warm environment. I know some of the people working in this branch and they are very nice. Always welcoming and eager to help you. It feels they have a more personal relationship with their clients.",
  }
];

if(!storedValueTestimonialsData){
  localStorage.setItem('ValueTestimonialsData',JSON.stringify(valueCardData));
}

export const TestimonialsData = valueCardData;