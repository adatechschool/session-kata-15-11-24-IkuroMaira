const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..'
}

function getLatinCharacterList([characters]) {
    // console.log('Dans la variable charactersList', characters);

    return characters.split('');
}

function translateLatinCharacter(returnedLetter) {

    // for (const [latinLetter, morse] of Object.entries(latinToMorse)) {
    //
    //     for (const letter of returnedLetter) {
    //         // console.log(letter);
    //
    //         if (latinLetter === letter) {
    //             console.log(`${latinLetter} = ${morse}`);
    //
    //             // return morse;
    //         } else {
    //             // console.log('C\'est peut-être un espace');
    //         }
    //     }
    // }

    for (const letter of returnedLetter) {

        for (const [latinLetter, morse] of Object.entries(latinToMorse)) {

            if (latinLetter === letter) {
                console.log(`${latinLetter} = ${morse}`);

                // return morse;
            } else {
                // console.log('C\'est peut-être un espace');
            }
        }
    }


}

function encode(words) {
    // Mettre en majuscule
    let capitalLetter = [words.toUpperCase()];
    console.log(capitalLetter);

    let charactersList = getLatinCharacterList(capitalLetter);
    console.log(charactersList);

    translateLatinCharacter(charactersList);
}


let wordsWrite = 'Hello world';
encode(wordsWrite);