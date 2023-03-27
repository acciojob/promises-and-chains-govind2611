function extractNameAndWelcome(object) {
  const name = object.name;
  alert(`Welcome, ${name}. You can vote.`);
  return { name };
}

function validateAge(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({ age, name });
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}

const form = document.querySelector('form');
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (form.checkValidity()) {
    const age = parseInt(ageInput.value);
    const name = nameInput.value;
    
    validateAge(age, name)
      .then(extractNameAndWelcome)
      .then((object) => {
        alert(`Final object: ${JSON.stringify(object)}`);
      })
      .catch((error) => {
        alert(error);
      });
  } else {
    alert('Please fill out all fields.');
  }
});
