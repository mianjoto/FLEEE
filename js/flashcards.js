// Textarea consts
const TEXTAREA_NUM_ROWS = 5;
const TEXTAREA_NUM_COLS = 30;
const FLASHCARD_CLASSNAME = "flashcard";
const FLASHCARD_ID = "flashcard-";
const IS_SPELLCHECK_ON = true;

// Term flashcard textarea consts
const TERM_ID = "term-";
const TERMS_CONTAINER_ID = "terms-container";
const TERM_TEXTAREA_NAME = "Term";
const TERM_TEXTAREA_PLACEHOLDER = "Your term goes here...";

// Definition flashcard textarea consts
const DEFINITION_ID = "definition-";
const DEFINITIONS_CONTAINER_ID = "definitions-container";
const DEFINITION_TEXTAREA_NAME = "Definition";
const DEFINITION_TEXTAREA_PLACEHOLDER = "Your definition goes here...";

var flashcardCount = 0;
var termsCount = 0;
var definitionsCount = 0;

var termsContainer;
var definitionsContainer;
// Create first row
createFlashcardRow();

function createFlashcardRow() {
    if (termsContainer === undefined) {
        termsContainer = document.getElementById(TERMS_CONTAINER_ID);
    }
    if (definitionsContainer === undefined) {
        definitionsContainer = document.getElementById(DEFINITIONS_CONTAINER_ID);
    }
    
    createFlashcard(termsContainer, TERM_TEXTAREA_NAME, TERM_TEXTAREA_PLACEHOLDER, TERM_ID);
    createFlashcard(definitionsContainer, DEFINITION_TEXTAREA_NAME, DEFINITION_TEXTAREA_PLACEHOLDER, DEFINITION_ID);
}

function createFlashcard(container, name, placeholder, id) {
    flashcardCount++;
    let typeCount;
    if (id == TERM_ID) {
        termsCount++;
        typeCount = termsCount;
    } else {
        definitionsCount++;
        typeCount = definitionsCount;
    }
    let textarea = document.createElement("textarea");
    textarea.name = name;
    textarea.rows = TEXTAREA_NUM_ROWS;
    textarea.cols = TEXTAREA_NUM_COLS;
    textarea.spellcheck = IS_SPELLCHECK_ON;
    textarea.wrap = "soft";
    textarea.id = id + typeCount;
    textarea.placeholder = placeholder;
    textarea.className = FLASHCARD_CLASSNAME;
    textarea.addEventListener("keyup", storeInput);
    container.appendChild(textarea);
}


function storeInput()
{
    let term = this.value;
    console.log("VALUE=" + term);
}