//  geval 1 : ik zet met async getWord een dynamische return met switch. Dit geeft automatisch een promise terug die wordt resolved gebasseerd op de cases.
// Dit werkt zonder problemen
const getWord = async (num) => {
    switch (num) {
        case 1 : return 'Hi ';
        case 2 : return 'Im ';
        case 3 : return 'Marleen ';
        case 4 : return ' :)';
    }
  throw "Error in getWord" + num;
};

async function showSentence() {

  let msg = "";
  msg += await getWord(1);
  msg += await getWord(2);
  msg += await getWord(3);
  msg += await getWord(4);
  console.log(msg);
}


//  geval 2 : Ik gebruik colorChange als een setTimeout functie die een promise teruggeeft met new Promise dus GEEN async functie maar zelf gedefienieerd.
//   Dit werkt zonder issues
const colorChange = (color, ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, ms);
      });
    }

// hier gebruik ik dan await op de promise van colorChange
async function showSentence() {
    await colorChange('blue',  1000);
    await colorChange('pink' , 1000);
    await colorChange('green' , 1000);
    await colorChange('purple' , 1000);
    console.log('finished')
  }

//   Geval 3 : Ik doe hetzelfde als bij geval 2 maar probeer om colorChange in een async variable te proppen net zoals in geval 1
// Maar als je dit execute, wordt alles direct paars en is er dus geen asyncrhonious execution.
// Ik snap dus niet waarom dit niet werkt... 😦
const colorChange = async (color, ms) => {
    return setTimeout(() => {
            document.body.style.backgroundColor = color;
        }, ms);
      };

// async met await; levert verder geen problemen op
async function showSentence() {
    await colorChange('blue',  1000);
    await colorChange('pink' , 1000);
    await colorChange('green' , 1000);
    await colorChange('purple' , 1000);
    console.log('finished')
  }
