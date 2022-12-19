
const reviews = [

    {
        id: 1,
        name: "Sara Jones",
        job: "Student",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
        ,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Adipisci, dolores, totam aspernatur incidunt, vitae voluptates dolore ex soluta enim minus tempore officiis voluptatibus? Repellat alias dolorum accusantium ea, nemo ipsum officiis cumque ipsa aspernatur in, laboriosam vero tempora animi "
    }
    ,
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    }
    ,
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById('info');
const job = document.getElementById('job');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let current = 0;



window.addEventListener("DOMContentLoaded", function () {

    const currentItem = reviews[current];

    img.src = currentItem.img;
    author.textContent = currentItem.name;
    info.textContent = currentItem.text;
    job.textContent = currentItem.job;
});


prevBtn.addEventListener("click", function () {

    if (current >= 1) {

        current -= 1;

    }
    else {

        current = 3;

    }
    showPerson(current);
});
nextBtn.addEventListener("click", function () {

    if (current <= 2) {

        current += 1;

    }
    else {

        current = 0;

    }

    showPerson(current);



}
);

function showPerson(current) {
    const currentItem = reviews[current];
    img.src = currentItem.img;
    author.textContent = currentItem.name;
    info.textContent = currentItem.text;
    job.textContent = currentItem.job;


}

randomBtn.addEventListener("click", function () {
    let rndm = Math.floor(Math.random() * 4);
    current = rndm;
    showPerson(current);

});





