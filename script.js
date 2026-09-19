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
    "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7e8?auto=format&fit=crop&w=1800&q=82"
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
    await page.render({canvasContext:ctx,viewport:viewport}).promise;

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





(function () {

  "use strict";

  var loader = document.getElementById("mtePageLoader");

  if (!loader) return;

  /* Website load হলে দ্রুত hide */
  window.addEventListener("load", function () {

    setTimeout(function () {
      loader.classList.add("mte-loader-hidden");
    }, 200);

  });

  /* সর্বোচ্চ 1.5 সেকেন্ড পর অবশ্যই hide হবে */
  setTimeout(function () {

    loader.classList.add("mte-loader-hidden");

  }, 1500);

})();









/* MTE LOADER - 3 SECOND */

(function () {

  var loader =
    document.getElementById("mtePageLoader");

  if (!loader) return;

  setTimeout(function () {

    loader.classList.add(
      "mte-loader-hidden"
    );

  }, 30000);

})();