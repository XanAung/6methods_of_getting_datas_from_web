
/* (1) Old Method (onredystatechange)>>*/
/* let url = "https://jsonplaceholder.typicode.com/posts";
let xhr = new XMLHttpRequest();
xhr.open("GET",url);
xhr.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
        console.log(this.responseText);
    }
}
xhr.onprogress = function() {  // optional
    console.log("Processing...");
}

xhr.onerror = function() { // optional
    console.log("error");
}

xhr.send();*/
/* << Old Method */

/* (2)Old method modify with (post) (onredystatechange)*/
/*let url = "https://jsonplaceholder.typicode.com/posts";
let xhr = new XMLHttpRequest();
let postc = document.querySelector(".container");
xhr.open("GET",url);
xhr.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
        let res = this.responseText;
        let json = JSON.parse(res);
        let str = "";
        json.forEach((post)=>{
            str += `
            <div class="box">
                <h5>${post.title}</h5>
                <p>${post.body}</p>
                <button>Detail</button>
            </div>
            `;
        })
        postc.innerHTML = str;
    } 
}

xhr.send();*/
/* << Old method modify with (post) */

/* (3) New method (onload) >> */
/*let url = "https://jsonplaceholder.typicode.com/posts";
let postc = document.querySelector(".container");
function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.onload = function() {
        if(this.status == 200) {
            let res = this.responseText;
            let json = JSON.parse(res);
            let str = "";
            json.forEach(post=>{
                str += `
                <div class="box">
                    <h5>${post.title}</h5>
                    <p>${post.body}</p>
                    <button>Detail</button>
                </div>
                `;
            })

            postc.innerHTML = str;
        }
    }

    xhr.send();
}
loadData();*/
/* << (3) New method (onload) */

/* (4) New method with callback function >> */
/*let url = "https://jsonplaceholder.typicode.com/posts";
let postc = document.querySelector(".container");

function makeColumn(result) {
    let json = JSON.parse(result);
    let str = "";
    json.forEach(post=>{
        str += `
        <div class="box">
            <h5>${post.title}</h5>
            <p>${post.body}</p>
            <button>Detail</button>
        </div>
        `;
    })

    postc.innerHTML = str;
}
function loadData(cb) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
        if(this.status == 200) {
            cb(this.responseText);  // !important
        }
    }
    xhr.send();
}
loadData(makeColumn);*/
/* << (4) New method with callback function */

/* (5) New method with (Promise) >>*/
/*let url = "https://jsonplaceholder.typicode.com/posts";

function loadData() {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.onload = function () {
            if (xhr.status == 200) {
                resolve(this.responseText);
            } else {
                reject("Data load fail!");
            }
        }

        xhr.open("GET", url);
        xhr.send();
    });
}

loadData().then(res => console.log(res)).catch(err => console.log(err));*/
/* << (5) New method with (Promise) */

/* (6) New method (Fetch) >> */
let url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(res=>{return res.text()})
    .then(result=>console.log(result))
    .catch(err=>console.log(err));

/* << (6) New Method (Fetch) */


