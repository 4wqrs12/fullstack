// TODO: check if using one click counter var manages both new journal and edit journal buttons
let clickCounterNew = 0;
let clickCounterEdit = 0;
let journals = [];

const newJournalAction = document.getElementById("new");
const editJournalAction = document.getElementById("edit");

const journalCreationSection = document.getElementById("journal-creation");
const journalEditSection = document.getElementById("journal-edit");

const createJournalBtn = document.getElementById("create-journal");
const journalName = document.getElementById("journal-name");

const journalDropdown = document.getElementById("journal-dropdown");

const journalCreationSectionDisplay = window.getComputedStyle(journalCreationSection);
const journalEditSectionDisplay = window.getComputedStyle(journalEditSection);


function journalObjectCreation(name, value, id) {
  let journal = {
    journalName: name,
    journalText: value,
    journalId: id
  };

  return journal;
}

newJournalAction.addEventListener("click", function() {
  clickCounterNew++;
  
  if (clickCounterNew === 2) {
    journalCreationSectionDisplay.display = "none";
    clickCounterNew = 0;
  }
});


createJournalBtn.addEventListener("click", function() {
  if (journalName.value.length === 0) {
    alert("Please enter a name for your journal!");
  } else {
    journals.push(journalObjectCreation(journalName.value, "", journals.length));
    let journalDropdownValue = document.createElement("option");
    journalDropdownValue.value = journalName.value;
    journalDropdownValue.textContent = journalName.value;
    journalDropdown.appendChild(journalDropdownValue);
    alert(`Journal "${journalName.value}" created!`);
    journalCreationSectionDisplay.display = "none";
  }
});

editJournalAction.addEventListener("click", function() {
  clickCounterEdit++;
  journalEditSection.style.display = "block";
  if (clickCounterEdit === 2) {
    journalEditSection.style.display = "none";
    clickCounterEdit = 0;
  }
});
