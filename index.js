
const state = {
    numberBank: [],
    odds: [],
    evens: [],
  };
  
   const form = document.querySelector('form');
   const sortOneButton = document.querySelector('#sortOne');
   const sortAllButton = document.querySelector('#sortAll');
  
   const numberBank = document.querySelector('#numberBank output');
   const oddsOuput = document.querySelector('#odds output');
   const evensOutput = document.querySelector('#evens output');
  

  const addNumberToBank = (number) => {
    state.numberBank.push(number);
    render();
  };
  
  const sortOne = () => {
    if (state.numberBank.length > 0) {

      const num = state.numberBank.shift();
    
      if (num % 2 === 0) {
        state.evens.push(num);
      } else {
        state.odds.push(num);
      }
     
    }
    render();
  };
  
  const sortAll = () => {
    if (state.numberBank.length > 0) {
      state.numberBank.forEach((num) => {
        
        if (num % 2 === 0) {
          state.evens.push(num);
        } else {
          state.odds.push(num);
        }
      });
   
      state.numberBank = [];
  
     
    }
    render();
  };
  
 
  function render() {

    numberBank.textContent = state.numberBank.join(', ');
    
    evensOutput.textContent = state.evens.join(', ');
   
    oddsOuput.textContent = state.odds.join(', ');
  }
  
 
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const num = parseInt(form.elements.number.value);

    if (!isNaN(num)) {
      addNumberToBank(num);
      form.elements.number.value = '';
    }
  });
  
  
  sortOneButton.addEventListener('click', sortOne);
 
  sortAllButton.addEventListener('click', sortAll);
 
  render();