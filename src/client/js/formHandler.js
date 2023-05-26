function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('newsarticle').value

    const uploadTxt = async ( url = '', data = {} ) => {
      const request = fetch( url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      try { const status = (await request).json() 
      return status;
      } catch {
        alert('upload error: ', error )
      }
    }

    const queryWeb = async ( url = '' ) => {
      return fetch(url, {
          method: 'GET',
          credentials: 'same-origin'
      })
      .catch ( error => console.error(error));
  }
    ( async () => 
        {
          //console.log('before upload')
          await uploadTxt('/sentiment/submit', { txt: formText })
          .then(
            queryWeb( '/sentiment/get' )
            .then ( data => data.json() )
            .then (data => {
              document.getElementById('results').innerHTML = data.txt
            })
          )
        })()
}

export { handleSubmit }

/*     const response = fetch("/sentiment")
    .then(response => ({
      status: response.status, 
      body: response.json()
    }))
    .then(({ status, body }) => {
            console.log(status, body)
            document.getElementById('results').innerHTML = response.body
        }
    )

    .catch(error => console.log('error', error)); */
