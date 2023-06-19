export async function uploadTxt( url = '', data = {} ) {
    const request = fetch( url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    try { 
      const status = await request.json()
      document.getElementById('newsarticle').value = status.json()
      return status;
    } 
    catch { error => alert('upload error: ', error )
    }
  }