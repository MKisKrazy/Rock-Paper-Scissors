
let score = JSON.parse(localStorage.getItem('score'))||{ 
    Wins:0,
    Loses:0,
    Ties:0
   };
// if(!score){
//    score={ 
//     Wins:0,
//     Loses:0,
//     Ties:0
//    };
// }

updateScore();

function playerMove(pMove){

    const comp= pickCompMove();
    let result ='';
    if(pMove === 'Rock'){
        
        if(comp === 'Rock'){
            result='Tie.';
        }
        else if(comp === 'Paper'){
            result='You lose.';
        }
        else if(comp === 'Scissors'){
            result='You win.';
        }
    }
    else if(pMove === 'Paper'){
        
        if(comp === 'Paper'){
            result='Tie.';
        }
        else if(comp === 'Scissors'){
            result='You lose.';
        }
        else if(comp === 'Rock'){
            result='You win.';
        }  
    }
    else if(pMove === 'Scissors'){
        
        if(comp === 'Rock'){
            result='You lose.';
        }
        else if(comp === 'Paper'){
            result='You Win.';
        }
        else if(comp === 'Scissors'){
            result='Tie.';
        }
    }
    if(result==='You Win.'){
        score.Wins+=1;
    }else if(result==='You lose.'){
        score.Loses+=1;
    }else if(result==='Tie.'){
        score.Ties+=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    
  
    updateScore();

    document.querySelector('.js-result')
    .innerHTML=`${result}`;

    document.querySelector('.js-moves')
    .innerHTML=`You <img src="${pMove}-emoji.png" class="move-icon"> <img src="${comp}-emoji.png" class="move-icon"> Computer`;

    
}


function updateScore(){
    document.querySelector('.js-score')
    .innerHTML=`Wins:${score.Wins},Loses:${score.Loses},Ties:${score.Ties}`;
}



function pickCompMove(){
    const r=Math.random();
    let comp ='';
    if(r>=0 && r<1/3){
        comp='Rock';
    }
    else if(r>=1/3 && r<2/3){
        comp='Paper';
    }
    else if(r>=2/3 && r<1){
        comp='Scissors';
    }
    return comp;
}