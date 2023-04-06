import React, { useState, useRef, useEffect} from 'react';
import "/home/julia/pam/resources/css/piggbank.css";

export default function Test()
{

  const [goalAmount, setGoalAmount] = useState(0)
  const [saveAmount, setSavedAmount] = useState(0)
  const [addAmount, setAddAmount] = useState(0)
  const [takeAmount, setTakeAmount] = useState(0)

  const goalInput = useRef(null)
  const addInput = useRef(null)
  const takeInput = useRef(null)

  var amount  = 0; 
  function handleAddAmount(amount){
    setAddAmount(amount)
  }

  
  useEffect(()=>{
    const savedGoalAmount = localStorage.getItem('dataKey');
    const savedSavedAmount = localStorage.getItem('save');
    if (savedGoalAmount) {
      
      setGoalAmount(JSON.parse(savedGoalAmount));
    }
    if(savedSavedAmount)
    {
      setSavedAmount(JSON.parse(savedSavedAmount));
    }


  },[]);

  useEffect(()=>{
    console.log("hahawtf")
    localStorage.setItem('dataKey', JSON.stringify(goalAmount));
    localStorage.setItem('save', JSON.stringify(saveAmount));
  },[goalAmount, saveAmount]) 



  // const handleGoal = () => 
  // {
  //   setGoalAmount(20);
  // }

  function calculatePercentage() 
  {
    var percent = 2; 
    if(goalAmount != 0)
    {
      percent = ((saveAmount/goalAmount) * 100 ).toFixed(2)
    }
    
    return percent 
  }

  function handleGoal()
  {
    console.log(goalInput.current.value)
    if(goalInput.current.value === "")
    {
      setGoalAmount(0);
    }else{
      setGoalAmount(parseInt(goalInput.current.value));
    }
    
  }

  function handleAdd()
  {
    console.log("add" + addInput.current.value )
    if(addInput.current.value === "")
    {
      setAddAmount(0);
    }else{
      
      
      console.log("add" + addInput.current.value )
      setAddAmount(parseInt(addInput.current.value))
      addSaving(parseInt(addInput.current.value)) //passing in para fixed the issue of async set 
    }
  
    
  }
  
  function handleTake() 
  {

    if(takeInput.current.value === "")
    {
      setTakeAmount(0);
    }else{
      
      setTakeAmount(parseInt(takeInput.current.value))
      takeSaving(parseInt(takeInput.current.value)) //passing in para fixed the issue of async set 
    }
  
  }


  function addSaving(addAmountPara)
  {
    console.log("Saving" + addAmountPara)

    var saved = saveAmount + addAmountPara;
    if(saved > goalAmount)
    {
      saved = goalAmount
    }
    setSavedAmount(saved)
    addInput.current.value = ""
    setAddAmount(0)

    
  }

  function takeSaving(takeAmountPara)
  {
    console.log("TAKING" + takeAmountPara)
    var saved = 0
    if(takeAmountPara < saveAmount)
    {
      saved = saveAmount - takeAmountPara;
    }
   
    setSavedAmount(saved)
    takeInput.current.value = ""
    setTakeAmount(0)
  }

  return (
    <>

      <div class="main">
        <h1 class="title">
          PIGGY BANK
        </h1>
        <p>Saving up for razer basilik and cheapass thinkpad</p>


        <div class="display">
          <p>{saveAmount}/{goalAmount}</p>
          <div class="bar">
            <div class = "progress" style={{width:parseInt(calculatePercentage())+"%"}}></div>
          </div>
          {/* pbruh you need the fucking () to call the function */}
          <p>{calculatePercentage()}%</p> 
        </div>

        <div class = "input">
          <label>
            Set Goal Amount 
            <input type = "text" ref = {goalInput}></input>
            <input type = "button" value = "set goal" onClick={() => handleGoal()}></input>
          </label>
          <label>
            Save them money 
            <input type = "text" ref = {addInput}></input>
            <input type = "button" value = "save" onClick={handleAdd}></input>
          </label>
          <label>
            Take away savings
            <input type = "text" ref = {takeInput}></input>
            <input type = "button" value = "take away"onClick={handleTake}></input>
          </label>


        </div>

      </div>




    </>

  )
}