const form = document.querySelector('.rating__form');
const numbers = document.querySelectorAll('.list__item');
const ratingCard = document.querySelector('.rating__card');
const thanksCard = document.querySelector('.thanks__card');
const resetBtn = document.querySelector('.reset__btn');
const formList = document.querySelector('.form__list');
const selected = document.querySelector('.selected');
let score = 0;

// clear state
function clearState() {
  formListRemoveRing();
  numbers.forEach((item) => {
    if (
      item.classList.contains('bg-l-gray') &&
      item.classList.contains('text-white')
    ) {
      item.classList.remove('bg-l-gray');
      item.classList.add('bg-d-gray');
      item.classList.remove('text-white');
    }
  });
}

// Toggle classes & set score
function toggle(e) {
  clearState();
  e.target.classList.toggle('bg-l-gray');
  e.target.classList.toggle('bg-d-gray');
  e.target.classList.toggle('text-white');

  score = e.target.getAttribute('data-set');
}

// Open Thanks Card
function openThanks() {
  ratingCard.classList.toggle('hidden');
  thanksCard.classList.toggle('hidden');
}

// formList Add Ring
function formListAddRing() {
  formList.classList.add('ring');
}

// formList Remove Ring
function formListRemoveRing() {
  formList.classList.remove('ring');
}

// Form onSubmit
function onSubmit(e) {
  e.preventDefault();
  if (score > 0) {
    console.log(score);
    openThanks();
    selectedRes();
  } else if (score === 0) {
    formListAddRing();
  }
}

// Reset to RatingCard
function resetRating() {
  openThanks();
  clearState();
  score = 0;
}

// Selected Result content
function selectedRes() {
  selected.textContent = `You selected ${score} out of 5`;
}

// Form submission addEventListener with score
form.addEventListener('submit', onSubmit);

// AddEventListener
numbers.forEach((item) => {
  item.addEventListener('click', function (listItem) {
    toggle(listItem);
  });
});

// AddEventListener resetBtn

resetBtn.addEventListener('click', resetRating);
