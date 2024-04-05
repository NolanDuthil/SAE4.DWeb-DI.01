import { fakeNetwork } from './utils.js';

// export async function fetchOurTeams(teamName){
//     await fakeNetwork();
//     let answer = await fetch('/src/lib/data/teams-data.json');
//     let data = await answer.json();
//     return data[teamName];
// }

// export async function fetchTestimonialData(teamName){
//     let answer = await fetch('/src/lib/data/testimonial-data.json');
//     let data = await answer.json();
//     data = data[teamName];
//     // choose 3 random testimonies
//     let testimonies = [];
//     for(let i=0; i<3; i++){
//         let index = Math.floor(Math.random() * data.length); // random index
//         testimonies.push(data[index]); // add to testimonies
//         data.splice(index, 1); // remove from data to avoid duplicates
//     }
//     return testimonies;
// }

// export async function fetchPricingData(){
//     let answer = await fetch('/src/lib/data/pricing-data.json');
//     let data = await answer.json();
//     return data;  
// }

export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movie');
    let data = await answer.json();
    return data;
}

export async function fetch1Movie(id) {
    let answer = await fetch(`http://localhost:8080/api/movie/${id}`);
    let data = await answer.json();
    return data;
}

export async function fetchCat() {
    let answer = await fetch('http://localhost:8080/api/category');
    let data = await answer.json();
    return data;
}

export async function fetchSearch({query}) {
    let answer = await fetch(`http://localhost:8080/api/search/${query}`);
    let data = await answer.json();
    return data;
}

export async function fetchCatId(id) {
    let answer = await fetch(`http://localhost:8080/api/category/${id}`);
    let data = await answer.json();
    return data;
}

export async function fetchCategoriesName() {
    let answer = await fetch("http://localhost:8080/api/category/name/");
    let data = await answer.json();
    return data;
}

export async function fetchUser() {
    let answer = await fetch(`http://localhost:8080/api/user/`, {credentials: 'include'});
    let data = await answer.json();
    return data;
}

export async function fetchPlaylist() {
    let answer = await fetch(`http://localhost:8080/api/playlist/`, {credentials: 'include'});
    let data = await answer.json();
    return data;
}
