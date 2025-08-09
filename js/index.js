// Educatio
const allEducation=[
    {
        image: "image/paragon.jpg",
        name: "Pargon International Universsity",
        year: "2023 - Present",
        dicsription: "Bachelor's degree in Computer Science"
    },
    {
        image: "image/rupp.jpg",
        name: "Royal University of Phnom Penh",
        year: "2023 - Present",
        dicsription: "Bachelor's degree in Mathematics, majoring in Statistics"
    },
    {
        image: "image/addbook.jpg",
        name: "Addbook Computer Center",
        year: "2023",
        dicsription: "Cmpleted Miscrosolf office course: Word, Power Point, Excel, and Internet."
    },
    {
        image: "image/baccii.jpg",
        name: "Hun Sen Salakrao High School",
        year: "2019-2022",
        dicsription: "I took the grade 12 National Exit Exam on December 5, 2022. Consequently, I got an A."
    },

];

let education="";

for (let i=0; i< allEducation.length; i++){
    education +=  `<div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card edu-card h-100">
                            <div class="edu-img">
                                <a href="${allEducation[i].image}"><img src="${allEducation[i].image}" class="card-img-top" alt="Paragon"></a>
                            </div>
                            <div class="edu-card-body p-3">
                                <h5>${allEducation[i].name}</h5>
                                <p class="text-muted mb-2">${allEducation[i].year}</p>
                                <p class="mb-0">${allEducation[i].dicsription}</p>
                            </div>
                        </div>
                    </div>`
};

document.getElementById("education").innerHTML = education;

//Project
const allProject = [
    {
        title: "Orange Shop (Fashion Store Website)",
        skill: "HTML, CSS, JS, Framer",
        dicsription: "Frontend design project focused on UI/UX and team collaboration with GitHub.",
        link: "https://butterfly-nv.github.io/orange-shop/"
    },
    {
        title: "Online Resume Builder - Team Project",
        skill: "HTML, CSS, JS, Figma, Larvel, PHP, Java",
        dicsription: "Built and designed a resume creation website with frontend and backend features.",
        link: "https://butterfly-nv.github.io/orange-shop/"
    },
    {
        title: "Language Proficiency Testing Website - Team Project",
        skill: "PHP, HTML, CSS, JS, Bootstrap ",
        dicsription: "Developed the frontend for an online testing and certification platform with a responsive design.",
        link: "https://butterfly-nv.github.io/orange-shop/"
    },
    {
        title: "Customer Churn Analysis - Telco Customer Churn",
        skill: "R & Excel",
        dicsription: "Conducted a data analysis project to identify factors affecting customer churn using hypothesis testing and logistic regression with R and Excel.",
        link: "pdf/bus.pdf"
    },
    {
        title: "Social Media Platform & Online Community Study",
        skill: "R & Excel",
        dicsription: "Used descriptive stats and t-tests to analyze perceived community across social media platforms.",
        link: "pdf/Online Community Analysis.pdf"
    }
    
];

let project ="";
for (let i = 0; i< allProject.length; i++){
    project +=`<div class="col-md-4 col-sm-6">
                <div class="card project-card h-100 d-flex flex-column">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5>${allProject[i].title}</h5>
                        <p class="mb-3">${allProject[i].skill}</p>
                        <p>${allProject[i].dicsription}</p>
                        <div class="mt-auto text-center">
                            <a href="${allProject[i].link}" target="_blank" class="btn btn-outline-primary btn-sm">View</a>
                        </div>
                    </div>
                </div>
            </div>`;   
}

document.getElementById("project").innerHTML = project;

// Activity
const allActivity=[
    {
        image: "image/sisterofcode.jpg",
        name: "Sisters of Code- Website Development & UX/UI Design",
        year: "2025",
        dicsription: "This program focused on front-end web development and user experience/ user interface design."
    },
    {
        image: "image/ace.JPG",
        name: "ACE Graduation(Volunteer)",
        year: "2025",
        dicsription: "Improve teamwork, leadership, and event organizing."
    },
    {
        image: "image/datazoon.jpg",
        name: "MIS Datazone",
        year: "2023",
        dicsription: "Using real data to find problem and solution."
    },
    {
        image: "image/youcancode.jpg",
        name: "You Can Code",
        year: "2023",
        dicsription: "This program give fundermental of programing C++."
    },

];

let activity="";

for (let i=0; i< allActivity.length; i++){
    activity +=  `<div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card edu-card h-100 d-flex flex-column">
                            <div class="edu-img">
                                <a href="${allActivity[i].image}"><img src="${allActivity[i].image}" class="card-img-top" alt="Paragon"></a>
                            </div>
                            <div class="act-card-body p-3">
                                <h5>${allActivity[i].name}</h5>
                                <p class="text-muted mb-2">${allActivity[i].year}</p>
                                <p class="mb-0">${allActivity[i].dicsription}</p>
                            </div>
                        </div>
                    </div>`
};

document.getElementById("activity").innerHTML = activity;

const allSkill = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        rate: "★★★★★"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        rate: "★★★★☆"
    },
    {
        image: "image/js.png",
        rate: "★★★☆☆"
    },
    {
        image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        rate: "★★★☆☆"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        rate: "★★★☆☆"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
        rate: "★★★☆☆"
    },
    {
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        rate: "★★★★☆"
    },
    {
        image: "https://www.svgrepo.com/show/306070/framer.svg",
        rate: "★★★★☆"
    },
    {
        image: "https://w7.pngwing.com/pngs/394/915/png-transparent-excel-hd-logo-thumbnail.png",
        rate: "★★★★☆"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg",
        rate: "★★★☆☆"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        rate: "★★★☆☆"
    },
    {
        image: "image/stata.png",
        rate: "★★☆☆☆"
    }
];

let skill="";

for (let i=0; i< allSkill.length; i++){
    skill +=  `<div class="col-12 col-md-6">
                    <div class="d-flex align-items-center mb-3">
                        <img src="${allSkill[i].image}" class="skill-icon me-2">
                        <span class="stars">${allSkill[i].rate}</span>
                    </div>
                </div>`
};

document.getElementById("skill").innerHTML = skill;

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    alert("Thank you for Contact me! I will reply you soon.");

    this.reset();
});
