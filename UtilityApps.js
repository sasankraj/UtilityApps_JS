const urlEncode = (url) => {
  const test = encodeURIComponent(url);
  return test;
}

const urlDecode = (url) => {
  const test = decodeURIComponent(url);
  return test;
}

const base64Encoder = (str) => {
  const base64 = Buffer.from(str).toString('base64');
  return base64;
}

const base64Decoder = (str) => {
  const original = Buffer.from(str, 'base64').toString('ascii');
  return original;
}

function _stringHashing(str, hashType) {
  const crypto = require('crypto');
  const h = crypto.createHash(hashType).update(str).digest('hex');
  return h;
}

const toEpochConverter = (humanDate) => {
  const val = Math.floor(humanDate.getTime()/1000);
  return val;
}

const toHumanDate = (epoch_val) => {
    const d = new Date(epoch_val*1000);
    return d.toLocaleString();
}

const rgbToHex = (r,g,b) => {
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);
  if (r.length < 2) {
    r = "0" + r;
  }
  if (g.length < 2) {
    g = "0" + g;
  }
  if (b.length < 2) {
    b = "0" + b;
  }
  return "#" + r + g + b;
}

const hexToRGB = (h) => {
  let r = 0, g = 0, b = 0;
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];
  } 
  else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  return "("+ +r + "," + +g + "," + +b + ")";
}

const celTofahrehnheit = (cel) => {
  return (cel * 9 / 5 + 32).toString();
}

const fahrehnheitTocel = (fah) => {
  return ((fah - 32) * 5 / 9).toString();
}

const kiloTomil = (kil) => {
  return (kil * 0.621371).toString();
}

const milTokil = (mil) => {
  return (mil / 0.621371).toString();
}

const feetTocen = (ft) => {
  return (ft * 30.48).toString();
}

const cenTofeet = (cm) => {
  return (cm / 30.48).toString();
}

function dec_to_bin_eqv(dec) {
  return parseInt(dec, 10).toString(2);
}

function bin_to_dec_eqv(bin) {
  return parseInt(bin, 2).toString(10);
}

function dec_to_oct_eqv(dec) {
  return parseInt(dec, 10).toString(8);
}

function oct_to_dec_eqv(oct) {
  return parseInt(oct, 8).toString(10);
}

function dec_to_hex_eqv(dec) {
  return parseInt(dec, 10).toString(16);
}

function hex_to_dec_eqv(hex) {
  return parseInt(hex, 16).toString(10);
}

function bin_to_oct_eqv(bin) {
  return parseInt(bin, 2).toString(8);
}

function oct_to_bin_eqv(oct) {
  return parseInt(oct, 8).toString(2);
}

function bin_to_hex_eqv(bin) {
  return parseInt(bin, 2).toString(16);
}

function oct_to_hex_eqv(oct) {
  return parseInt(oct, 8).toString(16);
}

function hex_to_oct_eqv(hex) {
  return parseInt(hex, 16).toString(8);
}

