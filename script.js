/* ════════════════════════════════
   DATA
════════════════════════════════ */
const PROPERTIES = [
  {id:1,name:"Prestige Sky Towers",location:"Bandra West, Mumbai",city:"Mumbai",price:4.2,priceLabel:"₹4.2 Cr",bhk:"3 BHK",area:1850,beds:3,baths:3,parking:2,floor:"32nd",status:"Ready to Move",badge:"Featured",image:"images/prop_penthouse_1778875149591.png",desc:"Panoramic sea views from the 32nd floor. Crafted for those who demand nothing but the finest. Floor-to-ceiling glazing, Italian marble flooring, and a private terrace overlooking the Arabian Sea.",amenities:["Infinity Pool","Gym","Concierge","Valet","Spa","Clubhouse","Children's Play","Business Lounge","Jogging Track","24/7 Security"],nearby:["🏫 10 mins to Dhirubhai School","🏥 5 mins to Lilavati Hospital","🛍️ 2 mins to Linking Road","🌿 Bandstand Promenade 3 mins"],rera:"MH/00123/2019",builder:"Prestige Group"},
  {id:2,name:"DLF The Camellias",location:"Golf Course Road, Delhi",city:"Delhi",price:12.5,priceLabel:"₹12.5 Cr",bhk:"4 BHK",area:5500,beds:4,baths:5,parking:3,floor:"18th",status:"Ready to Move",badge:"Premium",image:"images/prop_apt_1778875683621.png",desc:"Ultra-luxury living on Golf Course Road. Private elevator foyer, smart home automation, and world-class concierge services. Set within 17 acres of manicured gardens.",amenities:["Golf Course View","Infinity Pool","Private Gym","Spa","Wine Cellar","Concierge","Valet","Movie Theatre","Smart Home","Helipad"],nearby:["⛳ Adjacent to Golf Course","🏥 Max Hospital 8 mins","✈️ IGI Airport 30 mins","🛍️ DLF Mall 5 mins"],rera:"DL/00456/2020",builder:"DLF Ltd"},
  {id:3,name:"Godrej Emerald",location:"Thane West, Mumbai",city:"Mumbai",price:1.8,priceLabel:"₹1.8 Cr",bhk:"2 BHK",area:950,beds:2,baths:2,parking:1,floor:"12th",status:"New Launch",badge:"New",image:"images/prop_villa_1778875174358.png",desc:"Surrounded by 8 acres of greenery with over 40 premium amenities. Designed for sustainable luxury living. IGBC Pre-certified Green Building.",amenities:["Swimming Pool","Gym","Garden","Jogging Track","Kids Zone","Clubhouse","Yoga Deck","Organic Garden","EV Charging","Solar Power"],nearby:["🏫 Euro Kids 5 mins","🏥 Jupiter Hospital 8 mins","🛒 D-Mart 3 mins","🚉 Thane Station 10 mins"],rera:"MH/00789/2022",builder:"Godrej Properties"},
  {id:4,name:"Brigade Utopia",location:"Whitefield, Bangalore",city:"Bangalore",price:2.4,priceLabel:"₹2.4 Cr",bhk:"3 BHK",area:1600,beds:3,baths:3,parking:2,floor:"9th",status:"Under Construction",badge:"Popular",image:"images/prop_beach_1778875720209.png",desc:"Designed for Bangalore's tech-savvy elite. Co-working spaces within the complex, high-speed fibre connectivity, and EV charging across all podiums. Delivery 2026.",amenities:["Co-working Hub","Infinity Pool","Gym","Amphitheatre","Pet Park","Clubhouse","Cricket Net","Basketball","EV Charging","Smart Locks"],nearby:["💻 EPIP Zone 5 mins","🏥 Manipal Hospital 10 mins","🛍️ Phoenix Marketcity 12 mins","🌿 Butterfly Garden 3 mins"],rera:"KA/00321/2021",builder:"Brigade Group"},
  {id:5,name:"Hiranandani Fortune City",location:"Panvel, Pune",city:"Pune",price:0.85,priceLabel:"₹85 L",bhk:"1 BHK",area:560,beds:1,baths:1,parking:1,floor:"6th",status:"Ready to Move",badge:"Value Pick",image:"images/prop_apt_1778875683621.png",desc:"Smart, compact luxury for the first-time buyer. Part of a massive integrated township with schools, hospitals, malls, and office spaces — a city within a city.",amenities:["Swimming Pool","Gym","Convenience Store","School","Garden","Security","Club House","Jogging Track"],nearby:["🚉 Panvel Station 2 mins","🏥 MGM Hospital 5 mins","🛒 D-Mart 1 min","🌊 Navi Mumbai Waterfront 15 mins"],rera:"MH/01023/2020",builder:"Hiranandani Group"},
  {id:6,name:"Sobha Dream Acres",location:"Panathur, Bangalore",city:"Bangalore",price:1.4,priceLabel:"₹1.4 Cr",bhk:"2 BHK",area:770,beds:2,baths:2,parking:1,floor:"15th",status:"Ready to Move",badge:"Hot",image:"images/prop_villa_1778875174358.png",desc:"Sobha's signature quality with Panathur's IT corridor advantage. German-engineered fixtures, Jaguar fittings, and Sobha's hallmark in-house construction.",amenities:["Pool","Gym","Lawn Tennis","Squash","Cafeteria","Creche","Library","Salon","ATM","Convenience Store"],nearby:["💻 Manyata Tech Park 15 mins","🏥 Sakra World Hospital 8 mins","🛍️ Forum Mall 10 mins","🌿 Cubbon Park 20 mins"],rera:"KA/00567/2020",builder:"Sobha Ltd"},
  {id:7,name:"Lodha Altamount",location:"Altamount Road, Mumbai",city:"Mumbai",price:18.0,priceLabel:"₹18 Cr",bhk:"4+ BHK",area:4200,beds:4,baths:5,parking:4,floor:"38th",status:"Ready to Move",badge:"Ultra Luxury",image:"images/prop_penthouse_1778875149591.png",desc:"The apex of Mumbai luxury. Altamount Road's most prestigious address featuring private pools, butler service, and unobstructed 270° views of the Arabian Sea and city skyline.",amenities:["Private Pool","Butler","Concierge","Valet","Helipad","Wine Cellar","Private Cinema","Smart Home","Gym","Spa","Jacuzzi","Terrace Garden"],nearby:["🏥 Breach Candy Hospital 3 mins","🛍️ Kemps Corner 5 mins","🏖️ Juhu Beach 20 mins","🎭 NCPA 10 mins"],rera:"MH/00999/2018",builder:"Lodha Group"},
  {id:8,name:"Mahindra Windchimes",location:"Kanakapura Road, Bangalore",city:"Bangalore",price:1.95,priceLabel:"₹1.95 Cr",bhk:"3 BHK",area:1400,beds:3,baths:3,parking:2,floor:"7th",status:"Ready to Move",badge:"Green",image:"images/prop_beach_1778875720209.png",desc:"Mahindra's eco-luxury flagship project nestled in 17 acres of lush greenery. LEED Gold certified with 30% lower power consumption and rainwater harvesting.",amenities:["Infinity Pool","Gym","Butterfly Garden","Amphitheatre","Tennis","Badminton","Yoga","Organic Farm","EV Charging","Solar Panels"],nearby:["🌿 Bannerghatta National Park 8 mins","🏥 Apollo Hospital 15 mins","🛒 Reliance Smart 5 mins","🎓 Greenwood School 7 mins"],rera:"KA/00678/2021",builder:"Mahindra Lifespaces"},
  {id:9,name:"Piramal Mahalaxmi",location:"Mahalaxmi, Mumbai",city:"Mumbai",price:6.8,priceLabel:"₹6.8 Cr",bhk:"3 BHK",area:2100,beds:3,baths:4,parking:2,floor:"24th",status:"Under Construction",badge:"Pre-launch",image:"images/prop_apt_1778875683621.png",desc:"Iconic skyscraper overlooking Mahalaxmi Racecourse. Piramal's signature craftsmanship meets a prime central Mumbai address with direct racecourse views.",amenities:["Infinity Pool","Sky Lounge","Gym","Spa","Concierge","Valet","Smart Home","Wine Lounge","Business Centre","Roof Garden"],nearby:["🏇 Mahalaxmi Racecourse adjacent","🏥 Breach Candy 5 mins","🚉 Mahalaxmi Station 3 mins","🛍️ Palladium Mall 10 mins"],rera:"MH/01234/2022",builder:"Piramal Realty"},
  {id:10,name:"Tata Housing Primanti",location:"Gurgaon, Delhi",city:"Delhi",price:3.2,priceLabel:"₹3.2 Cr",bhk:"4 BHK",area:2800,beds:4,baths:4,parking:2,floor:"10th",status:"Ready to Move",badge:"Tata",image:"images/prop_villa_1778875174358.png",desc:"The Tata brand promise in Sector 72, Gurgaon. Premium row villas and penthouses within a gated township with world-class amenities and RERA compliant delivery.",amenities:["Clubhouse","Pool","Gym","Badminton","Cricket","Party Lawn","Creche","Library","ATM","Garden"],nearby:["💻 Cyber Hub 15 mins","🏥 Medanta Hospital 10 mins","🛍️ Ambience Mall 12 mins","✈️ IGI Airport 25 mins"],rera:"DL/00789/2020",builder:"Tata Housing"},
  {id:11,name:"Kolte Patil 24K Sereno",location:"Wakad, Pune",city:"Pune",price:1.65,priceLabel:"₹1.65 Cr",bhk:"2 BHK",area:1020,beds:2,baths:2,parking:1,floor:"11th",status:"New Launch",badge:"New",image:"images/prop_penthouse_1778875149591.png",desc:"Pune's newest micro-luxury address at Wakad. 24K finish quality with gold-accented interiors, Italian marble, and a dedicated concierge app for residents.",amenities:["Pool","Gym","Concierge App","Smart Home","Garden","Jogging Track","Kids Zone","Club House","Co-working","Organic Cafe"],nearby:["💻 Hinjewadi IT Park 5 mins","🏥 Medipoint Hospital 8 mins","🛍️ WestEnd Mall 10 mins","🌿 Pawna Lake 30 mins"],rera:"MH/01456/2023",builder:"Kolte-Patil"},
  {id:12,name:"Hyderabad Prestige Golfshire",location:"Kokapet, Hyderabad",city:"Hyderabad",price:7.5,priceLabel:"₹7.5 Cr",bhk:"Villa",area:5200,beds:5,baths:6,parking:4,floor:"Ground",status:"Ready to Move",badge:"Villa",image:"images/prop_beach_1778875720209.png",desc:"A 5,200 sq ft standalone luxury villa overlooking the golf course in Kokapet. Private pool, home automation, and direct access to Golfshire's championship golf course.",amenities:["Private Pool","Golf Access","Home Automation","BBQ Deck","Garden","Security","Concierge","Tennis","Spa","Home Theatre"],nearby:["⛳ Hyderabad Golf Club adjacent","🏥 AIG Hospital 12 mins","✈️ Rajiv Gandhi Airport 15 mins","🛍️ Inorbit Mall 8 mins"],rera:"TS/00234/2020",builder:"Prestige Group"},
];

