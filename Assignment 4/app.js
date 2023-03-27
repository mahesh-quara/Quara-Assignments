const submitButton = document.querySelector('#submit');
const detailsList = document.querySelector('#details-list');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const name = document.querySelector('#fname').value;
  const dob = document.querySelector('#fdate').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const food = document.querySelector('input[name="fav_food"]:checked').value;
  const drinks = document.querySelectorAll('input[name="drink"]:checked');
  const anything = document.querySelector('#anything').value;

  let drinkValues = '';
  for (let i = 0; i < drinks.length; i++) {
    drinkValues += drinks[i].value + ', ';
  }

//   drinkValues = drinkValues.slice(0, -2);

  const details = document.createElement('div');
  details.innerHTML = `
    <div id="inner">
      Name:             ${name}<br>
      DOB:              ${dob}<br>
      Gender:           ${gender}<br>
      Favourite Food:   ${food}<br>
      Favourite Drinks: ${drinkValues}<br>
      Anything else:    ${anything}<br>
    </div>
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
    <hr>
  `;
  detailsList.appendChild(details);

  const editButton = details.querySelector('.edit-button');
  editButton.addEventListener('click', function () {
    document.querySelector('#fname').value = name;
    document.querySelector('#fdate').value = dob;
    document.querySelector(`input[name="gender"][value="${gender}"]`).checked = true;
    document.querySelector(`input[name="fav_food"][value="${food}"]`).checked = true;
    drinks.forEach(drink => {
      document.querySelector(`input[name="drink"][value="${drink.value}"]`).checked = true;
    });
    document.querySelector('#anything').value = anything;

    detailsList.removeChild(details);
  });
  const deleteButton = details.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
    detailsList.removeChild(details);
  });
});
