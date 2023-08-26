AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Junior Software Engineer",
    cardImage: "assets/images/experience-page/Leads.png",
    place: "Leads Corporation",
    time: "(June, 2023 - Present)",
   desp: "<li>In my role as a Junior Software Engineer, my primary responsibility entails the development of Core Banking software using the latest technologies such as .NET 6 and Vue.js 3.</li> ",
  },
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/Walton.png",
    place: "Walton",
    time: "(March, 2023 - June, 2023)",
   desp: "<li>As a software engineer at Walton, my main responsibility would be to develop, test, and maintain software applications and systems that support the company's operations</li> ",
  },
  {
    title: "Researcher",
    cardImage: "assets/images/experience-page/bubt_logo.png",
    place: "Bangladesh University Business & Technology",
    time: "(Jan, 2022 - Feb, 2023)",
    desp: "<li>Worked on IOT Based Pet Feeding System & Water Dispenser.</li><li>Worked on Bone Marrow Cancer Classification using Deep Learning (Multiclass Classification).</li><li>Worked on Time series Analysis & forecasting Dhaka Air Quality Usng SARIMAX Model</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Bangladesh Digital Mela 2023",
    
    cardImage: "assets/images/experience-page/janakantha.jpeg",
    description:
      "Pet Feeder System & Water Dispenser Best innovation project 2023. https://fb.watch/iTttF-pF2_/",
      Previewlink: "",
  },
  {
    title: "Bangladesh Digital Mela 2023",
    cardImage: "assets/images/experience-page/somoy.png",
    description:
      "Pet Feeder System & Water Dispenser Best innovation project 2023. https://fb.watch/iTu1NHSWvm/",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Contest Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The 2021 ICPC Asia Dhaka Regional Contest",
    subtitle: "Preliminary Contest",
    image: "assets/images/experience-page/icpc.jpeg",
    desp: "Participating in the ICPC contest can be a great way to showcase my skills and potentially gain recognition from employers or academic institutions. Winning the contest or even just performing well can be a valuable addition to my resume or CV, highlighting your technical skills and problem-solving abilities.",
    
  },
  {
    title: "Code Samurai 2022",
    subtitle: "Preliminary Contest",
    image: "assets/images/experience-page/samurai.jpeg",
    desp: " The contest is a highly competitive event that challenges participants to solve complex programming problems under strict time constraints.",
    
  },
  {
    title: "BUBT Intra University Programming Contest 2019-20",
    subtitle: "Junior Division",
    image: "assets/images/experience-page/bubt_contest.jpeg",
    desp: "Competing against other programmers in the contest can be a motivating and exciting experience for junior programmers, who may not have had much opportunity to showcase their skills before. It's a chance to demonstrate their abilities and measure their performance against their peers.",
    
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button"></a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
