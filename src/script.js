const text = document.getElementById("advice");
const number = document.getElementById("number");

const getNewAdvice = async () => {
  var url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  console.log(typeof response);
  const advice = await response.json();

  const adviceText = advice.slip.advice;
  const numberID = advice.slip.id;

  text.innerHTML = adviceText;
  number.innerHTML = numberID;
};

getNewAdvice();
