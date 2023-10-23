let p1 = prompt('Choose a country');

let country = ['Ukraine', 'USA', 'Poland'];

switch (p1) {
    case 'Ukraine':
        document.write('Вітаємо на сайті')
        break;

    case 'USA':
        document.write('Welcome to the website')
        break;

    case country[2]:
        document.write('Witamy na stronie')
        break;    

    default:
        document.write('Update the site and select a country')
        console.error('Errror country');
        break;
}