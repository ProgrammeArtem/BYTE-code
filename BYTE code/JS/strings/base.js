let puzzles1 = ('You');
let puzzles2 = ('love');
let puzzles3 = ('Ukraine?');

let prompt_1 = prompt("Word 1:", puzzles1[1] + puzzles1[2] + puzzles1[0]);
let prompt_2 = prompt("Word 2:", puzzles2[3] + puzzles2[0] + puzzles2[2] + puzzles2[1]);
let prompt_3 = prompt("Word 3:", puzzles3[4] + puzzles3[1] + puzzles3[0] + puzzles3[7] + puzzles3[5] + puzzles3[2], + puzzles3[6] + puzzles3[3]);

switch (prompt_1) {
    case 'You':
        document.write('Word 1: right <br>')
        break;

    case 'you':
        document.write('Word 1: right <br>')
        break;

    default:
        document.write('Word 1: wrong <br>')
        break;
}

switch (prompt_2) {
    case 'love':
        document.write('Word 2: right <br>')
        break;

    default:
        document.write('Word 2: wrong <br>')
        break;
}

switch (prompt_3) {
    case 'Ukraine?':
        document.write('Word 3: right <br>')
        break;

    default:
        document.write('Word 3: wrong <br>')
        break;
}