/* =========================================================
   SCRIPT.JS — এই ফাইলের কাজ:
   ১) Website Configuration
   ২) Mobile Menu
   ৩) Outside Click করলে Menu বন্ধ
   ৪) Dropdown Menu
   ৫) Typing Animation
   ৬) Hero Slider + Touch Swipe
   ৭) Page Routing / Back Button
   ৮) Custom PDF.js Reader
   ৯) Gallery Lightbox
   ========================================================= */

/* ---------- 00. PDF.JS LIBRARY LOAD ---------- */
const mtePdfJsLoader = document.createElement("script");
mtePdfJsLoader.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
mtePdfJsLoader.onload = function(){
  if (typeof mteStartPdfSystem === "function") mteStartPdfSystem();
};
document.head.appendChild(mtePdfJsLoader);

/* =========================================================
   MTE CONFIG — এখান থেকে নিজের তথ্য/ছবি/PDF লিংক বদলাবেন
   ========================================================= */

/* ---------- 01. WEBSITE CONFIGURATION ---------- */
const MTE_CONFIG = {

  /* Navigation Bar-এর Logo */
  logo: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-16%20at%209.58.56%20PM.jpeg",

  /* About/Profile Section-এর ব্যক্তিগত ছবি */
  profileImage: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/01638816760.jpg",

  /* শিক্ষক/ওয়েবসাইটের নাম */
  teacherName: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",

  /* পরিচয় */
  subtitle: "ওয়েব ডেভেলপার | ওয়েব ডিজাইনার | এম এস ওয়ার্ড এক্সপার্ট | শিক্ষানুরাগী | শিক্ষক | লেখক | ইমাম",

  /* বাকি Config আগের মতোই থাকবে *//* =========================================================
   একাধিক বই — নতুন বই যোগ করতে শুধু এখানে তথ্য বসাবেন
   ========================================================= */
books: [
  {
    title: "প্রশ্নোত্তরে এসো সহজ পদ্ধতিতে তাজবীদ ও সিফাত শিখি",
    author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
    cover: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Fainal-%20font%20side.jpg",
    pdf: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/A5%20size.pdf"
  },

  {
    title: "শিশুদের সহজ নূরাণী কায়দা",
    author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
    cover: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/KAYDA%20NEW%20COVER%20PAGE.jpg",
    pdf: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Kayda%20.pdf"
  },

  {
    title: "হৃদয়ের ঠিকানা জান্নাত",
    author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
    cover: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-17%20at%204.48.08%20PM%20(2).jpeg",
    pdf: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Paradise%20The%20Destination%20of%20the%20Heart.pdf"
  },

  {
    title: "হৃদয়ের ঠিকানা জান্নাত",
    author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
    cover: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-17%20at%204.48.08%20PM%20(2).jpeg",
    pdf: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Paradise%20The%20Destination%20of%20the%20Heart.pdf"  },
				
  {
    title: "হৃদয়ের ঠিকানা জান্নাত",
    author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
    cover: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-17%20at%204.48.08%20PM%20(2).jpeg",
    pdf: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Paradise%20The%20Destination%20of%20the%20Heart.pdf"  }

],

  /* =========================================================
     বইয়ের কভার — Supabase
     ========================================================= */
  bookCover: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Fainal-%20font%20side.jpg",

  typingTexts: [
    "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
    "মাদ্রাসা শিক্ষক",
    "ইসলামিক লেখক",
    "ওয়েব ডেভলপার",
    "ইনচার্জ"
  ],

  phone: "+8801638816760",
  whatsapp: "+8801638816760",
  email: "Si1993.sm@email.com",
  facebook: "https://www.facebook.com/Abu.twahaa.saiful.Islam.760",
  address: "94 Kazi Alauddin Road, Najir Bazar, Dhaka-1000",

  sliderImages: [
    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1800&q=82",
    "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1800&q=82",
    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1800&q=82"
  ],

  /* আপনার আসল Supabase PDF বই */
  pdfDemo: "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/A5%20size.pdf"
};

const mteRoutes = {
  home:"হোম", about:"আমার সম্পর্কে", notes:"ক্লাস নোট", courses:"অনলাইন কোর্স",
  quran:"কুরআন শিক্ষা", tajweed:"তাজবীদ", hifz:"হিফজ", books:"ইসলামিক বই",
  library:"PDF লাইব্রেরি", "student-zone":"শিক্ষার্থীদের রিসোর্স", syllabus:"সিলেবাস",
  routine:"রুটিন", results:"ফলাফল", notices:"নোটিশ", videos:"ভিডিও ক্লাস",
  blog:"ব্লগ", gallery:"গ্যালারি", contact:"যোগাযোগ"
};

const mteMain = document.getElementById("mteMain");

document.getElementById("mteBrandLogo").src = MTE_CONFIG.logo;
document.getElementById("mteBrandName").textContent = MTE_CONFIG.teacherName;
document.getElementById("mteBrandSub").textContent = MTE_CONFIG.subtitle;
document.getElementById("mteFooterName").textContent = MTE_CONFIG.teacherName;
document.getElementById("mteFooterName2").textContent = MTE_CONFIG.teacherName;
document.getElementById("mteYear").textContent = new Date().getFullYear();

/* ---------- 02. MOBILE MENU + OUTSIDE CLICK ---------- */
const mteNav = document.getElementById("mteNav");
const mteMenuToggle = document.getElementById("mteMenuToggle");

function mteCloseMenu(){
  mteNav.classList.remove("mte-menu-open");
  mteMenuToggle.textContent = "☰";
  mteMenuToggle.setAttribute("aria-expanded","false");
  document.querySelectorAll(".mte-dropdown").forEach(d=>d.classList.remove("mte-open"));
}

mteMenuToggle.addEventListener("click", function(e){
  e.stopPropagation();
  const open = mteNav.classList.toggle("mte-menu-open");
  mteMenuToggle.textContent = open ? "×" : "☰";
  mteMenuToggle.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", function(e){
  /* মেনুর বাহিরে ক্লিক করলে মেনু বন্ধ */
  if(!mteNav.contains(e.target) && !mteMenuToggle.contains(e.target)){
    mteCloseMenu();
  }
});

document.querySelectorAll(".mte-drop-btn").forEach(btn=>{
  btn.addEventListener("click", function(e){
    e.stopPropagation();
    const parent = btn.closest(".mte-dropdown");
    document.querySelectorAll(".mte-dropdown").forEach(d=>{
      if(d !== parent) d.classList.remove("mte-open");
    });
    parent.classList.toggle("mte-open");
  });
});

window.addEventListener("resize",()=>{
  if(window.innerWidth > 900) mteCloseMenu();
});

/* ---------- 03. TYPING ANIMATION ---------- */
let mteTypingTimer;
function mteStartTyping(){
  const el = document.getElementById("mteTypingText");
  if(!el || !MTE_CONFIG.typingTexts?.length) return;
  clearTimeout(mteTypingTimer);

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick(){
    const current = MTE_CONFIG.typingTexts[textIndex];
    el.textContent = deleting ? current.slice(0,charIndex--) : current.slice(0,charIndex++);

    if(!deleting && charIndex > current.length){
      deleting = true;
      mteTypingTimer = setTimeout(tick, 1500);
      return;
    }
    if(deleting && charIndex < 0){
      deleting = false;
      charIndex = 0;
      textIndex = (textIndex + 1) % MTE_CONFIG.typingTexts.length;
      mteTypingTimer = setTimeout(tick, 350);
      return;
    }
    mteTypingTimer = setTimeout(tick, deleting ? 45 : 80);
  }
  tick();
}

/* ---------- 04. HERO IMAGE SLIDER ---------- */
let mteSlideIndex = 0;
let mteSlideTimer;

function mteBuildSlider(){
  const slides = MTE_CONFIG.sliderImages.map((img,i)=>`
    <div class="mte-slide ${i===0?"mte-active":""}" style="background-image:url('${img}')"></div>
  `).join("");

  const dots = MTE_CONFIG.sliderImages.map((_,i)=>
    `<button class="mte-dot ${i===0?"mte-active":""}" type="button" data-slide="${i}" aria-label="স্লাইড ${i+1}"></button>`
  ).join("");
  
  return `
    <section class="mte-hero" id="mteHeroSlider">
      ${slides}
      <div class="mte-container mte-hero-content">
        <div class="mte-hero-copy">
          <div class="mte-typing-line"><span id="mteTypingText"></span><span class="mte-typing-cursor">|</span></div>
          <h1 class="mte-hero-title">কুরআন ও ইসলামিক শিক্ষার সুন্দর পথচলা</h1>
          <p class="mte-hero-text">জ্ঞান, আমল ও উত্তম চরিত্র গঠনের মাধ্যমে সুন্দর সমাজ নির্মাণ। শিক্ষার্থীদের জন্য সহজ, সুন্দর ও প্রয়োজনীয় ইসলামিক শিক্ষা ও রিসোর্স।</p>
          <div class="mte-actions">
            <a class="mte-btn mte-btn-primary" href="#about" data-mte-route>আমার সম্পর্কে</a>
            <a class="mte-btn mte-btn-light" href="#courses" data-mte-route>শিক্ষা শুরু করুন</a>
          </div>
        </div>
      </div>
      <button class="mte-slider-control mte-slider-prev" id="mtePrev" type="button" aria-label="আগের স্লাইড">‹</button>
      <button class="mte-slider-control mte-slider-next" id="mteNext" type="button" aria-label="পরের স্লাইড">›</button>
      <div class="mte-slider-dots">${dots}</div>
    </section>`;
}

function mteInitSlider(){
  const slides = [...document.querySelectorAll(".mte-slide")];
  const dots = [...document.querySelectorAll(".mte-dot")];
  if(!slides.length) return;

  function show(index){
    mteSlideIndex = (index + slides.length) % slides.length;
    slides.forEach((s,i)=>s.classList.toggle("mte-active",i===mteSlideIndex));
    dots.forEach((d,i)=>d.classList.toggle("mte-active",i===mteSlideIndex));
  }
  function next(){show(mteSlideIndex+1)}
  function prev(){show(mteSlideIndex-1)}
  function restart(){
    clearInterval(mteSlideTimer);
    mteSlideTimer = setInterval(next,5000);
  }

  document.getElementById("mteNext").onclick=()=>{next();restart()};
  document.getElementById("mtePrev").onclick=()=>{prev();restart()};
  dots.forEach(d=>d.onclick=()=>{show(Number(d.dataset.slide));restart()});

  let startX=0;
  const hero=document.getElementById("mteHeroSlider");
  hero.addEventListener("touchstart",e=>startX=e.changedTouches[0].clientX,{passive:true});
  hero.addEventListener("touchend",e=>{
    const diff=e.changedTouches[0].clientX-startX;
    if(Math.abs(diff)>45){diff<0?next():prev();restart()}
  },{passive:true});
  restart();
}

/* ---------- 05. PAGE CONTENT / TEMPLATES ---------- */
function mtePage(title,desc,content){
  return `
    <section class="mte-page">
      <div class="mte-page-head">
        <div class="mte-container">
          <h1>${title}</h1><p>${desc}</p>
          <button class="mte-btn mte-btn-light mte-back" type="button" onclick="mteBack()">← ফিরে যান</button>
        </div>
      </div>
      ${content}
    </section>`;
}

function mteHome(){
  return `
  ${mteBuildSlider()}

  <section class="mte-section">
    <div class="mte-container mte-profile">
      <img class="mte-profile-img" src="${MTE_CONFIG.profileImage}" alt="${MTE_CONFIG.teacherName}" loading="lazy">
      <div>
        <div class="mte-section-kicker">সংক্ষিপ্ত পরিচিতি</div>
        <h2 class="mte-profile-title">${MTE_CONFIG.teacherName}</h2>
        <p><strong>${MTE_CONFIG.subtitle}</strong></p>
        <p>শিক্ষার্থীদের কুরআন, তাজবীদ, হিফজ ও প্রয়োজনীয় ইসলামিক শিক্ষা সহজভাবে শেখানো এবং পড়াশোনার জন্য প্রয়োজনীয় রিসোর্স এক জায়গায় পৌঁছে দেওয়ার একটি ব্যক্তিগত শিক্ষামূলক উদ্যোগ।</p>
        <ul class="mte-points">
          <li>কুরআন ও তাজবীদ শিক্ষা</li>
          <li>হিফজ ও নাজেরা সহায়তা</li>
          <li>ক্লাস নোট ও PDF রিসোর্স</li>
          <li>শিক্ষার্থীদের রুটিন ও ফলাফল</li>
        </ul>
        <a class="mte-btn mte-btn-primary" href="#about" data-mte-route>বিস্তারিত জানুন</a>
      </div>
    </div>
  </section>

  <section class="mte-section mte-section-soft">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">গুরুত্বপূর্ণ নোটিশ</div>
        <h2 class="mte-section-title">সর্বশেষ আপডেট</h2>
      </div>
      <div class="mte-notice"><strong>নতুন ক্লাস নোট প্রকাশিত হয়েছে</strong><small>শিক্ষার্থীরা রিসোর্স বিভাগ থেকে দেখতে পারবেন।</small></div>
      <div class="mte-notice"><strong>অনলাইন কুরআন শিক্ষা কোর্সে ভর্তি চলছে</strong><small>বিস্তারিত কোর্স পেজে দেখুন।</small></div>
      <div class="mte-notice"><strong>পরবর্তী পরীক্ষার রুটিন শীঘ্রই প্রকাশিত হবে</strong><small>নোটিশ বোর্ড অনুসরণ করুন।</small></div>
      <a class="mte-link" href="#notices" data-mte-route>সব নোটিশ দেখুন →</a>
    </div>
  </section>

  <section class="mte-section">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">শিক্ষা</div>
        <h2 class="mte-section-title">শিক্ষার্থীদের জন্য শেখার সুযোগ</h2>
      </div>
      <div class="mte-grid">
        <article class="mte-card"><div class="mte-card-icon">📖</div><h3 class="mte-card-title">কুরআন শিক্ষা</h3><p class="mte-card-text">সঠিক উচ্চারণ ও নিয়ম মেনে কুরআন শেখার সহায়ক রিসোর্স।</p><a class="mte-link" href="#quran" data-mte-route>দেখুন →</a></article>
        <article class="mte-card"><div class="mte-card-icon">🎧</div><h3 class="mte-card-title">তাজবীদ</h3><p class="mte-card-text">তাজবীদের প্রয়োজনীয় বিষয়গুলো ধাপে ধাপে শেখার ব্যবস্থা।</p><a class="mte-link" href="#tajweed" data-mte-route>দেখুন →</a></article>
        <article class="mte-card"><div class="mte-card-icon">🌙</div><h3 class="mte-card-title">হিফজ</h3><p class="mte-card-text">হিফজের পরিকল্পনা, পুনরাবৃত্তি ও নিয়মিত পড়াশোনার সহায়তা।</p><a class="mte-link" href="#hifz" data-mte-route>দেখুন →</a></article>
      </div>
    </div>
  </section>

  <section class="mte-section mte-section-soft">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">ক্লাস নোট</div>
        <h2 class="mte-section-title">সাম্প্রতিক পড়াশোনার রিসোর্স</h2>
      </div>
      <div class="mte-grid">
        <article class="mte-card"><div class="mte-card-icon">📝</div><h3 class="mte-card-title">নাজেরা ও কুরআন</h3><p class="mte-card-text">ডেমো ক্লাস নোট ও অনুশীলন।</p><a class="mte-link" href="#notes" data-mte-route>নোট দেখুন →</a></article>
        <article class="mte-card"><div class="mte-card-icon">✍️</div><h3 class="mte-card-title">তাজবীদ নোট</h3><p class="mte-card-text">মাখরাজ ও প্রয়োজনীয় তাজবীদ নিয়ম।</p><a class="mte-link" href="#notes" data-mte-route>নোট দেখুন →</a></article>
        <article class="mte-card"><div class="mte-card-icon">📚</div><h3 class="mte-card-title">হিফজ পরিকল্পনা</h3><p class="mte-card-text">দৈনিক সবক ও আমুখতা/দাওর ব্যবস্থাপনার ডেমো।</p><a class="mte-link" href="#notes" data-mte-route>সব নোট →</a></article>
      </div>
    </div>
  </section>

  <section class="mte-section mte-book-section">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">ইসলামিক বই</div>
        <h2 class="mte-section-title">PDF বই পড়ুন</h2>
        <p class="mte-section-desc">বইটি ওয়েবসাইটের ভেতরেই Custom PDF Reader-এ খুলবে।</p>
      </div>
<div class="mte-grid">
  ${MTE_CONFIG.books.map(book => `
    <article class="mte-card mte-book-card">
      <img
        class="mte-book-cover"
        src="${book.cover}"
        alt="${book.title}"
        loading="lazy">

      <h3 class="mte-card-title">${book.title}</h3>

      <p class="mte-card-text">
        লেখক: ${book.author}
      </p>

      <button
        class="mte-btn mte-btn-primary"
        type="button"
        onclick="mteOpenPdf('${book.pdf}','${book.title}')">
        📖 বইটি পড়ুন
      </button>
    </article>
  `).join("")}

  <article class="mte-card">
    <div class="mte-card-icon">📚</div>
    <h3 class="mte-card-title">PDF লাইব্রেরি</h3>
    <p class="mte-card-text">বিভিন্ন ইসলামিক ও শিক্ষামূলক PDF এক জায়গায় সাজানো যাবে।</p>
    <a class="mte-btn mte-btn-primary" href="#library" data-mte-route>
      লাইব্রেরি খুলুন
    </a>
    </div>
  </section>
  
    </section>

  <!-- =========================================================
       আজকের আমল SECTION
       ========================================================= -->

<section class="mte-section mte-section-soft mte-amol-section">
    <div class="mte-container">

      <div class="mte-section-head">
        <div class="mte-section-kicker">আজকের আমল</div>
        <h2 class="mte-section-title">আজকের কিছু গুরুত্বপূর্ণ আমল</h2>
        <p class="mte-section-desc">
          প্রতিদিনের জীবনে আল্লাহর স্মরণ ও নেক আমলকে আরও সুন্দরভাবে ধরে রাখার চেষ্টা করি।
        </p>
      </div>

      <div class="mte-grid">

        <article class="mte-card">
          <div class="mte-card-icon">📖</div>
          <h3 class="mte-card-title">কুরআন তিলাওয়াত</h3>
          <p class="mte-card-text">
            প্রতিদিন কিছু সময় কুরআন তিলাওয়াত করুন এবং আয়াতগুলোর অর্থ বোঝার চেষ্টা করুন।
          </p>
        </article>

        <article class="mte-card">
          <div class="mte-card-icon">🤲</div>
          <h3 class="mte-card-title">যিকির ও দোয়া</h3>
          <p class="mte-card-text">
            সকাল-সন্ধ্যার মাসনূন যিকির ও দোয়া পড়ুন এবং নিয়মিত আল্লাহকে স্মরণ করুন।
          </p>
        </article>

        <article class="mte-card">
          <div class="mte-card-icon">🕌</div>
          <h3 class="mte-card-title">পাঁচ ওয়াক্ত নামাজ</h3>
          <p class="mte-card-text">
            পাঁচ ওয়াক্ত নামাজ সময়মতো আদায় করার চেষ্টা করুন এবং নামাজে মনোযোগী থাকুন।
          </p>
        </article>

        <article class="mte-card">
          <div class="mte-card-icon">❤️</div>
          <h3 class="mte-card-title">সদকা ও ভালো কাজ</h3>
          <p class="mte-card-text">
            সামর্থ্য অনুযায়ী সদকা করুন এবং আজ অন্তত একজন মানুষের উপকার করার চেষ্টা করুন।
          </p>
        </article>

      </div>

      <div style="text-align:center;margin-top:25px;">
        <p style="font-weight:600;">
          🌿 আজকের নিয়ত — আল্লাহর সন্তুষ্টির জন্য একটি ভালো কাজ করব।
        </p>
      </div>

    </div>
  </section>

  

  
  
  <section class="mte-section mte-book-section">
  <section class="mte-section mte-section-soft">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">ভিডিও ক্লাস</div>
        <h2 class="mte-section-title">শেখার ভিডিও</h2>
      </div>
      <div class="mte-grid">
        <article class="mte-card"><div class="mte-video"><iframe src="https://youtube.com/shorts/FLwKXDo0aYk?si=-A_MPrspW3HvCMwB" title="ডেমো ভিডিও ক্লাস" loading="lazy" allowfullscreen></iframe></div><h3 class="mte-card-title">ডেমো ভিডিও ক্লাস</h3></article>
        <article class="mte-card"><div class="mte-video"><iframe src="https://youtube.com/shorts/FLwKXDo0aYk?si=-A_MPrspW3HvCMwB" title="ডেমো ইসলামিক শিক্ষা" loading="lazy" allowfullscreen></iframe></div><h3 class="mte-card-title">ইসলামিক শিক্ষা</h3></article>
        <article class="mte-card"><div class="mte-video"><iframe src="https://youtube.com/shorts/FLwKXDo0aYk?si=-A_MPrspW3HvCMwB" title="ডেমো কুরআন ক্লাস" loading="lazy" allowfullscreen></iframe></div><h3 class="mte-card-title">কুরআন ক্লাস</h3></article>
      </div>
    </div>
  </section>

  <section class="mte-section">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">শিক্ষার্থী জোন</div>
        <h2 class="mte-section-title">পড়াশোনার প্রয়োজনীয় সবকিছু</h2>
      </div>
      <div class="mte-grid">
        <article class="mte-card"><div class="mte-card-icon">🗓️</div><h3 class="mte-card-title">রুটিন</h3><p class="mte-card-text">ক্লাস ও পরীক্ষার রুটিন।</p><a class="mte-link" href="#routine" data-mte-route>দেখুন →</a></article>
        <article class="mte-card"><div class="mte-card-icon">📋</div><h3 class="mte-card-title">সিলেবাস</h3><p class="mte-card-text">বিষয়ভিত্তিক সিলেবাস ও প্রস্তুতি।</p><a class="mte-link" href="#syllabus" data-mte-route>দেখুন →</a></article>
        <article class="mte-card"><div class="mte-card-icon">🏆</div><h3 class="mte-card-title">ফলাফল</h3><p class="mte-card-text">ডেমো পরীক্ষার ফলাফল ও অগ্রগতি।</p><a class="mte-link" href="#results" data-mte-route>দেখুন →</a></article>
      </div>
    </div>
  </section>

  <section class="mte-section mte-section-soft">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">গ্যালারি</div>
        <h2 class="mte-section-title">শিক্ষামূলক মুহূর্ত</h2>
      </div>
      <div class="mte-gallery">
        <button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=85')"><img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80" alt="ইসলামিক শিক্ষা" loading="lazy"></button>
        <button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1200&q=85')"><img src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=600&q=80" alt="কুরআন শিক্ষা" loading="lazy"></button>
        <button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1200&q=85')"><img src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=600&q=80" alt="ইসলামিক বই" loading="lazy"></button>
        <button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=85')"><img src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=600&q=80" alt="শিক্ষা" loading="lazy"></button>
      </div>
      <div style="text-align:center;margin-top:20px"><a class="mte-btn mte-btn-primary" href="#gallery" data-mte-route>সম্পূর্ণ গ্যালারি</a></div>
    </div>
  </section>

  <section class="mte-section">
    <div class="mte-container">
      <div class="mte-section-head">
        <div class="mte-section-kicker">যোগাযোগ</div>
        <h2 class="mte-section-title">শিক্ষা ও যোগাযোগ</h2>
        <p class="mte-section-desc">প্রশ্ন, কোর্স বা শিক্ষার্থীদের বিষয়ে যোগাযোগ করতে নিচের পেজটি ব্যবহার করুন।</p>
      </div>
      <div style="text-align:center"><a class="mte-btn mte-btn-primary" href="#contact" data-mte-route>যোগাযোগ করুন →</a></div>
    </div>
  </section>`;
}

/* ---------- 05B. GENERIC PAGE CONTENT ---------- */
function mteGenericContent(route){
  const contentMap = {
    about:`<section class="mte-section"><div class="mte-container mte-profile"><img class="mte-profile-img" src="${MTE_CONFIG.profileImage}" alt="${MTE_CONFIG.teacherName}"><div><div class="mte-section-kicker">শিক্ষক পরিচিতি</div><h2 class="mte-profile-title">${MTE_CONFIG.teacherName}</h2><p><strong>${MTE_CONFIG.subtitle}</strong></p><p>এখানে আপনার বিস্তারিত শিক্ষাগত যোগ্যতা, অভিজ্ঞতা, শিক্ষকতা দর্শন, দায়িত্ব, প্রকাশনা ও পরিচিতি যোগ করা যাবে।</p><ul class="mte-points"><li>কুরআন ও ইসলামিক শিক্ষা</li><li>তাজবীদ ও হিফজ সহায়তা</li><li>শিক্ষার্থীদের একাডেমিক গাইডলাইন</li></ul></div></div></section>`,
    notes:`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><div class="mte-card-icon">📝</div><h3 class="mte-card-title">ক্লাস নোট — ০১</h3><p class="mte-card-text">ডেমো নোট। পরে আপনার আসল নোট/PDF যুক্ত করবেন।</p><button class="mte-btn mte-btn-primary" onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'ক্লাস নোট — ০১')">PDF পড়ুন</button></article><article class="mte-card"><div class="mte-card-icon">📝</div><h3 class="mte-card-title">তাজবীদ নোট</h3><p class="mte-card-text">মাখরাজ, সিফাত ও তাজবীদের প্রয়োজনীয় বিষয়।</p></article><article class="mte-card"><div class="mte-card-icon">📝</div><h3 class="mte-card-title">হিফজ নোট</h3><p class="mte-card-text">হিফজের দৈনিক পরিকল্পনা ও পুনরাবৃত্তি।</p></article></div></div></section>`,
    courses:`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><div class="mte-card-icon">📖</div><h3 class="mte-card-title">অনলাইন কুরআন শিক্ষা</h3><p class="mte-card-text">পুরুষ, নারী ও শিশুদের উপযোগী কোর্সের তথ্য এখানে থাকবে।</p></article><article class="mte-card"><div class="mte-card-icon">🎧</div><h3 class="mte-card-title">তাজবীদ কোর্স</h3><p class="mte-card-text">তাজবীদের মৌলিক থেকে প্রয়োজনীয় পর্যায় পর্যন্ত।</p></article><article class="mte-card"><div class="mte-card-icon">🌙</div><h3 class="mte-card-title">হিফজ সহায়তা</h3><p class="mte-card-text">হিফজের পরিকল্পনা, দাওর ও অগ্রগতি ট্র্যাকিং।</p></article></div></div></section>`,
    quran:`<section class="mte-section"><div class="mte-container"><div class="mte-section-head"><h2 class="mte-section-title">কুরআন শিক্ষা</h2><p class="mte-section-desc">নাজেরা, মাখরাজ, শুদ্ধ তিলাওয়াত ও অনুশীলনের রিসোর্স।</p></div><div class="mte-empty-note">ডেমো কনটেন্ট। এখানে আপনার লেসন, ভিডিও, নোট ও PDF যুক্ত করুন।</div></div></section>`,
    tajweed:`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><h3 class="mte-card-title">মাখরাজ</h3><p class="mte-card-text">আরবি হরফের সঠিক উচ্চারণস্থল।</p></article><article class="mte-card"><h3 class="mte-card-title">সিফাত</h3><p class="mte-card-text">হরফের প্রয়োজনীয় গুণাবলি।</p></article><article class="mte-card"><h3 class="mte-card-title">নিয়মিত অনুশীলন</h3><p class="mte-card-text">শুদ্ধ তিলাওয়াতের জন্য অনুশীলন পরিকল্পনা।</p></article></div></div></section>`,
    hifz:`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><div class="mte-card-icon">1️⃣</div><h3 class="mte-card-title">দৈনিক সবক</h3><p class="mte-card-text">সামর্থ্য অনুযায়ী নির্ধারিত নতুন সবক।</p></article><article class="mte-card"><div class="mte-card-icon">2️⃣</div><h3 class="mte-card-title">আমুখতা</h3><p class="mte-card-text">পূর্বের সবক নিয়মিত ঝালাই।</p></article><article class="mte-card"><div class="mte-card-icon">3️⃣</div><h3 class="mte-card-title">দাওর</h3><p class="mte-card-text">পুরোনো অংশ পুনরাবৃত্তির পরিকল্পনা।</p></article></div></div></section>`,
    books:`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><img class="mte-book-cover" src="${MTE_CONFIG.bookCover}" alt="ইসলামিক বইয়ের কভার"><h3 class="mte-card-title">আমার বই</h3><button class="mte-btn mte-btn-primary" onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'আমার বই')">বইটি পড়ুন</button></article></div></div></section>`,
library:`
<section class="mte-section">
  <div class="mte-container">

    <!-- PDF LIBRARY HEADER: লাইব্রেরির শিরোনাম ও বর্ণনা -->
    <div class="mte-section-head">
      <div class="mte-section-kicker">PDF LIBRARY</div>
      <h2 class="mte-section-title">PDF লাইব্রেরি</h2>
      <p class="mte-section-desc">
        এখানে আপনার সকল ইসলামিক ও শিক্ষামূলক PDF বই পাওয়া যাবে।
      </p>
    </div>

    <!-- PDF BOOK GRID: MTE_CONFIG.books থেকে সব বই স্বয়ংক্রিয়ভাবে দেখাবে -->
    <div class="mte-grid">

      ${
        MTE_CONFIG.books && MTE_CONFIG.books.length
        ? MTE_CONFIG.books.map(book => `

          <!-- SINGLE BOOK CARD: একটি বইয়ের Cover, নাম, লেখক ও Reader Button -->
          <article class="mte-card mte-book-card">

            <img
              class="mte-book-cover"
              src="${book.cover}"
              alt="${book.title}"
              loading="lazy">

            <h3 class="mte-card-title">
              ${book.title}
            </h3>

            <p class="mte-card-text">
              লেখক: ${book.author}
            </p>

            <button
              class="mte-btn mte-btn-primary"
              type="button"
              onclick="mteOpenPdf('${book.pdf}','${book.title}')">
              📖 বইটি পড়ুন
            </button>

          </article>

        `).join("")

        : `
          <!-- EMPTY LIBRARY: কোনো বই না থাকলে এই বার্তা দেখাবে -->
          <div class="mte-empty-note">
            বর্তমানে কোনো PDF বই যুক্ত করা হয়নি।
          </div>
        `
      }

    </div>

  </div>
</section>
`,
    "student-zone":`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><h3 class="mte-card-title">📅 রুটিন</h3><a class="mte-link" href="#routine" data-mte-route>রুটিন দেখুন →</a></article><article class="mte-card"><h3 class="mte-card-title">📚 সিলেবাস</h3><a class="mte-link" href="#syllabus" data-mte-route>সিলেবাস দেখুন →</a></article><article class="mte-card"><h3 class="mte-card-title">🏆 ফলাফল</h3><a class="mte-link" href="#results" data-mte-route>ফলাফল দেখুন →</a></article><article class="mte-card"><h3 class="mte-card-title">📝 Homework</h3><p class="mte-card-text">ডেমো হোমওয়ার্ক/অ্যাসাইনমেন্ট।</p></article></div></div></section>`,
    syllabus:`<section class="mte-section"><div class="mte-container"><div class="mte-empty-note">ডেমো সিলেবাস। আপনার শ্রেণি/বিষয় অনুযায়ী সিলেবাস PDF বা টেবিল এখানে যুক্ত করুন।</div></div></section>`,
    routine:`<section class="mte-section"><div class="mte-container"><div class="mte-card"><h3 class="mte-card-title">সাপ্তাহিক ক্লাস রুটিন — ডেমো</h3><p class="mte-card-text">শনিবার — কুরআন | রবিবার — তাজবীদ | সোমবার — হিফজ | মঙ্গলবার — ইসলামিক স্টাডিজ</p></div></div></section>`,
    results:`<section class="mte-section"><div class="mte-container"><div class="mte-card"><h3 class="mte-card-title">ডেমো ফলাফল</h3><p class="mte-card-text">এখানে শিক্ষার্থীদের নাম, বিষয়ভিত্তিক নম্বর, মোট, গড় ও ফলাফল দেখানো যাবে।</p></div></div></section>`,
    notices:`<section class="mte-section"><div class="mte-container"><div class="mte-notice"><strong>নতুন ক্লাস নোট প্রকাশিত হয়েছে</strong><small>ডেমো নোটিশ</small></div><div class="mte-notice"><strong>কোর্সে ভর্তি চলছে</strong><small>ডেমো নোটিশ</small></div><div class="mte-notice"><strong>পরীক্ষার রুটিন শীঘ্রই</strong><small>ডেমো নোটিশ</small></div></div></section>`,
    videos:`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><div class="mte-video"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="ডেমো ভিডিও" allowfullscreen></iframe></div><h3 class="mte-card-title">ডেমো ভিডিও ক্লাস</h3></article></div></div></section>`,
    blog:`<section class="mte-section"><div class="mte-container"><div class="mte-grid"><article class="mte-card"><div class="mte-card-icon">🖊️</div><h3 class="mte-card-title">কুরআন শিক্ষার গুরুত্ব</h3><p class="mte-card-text">ডেমো ব্লগ পোস্ট। এখানে ইসলামিক শিক্ষা ও শিক্ষকতার লেখা প্রকাশ করা যাবে।</p></article><article class="mte-card"><div class="mte-card-icon">📚</div><h3 class="mte-card-title">শিক্ষার্থীদের পড়াশোনা</h3><p class="mte-card-text">ডেমো ব্লগ পোস্ট।</p></article></div></div></section>`,
    gallery:`<section class="mte-section"><div class="mte-container"><div class="mte-gallery"><button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=85')"><img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=700&q=80" alt="গ্যালারি" loading="lazy"></button><button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1400&q=85')"><img src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=700&q=80" alt="গ্যালারি" loading="lazy"></button><button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7e8?auto=format&fit=crop&w=1400&q=85')"><img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7e8?auto=format&fit=crop&w=700&q=80" alt="গ্যালারি" loading="lazy"></button><button class="mte-gallery-item" onclick="mteOpenImage('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1400&q=85')"><img src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=700&q=80" alt="গ্যালারি" loading="lazy"></button></div></div></section>`,
    contact:`<section class="mte-section"><div class="mte-container mte-contact-grid"><div><div class="mte-section-kicker">যোগাযোগ</div><h2 class="mte-section-title">আমার সাথে যোগাযোগ করুন</h2><div class="mte-contact-list" style="margin-top:20px"><div class="mte-contact-item"><strong>📱 মোবাইল</strong>${MTE_CONFIG.phone}</div><div class="mte-contact-item"><strong>💬 WhatsApp</strong>${MTE_CONFIG.whatsapp}</div><div class="mte-contact-item"><strong>✉️ Email</strong>${MTE_CONFIG.email}</div><div class="mte-contact-item"><strong>📍 ঠিকানা</strong>${MTE_CONFIG.address}</div></div></div><form class="mte-form mte-card" onsubmit="event.preventDefault();alert('ডেমো ফর্ম — আপনার Email/Form service যুক্ত করতে হবে।')"><input type="text" placeholder="আপনার নাম" required><input type="email" placeholder="আপনার ইমেইল" required><textarea placeholder="আপনার বার্তা" required></textarea><button class="mte-btn mte-btn-primary" type="submit">বার্তা পাঠান</button></form></div></section>`
  };
  return contentMap[route] || `<section class="mte-section"><div class="mte-container"><div class="mte-empty-note">এই পেজের ডেমো কনটেন্ট প্রস্তুত করা হচ্ছে।</div></div></section>`;
}

/* ---------- 06. PAGE ROUTING ---------- */
function mteRender(){
  let route = location.hash.replace("#","") || "home";
  if(!mteRoutes[route]) route="home";

  if(route==="home"){
    mteMain.innerHTML = mteHome();
    mteInitSlider();
    mteStartTyping();
  }else{
    mteMain.innerHTML = mtePage(mteRoutes[route], "ডেমো পেজ — আপনার প্রয়োজন অনুযায়ী কনটেন্ট এখানে যুক্ত করতে পারবেন।", mteGenericContent(route));
  }

  mteCloseMenu();
  window.scrollTo({top:0,behavior:"smooth"});
  document.title = `${mteRoutes[route]} | ${MTE_CONFIG.teacherName}`;
}

document.addEventListener("click",function(e){
  const link=e.target.closest("[data-mte-route]");
  if(link) setTimeout(mteRender,0);
});
window.addEventListener("hashchange",mteRender);

/* ---------- 07. BACK BUTTON ---------- */
function mteBack(){
  if(history.length>1) history.back();
  else location.hash="#home";
}

/* ---------- 08. CUSTOM PDF.JS READER ---------- */
let mtePdfSystemReady = false;
function mteStartPdfSystem(){
  if(mtePdfSystemReady || typeof pdfjsLib === "undefined") return;
  mtePdfSystemReady = true;
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

const mtePdfModal=document.getElementById("mtePdfModal");
const mtePdfCanvas=document.getElementById("mtePdfCanvas");
const mtePdfView=document.getElementById("mtePdfView");
const mtePdfStatus=document.getElementById("mtePdfStatus");
const mtePdfPage=document.getElementById("mtePdfPage");
const mtePdfTitle=document.getElementById("mtePdfTitle");

let mtePdfDoc=null;
let mtePdfCurrent=1;
let mtePdfScale=1.15;
let mtePdfRendering=false;
let mtePdfPending=null;

async function mteOpenPdf(url,title){
  mtePdfModal.classList.add("mte-show");
  mtePdfModal.setAttribute("aria-hidden","false");
  mtePdfTitle.textContent=title || "PDF Reader";
  mtePdfCanvas.hidden=true;
  mtePdfStatus.hidden=false;
  mtePdfStatus.textContent="PDF লোড হচ্ছে...";
  mtePdfDoc=null;
  mtePdfCurrent=1;
  document.body.style.overflow="hidden";

  try{
    if(typeof pdfjsLib === "undefined"){
      await new Promise((resolve,reject)=>{
        const started=Date.now();
        const timer=setInterval(()=>{
          if(typeof pdfjsLib !== "undefined"){clearInterval(timer);resolve();}
          else if(Date.now()-started>10000){clearInterval(timer);reject(new Error("PDF.js load timeout"));}
        },100);
      });
    }
    mteStartPdfSystem();
    mtePdfDoc=await pdfjsLib.getDocument({url:url,withCredentials:false}).promise;
    mtePdfStatus.hidden=true;
    mtePdfCanvas.hidden=false;
    await mteRenderPdfPage(1);
  }catch(err){
    console.error(err);
    mtePdfStatus.hidden=false;
    mtePdfCanvas.hidden=true;
    mtePdfStatus.innerHTML="PDF লোড করা যায়নি।<br><small>Supabase PDF হলে Public URL এবং CORS অনুমতি সঠিক আছে কি না দেখুন।</small>";
  }
}

async function mteRenderPdfPage(num){
  if(!mtePdfDoc) return;
  if(mtePdfRendering){mtePdfPending=num;return}
  mtePdfRendering=true;

  try{
    const page=await mtePdfDoc.getPage(num);
    const viewport=page.getViewport({scale:mtePdfScale});
    const ratio=window.devicePixelRatio||1;

    mtePdfCanvas.width=Math.floor(viewport.width*ratio);
    mtePdfCanvas.height=Math.floor(viewport.height*ratio);
    mtePdfCanvas.style.width=viewport.width+"px";
    mtePdfCanvas.style.height=viewport.height+"px";

    const ctx=mtePdfCanvas.getContext("2d",{alpha:false});
    ctx.setTransform(ratio,0,0,ratio,0,0);
    await page.render({canvasContext:ctx,viewport}).promise;

    mtePdfCurrent=num;
    mtePdfPage.textContent=`পৃষ্ঠা ${num} / ${mtePdfDoc.numPages}`;
    mtePdfView.scrollTop=0;
  }finally{
    mtePdfRendering=false;
  }

  if(mtePdfPending!==null){
    const p=mtePdfPending;mtePdfPending=null;mteRenderPdfPage(p);
  }
}

document.getElementById("mtePdfPrev").onclick=()=>{
  if(mtePdfDoc && mtePdfCurrent>1) mteRenderPdfPage(mtePdfCurrent-1);
};
document.getElementById("mtePdfNext").onclick=()=>{
  if(mtePdfDoc && mtePdfCurrent<mtePdfDoc.numPages) mteRenderPdfPage(mtePdfCurrent+1);
};
document.getElementById("mtePdfZoomIn").onclick=()=>{
  mtePdfScale=Math.min(2.5,mtePdfScale+.15);
  mteRenderPdfPage(mtePdfCurrent);
};
document.getElementById("mtePdfZoomOut").onclick=()=>{
  mtePdfScale=Math.max(.55,mtePdfScale-.15);
  mteRenderPdfPage(mtePdfCurrent);
};
document.getElementById("mtePdfFit").onclick=()=>{
  if(!mtePdfDoc) return;
  mtePdfDoc.getPage(mtePdfCurrent).then(page=>{
    const base=page.getViewport({scale:1});
    const available=Math.max(250,mtePdfView.clientWidth-25);
    mtePdfScale=Math.max(.55,Math.min(1.8,available/base.width));
    mteRenderPdfPage(mtePdfCurrent);
  });
};

function mteClosePdf(){
  mtePdfModal.classList.remove("mte-show");
  mtePdfModal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
document.getElementById("mtePdfClose").onclick=mteClosePdf;

mtePdfModal.addEventListener("click",e=>{
  if(e.target===mtePdfModal) mteClosePdf();
});

mtePdfView.addEventListener("contextmenu",e=>e.preventDefault());

/* Download/Print shortcut deterrence while reader is open */
document.addEventListener("keydown",e=>{
  if(!mtePdfModal.classList.contains("mte-show")) return;
  if(e.key==="Escape"){mteClosePdf();return}
  if((e.ctrlKey||e.metaKey) && ["p","s"].includes(e.key.toLowerCase())){
    e.preventDefault();
    e.stopPropagation();
  }
  if(e.key==="ArrowRight") document.getElementById("mtePdfNext").click();
  if(e.key==="ArrowLeft") document.getElementById("mtePdfPrev").click();
});

/* ---------- 09. GALLERY LIGHTBOX ---------- */
function mteOpenImage(src){
  document.getElementById("mteLightboxImg").src=src;
  document.getElementById("mteLightbox").classList.add("mte-show");
}
function mteCloseImage(){
  document.getElementById("mteLightbox").classList.remove("mte-show");
}
document.getElementById("mteLightboxClose").onclick=mteCloseImage;
document.getElementById("mteLightbox").addEventListener("click",e=>{
  if(e.target.id==="mteLightbox")mteCloseImage();
});

/* First render */
mteRender();


document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.site-footer a[href="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});

/* =========================================
   FOOTER ICON JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* Footer-এর # লিংক আপাতত একই পেজে jump করবে না */
  const footerLinks = document.querySelectorAll(
    ".footer-icon-section a[href='#']"
  );

  footerLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {
      event.preventDefault();
    });

  });


  /* Social icon hover effect */
  const socialIcons = document.querySelectorAll(
    ".footer-social-icons a"
  );

  socialIcons.forEach(function (icon) {

    icon.addEventListener("mouseenter", function () {
      icon.classList.add("footer-icon-hover");
    });

    icon.addEventListener("mouseleave", function () {
      icon.classList.remove("footer-icon-hover");
    });

  });

});





