import {queryWeb} from "./queryWeb.js"
import {uploadTxt} from "./uploadTxt.js"
async function handleSubmit(event) {
  event.preventDefault()
  
  // check what text was put into the form field, remove garbling
  let formText = document.getElementById('newsarticle').value.replace(/\n/g, "\ ")
  if ( formText.length < 1  ) { 
    alert('No data provided. Please enter at least some text')
    return(0)
  }

  // needs the ending ';' else webpack produces an error!!
  document.getElementById('newsarticle').value='submitted';

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
}

export { handleSubmit }