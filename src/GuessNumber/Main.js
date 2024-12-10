import React,{useState} from 'react';
 
 



function Main() {

//UseState


  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

//Reload Message

let reload =(e)=>{
  window.location.reload()
}






//Logic Section

let calcBmi = (e)=>{
  e.preventDefault();
  if(weight==0 || height==0 ){
    alert("Invalid Entery Please Input Valid Wight And Height")

  }
  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

//Message For Weight Arrguments

if(bmi<25){
  setMessage('You are in UnderWEIGHT')
}
else if(bmi>=25 && bmi <30){
  setMessage('You Maintain Healthy Weight')
}
else{
  setMessage('You are OverWeight')

  }

  }
}


  return (
   
    <div className='App'>
      <div className='container' >
        <h2>BMI Calculator</h2>
         
        <form>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder="Enter weight Value" value={weight}  onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(in)</label>
            <input type='text' placeholder="Enter weight Value" value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit' onClick={calcBmi} >SUBMIT</button>
            <button className='btn btn-outline' onClick={reload}  type='submit' >Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
            
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default Main;
