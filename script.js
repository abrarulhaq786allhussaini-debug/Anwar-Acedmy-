/* =====================================================
   ANWAR ONLINE ISLAMIC STUDIES — SCRIPT.JS
   Upgraded Version
   Features:
   - Mobile Navigation
   - Active Menu Highlight
   - 17 Makharij Interactive System
   - Detail Panel
   - Contact Form Logic
   - Error Protection
   ===================================================== */


document.addEventListener("DOMContentLoaded", () => {


/* =====================================================
   1. MAKHARIJ DATA SYSTEM
   ===================================================== */


const makharijData = [

{
number:1,
nameAr:"الجَوْف",
nameEn:"Al-Jawf",
nameUr:"جوف (خلا)",
definition:"The empty space of mouth and throat where Madd letters originate.",
place:"Open cavity extending from chest through throat and mouth.",
letters:"ا و ي",
explanation:"Al-Jawf produces the three Madd letters when they are preceded by their matching vowels.",
tajweed:"These letters are stretched according to Madd rules."
},


{
number:2,
nameAr:"أقصى الحلق",
nameEn:"Aqsa al-Halq",
nameUr:"حلق کا سب سے دور والا حصہ",
definition:"The deepest part of the throat.",
place:"The area nearest to the chest.",
letters:"ء ه",
explanation:"Hamzah and Haa are produced from the deepest throat area.",
tajweed:"Pronounce Hamzah clearly and Haa softly."
},


{
number:3,
nameAr:"وسط الحلق",
nameEn:"Wasat al-Halq",
nameUr:"درمیانی حلق",
definition:"Middle part of the throat.",
place:"Central throat area.",
letters:"ع ح",
explanation:"Ain and Haa originate from the middle throat.",
tajweed:"Avoid changing their correct pronunciation."
},


{
number:4,
nameAr:"أدنى الحلق",
nameEn:"Adna al-Halq",
nameUr:"قریب والا حلق",
definition:"Nearest part of throat to the mouth.",
place:"Upper throat near oral cavity.",
letters:"غ خ",
explanation:"Ghain and Khaa come from this point.",
tajweed:"Maintain their heavy sound."
},


{
number:5,
nameAr:"أقصى اللسان",
nameEn:"Aqsa al-Lisan",
nameUr:"زبان کا پچھلا حصہ",
definition:"Back of tongue touching soft palate.",
place:"Upper rear tongue area.",
letters:"ق",
explanation:"Qaf is produced from the deepest tongue position.",
tajweed:"Qaf remains a heavy letter."
},


{
number:6,
nameAr:"أقصى اللسان",
nameEn:"Aqsa al-Lisan (Kaf)",
nameUr:"قاف سے آگے زبان کا حصہ",
definition:"Back tongue meeting hard palate.",
place:"Slightly forward from Qaf.",
letters:"ك",
explanation:"Kaf is lighter than Qaf.",
tajweed:"Keep Kaf light."
},


{
number:7,
nameAr:"وسط اللسان",
nameEn:"Wasat al-Lisan",
nameUr:"زبان کا درمیانی حصہ",
definition:"Middle of tongue touching palate.",
place:"Center tongue area.",
letters:"ج ش ي",
explanation:"Jeem, Sheen and consonant Yaa originate here.",
tajweed:"Observe their special qualities."
}

];



/* Continue in Part 2 */
/* =====================================================
   CONTINUE MAKHARIJ DATA (8 - 17)
   ===================================================== */


makharijData.push(


{
number:8,
nameAr:"حافة اللسان",
nameEn:"Edge of Tongue",
nameUr:"زبان کا کنارہ",
definition:"Side of the tongue touching upper molars.",
place:"Tongue edge with upper back teeth.",
letters:"ض",
explanation:"Dhad is produced from the side of the tongue.",
tajweed:"Maintain Istitalah and Tafkheem."
},


{
number:9,
nameAr:"حافة اللسان",
nameEn:"Edge of Tongue with Gums",
nameUr:"زبان کا کنارہ مسوڑھوں کے ساتھ",
definition:"Tongue edge moving forward to gums.",
place:"Side tongue touches upper gum area.",
letters:"ل",
explanation:"Laam is produced from tongue edges.",
tajweed:"Heavy only in specific cases of Allah's name."
},


{
number:10,
nameAr:"طرف اللسان",
nameEn:"Tip of Tongue (Noon)",
nameUr:"زبان کا کنارہ نون کے لیے",
definition:"Tip of tongue touching gum ridge.",
place:"Tongue tip with upper gums.",
letters:"ن",
explanation:"Noon is produced with Ghunnah.",
tajweed:"Observe Noon rules of Tajweed."
},


{
number:11,
nameAr:"طرف اللسان",
nameEn:"Tip of Tongue (Raa)",
nameUr:"زبان کا سرا راء کے لیے",
definition:"Tip of tongue with slight vibration.",
place:"Near Noon articulation point.",
letters:"ر",
explanation:"Raa has a special rolling sound.",
tajweed:"Raa can be heavy or light."
},


{
number:12,
nameAr:"طرف اللسان مع أصول الثنايا",
nameEn:"Tip of Tongue with Teeth Roots",
nameUr:"زبان اور دانتوں کی جڑ",
definition:"Tongue tip touching upper teeth roots.",
place:"Inner upper front teeth area.",
letters:"ط د ت",
explanation:"These letters share one articulation point.",
tajweed:"Differentiate heaviness and lightness."
},


{
number:13,
nameAr:"طرف اللسان بين الثنايا",
nameEn:"Tip of Tongue Between Teeth",
nameUr:"دانتوں کے درمیان زبان",
definition:"Tongue near front teeth edges.",
place:"Air passes through narrow opening.",
letters:"ص س ز",
explanation:"These are the Safeer letters.",
tajweed:"Preserve whistle quality."
},


{
number:14,
nameAr:"طرف اللسان مع أطراف الثنايا",
nameEn:"Interdental Letters",
nameUr:"زبان اور دانتوں کے کنارے",
definition:"Tongue touching edges of upper teeth.",
place:"Between tongue tip and teeth.",
letters:"ظ ذ ث",
explanation:"These letters are produced between teeth.",
tajweed:"Keep correct thickness and softness."
},


{
number:15,
nameAr:"باطن الشفة السفلى",
nameEn:"Inner Lower Lip",
nameUr:"نچلا ہونٹ",
definition:"Inner lower lip touching upper teeth.",
place:"Lower lip with upper incisors.",
letters:"ف",
explanation:"Faa comes from this position.",
tajweed:"Keep the sound light."
},


{
number:16,
nameAr:"الشفتان",
nameEn:"Two Lips",
nameUr:"دونوں ہونٹ",
definition:"Both lips meeting or rounding.",
place:"Lip movement area.",
letters:"ب م و",
explanation:"Baa, Meem and Waw come from lips.",
tajweed:"Observe Meem rules."
},


{
number:17,
nameAr:"الخيشوم",
nameEn:"Al-Khaishoom",
nameUr:"ناک کا اندرونی حصہ",
definition:"Nasal passage responsible for Ghunnah.",
place:"Inside nasal cavity.",
letters:"غنة",
explanation:"Not a letter but a sound quality.",
tajweed:"Ghunnah is normally two counts."
}


);



/* =====================================================
   2. ELEMENT REFERENCES
   ===================================================== */


const grid = document.getElementById("makharij-grid");
const panel = document.getElementById("makhraj-panel");
const panelContent = document.getElementById("panel-content");
const panelClose = document.getElementById("panel-close");


let activeCard = null;



/* =====================================================
   3. CREATE MAKHARIJ CARDS
   ===================================================== */


function renderMakharijCards(){


if(!grid) return;


const fragment = document.createDocumentFragment();


makharijData.forEach(item=>{


const card=document.createElement("button");


card.type="button";
card.className="makhraj-card";


card.setAttribute(
"aria-expanded",
"false"
);


card.innerHTML=`

<span class="makhraj-number">
${item.number}
</span>

<div class="makhraj-name-ar">
${item.nameAr}
</div>

<div class="makhraj-name-en">
${item.nameEn}
</div>

<div class="makhraj-letters">
${item.letters}
</div>

`;


card.addEventListener(
"click",
()=>openPanel(item,card)
);


fragment.appendChild(card);


});


grid.appendChild(fragment);


}


renderMakharijCards();



/* Continue in Part 3 */
/* =====================================================
   4. DETAIL PANEL SYSTEM
   ===================================================== */


function openPanel(item, card){


if(!panel || !panelContent) return;



if(activeCard === card){

closePanel();

return;

}



if(activeCard){

activeCard.classList.remove("active");

activeCard.setAttribute(
"aria-expanded",
"false"
);

}



card.classList.add("active");

card.setAttribute(
"aria-expanded",
"true"
);


activeCard = card;



panelContent.innerHTML = `


<div class="panel-header">

<span class="panel-ar">
${item.nameAr}
</span>


<span class="panel-en">
${item.nameEn}
</span>


<span class="panel-ur">
${item.nameUr}
</span>


</div>


<div class="panel-grid">


<div class="panel-block full">

<h4>Definition</h4>

<p>
${item.definition}
</p>

</div>



<div class="panel-block">

<h4>Place</h4>

<p>
${item.place}
</p>

</div>



<div class="panel-block">

<h4>Letters</h4>

<p>
<span class="letters-badge">
${item.letters}
</span>
</p>

</div>



<div class="panel-block full">

<h4>Explanation</h4>

<p>
${item.explanation}
</p>

</div>



<div class="panel-block full">

<h4>Tajweed Notes</h4>

<p>
${item.tajweed}
</p>

</div>



</div>

`;



panel.hidden=false;


requestAnimationFrame(()=>{

panel.classList.add("open");

panel.scrollIntoView({

behavior:"smooth",

block:"nearest"

});


});


}




function closePanel(){


if(!panel) return;


panel.classList.remove("open");



if(activeCard){

activeCard.classList.remove("active");

activeCard.setAttribute(
"aria-expanded",
"false"
);


activeCard=null;

}



setTimeout(()=>{

panel.hidden=true;

},400);


}



if(panelClose){

panelClose.addEventListener(
"click",
closePanel
);

}





/* =====================================================
   5. MOBILE NAVIGATION
   ===================================================== */


const navToggle =
document.getElementById("nav-toggle");


const mainNav =
document.getElementById("main-nav");



if(navToggle && mainNav){


navToggle.addEventListener(
"click",
()=>{


const opened =
mainNav.classList.toggle("open");



navToggle.classList.toggle(
"open",
opened
);



navToggle.setAttribute(
"aria-expanded",
opened
);



});



document.querySelectorAll(".nav-link")
.forEach(link=>{


link.addEventListener(
"click",
()=>{


mainNav.classList.remove("open");


navToggle.classList.remove("open");


navToggle.setAttribute(
"aria-expanded",
"false"
);


});


});


}




/* =====================================================
   6. ACTIVE NAVIGATION ON SCROLL
   ===================================================== */


const sections =
document.querySelectorAll(
"main section[id]"
);


const navLinks =
document.querySelectorAll(
".nav-link"
);



function updateActiveNav(){


let current="home";


const position =
window.scrollY + 150;



sections.forEach(section=>{


if(position >= section.offsetTop){

current = section.id;

}


});



navLinks.forEach(link=>{


link.classList.toggle(

"active",

link.getAttribute("href")
===
`#${current}`

);


});


}



window.addEventListener(
"scroll",
updateActiveNav
);


updateActiveNav();






/* =====================================================
   7. CONTACT FORM
   ===================================================== */


const contactForm =
document.getElementById(
"contact-form"
);



const formNote =
document.getElementById(
"form-note"
);



if(contactForm && formNote){


contactForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



formNote.hidden=false;


contactForm.reset();



setTimeout(()=>{


formNote.hidden=true;


},6000);



});


}






/* =====================================================
   8. FOOTER YEAR
   ===================================================== */


const year =
document.getElementById(
"year"
);



if(year){

year.textContent =
new Date().getFullYear();

}



});
