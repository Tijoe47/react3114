
export function addRiddle() {
    const addRiddleButton = document.getElementById('addRiddleButton');
const overlay = document.getElementById('overlay');
const formContainer = document.getElementById('formContainer');
const riddleForm = document.getElementById('riddleForm');
const riddlesList = document.getElementById('riddlesList');

let riddleId = 1;

addRiddleButton.addEventListener('click', function() {
    overlay.style.display = 'block';
    formContainer.style.display = 'block';
});

riddleForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const riddleDescription = document.getElementById('riddleDescription').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctOption = parseInt(document.getElementById('correctOption').value);

    const riddleElement = document.createElement('div');
    riddleElement.classList.add('riddle-container');
    riddleElement.innerHTML = `
        <h3>Riddle ${riddleId}</h3>
        <p>${riddleDescription}</p>
        <form>
            <ul>
                <li><input type="radio" name="answer${riddleId}" value="1">${option1}</li>
                <li><input type="radio" name="answer${riddleId}" value="2">${option2}</li>
                <li><input type="radio" name="answer${riddleId}" value="3">${option3}</li>
                <li><input type="radio" name="answer${riddleId}" value="4">${option4}</li>
            </ul>
        </form>
    `;

    riddlesList.appendChild(riddleElement);
    riddleId++;

    overlay.style.display = 'none';
    formContainer.style.display = 'none';
    riddleForm.reset();
});
  }