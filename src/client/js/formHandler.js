
function handleSubmit(event) {
  event.preventDefault()


  
  // check what text was put into the form field, remove garbling
  let formText = document.getElementById('newsarticle').value.replace(/\n/g, "\ ")
  if ( formText.length < 1  ) { 
    alert('No data provided. Please enter at least some text')
    return(0)
  }

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
    } 
    catch { error => alert('upload error: ', error )
    }
  }

  const queryWeb = async ( url = '' ) => {
    return fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    })
    .catch ( error => alert(`fetching ${url} failed: ` + error ));
  }
  
  ( async () => 
    {
      await uploadTxt('/sentiment/submit', { "txt": formText })
      .then(
        await queryWeb( '/sentiment/get' )
        .then ( data => data.json() )
        .then (data => {
          
          document.getElementById('agreement').innerHTML = data.agreement
          document.getElementById('subjectivity').innerHTML = data.subjectivity
          document.getElementById('irony').innerHTML = data.irony
          document.getElementById('newsarticle').value = ''
          document.getElementById('textlabel').innerHTML = 'Paste an article here:'
          document.getElementById('excerpt').innerHTML = '...' +
          data.sentence_list[0].text.substring(3,150) + '...'
          //console.log(data)
        })
        
      )
    })()
}

export { handleSubmit }