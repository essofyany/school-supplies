const data = [
    {
        id: 1,
        title: 'How To Start A Daily Journaling Habit',
    },
    {
        id: 2,
        title: 'Struggle With Self-Discipline? Try Forming These Habits',
    },
    {
        id: 3,
        title: '7 Core Ideas Of Personal Growth',
    },
    {
        id: 4,
        title: 'What I Learned From Writing A Book In 22 Days',
    },
    {
        id: 5,
        title: 'How Sunlight, the Immune System, and Covid-19 Interact',
    },
    {
        id: 6,
        title: 'An Addiction Psychiatrist Explains How to Use Brain Science to Break Bad Habits',
    },
    {
        id: 7,
        title: 'A Thorough Introduction to Distributed Systems',
    },
    {
        id: 8,
        title: '5 Exercises A Personal Trainer Wishes You Would Skip',
    },
    {
        id: 9,
        title: 'How Being Single Has Been Rebranded',
    },
    {
        id: 10,
        title: 'I Gave Myself The Big Chop In Lockdown & I Don’t Regret It',

 },
    {
        id: 11,
        title: '4 Things Emotionally Intelligent People Don’t Do',

 },
    {
        id: 12,
        title: '2 Simple Steps to Make Intermittent Fasting an Effortless Part of Your Life',

 }
];
data.sort ( ( ) => Math . random ( ) - 0.5 );


const cardList1 = document.querySelector('.img1');
const cardList2 = document.querySelector('.img2');
const cardList3 = document.querySelector('.img3');
const url = "https://picsum.photos/600";

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight - 5) {
       imageLoaded1(8);
       imageLoaded2(5);
       imageLoaded3(8);
    }
});

function imageLoaded1(range) {
    for(i = 0; i < range; i++) {
        let image = document.createElement("div");
        image.classList.add("card");
        image.classList.add("second");
        image.innerHTML = `
        <div class="card-image">
            <a href="#1">
                <img src="${url}?t=${new Date().getTime() + i}">
                <span class="card-title hidden-title">${data[i].title}</span>
            </a>
        </div>`;
        cardList1.appendChild(image);
        
    }
}
function imageLoaded2(range) {
    for(i = 0; i < range; i++) {
        let image = document.createElement("div");
        image.classList.add("card");
        image.classList.add("second");
        image.innerHTML = `
        <div class="card-image">
            <a href="#1">
                <img src="${url}?t=${new Date().getTime() + i*99}">
                <span class="card-title hidden-title">${data[i].title}</span>
            </a>
        </div>`;
        cardList2.appendChild(image);
    }
}
function imageLoaded3(range) {
    for(i = 0; i < range; i++) {
        let image = document.createElement("div");
        image.classList.add("card");
        image.classList.add("second");
        image.innerHTML = `
        <div class="card-image">
            <a href="#1">
                <img src="${url}?t=${new Date().getTime() + i*9}">
                <span class="card-title hidden-title">${data[i].title}</span>
            </a>
        </div>`;
        cardList3.appendChild(image);
        
    }
}




card.innerHTML = `
            <div class="card sticky-action">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src=${dataProducts[i].img}>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${dataProducts[i].name}</span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${dataProducts[i].name}<i class="material-icons right">close</i></span>
                    <p>${dataProducts[i].discription}</p>
                </div>
                <div class="card-action center">
                  <a href="#!" class="blue-text ">Add To cart</a>
                </div>
            </div>
            `;