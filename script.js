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
  if (journalEditSectionDisplay.display === "none" || journalEditSectionDisplay.display === "block") {
    journalEditSection.style.display = "none";
    journalCreationSection.style.display = "block";
    clickCounterEdit = 0;
  }
  if (clickCounterNew === 2) {
    clickCounterNew = 0;
    journalCreationSection.style.display = "none";
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
    journalCreationSection.style.display = "none";
    journalName.value = "";
  }
});

editJournalAction.addEventListener("click", function() {
  clickCounterEdit++;
  if (journalCreationSectionDisplay.display === "none" || journalCreationSectionDisplay.display === "block") {
    journalCreationSection.style.display = "none";
    journalEditSection.style.display = "block";
    clickCounterNew = 0;
  }
  if (clickCounterEdit === 2) {
    clickCounterEdit = 0;
    journalEditSection.style.display = "none";
  }
});
