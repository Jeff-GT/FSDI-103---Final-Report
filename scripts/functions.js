function celToFah(){

    document.getElementById("result").innerHTML="";

    let startValue=Number(prompt("Enter the First Value of your Temperature Range"));
    let endValue=Number(prompt("Enter the End Value"));
    let counter=0;

    for(;startValue<=endValue;counter++,startValue++){
        
        let res=(startValue*9/5)+32;
        
        if(res<50){
            console.log(startValue+" = "+res);
            
            document.getElementById("result").innerHTML+=`
            <div class="cold-temp">
            
            <p>${startValue}°C = ${res}°F</p>
            
            </div>`;
        }
        else if(res>=50&&res<=86){
            console.log(startValue+" = "+res);
            document.getElementById("result").innerHTML+=`
            <div class="normal-temp">
            
            <p>${startValue}°C = ${res}°F</p>
            
            </div>`;
        }
        else{
            console.log(startValue+" = "+res);
            document.getElementById("result").innerHTML+=`
            <div class="hot-temp">
            
            <p>${startValue}°C = ${res}°F</p>
            
            </div>`;
        }
    }
    document.getElementById("redo").innerHTML=`<div>

    <h3 class="range">Temperatures Converted: ${counter}</h3>
    <a href="#" onclick="celToFah()" class="btn" >try again</a>
    </div>`;
}

function fahToCel(){

    document.getElementById("result").innerHTML="";

    let startValue=Number(prompt("Enter the First Value of your Temperature Range"));
    let endValue=Number(prompt("Enter the End Value"));
    let counter=0;

    for(;startValue<=endValue;counter++,startValue++){
        let res=(startValue- 32)*5/9;
        if(res<10){
            document.getElementById("result").innerHTML+=`
            <div class="cold-temp">
            
            <p>${startValue}°C = ${res}°F</p>
            
            </div>`;
        }
        else if(res>=10&&res<=30){
            document.getElementById("result").innerHTML+=`
            <div class="normal-temp">
            
            <p>${startValue}°C = ${res}°F</p>
            
            </div>`;
        }
        else{
            document.getElementById("result").innerHTML+=`
            <div class="hot-temp">
            
            <p>${startValue}°C = ${res}°F</p>
            
            </div>`;
        }
    }    
    
    document.getElementById("redo").innerHTML=`<div>

    <h3 class="range">Temperatures Converted: ${counter}</h3>
    <a href="#" onclick="celToFah()" class="btn" >try again</a>
    </div>`;
}