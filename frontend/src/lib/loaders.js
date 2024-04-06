import { fakeNetwork } from './utils.js';

export async function fetchMovies() {
    let answer = await fetch('http://localhost:8080/api/movie');
    let data = await answer.json();
    return data;
}

export async function fetch1Movie(id) {
    let answer = await fetch(`http://localhost/api:8080/movie/${id}`);
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

export async function fetchAddPlaylist({id}) {
    let answer = await fetch(`http://localhost:8080/api/playlist/add/${id}`, {credentials: 'include', method: 'POST'});
    let data = await answer.json();
    return data;
}

export async function fetchRemovePlaylist({id}) {
    let answer = await fetch(`http://localhost:8080/api/playlist/remove/${id}`, {credentials: 'include', method: 'DELETE'});
    let data = await answer.json();
    return data;
}