const BUILDERS = [
  {logo:"P",name:"Prestige Group",since:"Est. 1986",projects:65,delivered:12500,awards:"FIABCI Award 2023"},
  {logo:"DLF",name:"DLF Ltd",since:"Est. 1946",projects:42,delivered:28000,awards:"India's #1 Builder"},
  {logo:"G",name:"Godrej Properties",since:"Est. 1990",projects:38,delivered:9800,awards:"CNBC-TV18 Award"},
  {logo:"L",name:"Lodha Group",since:"Est. 1980",projects:58,delivered:31000,awards:"CREDAI Award 2023"},
];

/* ════════════════════════════════
   STATE
════════════════════════════════ */
let compareList = [];
let wishlist = [];
let matchPrefs = {};
let currentView = 'grid';
let filteredProps = [...PROPERTIES];

/* ════════════════════════════════
   LOADER
════════════════════════════════ */
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('pageLoader').classList.add('hidden');
    animateCounters();
  },2200);
});

/* ════════════════════════════════
   CURSOR
════════════════════════════════ */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mouseX=0,mouseY=0,ringX=0,ringY=0;
document.addEventListener('mousemove',e=>{
  mouseX=e.clientX;mouseY=e.clientY;
  cursor.style.transform=`translate(${mouseX-5}px,${mouseY-5}px)`;
});
(function animRing(){
  ringX+=(mouseX-ringX-18)*0.12;
  ringY+=(mouseY-ringY-18)*0.12;
  ring.style.transform=`translate(${ringX}px,${ringY}px)`;
  requestAnimationFrame(animRing);
})();

