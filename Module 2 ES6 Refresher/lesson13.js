const square = function (n) {
    const sqr = n * n;
    return sqr;
}

const square1 = (num) => {
    return num * num;
}

const square1 = (num) => num * num;


const jobs = [{
        id: 1,
        isActive: true
    },
    {
        id: 2,
        isActive: false
    },
    {
        id: 3,
        isActive: true
    }
];


const activeJobs = jobs.filter(function () {
    return jobs.isActive = true;
});

const activeJobs2 = jobs.filter(() => jobs.isActive = true);