console.log(2*10)



const zipcodeForm = document.querySelector('form')
const searchZip = document.querySelector('#zipSubmit')

const trailInfo = document.querySelector('#info')




zipcodeForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const zipcode = searchZip.value
    
    info.textContent = ''
    spot.textContent = ''
    stars.textContent = ''
    summary.textContent = ''
  
    
    fetch('/trails?q='+zipcode).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            info.textContent = 'Please enter correct zipcode.'
           
                    }else{
                        console.log(data)
                        info.textContent = data.trails.trailLocation
                        spot.textContent = data.trails.trailName
                        stars.textContent = data.trails.trailStars
                        summary.textContent = data.trails.trailSummary
                        
                       
                    }
                })
            })
            
            
        })
      


