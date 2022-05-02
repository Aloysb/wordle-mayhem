const NUMBER_OF_LETTERS_IN_ALPHABET = 26;

/**
 *  Generates the keys in the #keys section
 */
function generateKeys(): void {
  const keysSection = document.getElementById("keys");

  if (!keysSection) {
    throw new Error("The key section is missing. (Element id 'keys')");
  }

  const keys: string[] = Array(NUMBER_OF_LETTERS_IN_ALPHABET)
    .fill("a")
    .map((letter: string, index: number) =>
      String.fromCharCode(letter.charCodeAt(0) + index)
    );

  const buttons: HTMLButtonElement[] = keys.map((letter: string) =>
    generateButton(letter)
  );

  buttons.map((button) => keysSection.appendChild(button));
}

function generateButton(letter: string): HTMLButtonElement {
  let button = document.createElement("button");
  button.id = `key__${letter}`;
  return button;
}

export { generateKeys };
