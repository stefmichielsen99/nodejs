//async task maken --- Oefening 1 uit de les
function myFuction(callback){
    let result;
    setTimeout(() => { // => is hetzelfde als function
        result = 12;
        callback(result);
    },1); //time-out van 1 miliseconde normaal, zonder callback, zou eerst de onderste fuction aan worden geroepen
    //maar door callback wacht hij met de myfunction hij het result dus callbacked
}

myFuction((answer) => {
    console.log('answer = ' + answer)
});

