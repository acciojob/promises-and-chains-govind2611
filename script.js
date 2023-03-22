//your JS code here. If required.
function submitForm() {
  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");
  
  if (ageInput.value.trim() === "" || nameInput.value.trim() === "") {
    alert("Please fill in both age and name");
    return;
  }

  const age = parseInt(ageInput.value.trim());
  const name = nameInput.value.trim();
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({ age, name });
      } else {
        reject({ age, name });
      }
    }, 4000);
  });
  
  promise
    .then(({ age, name }) => {
      alert(`Welcome, ${name}. You can vote.`);
      return age;
    })
    .then((age) => {
      return { age };
    })
    .then((result) => {
      alert(JSON.stringify(result));
    })
    .catch(({ age, name }) => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
}
