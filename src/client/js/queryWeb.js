export async function queryWeb( url = '' ) {
return fetch(url, {
    method: 'GET',
    credentials: 'same-origin'
})
.catch ( error => alert(`fetching ${url} failed: ` + error ));
}