/* ════════════════════════════════
   NAV SCROLL
════════════════════════════════ */
window.addEventListener('scroll',()=>{
  const nb=document.getElementById('navbar');
  nb.classList.toggle('scrolled',window.scrollY>60);
});

/* ════════════════════════════════
   THEME TOGGLE
════════════════════════════════ */
document.getElementById('themeToggle').addEventListener('click',()=>{
  const html=document.documentElement;
  html.dataset.theme=html.dataset.theme==='dark'?'light':'dark';
});

/* ════════════════════════════════
   COUNTER ANIMATION
════════════════════════════════ */
function animateCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=+el.dataset.count;
    let cur=0;const step=target/60;
    const t=setInterval(()=>{
      cur=Math.min(cur+step,target);
      el.textContent=Math.round(cur).toLocaleString();
      if(cur>=target)clearInterval(t);
    },25);
  });
}

/* ════════════════════════════════
   RENDER PROPERTY CARD
════════════════════════════════ */
function renderCard(p){
  const badgeClass = p.badge==='New'?'new':p.badge==='Hot'?'hot':'';
  const inWish = wishlist.includes(p.id);
  const inComp = compareList.find(c=>c.id===p.id);
  return `
  <div class="property-card" id="card-${p.id}">
    <div class="card-image-wrap">
      <img src="${p.image}" class="card-img-tag" alt="${p.name}">
      <div class="card-badge ${badgeClass}">${p.badge}</div>
      <button class="card-compare ${inComp?'active':''}" onclick="toggleCompare(${p.id},event)" title="Compare">⇄</button>
      <button class="card-wishlist ${inWish?'active':''}" id="wish-${p.id}" onclick="toggleWishlist(${p.id},event)" title="Wishlist">♥</button>
    </div>
    <div class="card-body">
      <div class="card-location">📍 ${p.location}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-price">${p.priceLabel}</div>
      <div class="card-specs">
        <div class="spec"><div class="spec-val">${p.beds}</div><div class="spec-label">Beds</div></div>
        <div class="spec"><div class="spec-val">${p.baths}</div><div class="spec-label">Baths</div></div>
        <div class="spec"><div class="spec-val">${p.area}</div><div class="spec-label">Sq.ft</div></div>
        <div class="spec"><div class="spec-val">${p.parking}</div><div class="spec-label">Parking</div></div>
      </div>
      <div class="card-footer">
        <button class="card-btn" onclick="openModal(${p.id})">View Details</button>
        <span class="card-rera">RERA: ${p.rera}</span>
      </div>
    </div>
  </div>`;
}