const chalk = require('chalk');
const readLineSync = require('readline-sync');
while(true) {
  console.log(chalk.magenta("\t\t\t\t\t|------------------------|"));
  console.log(chalk.blue.bold('\t\t\t\t\t| Welcome to Utility Apps|'));
  console.log(chalk.magenta("\t\t\t\t\t|------------------------|"));
  const selectedUtilityOption = parseInt(readLineSync.question('Which utility function would you like to use?\n1. urlEncode/Decode\n2. base64Encode/Decode\n3. StringHashing\n4. ToEpoch/ToHumanDate Converter\n5. RGBtoHex/HexToRGB Converter\n6. Unit Converter\n7. Bin/Hex/Dec/Oct Converter\n0. Exit\nyour choice : '));

  console.log(`You selected ${selectedUtilityOption}\n`);
  switch(selectedUtilityOption) {

    case 1:
      console.log("1. encode\n2. decode");
      const o1 = readLineSync.question("your choice : ");
      if(o1 === "1") {
      const urlToEncode = readLineSync.question('Please enter the url to be encoded\n');
      const encodedURL = urlEncode(urlToEncode);
      console.log(encodedURL);
      }
      else if(o1 === "2") {
      const urlToDecode = readLineSync.question('Please enter the url to be decoded\n');
      const decodedURL = urlDecode(urlToDecode);
      console.log(decodedURL);
      }
      else {
        console.log("Invalid choice");
      }
      break;

    case 2:
      console.log("1. encode\n2. decode");
      const o2 = readLineSync.question("your choice : ");
      if(o2 === "1") {
      const original_str = readLineSync.question('Please enter the string to be encoded\n');
      const base64_encoded_str = base64Encoder(original_str);
      console.log(base64_encoded_str);
      }
      else if(o2 === "2") {
      const base64_str = readLineSync.question('Please enter the string to be decoded\n');
      const actual_str = base64Decoder(base64_str);
      console.log(actual_str);
      }
      else {
        console.log("Invalid choice");
      }
      break;

    case 3:
      let hashed_str;
      const simple_str = readLineSync.question('Please enter a string to be hashed\n');
      const hashopt = readLineSync.question('Please mention the type of hashing you wanna perform.\n1. md5\n2. sha1\n3. sha256\n4. sha512\nyour choice : ');
      let hashType;
      switch (Number(hashopt)) {
        case 1:
          hashType = 'md5';
          break;
        case 2:
          hashType = 'sha1';
          break;
        case 3:
          hashType = 'sha256';
          break;
        case 4:
          hashType = 'sha512';
          break;
        default:
          console.log("Invalid choice");
          break;
      }
      if([1,2,3,4].includes(Number(hashopt))) {
        hashed_str = _stringHashing(simple_str, hashType);
      }
      console.log(hashed_str);
      break;

    case 4:
      console.log("1. toEpoch\n2. toHumanDate");
      const o3 = readLineSync.question("your choice : ");
      if(o3 === "1") {
      const yr = readLineSync.question('Enter the year ');
      const mnth = readLineSync.question('Enter the month ');
      const date = readLineSync.question('Enter the date ');
      const hrs = readLineSync.question('Enter the hours ');
      const mins = readLineSync.question('Enter the minutes ');
      const secs = readLineSync.question('Enter the seconds ');
      const HumanDate = new Date(yr, mnth-1, date, hrs, mins,secs);
      const epoch_val = toEpochConverter(HumanDate);
      console.log(epoch_val);
      }
      else if(o3 === "2") {
      const epochVal = readLineSync.question('Enter an epoch value (example - 1611041456)\n');
      console.log(toHumanDate(epochVal));
      }
      else {
        console.log('Invalid Choice');
      }
      break;

    case 5:
      console.log("1. RGBtoHex\n2. HextoRGB");
      const o4 = readLineSync.question("your choice : ");
      if(o4 === "1") {
      const red = readLineSync.question('Enter a value for red ');
      const green = readLineSync.question('Enter a value for green ');
      const blue = readLineSync.question('Enter a value for blue ');
      console.log("Hex Value " + rgbToHex(red,green,blue));
      }
      else if(o4 === "4") {
      const hexVal = readLineSync.question('Enter a hex value ');
      console.log('RGB equivalent ' + hexToRGB(hexVal));
      }
      else {
        console.log("Invalid Choice");
      }
      break;

    case 6:
      console.log('1. Celsius/Fahrenheit Converter\n2. kilometers/miles Converter\n3. Feet/Centimeters Converter');
      const o5 = readLineSync.question('your choice :  ');
      switch (Number(o5)) {
        case 1:
          console.log('1. Celsius to Fahrenheit\n2.Fahrenheit to Celsius');
          const oo51 = readLineSync.question('your choice :  ');
          if(oo51 === "1") {
            const cel = readLineSync.question('Enter the temperature in Celsius:  ');
            console.log(cel + 'ºC = ' + celTofahrehnheit(cel) + 'ºF');
          }

          else if(oo51 === "2") {
            const fah = readLineSync.question('Enter the temperature in Fahrenheit:  ');
            console.log(fah + 'ºF = ' + fahrehnheitTocel(fah) + 'ºC');
          }

          else {
            console.log("Invalid choice");
          }
          break;

        case 2:
          console.log('1. Kilometers to Miles\n2. Miles to Kilometers');
          const oo52 = readLineSync.question('your choice :  ');
          if(oo52 === "1") {
            const kil = readLineSync.question('Enter the distance in Kilometers:  ');
            console.log(kil + 'kms = ' + kiloTomil(kil) + 'mi');
          }

          else if(oo52 === "2") {
            const mil = readLineSync.question('Enter the distance in miles:  ');
            console.log(mil + 'mi = ' + milTokil(mil) + 'kms');
          }

          else {
            console.log("Invalid choice");
          }
          break;

        case 3:
          console.log('1. Feet to Centimeters\n2. Centimeters to Feet');
          const oo53 = readLineSync.question('your choice :  ');
          if(oo53 === "1") {
            const ft = readLineSync.question('Enter the height in Feet:  ');
            console.log(ft + 'ft = ' + feetTocen(ft) + 'cms');
          }

          else if(oo53 === "2") {
            const cm = readLineSync.question('Enter the height in Centimeters:  ');
            console.log(cm + 'cms = ' + cenTofeet(cm) + 'ft');
          }

          else {
            console.log("Invalid choice");
          }
          break;

        default:
          console.log('Invalid Option\n');
          break;
      }
      break;

    case 7:
      // simple formula = parseInt(num, baseFrom).toString(baseTo);
      console.log('Do you wanna \n1. enter the bases by yourself ?\n2. Use the available utilities ?\n');
      const inputType = parseInt(readLineSync.question('your choice : '));
      if(inputType === 1) {
        console.log('Enter the bases only');
        let fr = readLineSync.question('convert from base (2/8/10/16) ');
        let to = readLineSync.question('convert to base (2/8/10/16) ');
        fr = Number(fr);
        to = Number(to);
        if( [2,8,10,16].includes(fr) && [2,8,10,16].includes(to)) {
          if (fr !== to) {
          let num = readLineSync.question('Enter the number : ');
          console.log(parseInt(num, fr).toString(to));
          }
          else {
            console.log('You entered same base for conversion.');
          }
        }
        else {
          console.log('Oopsie!! You entered an invalid base value.');
        }
      }
      else if(inputType === 2) {
        console.log('Utilities Available\n1. Decimal <=> Binary\n2. Decimal <=> Octal\n3. Decimal <=> Hex\n4. Binary <=> Octal\n5. Binary <=> Hex\n6. Octal <=> Hex');
        const option = parseInt(readLineSync.question('your choice : '));
        switch (option) {
            case 1:
              const subopt1 = parseInt(readLineSync.question('1. Decimal to Binary\n2. Binary to Decimal\nyour choice : '));
              if(subopt1 === 1) {
                let dec_bin = readLineSync.question('Enter a Decimal number : ');
                dec_bin = Number(dec_bin);
                console.log('Binary equivalent : ' + dec_to_bin_eqv(dec_bin));
              }
              else if(subopt1 === 2) {
                let bin_dec = readLineSync.question('Enter a Binary number : ');
                bin_dec = Number(bin_dec);
                console.log('Decimal equivalent : ' + bin_to_dec_eqv(bin_dec));
              }
              else {
                console.log('Invalid choice');
              }
              break;
            
            case 2:
              const subopt2 = parseInt(readLineSync.question('1. Decimal to Octal\n2. Octal to Decimal\nyour choice : '));
                if(subopt2 === 1) {
                  let dec_oct = readLineSync.question('Enter a Decimal number : ');
                  dec_oct = Number(dec_oct);
                  console.log('Octal equivalent : ' + dec_to_oct_eqv(dec_oct));
                }
                else if(subopt2 === 2) {
                  let oct_dec = readLineSync.question('Enter an Octal number : ');
                  oct_dec = Number(oct_dec);
                  console.log('Decimal equivalent : ' + oct_to_dec_eqv(bin));
                }
                else {
                  console.log('Invalid choice');
                }
                break;
            
            case 3:
              const subopt3 = parseInt(readLineSync.question('1. Decimal to Hex\n2. Hex to Decimal\nyour choice : '));
              if(subopt3 === 1) {
                let dec_hex = readLineSync.question('Enter a Decimal number : ');
                dec_hex = Number(dec_hex);
                console.log('Hex equivalent : 0x' + dec_to_hex_eqv(dec_hex));
              }
              else if(subopt3 === 2) {
                let hex_dec = readLineSync.question('Enter a Hex number : ');
                hex_dec = Number(hex_dec);
                console.log('Decimal equivalent : ' + hex_to_dec_eqv(hex_dec));
              }
              else {
                console.log('Invalid choice');
              }
              break;
            
            case 4:
              const subopt4 = parseInt(readLineSync.question('1. Binary to Octal\n2. Octal to Binary\nyour choice : '));
              if(subopt4 === 1) {
                let bin_oct = readLineSync.question('Enter a Binary number : ');
                bin_oct = Number(bin_oct);
                console.log('Octal equivalent : ' + bin_to_oct_eqv(bin_oct));
              }
              else if(subopt4 === 2) {
                let bin = readLineSync.question('Enter an Octal number : ');
                oct_bin = Number(oct_bin);
                console.log('Binary equivalent : ' + oct_to_bin_eqv(oct_bin));
              }
              else {
                console.log('Invalid choice');
              }
              break;

            case 5:
            const subopt5 = parseInt(readLineSync.question('1. Binary to Hex\n2. Hex to Binary\nyour choice : '));
              if(subopt5 === 1) {
                let bin_hex = readLineSync.question('Enter a Binary number : ');
                bin_hex = Number(bin_hex);
                console.log('Hex equivalent : 0x' + bin_to_hex_eqv(bin_hex));
              }
              else if(subopt5 === 2) {
                let hex_bin = readLineSync.question('Enter a Hex number : ');
                hex_bin = Number(hex_bin);
                console.log('Binary equivalent : ' + hex_to_bin_eqv(hex_bin));
              }
              else {
                console.log('Invalid choice');
              }
              break;

            case 6:
              const subopt6 = parseInt(readLineSync.question('1. Octal to Hex\n2. Hex to Octal\nyour choice : '));
              if(subopt6 === 1) {
                let oct_hex = readLineSync.question('Enter an Octal number : ');
                oct_hex = Number(oct_hex);
                console.log('Hex equivalent : 0x' + oct_to_hex_eqv(oct_hex));
              }
              else if(subopt6 === 2) {
                let hex_oct = readLineSync.question('Enter a Hex number : ');
                hex_oct = Number(hex_oct);
                console.log('Octal equivalent : ' + hex_to_oct_eqv(hex_oct));
              }
              else {
                console.log('Invalid choice');
              }
              break;
        }
      }
      break;
    
    case 0:
      console.log('Thanks for using the App !');
      break;
      
    default:
      console.log('Invalid Option\n');
      break;
  }
  if(selectedUtilityOption === 0) {
    console.log('-----------------------------------------------------');
    break;
  }
  console.log('-----------------------------------------------------');
}
