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

    //если значение меньше 100
    const convert = (number) => {
        if (number < 20) return digits[number]; //для чисел до 20 значения уже установлены

        const ten = Math.floor(number / 10); //находим десятки в числе
        const unit = number % 10; //находим единицы в числе, используя оператор остатка от деления
        
        if (unit !== 0) { //если единицы не равны нулю
            return `${tens[ten]} ${digits[unit]}`; //возвращаем десятки + единицы
        } else {
            return `${tens[ten]}`; //иначе возвращаем только десятки
        }
    }

    //если значение больше 100
    if (number < 100) {
        return convert(number);
    } else {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;

        if (remainder !== 0) {
            return `${digits[hundred]} hundred ${convert(remainder)}`; 
        } else {
            return `${digits[hundred]}`;
        }
    }
}
