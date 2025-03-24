console.log('gaurav');

import chalk from 'chalk'
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));
console.log(chalk.red("Gaurav")+' '+ chalk.blue('Sharma'));

import { upperCase} from 'upper-case';
console.log(upperCase('Gaurav'));

import { lowerCase} from 'lower-case';
console.log(lowerCase('SHARMA'));
console.log(lowerCase('SAURABH'));
console.log(lowerCase('SHARMA'));
console.log(lowerCase('Dev'));
console.log(lowerCase('Bhargav'));
console.log(lowerCase('Bhargav'));
<<<<<<< HEAD
console.log(chalk.red(lowerCase('Bhargav')));
console.log(chalk.blue(lowerCase('Mayank')));
=======
>>>>>>> fd35dd9879c6e997a32cdf917ca8b7ba870595e0
