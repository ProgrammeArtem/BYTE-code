let code = 2222;
let promt_1 = +prompt("Ведіть код:");

switch (promt_1) {
    case code:
        document.write('Доступ дозволенно');
        console.log('Код вірний')
        break;

    default:
        document.write('Долтуп заборонено');
        console.warn('Ви знаєте пароль?');
        break;
}