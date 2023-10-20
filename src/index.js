module.exports = function toReadable (number) {
  const digits = {
    0: 'zero',  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};

    const tens = {
        2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
        6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
    };
    
    const convert = (number) => {
        if (number < 20) return digits[number]; //для чисел до 20 значения уже установлены
        if (number < 100) {
            const ten = Math.floor(number / 10); //находим десятки в числе
            const unit = number % 10; //находим единицы в числе, используя оператор остатка от деления

            if (unit !== 0) { //если единицы не равны нулю
                return `${tens[ten]} ${digits[unit]}`; //возвращаем десятки + единицы
            } else {
                return `${tens[ten]}`; //иначе возвращаем только десятки
            }
        }
        if (number < 1000) {
            const hundred = Math.floor(number / 100); //находим тысячи в числе
            const remainder = number % 100; //находим остаток от деления тысяч
            if (remainder !== 0) {
                return `${digits[hundred]} hundred ${convert(remainder)}`; //возвращаем тысячи + остаток
            } else {
                return `${digits[hundred]} hundred`; //иначе возвращаем только тысячи
            }
        }
    }
//условие для корректной обработки чисел от 1 до 9 для сотен (100,200,..). рекурсия.
    return convert(number);
}
