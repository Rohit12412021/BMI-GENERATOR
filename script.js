 const height=document.querySelector("#height");
 const weight=document.querySelector("#weight");

 function BmiCalculator(h,w){
    const Bmi=(w)/(h*h);
    return Bmi;
 }
 const msgScreen=document.querySelector(".msg-screen");
 const btn=document.querySelector("#btn");
 btn.addEventListener('click',()=>{
      const heightVal=height.value;
 const weightVal=weight.value;
    const bmi=BmiCalculator(heightVal,weightVal);
 if(heightVal<=0||heightVal===""){
      msgScreen.innerHTML=`Please Enter any Valid Height`;
 }
 else if(weightVal<=0||weightVal===""){
  msgScreen.innerHTML=`Please Enter any Valid Weight`;
 }
 else if(bmi<18.5){
     msgScreen.innerHTML=`Your are UnderWeight and your BMI is ${bmi}`;
 }
 else if(bmi>=18.5&&bmi<=24.9){
 msgScreen.innerHTML=`Your are NormalWeight and your BMI is ${bmi}`;
 }
  else if(bmi>=25&&bmi<=29.9){
    msgScreen.innerHTML=`Your are OverWeight and your BMI is ${bmi}`;
 }
 else if(bmi>=30&&bmi<=34.9){
    msgScreen.innerHTML=`Your are in Obesity Class I and your BMI is ${bmi}`;
 }
  else if(bmi>=35&&bmi<=39.9){
     msgScreen.innerHTML=`Your are in Obesity Class II and your BMI is ${bmi}`;
 }
 else{
 msgScreen.innerHTML=`Your are in Obesity Class III and your BMI is ${bmi}`;
 }
 });