/* =========================================================
   TAKAM ACADEMY
   PRAYER TIMES — SCRIPT.JS
   COMPLETE UPDATED VERSION
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       ১. WEBSITE CONFIGURATION
       ===================================================== */

    const MTE_PRAYER_CONFIG = {

        city: "Dhaka",

        country: "Bangladesh",

        timezone: "Asia/Dhaka",

        method: 1,

        school: 1,

        api:
            "https://api.aladhan.com/v1/timingsByCity"

    };


    /* =====================================================
       ২. PRAYER INFORMATION
       ===================================================== */

    const MTE_PRAYER_NAMES = {

        Fajr: "ফজর",

        Sunrise: "সূর্যোদয়",

        Dhuhr: "যোহর",

        Asr: "আসর",

        Maghrib: "মাগরিব",

        Isha: "এশা"

    };


    const MTE_PRAYER_ICONS = {

        Fajr: "🌙",

        Sunrise: "🌅",

        Dhuhr: "☀️",

        Asr: "🌤️",

        Maghrib: "🌇",

        Isha: "🌙"

    };


    const MTE_MAIN_PRAYERS = [

        "Fajr",

        "Sunrise",

        "Dhuhr",

        "Asr",

        "Maghrib",

        "Isha"

    ];


    /* =====================================================
       ৩. BANGLA HIJRI MONTH
       ===================================================== */

    const MTE_HIJRI_MONTHS_BY_NUMBER = {

        1: "মহররম",

        2: "সফর",

        3: "রবিউল আউয়াল",

        4: "রবিউস সানি",

        5: "জুমাদিউল আউয়াল",

        6: "জুমাদিউস সানি",

        7: "রজব",

        8: "শাবান",

        9: "রমজান",

        10: "শাওয়াল",

        11: "জিলকদ",

        12: "জিলহজ"

    };


    const MTE_HIJRI_MONTHS_BY_NAME = {

        "Muharram": "মহররম",

        "Safar": "সফর",

        "Rabi' al-Awwal": "রবিউল আউয়াল",

        "Rabi al-Awwal": "রবিউল আউয়াল",

        "Rabi' al-Thani": "রবিউস সানি",

        "Rabi al-Thani": "রবিউস সানি",

        "Rabi' al-Akhir": "রবিউস সানি",

        "Rabi al-Akhir": "রবিউস সানি",

        "Jumada al-Awwal": "জুমাদিউল আউয়াল",

        "Jumada al-Thani": "জুমাদিউস সানি",

        "Rajab": "রজব",

        "Sha'ban": "শাবান",

        "Shaʿban": "শাবান",

        "Ramadan": "রমজান",

        "Shawwal": "শাওয়াল",

        "Dhu al-Qi'dah": "জিলকদ",

        "Dhu al-Qidah": "জিলকদ",

        "Dhu al-Hijjah": "জিলহজ",

        "Dhu al-Hijja": "জিলহজ"

    };


    /* =====================================================
       ৪. BANGLA GREGORIAN MONTH
       ===================================================== */

    const MTE_BANGLA_GREGORIAN_MONTHS = [

        "জানুয়ারি",

        "ফেব্রুয়ারি",

        "মার্চ",

        "এপ্রিল",

        "মে",

        "জুন",

        "জুলাই",

        "আগস্ট",

        "সেপ্টেম্বর",

        "অক্টোবর",

        "নভেম্বর",

        "ডিসেম্বর"

    ];


    /* =====================================================
       ৫. BANGLA WEEK DAYS
       ===================================================== */

    const MTE_BANGLA_WEEK_DAYS = [

        "রবিবার",

        "সোমবার",

        "মঙ্গলবার",

        "বুধবার",

        "বৃহস্পতিবার",

        "শুক্রবার",

        "শনিবার"

    ];


    /* =====================================================
       ৬. BANGLA DIGIT CONVERTER
       ===================================================== */

    function mtePrayerBnNumber(value) {

        const english =
            String(
                value === undefined ||
                value === null
                    ? ""
                    : value
            );


        const banglaDigits = {

            "0": "০",
            "1": "১",
            "2": "২",
            "3": "৩",
            "4": "৪",
            "5": "৫",
            "6": "৬",
            "7": "৭",
            "8": "৮",
            "9": "৯"

        };


        return english.replace(
            /[0-9]/g,
            function (digit) {

                return banglaDigits[digit];

            }
        );

    }


    /* =====================================================
       ৭. ENGLISH DIGIT CONVERTER
       ===================================================== */

    function mtePrayerEnNumber(value) {

        const bangla =
            String(
                value === undefined ||
                value === null
                    ? ""
                    : value
            );


        const banglaDigits = {

            "০": "0",
            "১": "1",
            "২": "2",
            "৩": "3",
            "৪": "4",
            "৫": "5",
            "৬": "6",
            "৭": "7",
            "৮": "8",
            "৯": "9"

        };


        return bangla.replace(
            /[০-৯]/g,
            function (digit) {

                return banglaDigits[digit];

            }
        );

    }


    /* =====================================================
       ৮. BANGLA HIJRI MONTH FUNCTION
       ===================================================== */

    function mtePrayerBanglaHijriMonth(
        monthName,
        monthNumber
    ) {

        const number =
            Number(monthNumber);


        if (
            number >= 1 &&
            number <= 12 &&
            MTE_HIJRI_MONTHS_BY_NUMBER[number]
        ) {

            return MTE_HIJRI_MONTHS_BY_NUMBER[number];

        }


        const original =
            String(
                monthName || ""
            ).trim();


        if (
            MTE_HIJRI_MONTHS_BY_NAME[original]
        ) {

            return MTE_HIJRI_MONTHS_BY_NAME[
                original
            ];

        }


        const normalized =
            original
                .replace(/ʿ/g, "'")
                .replace(/’/g, "'")
                .trim();


        const monthKeys =
            Object.keys(
                MTE_HIJRI_MONTHS_BY_NAME
            );


        for (
            let i = 0;
            i < monthKeys.length;
            i++
        ) {

            const key =
                monthKeys[i]
                    .replace(/ʿ/g, "'")
                    .replace(/’/g, "'")
                    .trim();


            if (
                key.toLowerCase() ===
                normalized.toLowerCase()
            ) {

                return MTE_HIJRI_MONTHS_BY_NAME[
                    monthKeys[i]
                ];

            }

        }


        return original || "—";

    }


    /* =====================================================
       ৯. BANGLA SEASON
       ===================================================== */

    function mtePrayerGetBanglaSeason(
        banglaMonth
    ) {

        const seasonMap = {

            "বৈশাখ": {
                name: "গ্রীষ্ম",
                icon: "🌞"
            },

            "জ্যৈষ্ঠ": {
                name: "গ্রীষ্ম",
                icon: "🌞"
            },

            "আষাঢ়": {
                name: "বর্ষা",
                icon: "🌧️"
            },

            "শ্রাবণ": {
                name: "বর্ষা",
                icon: "🌧️"
            },

            "ভাদ্র": {
                name: "শরৎ",
                icon: "☁️"
            },

            "আশ্বিন": {
                name: "শরৎ",
                icon: "☁️"
            },

            "কার্তিক": {
                name: "হেমন্ত",
                icon: "🍂"
            },

            "অগ্রহায়ণ": {
                name: "হেমন্ত",
                icon: "🍂"
            },

            "পৌষ": {
                name: "শীত",
                icon: "❄️"
            },

            "মাঘ": {
                name: "শীত",
                icon: "❄️"
            },

            "ফাল্গুন": {
                name: "বসন্ত",
                icon: "🌸"
            },

            "চৈত্র": {
                name: "বসন্ত",
                icon: "🌸"
            }

        };


        return (
            seasonMap[banglaMonth] ||
            {
                name: "—",
                icon: ""
            }
        );

    }


    /* =====================================================
       ১০. BANGLA DATE CALCULATION
       ===================================================== */

    function mtePrayerGetBanglaDate(date) {

        const year =
            date.getFullYear();


        const month =
            date.getMonth();


        const day =
            date.getDate();


        const banglaMonths = [

            "বৈশাখ",

            "জ্যৈষ্ঠ",

            "আষাঢ়",

            "শ্রাবণ",

            "ভাদ্র",

            "আশ্বিন",

            "কার্তিক",

            "অগ্রহায়ণ",

            "পৌষ",

            "মাঘ",

            "ফাল্গুন",

            "চৈত্র"

        ];


        let banglaMonthIndex;

        let banglaYear;

        let startDate;


        /*
         * জানুয়ারি ১–১৪
         * পৌষ
         */

        if (
            month === 0 &&
            day <= 14
        ) {

            banglaMonthIndex = 8;

            banglaYear =
                year - 594;

            startDate =
                new Date(
                    year - 1,
                    11,
                    16
                );

        }


        /*
         * জানুয়ারি ১৫ – ফেব্রুয়ারি ১৩
         * মাঘ
         */

        else if (

            (
                month === 0 &&
                day >= 15
            )

            ||

            (
                month === 1 &&
                day <= 13
            )

        ) {

            banglaMonthIndex = 9;

            banglaYear =
                year - 594;

            startDate =
                new Date(
                    year,
                    0,
                    15
                );

        }


        /*
         * ফেব্রুয়ারি ১৪ – মার্চ ১৪
         * ফাল্গুন
         */

        else if (

            (
                month === 1 &&
                day >= 14
            )

            ||

            (
                month === 2 &&
                day <= 14
            )

        ) {

            banglaMonthIndex = 10;

            banglaYear =
                year - 594;

            startDate =
                new Date(
                    year,
                    1,
                    14
                );

        }


        /*
         * মার্চ ১৫ – এপ্রিল ১৩
         * চৈত্র
         */

        else if (

            (
                month === 2 &&
                day >= 15
            )

            ||

            (
                month === 3 &&
                day <= 13
            )

        ) {

            banglaMonthIndex = 11;

            banglaYear =
                year - 594;

            startDate =
                new Date(
                    year,
                    2,
                    15
                );

        }


        /*
         * এপ্রিল ১৪ – মে ১৪
         * বৈশাখ
         */

        else if (

            (
                month === 3 &&
                day >= 14
            )

            ||

            (
                month === 4 &&
                day <= 14
            )

        ) {

            banglaMonthIndex = 0;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    3,
                    14
                );

        }


        /*
         * মে ১৫ – জুন ১৪
         * জ্যৈষ্ঠ
         */

        else if (

            (
                month === 4 &&
                day >= 15
            )

            ||

            (
                month === 5 &&
                day <= 14
            )

        ) {

            banglaMonthIndex = 1;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    4,
                    15
                );

        }


        /*
         * জুন ১৫ – জুলাই ১৫
         * আষাঢ়
         */

        else if (

            (
                month === 5 &&
                day >= 15
            )

            ||

            (
                month === 6 &&
                day <= 15
            )

        ) {

            banglaMonthIndex = 2;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    5,
                    15
                );

        }


        /*
         * জুলাই ১৬ – আগস্ট ১৫
         * শ্রাবণ
         */

        else if (

            (
                month === 6 &&
                day >= 16
            )

            ||

            (
                month === 7 &&
                day <= 15
            )

        ) {

            banglaMonthIndex = 3;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    6,
                    16
                );

        }


        /*
         * আগস্ট ১৬ – সেপ্টেম্বর ১৫
         * ভাদ্র
         */

        else if (

            (
                month === 7 &&
                day >= 16
            )

            ||

            (
                month === 8 &&
                day <= 15
            )

        ) {

            banglaMonthIndex = 4;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    7,
                    16
                );

        }


        /*
         * সেপ্টেম্বর ১৬ – অক্টোবর ১৫
         * আশ্বিন
         */

        else if (

            (
                month === 8 &&
                day >= 16
            )

            ||

            (
                month === 9 &&
                day <= 15
            )

        ) {

            banglaMonthIndex = 5;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    8,
                    16
                );

        }


        /*
         * অক্টোবর ১৬ – নভেম্বর ১৪
         * কার্তিক
         */

        else if (

            (
                month === 9 &&
                day >= 16
            )

            ||

            (
                month === 10 &&
                day <= 14
            )

        ) {

            banglaMonthIndex = 6;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    9,
                    16
                );

        }


        /*
         * নভেম্বর ১৫ – ডিসেম্বর ১৫
         * অগ্রহায়ণ
         */

        else if (

            (
                month === 10 &&
                day >= 15
            )

            ||

            (
                month === 11 &&
                day <= 15
            )

        ) {

            banglaMonthIndex = 7;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    10,
                    15
                );

        }


        /*
         * ডিসেম্বর ১৬ – ডিসেম্বর ৩১
         * পৌষ
         */

        else {

            banglaMonthIndex = 8;

            banglaYear =
                year - 593;

            startDate =
                new Date(
                    year,
                    11,
                    16
                );

        }


        /*
         * বর্তমান তারিখ
         */

        const currentDate =
            new Date(
                year,
                month,
                day
            );


        /*
         * দিনের পার্থক্য
         */

        const difference =
            Math.floor(
                (
                    currentDate -
                    startDate
                ) /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        const banglaDay =
            difference + 1;


        /*
         * ঋতু
         */

        const season =
            mtePrayerGetBanglaSeason(
                banglaMonths[
                    banglaMonthIndex
                ]
            );


        return {

            day:
                banglaDay,

            month:
                banglaMonths[
                    banglaMonthIndex
                ],

            year:
                banglaYear,

            season:
                season.name,

            seasonIcon:
                season.icon

        };

    }


    /* =====================================================
       ১১. BANGLA DATE TEXT
       ===================================================== */

    function mtePrayerFormatBanglaDate(date) {

        const banglaDate =
            mtePrayerGetBanglaDate(
                date
            );


        const weekday =
            MTE_BANGLA_WEEK_DAYS[
                date.getDay()
            ];


        return (

            weekday +

            ", " +

            mtePrayerBnNumber(
                banglaDate.day
            ) +

            " " +

            banglaDate.month +

            " " +

            mtePrayerBnNumber(
                banglaDate.year
            ) +

            " বঙ্গাব্দ"

        );

    }


    /* =====================================================
       ১২. ENGLISH DATE
       ===================================================== */

    function mtePrayerFormatEnglishDate(date) {

        const day =
            date.getDate();


        const month =
            date.toLocaleString(
                "en-US",
                {
                    month: "long"
                }
            );


        const year =
            date.getFullYear();


        return (

            day +

            " " +

            month +

            " " +

            year

        );

    }


    /* =====================================================
       ১৩. CREATE PRAYER SECTION
       ===================================================== */

    function mtePrayerCreateSection() {

        if (
            document.getElementById(
                "mtePrayerSection"
            )
        ) {

            return;

        }


        const main =
            document.getElementById(
                "mteMain"
            );


        if (!main) {

            return;

        }


        const section =
            document.createElement(
                "section"
            );


        section.id =
            "mtePrayerSection";


        section.innerHTML = `

            <div class="mte-prayer-container">

                <div class="mte-prayer-header">

                    <h2 class="mte-prayer-title">
                        🕌 নামাজের সময়সূচি
                    </h2>

                    <p class="mte-prayer-location">
                        ঢাকা, বাংলাদেশ
                    </p>

                </div>


                <div class="mte-prayer-dates">

                    <div class="mte-prayer-date-card">

                        <span class="mte-prayer-date-label">
                            বাংলা তারিখ
                        </span>

                        <span id="mtePrayerBanglaDate">
                            —
                        </span>

                        <span
                            id="mtePrayerBanglaSeason"
                            class="mte-prayer-season"
                        >
                            —
                        </span>

                    </div>


                    <div class="mte-prayer-date-card">

                        <span class="mte-prayer-date-label">
                            ইংরেজি তারিখ
                        </span>

                        <span id="mtePrayerEnglishDate">
                            —
                        </span>

                    </div>


                    <div class="mte-prayer-date-card">

                        <span class="mte-prayer-date-label">
                            হিজরি তারিখ
                        </span>

                        <span id="mtePrayerHijriDate">
                            —
                        </span>

                    </div>

                </div>


                <div
                    id="mtePrayerCards"
                    class="mte-prayer-cards"
                >

                    <div class="mte-prayer-loading">
                        নামাজের সময় লোড হচ্ছে...
                    </div>

                </div>


                <div
                    id="mtePrayerCurrent"
                    class="mte-prayer-countdown"
                >

                    <div class="mte-prayer-countdown-inner">


                        <!-- ১. বর্তমান নামাজ -->

                        <div
                            id="mtePrayerCountdownMessage"
                            class="mte-prayer-count-message"
                        >
                            🕌 বর্তমানে নামাজের ওয়াক্ত চলছে
                        </div>


                        <!-- ২. বর্তমান সময় -->

                        <div class="mte-prayer-live-time">

                            <div class="mte-prayer-live-time-label">
                                🕐 বর্তমান সময়
                            </div>


                            <div
                                id="mtePrayerWallClock"
                                class="mte-prayer-wall-clock"
                                aria-label="বর্তমান সময়ের দেয়াল ঘড়ি"
                            >

                                <div class="mte-prayer-clock-face">

                                    <div class="mte-prayer-clock-number mte-clock-12">
                                        ১২
                                    </div>

                                    <div class="mte-prayer-clock-number mte-clock-3">
                                        ৩
                                    </div>

                                    <div class="mte-prayer-clock-number mte-clock-6">
                                        ৬
                                    </div>

                                    <div class="mte-prayer-clock-number mte-clock-9">
                                        ৯
                                    </div>


                                    <div
                                        id="mtePrayerClockHour"
                                        class="mte-prayer-clock-hand mte-prayer-clock-hour"
                                    ></div>


                                    <div
                                        id="mtePrayerClockMinute"
                                        class="mte-prayer-clock-hand mte-prayer-clock-minute"
                                    ></div>


                                    <div
                                        id="mtePrayerClockSecond"
                                        class="mte-prayer-clock-hand mte-prayer-clock-second"
                                    ></div>


                                    <div class="mte-prayer-clock-center"></div>

                                </div>

                            </div>


                            <div
                                id="mtePrayerLiveTime"
                                class="mte-prayer-live-time-value"
                            >
                                —
                            </div>

                        </div>


                        <!-- ৩. পরবর্তী নামাজ -->

                        <div class="mte-prayer-next-label">
                            পরবর্তী নামাজ
                        </div>


                        <!-- ৪. নামাজের নাম -->

                        <div
                            id="mtePrayerNextName"
                            class="mte-prayer-next-name"
                        >
                            —
                        </div>


                        <!-- ৫. কতক্ষণ বাকি -->

                        <div
                            id="mtePrayerCountdownText"
                            class="mte-prayer-countdown-text"
                        >
                            ওয়াক্ত শুরু হতে বাকি
                        </div>


                        <!-- ৬. COUNTDOWN -->

                        <div class="mte-prayer-count-box">

                            <div class="mte-prayer-count-number">

                                <span id="mtePrayerHours">
                                    ০০
                                </span>

                                <span class="mte-prayer-count-unit">
                                    ঘণ্টা
                                </span>

                            </div>


                            <div class="mte-prayer-count-colon">
                                :
                            </div>


                            <div class="mte-prayer-count-number">

                                <span id="mtePrayerMinutes">
                                    ০০
                                </span>

                                <span class="mte-prayer-count-unit">
                                    মিনিট
                                </span>

                            </div>


                            <div class="mte-prayer-count-colon">
                                :
                            </div>


                            <div class="mte-prayer-count-number">

                                <span id="mtePrayerSeconds">
                                    ০০
                                </span>

                                <span class="mte-prayer-count-unit">
                                    সেকেন্ড
                                </span>

                            </div>

                        </div>


                        <!-- ৭. পরবর্তী ওয়াক্ত শুরু -->

                        <div
                            id="mtePrayerNextStartTime"
                            class="mte-prayer-next-start-time"
                        >
                            —
                        </div>

                    </div>

                </div>

            </div>

        `;


        main.appendChild(
            section
        );

    }


    /* =====================================================
       ১৪. TIME CONVERSION
       ===================================================== */

    function mtePrayerTimeToMinutes(time) {

        if (!time) {

            return null;

        }


        const clean =
            String(time)
                .split(" ")[0];


        const parts =
            clean.split(":");


        if (
            parts.length < 2
        ) {

            return null;

        }


        const hours =
            Number(parts[0]);


        const minutes =
            Number(parts[1]);


        if (
            Number.isNaN(hours) ||
            Number.isNaN(minutes)
        ) {

            return null;

        }


        return (
            hours * 60 +
            minutes
        );

    }


    /* =====================================================
       ১৫. CURRENT MINUTES
       ===================================================== */

    function mtePrayerGetCurrentMinutes() {

        const now =
            new Date();


        return (
            now.getHours() * 60 +
            now.getMinutes() +
            (
                now.getSeconds() /
                60
            )
        );

    }


    /* =====================================================
       ১৬. TIME TO DATE
       ===================================================== */

    function mtePrayerTimeToDate(
        date,
        time
    ) {

        const minutes =
            mtePrayerTimeToMinutes(
                time
            );


        if (
            minutes === null
        ) {

            return null;

        }


        const result =
            new Date(date);


        result.setHours(
            Math.floor(
                minutes / 60
            ),
            minutes % 60,
            0,
            0
        );


        return result;

    }


    /* =====================================================
       ১৭. FORMAT TIME
       ===================================================== */

    function mtePrayerFormatTime(time) {

        if (!time) {

            return "—";

        }


        const parts =
            String(time)
                .split(":");


        if (
            parts.length < 2
        ) {

            return time;

        }


        let hour =
            Number(parts[0]);


        const minute =
            Number(parts[1]);


        if (
            Number.isNaN(hour) ||
            Number.isNaN(minute)
        ) {

            return time;

        }


        const suffix =
            hour >= 12
                ? "PM"
                : "AM";


        hour =
            hour % 12;


        if (
            hour === 0
        ) {

            hour = 12;

        }


        return (

            mtePrayerBnNumber(
                String(hour)
                    .padStart(2, "0")
            ) +

            ":" +

            mtePrayerBnNumber(
                String(minute)
                    .padStart(2, "0")
            ) +

            " " +

            suffix

        );

    }


    /* =====================================================
       ১৮. LIVE TIME + ANALOG WALL CLOCK
       ===================================================== */

    function mtePrayerUpdateLiveTime() {

        const digitalElement =
            document.getElementById(
                "mtePrayerLiveTime"
            );


        const hourHand =
            document.getElementById(
                "mtePrayerClockHour"
            );


        const minuteHand =
            document.getElementById(
                "mtePrayerClockMinute"
            );


        const secondHand =
            document.getElementById(
                "mtePrayerClockSecond"
            );


        const now =
            new Date();


        let hours =
            now.getHours();


        const minutes =
            now.getMinutes();


        const seconds =
            now.getSeconds();


        const suffix =
            hours >= 12
                ? "PM"
                : "AM";


        let displayHour =
            hours % 12;


        if (
            displayHour === 0
        ) {

            displayHour = 12;

        }


        /*
         * ডিজিটাল সময়
         */

        if (digitalElement) {

            digitalElement.textContent =

                mtePrayerBnNumber(
                    String(displayHour)
                        .padStart(2, "0")
                ) +

                ":" +

                mtePrayerBnNumber(
                    String(minutes)
                        .padStart(2, "0")
                ) +

                ":" +

                mtePrayerBnNumber(
                    String(seconds)
                        .padStart(2, "0")
                ) +

                " " +

                suffix;

        }


        /*
         * Analog hour hand
         */

        const hourDegree =
            (
                (displayHour % 12) * 30
            ) +
            (
                minutes * 0.5
            );


        /*
         * Analog minute hand
         */

        const minuteDegree =
            (
                minutes * 6
            ) +
            (
                seconds * 0.1
            );


        /*
         * Analog second hand
         */

        const secondDegree =
            seconds * 6;


        if (hourHand) {

            hourHand.style.transform =

                "translateX(-50%) rotate(" +
                hourDegree +
                "deg)";

        }


        if (minuteHand) {

            minuteHand.style.transform =

                "translateX(-50%) rotate(" +
                minuteDegree +
                "deg)";

        }


        if (secondHand) {

            secondHand.style.transform =

                "translateX(-50%) rotate(" +
                secondDegree +
                "deg)";

        }

    }


    /* =====================================================
       ১৯. API DATA
       ===================================================== */

    let MTE_PRAYER_DATA = null;

    let MTE_PRAYER_TOMORROW_DATA = null;


    /* =====================================================
       ২০. FETCH PRAYER TIMES
       ===================================================== */

    async function mtePrayerFetchData(
        date
    ) {

        const day =
            String(
                date.getDate()
            ).padStart(2, "0");


        const month =
            String(
                date.getMonth() + 1
            ).padStart(2, "0");


        const year =
            date.getFullYear();


        const url =

            MTE_PRAYER_CONFIG.api +

            "?city=" +
            encodeURIComponent(
                MTE_PRAYER_CONFIG.city
            ) +

            "&country=" +
            encodeURIComponent(
                MTE_PRAYER_CONFIG.country
            ) +

            "&method=" +
            MTE_PRAYER_CONFIG.method +

            "&school=" +
            MTE_PRAYER_CONFIG.school +

            "&date=" +
            day +
            "-" +
            month +
            "-" +
            year;


        const response =
            await fetch(url);


        if (
            !response.ok
        ) {

            throw new Error(
                "Prayer API request failed"
            );

        }


        const json =
            await response.json();


        if (
            !json.data
        ) {

            throw new Error(
                "Prayer data unavailable"
            );

        }


        return json.data;

    }


    /* =====================================================
       ২১. RENDER DATES
       ===================================================== */

    function mtePrayerRenderDates(data) {

        const now =
            new Date();


        const banglaDate =
            document.getElementById(
                "mtePrayerBanglaDate"
            );


        const banglaSeason =
            document.getElementById(
                "mtePrayerBanglaSeason"
            );


        const englishDate =
            document.getElementById(
                "mtePrayerEnglishDate"
            );


        const hijriDate =
            document.getElementById(
                "mtePrayerHijriDate"
            );


        const banglaDateData =
            mtePrayerGetBanglaDate(
                now
            );


        /*
         * বাংলা তারিখ
         */

        if (banglaDate) {

            banglaDate.textContent =
                mtePrayerFormatBanglaDate(
                    now
                );

        }


        /*
         * ঋতু
         */

        if (banglaSeason) {

            banglaSeason.textContent =

                "ঋতু: " +

                banglaDateData.season +

                " " +

                banglaDateData.seasonIcon;

        }


        /*
         * ইংরেজি তারিখ
         */

        if (englishDate) {

            englishDate.textContent =
                mtePrayerFormatEnglishDate(
                    now
                );

        }


        /*
         * হিজরি তারিখ
         */

        if (
            hijriDate &&
            data &&
            data.date &&
            data.date.hijri
        ) {

            const hijri =
                data.date.hijri;


            const monthName =
                hijri.month
                    ? (
                        hijri.month.en ||
                        hijri.month.ar ||
                        hijri.month.number
                    )
                    : "";


            const monthNumber =
                hijri.month
                    ? hijri.month.number
                    : "";


            const banglaMonth =
                mtePrayerBanglaHijriMonth(
                    monthName,
                    monthNumber
                );


            hijriDate.textContent =

                mtePrayerBnNumber(
                    hijri.day
                ) +

                " " +

                banglaMonth +

                " " +

                mtePrayerBnNumber(
                    hijri.year
                ) +

                " হিজরি";

        }

    }


    /* =====================================================
       ২২. RENDER PRAYER CARDS
       ===================================================== */

    function mtePrayerRenderCards(data) {

        const cards =
            document.getElementById(
                "mtePrayerCards"
            );


        if (!cards) {

            return;

        }


        const timings =
            data.timings;


        let html = "";


        MTE_MAIN_PRAYERS.forEach(
            function (prayer) {

                const time =
                    timings[prayer];


                html += `

                    <div
                        class="mte-prayer-card"
                        data-prayer="${prayer}"
                    >

                        <span class="mte-prayer-card-icon">
                            ${MTE_PRAYER_ICONS[prayer]}
                        </span>

                        <span class="mte-prayer-card-name">
                            ${MTE_PRAYER_NAMES[prayer]}
                        </span>

                        <span class="mte-prayer-card-time">
                            ${mtePrayerFormatTime(time)}
                        </span>

                    </div>

                `;

            }
        );


        cards.innerHTML =
            html;

    }


    /* =====================================================
       ২৩. GET PRAYER STATE
       ===================================================== */

    function mtePrayerGetState() {

        if (
            !MTE_PRAYER_DATA
        ) {

            return null;

        }


        const now =
            new Date();


        const today =
            new Date(now);


        const timings =
            MTE_PRAYER_DATA.timings;


        const fajr =
            mtePrayerTimeToDate(
                today,
                timings.Fajr
            );


        const sunrise =
            mtePrayerTimeToDate(
                today,
                timings.Sunrise
            );


        const dhuhr =
            mtePrayerTimeToDate(
                today,
                timings.Dhuhr
            );


        const asr =
            mtePrayerTimeToDate(
                today,
                timings.Asr
            );


        const maghrib =
            mtePrayerTimeToDate(
                today,
                timings.Maghrib
            );


        const isha =
            mtePrayerTimeToDate(
                today,
                timings.Isha
            );


        const prayerTimes = {

            Fajr: fajr,

            Dhuhr: dhuhr,

            Asr: asr,

            Maghrib: maghrib,

            Isha: isha

        };


        let current =
            null;


        if (
            fajr &&
            sunrise &&
            now >= fajr &&
            now < sunrise
        ) {

            current = "Fajr";

        }


        else if (
            dhuhr &&
            asr &&
            now >= dhuhr &&
            now < asr
        ) {

            current = "Dhuhr";

        }


        else if (
            asr &&
            maghrib &&
            now >= asr &&
            now < maghrib
        ) {

            current = "Asr";

        }


        else if (
            maghrib &&
            isha &&
            now >= maghrib &&
            now < isha
        ) {

            current = "Maghrib";

        }


        else if (
            isha &&
            now >= isha
        ) {

            current = "Isha";

        }


        else if (
            sunrise &&
            dhuhr &&
            now >= sunrise &&
            now < dhuhr
        ) {

            current = null;

        }


        else {

            current = null;

        }


        /*
         * পরবর্তী নামাজ
         */

        let next =
            null;


        for (
            let i = 0;
            i < MTE_MAIN_PRAYERS.length;
            i++
        ) {

            const prayer =
                MTE_MAIN_PRAYERS[i];


            if (
                prayer === "Sunrise"
            ) {

                continue;

            }


            const prayerDate =
                prayerTimes[prayer];


            if (
                prayerDate &&
                prayerDate > now
            ) {

                next = {

                    key:
                        prayer,

                    name:
                        MTE_PRAYER_NAMES[
                            prayer
                        ],

                    date:
                        prayerDate

                };

                break;

            }

        }


        /*
         * Isha পার হলে আগামীকালের Fajr
         */

        if (
            !next &&
            MTE_PRAYER_TOMORROW_DATA
        ) {

            const tomorrow =
                new Date(now);


            tomorrow.setDate(
                tomorrow.getDate() + 1
            );


            const tomorrowFajr =
                mtePrayerTimeToDate(
                    tomorrow,
                    MTE_PRAYER_TOMORROW_DATA
                        .timings
                        .Fajr
                );


            if (
                tomorrowFajr
            ) {

                next = {

                    key:
                        "Fajr",

                    name:
                        "ফজর",

                    date:
                        tomorrowFajr

                };

            }

        }


        return {

            current:
                current,

            next:
                next

        };

    }


    /* =====================================================
       ২৪. UPDATE ACTIVE PRAYER
       ===================================================== */

    function mtePrayerUpdateActivePrayer(
        current
    ) {

        const cards =
            document.querySelectorAll(
                "#mtePrayerSection .mte-prayer-card"
            );


        cards.forEach(
            function (card) {

                card.classList.remove(
                    "mte-prayer-active"
                );


                if (
                    current &&
                    card.dataset.prayer ===
                    current
                ) {

                    card.classList.add(
                        "mte-prayer-active"
                    );

                }

            }
        );

    }


    /* =====================================================
       ২৫. UPDATE COUNTDOWN
       ===================================================== */

    function mtePrayerUpdateCountdown() {

        const state =
            mtePrayerGetState();


        if (!state) {

            return;

        }


        const currentMessage =
            document.getElementById(
                "mtePrayerCountdownMessage"
            );


        const nextName =
            document.getElementById(
                "mtePrayerNextName"
            );


        const countdownText =
            document.getElementById(
                "mtePrayerCountdownText"
            );


        const hours =
            document.getElementById(
                "mtePrayerHours"
            );


        const minutes =
            document.getElementById(
                "mtePrayerMinutes"
            );


        const seconds =
            document.getElementById(
                "mtePrayerSeconds"
            );


        const nextStartTime =
            document.getElementById(
                "mtePrayerNextStartTime"
            );


        /*
         * বর্তমান নামাজ
         */

        if (
            currentMessage
        ) {

            if (
                state.current
            ) {

                currentMessage.textContent =

                    "🕌 বর্তমানে " +

                    MTE_PRAYER_NAMES[
                        state.current
                    ] +

                    " নামাজের ওয়াক্ত চলছে";

            } else {

                currentMessage.textContent =
                    "🕌 বর্তমানে কোনো নামাজের ওয়াক্ত চলছে না";

            }

        }


        /*
         * পরবর্তী নামাজ
         */

        if (
            state.next
        ) {

            if (
                nextName
            ) {

                nextName.textContent =
                    state.next.name;

            }


            if (
                countdownText
            ) {

                countdownText.textContent =

                    state.next.name +

                    " নামাজের ওয়াক্ত শুরু হতে বাকি";

            }


            if (
                nextStartTime
            ) {

                const time =
                    state.next.date;


                let hour =
                    time.getHours();


                const minute =
                    time.getMinutes();


                const suffix =
                    hour >= 12
                        ? "PM"
                        : "AM";


                hour =
                    hour % 12;


                if (
                    hour === 0
                ) {

                    hour = 12;

                }


                nextStartTime.textContent =

                    state.next.name +

                    " ওয়াক্ত শুরু হবে: " +

                    mtePrayerBnNumber(
                        String(hour)
                            .padStart(2, "0")
                    ) +

                    ":" +

                    mtePrayerBnNumber(
                        String(minute)
                            .padStart(2, "0")
                    ) +

                    " " +

                    suffix;

            }


            /*
             * COUNTDOWN
             */

            const now =
                new Date();


            let difference =
                state.next.date -
                now;


            if (
                difference < 0
            ) {

                difference = 0;

            }


            const totalSeconds =
                Math.floor(
                    difference / 1000
                );


            const h =
                Math.floor(
                    totalSeconds / 3600
                );


            const m =
                Math.floor(
                    (
                        totalSeconds % 3600
                    ) / 60
                );


            const s =
                totalSeconds % 60;


            if (hours) {

                hours.textContent =
                    mtePrayerBnNumber(
                        String(h)
                            .padStart(2, "0")
                    );

            }


            if (minutes) {

                minutes.textContent =
                    mtePrayerBnNumber(
                        String(m)
                            .padStart(2, "0")
                    );

            }


            if (seconds) {

                seconds.textContent =
                    mtePrayerBnNumber(
                        String(s)
                            .padStart(2, "0")
                    );

            }

        }

    }


    /* =====================================================
       ২৬. LOAD PRAYER DATA
       ===================================================== */

    async function mtePrayerLoad() {

        try {

            const today =
                new Date();


            const tomorrow =
                new Date(today);


            tomorrow.setDate(
                tomorrow.getDate() + 1
            );


            MTE_PRAYER_DATA =
                await mtePrayerFetchData(
                    today
                );


            MTE_PRAYER_TOMORROW_DATA =
                await mtePrayerFetchData(
                    tomorrow
                );


            mtePrayerRenderDates(
                MTE_PRAYER_DATA
            );


            mtePrayerRenderCards(
                MTE_PRAYER_DATA
            );


            mtePrayerUpdateLiveTime();


            mtePrayerUpdateCountdown();


            const state =
                mtePrayerGetState();


            if (state) {

                mtePrayerUpdateActivePrayer(
                    state.current
                );

            }

        } catch (error) {

            console.error(
                "Prayer Times Error:",
                error
            );


            const cards =
                document.getElementById(
                    "mtePrayerCards"
                );


            if (cards) {

                cards.innerHTML = `

                    <div class="mte-prayer-error">

                        নামাজের সময়সূচি লোড করা যাচ্ছে না।
                        অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।

                    </div>

                `;

            }

        }

    }


    /* =====================================================
       ২৭. MIDNIGHT REFRESH
       ===================================================== */

    function mtePrayerCheckDateChange() {

        const currentDate =
            new Date()
                .toDateString();


        if (
            window.mtePrayerLastDate !==
            currentDate
        ) {

            window.mtePrayerLastDate =
                currentDate;


            mtePrayerLoad();

        }

    }


    /* =====================================================
       ২৮. INITIALIZE
       ===================================================== */

    function mtePrayerInit() {

        mtePrayerCreateSection();


        window.mtePrayerLastDate =
            new Date()
                .toDateString();


        mtePrayerLoad();


        setInterval(
            function () {

                mtePrayerUpdateLiveTime();

                mtePrayerUpdateCountdown();


                const state =
                    mtePrayerGetState();


                if (state) {

                    mtePrayerUpdateActivePrayer(
                        state.current
                    );

                }


                mtePrayerCheckDateChange();

            },
            1000
        );

    }


    /* =====================================================
       ২৯. MUTATION OBSERVER
       ===================================================== */

    function mtePrayerStartObserver() {

        const main =
            document.getElementById(
                "mteMain"
            );


        if (!main) {

            return;

        }


        const observer =
            new MutationObserver(
                function () {

                    if (
                        !document.getElementById(
                            "mtePrayerSection"
                        )
                    ) {

                        mtePrayerCreateSection();


                        if (
                            MTE_PRAYER_DATA
                        ) {

                            mtePrayerRenderDates(
                                MTE_PRAYER_DATA
                            );


                            mtePrayerRenderCards(
                                MTE_PRAYER_DATA
                            );


                            mtePrayerUpdateLiveTime();

                            mtePrayerUpdateCountdown();


                            const state =
                                mtePrayerGetState();


                            if (state) {

                                mtePrayerUpdateActivePrayer(
                                    state.current
                                );

                            }

                        }

                    }

                }
            );


        observer.observe(
            main,
            {
                childList:true,
                subtree:true
            }
        );

    }


    /* =====================================================
       ৩০. START
       ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                mtePrayerInit();

                mtePrayerStartObserver();

            }
        );

    } else {

        mtePrayerInit();

        mtePrayerStartObserver();

    }


})();