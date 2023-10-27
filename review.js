//local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "images/person2.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatum facere aut temporibus unde exercitationem quo esse repellendus nam asperiores.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "images/person3.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatum facere aut temporibus unde exercitationem quo esse repellendus nam asperiores.",
    },
    {
        id: 3,
        name: "the mayor",
        job: "product designer",
        img: "images/person6.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatum facere aut temporibus unde exercitationem quo esse repellendus nam asperiores.",
    },
    {
        id: 4,
        name: "bill cosby",
        job: "the boss",
        img: "images/person7.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatum facere aut temporibus unde exercitationem quo esse repellendus nam asperiores.",
    },
];

//select items
const img = document.getElementById("person");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

//set starting item

let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson();

});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

//show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});