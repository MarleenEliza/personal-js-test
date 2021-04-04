// Ik denk dat het een bewuste keuze is geweest dat het geen Promise teruggeeft. 
// De setTimeOut functie geeft namelijk een nummer terug (id). 
// Je kan dan vervolgens de timeOut annuleren. Het voordeel is wel dat je 
// bijna alles kan omzetten in een Promise, dit kan handig zijn als je bijvoorbeeld 
// een native api (zoals setTimeOut) wilt gebruiken of misschien zelfs een library 
// code. Dus je ontkomt er niet altijd aan om geen promises te maken. Het is vooral 
// use case afhankelijk en uiteraard weten wat je terug kan krijgen van een functie.
// En als je wilt weten wat een native functie van JS teruggeeft zou ik altijd MDN 
// aanraden (prettige documentatie): https://developer.mozilla.org/en-US/ 
// Maar ongetwijfeld heb je daar al vaker in gebladerd haha


// ik heb nog een leuke functie geschreven dat je eventueel kan gebruiken om jouw achtergrond kleur probleem op te lossen (Lees: ik zie het zelf als een probleem dat er dus 5 timers actief zijn en dat ze op de achtergrond nog bezig zijn als je een nieuwe timer start (zonder ze te awaiten). Ik vind het in dit geval mooier om de oude timer te stoppen. Maar dat is wederom use case afhankelijk. Vond het lachen om even met de clearTimeout te spelen haha) .

class Delayer {
  delay(miliseconds) {
    // Already a timer running? Cancel the bad boy!
    if (this.timeoutId) {
      this.cancel();
    }
    
    // Return as promise, so you can await the function
    return new Promise((resolve) => {
      this.timeoutId = setTimeout(() => {
        this.timeoutId = null;
        resolve();
      }, miliseconds);
    });
  }

  cancel() {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }
} 