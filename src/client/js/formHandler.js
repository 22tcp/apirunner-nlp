function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('newsarticle').value.replace(/\n/g, "")
    document.getElementById('newsarticle').value='submitted'
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
        document.getElementById('newsarticle').value = status.json()
        return status;
      } catch { error => alert('upload error: ', error )
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
            await queryWeb( '/sentiment/get' )
            .then ( data => data.json() )
            .then (data => {
              document.getElementById('subjectivity').innerHTML = data.subjectivity
              document.getElementById('newsarticle').value = ''
              document.getElementById('excerpt').innerHTML = '...' + data.sentence_list[1].text.substring(0,120) + '...'
              console.log(data)
            })
          )
        })()
}

export { handleSubmit }