function renderGrid(props){
  const grid=document.getElementById('propertyGrid');
  if(!props.length){
    grid.innerHTML=`<div class="no-results"><div class="no-results-icon">🔍</div><div class="no-results-text">No properties found</div><div style="color:var(--muted);font-size:13px">Try adjusting your filters</div></div>`;
  } else {
    grid.innerHTML=props.map(renderCard).join('');
  }
  document.getElementById('listingsCount').textContent=`Showing ${props.length} ${props.length===1?'property':'properties'}`;
}

/* ════════════════════════════════
   FILTERS
════════════════════════════════ */
function applyFilters(){
  const loc=document.getElementById('fLocation').value;
  const bhk=document.getElementById('fBhk').value;
  const minP=parseFloat(document.getElementById('fMinPrice').value)||0;
  const maxP=parseFloat(document.getElementById('fMaxPrice').value)||999;
  const am=document.getElementById('fAmenity').value;
  const st=document.getElementById('fStatus').value;
  filteredProps=PROPERTIES.filter(p=>{
    if(loc && !p.city.includes(loc)) return false;
    if(bhk && p.bhk!==bhk) return false;
    if(p.price<minP||p.price>maxP) return false;
    if(am && !p.amenities.some(a=>a.toLowerCase().includes(am.toLowerCase()))) return false;
    if(st && p.status!==st) return false;
    return true;
  });
  renderGrid(filteredProps);
}
function resetFilters(){
  ['fLocation','fBhk','fAmenity','fStatus'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fMinPrice').value='';
  document.getElementById('fMaxPrice').value='';
  filteredProps=[...PROPERTIES];
  renderGrid(filteredProps);
}

/* ════════════════════════════════
   VIEW TOGGLE
════════════════════════════════ */
function setView(v){
  currentView=v;
  const grid=document.getElementById('propertyGrid');
  grid.classList.toggle('list-view',v==='list');
  document.getElementById('vGrid').classList.toggle('active',v==='grid');
  document.getElementById('vList').classList.toggle('active',v==='list');
}

/* ════════════════════════════════
   MODAL
════════════════════════════════ */
function openModal(id){
  const p=PROPERTIES.find(x=>x.id===id);
  if(!p)return;
  const inWish=wishlist.includes(p.id);
  document.getElementById('modalInner').innerHTML=`
    <div class="modal-gallery">
      <div class="gallery-main"><div style="width:100%;height:100%;background:var(--surface2);display:flex;align-items:center;justify-content:center;"><img src="${p.image}" style="width:100%;height:100%;object-fit:cover;"></div></div>
      <div class="gallery-subs">
        <div class="gallery-sub"><div style="width:100%;height:100%;background:var(--surface3);display:flex;align-items:center;justify-content:center;"><img src="${p.image}" style="width:100%;height:100%;object-fit:cover;filter:brightness(0.7)"></div></div>
        <div class="gallery-sub"><div style="width:100%;height:100%;background:var(--surface3);display:flex;align-items:center;justify-content:center;"><img src="${p.image}" style="width:100%;height:100%;object-fit:cover;filter:brightness(0.5)"></div></div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-grid">
        <div class="modal-left">
          <div class="modal-badge-row">
            <span class="m-badge gold">${p.badge}</span>
            <span class="m-badge">${p.status}</span>
            <span class="m-badge">${p.bhk}</span>
          </div>
          <h2 class="modal-title">${p.name}</h2>
          <div class="modal-location">📍 ${p.location}</div>
          <div class="modal-price">${p.priceLabel} <small>onwards</small></div>
          <div class="modal-specs">
            <div class="m-spec"><div class="m-spec-icon">🛏</div><div class="m-spec-val">${p.beds}</div><div class="m-spec-label">Bedrooms</div></div>
            <div class="m-spec"><div class="m-spec-icon">🚿</div><div class="m-spec-val">${p.baths}</div><div class="m-spec-label">Bathrooms</div></div>
            <div class="m-spec"><div class="m-spec-icon">📐</div><div class="m-spec-val">${p.area}</div><div class="m-spec-label">Sq. Ft.</div></div>
            <div class="m-spec"><div class="m-spec-icon">🚗</div><div class="m-spec-val">${p.parking}</div><div class="m-spec-label">Parking</div></div>
          </div>
          <p class="modal-desc">${p.desc}</p>
          <div class="amenities-title">Amenities</div>
          <div class="amenities-grid">${p.amenities.map(a=>`<div class="amenity"><span class="amenity-icon">✦</span>${a}</div>`).join('')}</div>
          <div class="nearby-section">
            <div class="amenities-title">Nearby Places</div>
            <div class="nearby-grid">${p.nearby.map(n=>`<div class="nearby-chip">${n}</div>`).join('')}</div>
          </div>
          <div style="margin-top:32px">
            <div class="map-box">
              <div class="map-grid-bg"></div>
              <div class="map-pin">📍</div>
              <div class="map-label">${p.location}</div>
              <button class="map-open-btn" onclick="showToast('Opening Google Maps...')">View on Map</button>
            </div>
          </div>
        </div>
        <div class="modal-right">
          <div class="inquiry-card">
            <div class="inquiry-title">Request a Callback</div>
            <div class="form-field"><label class="form-label">Full Name</label><input class="form-input" placeholder="Your name"></div>
            <div class="form-field"><label class="form-label">Phone</label><input class="form-input" type="tel" placeholder="+91 00000 00000"></div>
            <div class="form-field"><label class="form-label">Email</label><input class="form-input" type="email" placeholder="email@example.com"></div>
            <div class="form-field">
              <label class="form-label">Preferred Time</label>
              <select class="form-select">
                <option>Morning (9am–12pm)</option>
                <option>Afternoon (12pm–4pm)</option>
                <option>Evening (4pm–7pm)</option>
              </select>
            </div>
            <div class="form-field"><label class="form-label">Message</label><textarea class="form-textarea" placeholder="Any specific requirements..."></textarea></div>
            <button class="submit-btn" onclick="showToast('✦ Inquiry sent! Our team will contact you shortly.')">Submit Inquiry</button>
            <div class="inquiry-agent">
              <div class="agent-avatar">👤</div>
              <div><div class="agent-name">Rahul Sharma</div><div class="agent-role">Senior Property Advisor</div></div>
            </div>
          </div>
          <div style="margin-top:16px">
            <button style="width:100%;padding:12px;border:1px solid var(--border);font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${inWish?'var(--red)':'var(--muted)'};margin-bottom:8px;cursor:pointer;transition:all 0.3s;background:transparent" onclick="toggleWishlist(${p.id});this.style.color='var(--red)';this.textContent='♥ Saved to Wishlist'">${inWish?'♥ Saved to Wishlist':'♡ Save to Wishlist'}</button>
            <button style="width:100%;padding:12px;border:1px solid var(--border);font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);cursor:pointer;transition:all 0.3s;background:transparent" onclick="toggleCompare(${p.id});closeModal()">⇄ Add to Compare</button>
          </div>
          <div style="margin-top:20px;padding:16px;background:var(--surface3);font-size:10px;color:var(--muted);letter-spacing:1px;line-height:1.6">
            RERA: <span style="color:var(--gold);font-family:'DM Mono'">${p.rera}</span><br>
            Builder: ${p.builder}<br>
            Floor: ${p.floor}
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('propertyModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('propertyModal').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('propertyModal').addEventListener('click',e=>{
  if(e.target===document.getElementById('propertyModal'))closeModal();
});

/* ════════════════════════════════
   WISHLIST
════════════════════════════════ */
function toggleWishlist(id,e){
  if(e)e.stopPropagation();
  const btn=document.getElementById('wish-'+id);
  if(wishlist.includes(id)){
    wishlist=wishlist.filter(x=>x!==id);
    if(btn)btn.classList.remove('active');
    showToast('♡ Removed from wishlist');
  } else {
    wishlist.push(id);
    if(btn)btn.classList.add('active');
    showToast('♥ Added to wishlist');
  }
}

/* ════════════════════════════════
   COMPARE
════════════════════════════════ */
function toggleCompare(id,e){
  if(e)e.stopPropagation();
  const p=PROPERTIES.find(x=>x.id===id);
  if(!p)return;
  const idx=compareList.findIndex(x=>x.id===id);
  if(idx>-1){
    compareList.splice(idx,1);
    showToast('Removed from compare');
  } else {
    if(compareList.length>=3){showToast('⚠ Max 3 properties to compare');return;}
    compareList.push(p);
    showToast('⇄ Added to compare');
  }
  updateCompareBar();
  renderGrid(filteredProps);
}
function updateCompareBar(){
  const bar=document.getElementById('compare-bar');
  bar.classList.toggle('visible',compareList.length>0);
  const slots=document.getElementById('compareSlots');
  let html='';
  for(let i=0;i<3;i++){
    if(compareList[i]){
      html+=`<div class="compare-slot filled"><span>${compareList[i].name.substring(0,20)}...</span><span class="slot-remove" onclick="toggleCompare(${compareList[i].id})">✕</span></div>`;
    } else {
      html+=`<div class="compare-slot">+ Add property</div>`;
    }
  }
  slots.innerHTML=html;
}
function clearCompare(){compareList=[];updateCompareBar();renderGrid(filteredProps)}
function openCompare(){
  if(compareList.length<2){showToast('⚠ Add at least 2 properties to compare');return;}
  buildCompareTable();
  document.getElementById('compareModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeCompareModal(){
  document.getElementById('compareModal').classList.remove('open');
  document.body.style.overflow='';
}
function buildCompareTable(){
  const fields=[
    {label:'Name',key:'name'},
    {label:'Location',key:'location'},
    {label:'Price',key:'priceLabel'},
    {label:'BHK',key:'bhk'},
    {label:'Area (Sq.ft)',key:'area'},
    {label:'Bedrooms',key:'beds'},
    {label:'Bathrooms',key:'baths'},
    {label:'Parking',key:'parking'},
    {label:'Status',key:'status'},
    {label:'Floor',key:'floor'},
    {label:'RERA',key:'rera'},
    {label:'Builder',key:'builder'},
  ];
  const cols=compareList.length+1;
  const colTmpl=`repeat(${cols},1fr)`;
  let html=`<div class="compare-row header" style="grid-template-columns:${colTmpl}">
    <div class="compare-cell"><strong>Feature</strong></div>
    ${compareList.map(p=>`<div class="compare-cell"><strong style="font-family:'Cormorant Garamond',serif;font-size:18px"><img src="${p.image}" style="width:40px;height:40px;border-radius:4px;object-fit:cover;vertical-align:middle;margin-right:8px;display:inline-block;"> ${p.name}</strong></div>`).join('')}
  </div>`;
  fields.forEach(f=>{
    html+=`<div class="compare-row" style="grid-template-columns:${colTmpl}">
      <div class="compare-cell">${f.label}</div>
      ${compareList.map(p=>`<div class="compare-cell ${f.key==='priceLabel'?'highlight':''}">${p[f.key]}</div>`).join('')}
    </div>`;
  });
  document.getElementById('compareTable').innerHTML=html;
}

/* ════════════════════════════════
   SMART MATCH WIZARD
════════════════════════════════ */
let wizardStep=1;
function wizNext(n){
  document.getElementById('ws'+wizardStep).classList.remove('active');
  document.getElementById('ps'+wizardStep).classList.remove('active');
  wizardStep=n;
  document.getElementById('ws'+n).classList.add('active');
  for(let i=1;i<=n;i++)document.getElementById('ps'+i).classList.add('active');
}
function selectOpt(el,key,val){
  el.closest('.wizard-options').querySelectorAll('.wizard-opt').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
  matchPrefs[key]=val;
}
function runMatch(){
  let results=[...PROPERTIES];
  if(matchPrefs.budget==='under-50') results=results.filter(p=>p.price<0.5);
  else if(matchPrefs.budget==='50-1cr') results=results.filter(p=>p.price>=0.5&&p.price<1);
  else if(matchPrefs.budget==='1-3cr') results=results.filter(p=>p.price>=1&&p.price<3);
  else if(matchPrefs.budget==='above-3cr') results=results.filter(p=>p.price>=3);
  if(matchPrefs.bhk==='1bhk') results=results.filter(p=>p.bhk==='1 BHK');
  else if(matchPrefs.bhk==='2bhk') results=results.filter(p=>p.bhk==='2 BHK');
  else if(matchPrefs.bhk==='3bhk') results=results.filter(p=>p.bhk==='3 BHK');
  else if(matchPrefs.bhk==='4+bhk') results=results.filter(p=>p.bhk==='4 BHK'||p.bhk==='4+ BHK'||p.bhk==='Villa');
  if(matchPrefs.priority==='ready') results=results.filter(p=>p.status==='Ready to Move');
  if(!results.length) results=PROPERTIES.slice(0,3);
  filteredProps=results;
  renderGrid(results);
  showToast(`✦ Found ${results.length} matching propert${results.length===1?'y':'ies'}`);
  document.getElementById('listings').scrollIntoView({behavior:'smooth'});
}

/* ════════════════════════════════
   EMI CALCULATOR
════════════════════════════════ */
function calcEMI(){
  const P=parseFloat(document.getElementById('emiAmount').value)||0;
  const r=parseFloat(document.getElementById('emiRate').value)/12/100||0;
  const n=parseInt(document.getElementById('emiTenure').value)*12||0;
  let emi=0;
  if(r&&n) emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  const total=emi*n;
  const interest=total-P;
  const fmt=v=>v>=10000000?`₹${(v/10000000).toFixed(2)}Cr`:v>=100000?`₹${(v/100000).toFixed(2)}L`:`₹${Math.round(v).toLocaleString()}`;
  document.getElementById('emiMonthly').textContent=fmt(emi);
  document.getElementById('emiPrincipal').textContent=fmt(P);
  document.getElementById('emiInterest').textContent=fmt(interest);
  document.getElementById('emiTotal').textContent=fmt(total);
  document.getElementById('emiTenureDisp').textContent=document.getElementById('emiTenure').value+' Years';
  // Sync sliders
  document.getElementById('emiAmtSlider').value=P;
  document.getElementById('emiRateSlider').value=document.getElementById('emiRate').value;
  document.getElementById('emiTenureSlider').value=document.getElementById('emiTenure').value;
  drawEmiChart(P,interest);
}
function drawEmiChart(principal,interest){
  const canvas=document.getElementById('emiChart');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);
  const total=principal+interest;
  if(!total)return;
  const pAngle=principal/total*Math.PI*2;
  const cx=W/2,cy=H/2,r=Math.min(W,H)/2-20;
  // Principal slice
  ctx.beginPath();ctx.moveTo(cx,cy);
  ctx.arc(cx,cy,r,0,pAngle);ctx.closePath();
  ctx.fillStyle='#C9A84C';ctx.fill();
  // Interest slice
  ctx.beginPath();ctx.moveTo(cx,cy);
  ctx.arc(cx,cy,r,pAngle,Math.PI*2);ctx.closePath();
  ctx.fillStyle='#3a3a3a';ctx.fill();
  // Center hole
  ctx.beginPath();ctx.arc(cx,cy,r*0.55,0,Math.PI*2);
  ctx.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--surface').trim()||'#161616';
  ctx.fill();
  // Labels
  ctx.fillStyle='#C9A84C';ctx.font='bold 13px DM Sans';ctx.textAlign='center';
  ctx.fillText(`${Math.round(principal/total*100)}%`,cx,cy-4);
  ctx.fillStyle='#888';ctx.font='9px DM Sans';
  ctx.fillText('Principal',cx,cy+12);
}
calcEMI();

/* ════════════════════════════════
   CHATBOT
════════════════════════════════ */
const CHAT_RESPONSES = {
  greeting:["Hello! I'm Aria, your personal property assistant. How can I help you today?","Welcome to LuxEstate! Looking for your dream home? I'm here to guide you."],
  properties:["We have 1,200+ premium properties across 48 cities. Would you like me to filter by location or budget?","Our current listings include luxury apartments, villas, and penthouses. Tell me your preferred city!"],
  budget:["Great question! Our properties start from ₹45L for smart 1BHKs to ₹25Cr+ for ultra-luxury penthouses. What's your comfortable range?","We have options across all budgets. The sweet spot for first-time buyers is usually ₹80L–₹1.5Cr."],
  emi:["You can use our EMI calculator below — it gives you real-time breakdowns with interest rate sliders! Want me to estimate for a specific amount?","For a ₹1Cr loan at 8.5% over 20 years, your EMI would be approx ₹86,782/month."],
  location:["We cover Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai, and 42 more cities. Which region interests you?","Prime locations like Bandra, Golf Course Road, and Whitefield have excellent ROI potential right now."],
  rera:["All our listings are RERA-registered. You can see the RERA number on every property card. Full transparency is our promise."],
  default:["That's a great question! Let me connect you with one of our senior consultants for a personalized recommendation.","I'd love to help more! Could you share your preferred location and budget range so I can narrow it down?","Our team of 200+ property experts is ready to assist you. Would you like a callback?"],
};

function getBotReply(msg){
  const m=msg.toLowerCase();
  if(m.includes('hello')||m.includes('hi')||m.includes('hey')) return CHAT_RESPONSES.greeting;
  if(m.includes('propert')||m.includes('listing')||m.includes('flat')||m.includes('apartment')) return CHAT_RESPONSES.properties;
  if(m.includes('budget')||m.includes('price')||m.includes('cost')||m.includes('₹')) return CHAT_RESPONSES.budget;
  if(m.includes('emi')||m.includes('loan')||m.includes('finance')||m.includes('interest')) return CHAT_RESPONSES.emi;
  if(m.includes('location')||m.includes('city')||m.includes('mumbai')||m.includes('delhi')||m.includes('bangalore')) return CHAT_RESPONSES.location;
  if(m.includes('rera')||m.includes('legal')||m.includes('register')) return CHAT_RESPONSES.rera;
  return CHAT_RESPONSES.default;
}
function addMsg(text,isUser){
  const body=document.getElementById('chatBody');
  const d=document.createElement('div');
  d.className=`chat-msg ${isUser?'user':''}`;
  d.innerHTML=`<div class="msg-avatar ${isUser?'user-av':'bot'}">${isUser?'👤':'🏠'}</div><div class="msg-bubble">${text}</div>`;
  body.appendChild(d);
  body.scrollTop=body.scrollHeight;
}
function showQuickReplies(opts){
  const qr=document.getElementById('quickReplies');
  qr.innerHTML=opts.map(o=>`<button class="quick-btn" onclick="sendChatText('${o}')">${o}</button>`).join('');
}
function sendChatText(txt){
  document.getElementById('quickReplies').innerHTML='';
  addMsg(txt,true);
  setTimeout(()=>{
    const replies=getBotReply(txt);
    addMsg(replies[Math.floor(Math.random()*replies.length)],false);
    showQuickReplies(['View Properties','EMI Calculator','Top Locations','Call Me Back']);
  },800);
}
function sendChat(){
  const input=document.getElementById('chatInput');
  const txt=input.value.trim();
  if(!txt)return;
  input.value='';
  sendChatText(txt);
}
function openChat(){
  document.getElementById('chatbot').classList.add('open');
  document.querySelector('#chat-bubble .notif').style.display='none';
  if(!document.getElementById('chatBody').children.length){
    setTimeout(()=>{
      addMsg("Hello! I'm Aria 👋 Your personal property assistant. Ask me anything about properties, EMI, locations or RERA!",false);
      showQuickReplies(['View Properties','Calculate EMI','Top Cities','Budget Range']);
    },300);
  }
}
function closeChat(){document.getElementById('chatbot').classList.remove('open')}

/* ════════════════════════════════
   TOAST
════════════════════════════════ */
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),3000);
}

/* ════════════════════════════════
   BUILDERS
════════════════════════════════ */
function renderBuilders(){
  document.getElementById('buildersGrid').innerHTML=BUILDERS.map(b=>`
    <div class="builder-card">
      <div class="builder-logo">${b.logo}</div>
      <div class="builder-name">${b.name}</div>
      <div class="builder-since">${b.since} · ${b.awards}</div>
      <div class="builder-stats">
        <div><div class="b-stat-num">${b.projects}+</div><div class="b-stat-label">Projects</div></div>
        <div><div class="b-stat-num">${(b.delivered/1000).toFixed(1)}K</div><div class="b-stat-label">Units</div></div>
      </div>
    </div>`).join('');
}

/* ════════════════════════════════
   INIT
════════════════════════════════ */
renderGrid(PROPERTIES);
renderBuilders();

// Intersection Observer for subtle entry animations
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.style.opacity='1';
  });
},{threshold:0.1});
document.querySelectorAll('.property-card,.builder-card').forEach(el=>{
  el.style.opacity='0';el.style.transition='opacity 0.5s ease';obs.observe(el);
});