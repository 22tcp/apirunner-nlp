function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('newsarticle').value

    const response = fetch("")
    .then(response => ({
      status: response.status, 
      body: response.json()
    }))
    .then(({ status, body }) => {
            console.log(status, body)
            document.getElementById('results').innerHTML = response.body
        }
    )

    .catch(error => console.log('error', error));
}
export { handleSubmit }