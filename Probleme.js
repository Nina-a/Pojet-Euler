function multiple3and5(nombreMax) {
  let somme = 0;
  for (let i = 0; i < nombreMax; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      somme = somme + i;
    }
  }
  return somme;
}

console.log(multiple3and5(1000));

function recFibonacciSequenceSumEvenValue(n1, n2, nombreMax) {
  if (n1 >= nombreMax) {
    console.log(' + ' + nombreMax);
    return nombreMax;
  }
  console.log(' + ' + n1 + ' + ' + n2);
  let valeurCourrante = n1 + n2;
  if (valeurCourrante % 2 == 0) {
    somme = somme + valeurCourrante;
  }
  valeurCourrante +
    recFibonacciSequenceSumEvenValue(n2, valeurCourrante, nombreMax);
  return somme;
}

function FibonacciSequenceSumEvenValue(nombreMax) {
  let value = 1;
  let somme = 0;
  let firstValue = 0;
  let secondValue = 1;
  while (value < nombreMax) {
    value = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = value;
    if (value % 2 == 0) {
      somme = somme + value;
    }
    console.log(value);
  }
  return somme;
}
console.log(FibonacciSequenceSumEvenValue(4000000));

function calculFactoriel(nombre) {
  let result = 1;
  for (let i = 1; i <= nombre; i++) {
    result = result * i;
  }
  return result;
}

function fact3(nb) {
  return Array.from(Array(nb).keys())
    .map((value) => value + 1)
    .reduce((result, nb) => result * nb, 1);
}

function factoriel(i, max) {
  if (i == max) {
    return max;
  }
  return i * factoriel(i + 1, max);
}

function fact(nb) {
  function fact2(i, max) {
    if (i == max) {
      return max;
    }
    return i * fact2(i + 1, max);
  }
  return fact2(1, nb);
}

function PLusGrandFacteurPremier(nombreAFactoriser) {
  let partieEntiereRacineCarre = Math.trunc(Math.sqrt(nombreAFactoriser));
  console.log(partieEntiereRacineCarre);

  for (let i = partieEntiereRacineCarre; i >= 2; i--) {
    if (nombreAFactoriser % i == 0) {
      if (i % 2 == 0);
      else if (i % 3 == 0);
      else if (i % 5 == 0);
      else if (i % 7 == 0);
      else if (i % 11 == 0);
      else if (i % 13 == 0);
      else if (i % 19 == 0);
      else {
        return i;
      }
    }
  }
}

function PLusGrandFacteurPremierBis(nombreAFactoriser) {
  let partieEntiereRacineCarre = Math.trunc(Math.sqrt(nombreAFactoriser));
  console.log(nombreAFactoriser);
  console.log(partieEntiereRacineCarre);
  let facteurs = [];
  let permier = false;
  let pasPremier = false;
  for (let i = 2; i < partieEntiereRacineCarre; i++) {
    if (nombreAFactoriser % i == 0) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          pasPremier = true;
        } else {
          permier = true;
        }
      }
      if (pasPremier == false && permier == true) {
        facteurs.push(i);
      }
    }
  }
  facteurs.sort(function (a, b) {
    return a - b;
  });
  console.log(facteurs);
  return facteurs[facteurs.length - 1];
}
console.log(PLusGrandFacteurPremier(600851475143));

function PlusGrandPalindrome(nombreDeDigit) {
  let nombreMax = Math.pow(10, nombreDeDigit) - 1; // Nombre de digit * 9
  let nombreDeDepart = nombreMax * nombreMax;
  let longueurDuNombre = nombreDeDepart.toString().length;
  let longueurMoitieDuNombre = longueurDuNombre / 2;
  let estUnPalindrome = false;

  for (let i = nombreDeDepart; i > 2; i--) {
    for (let indexDuCaractere = 0; indexDuCaractere <= longueurMoitieDuNombre; indexDuCaractere++) {
        let premierChiffre = indexDuCaractere;
        let deuxiemeChiffre = longueurDuNombre - indexDuCaractere - 1 ;
        let premierChiffreAComparer = i.toString().charAt(premierChiffre);
        let deuxiemeChiffreAComparer = i.toString().charAt(deuxiemeChiffre);

      if (
        premierChiffreAComparer == deuxiemeChiffreAComparer
      ) {
        estUnPalindrome = true;
      } else {
        estUnPalindrome = false;
        break;
      }
    }
    if (estUnPalindrome) {
        for ( let facteur = nombreMax; facteur >= Math.pow(10, nombreDeDigit-1); facteur--  ){
            if ( i%facteur == 0 ){
                let secondFacteur = i/facteur;
                let longueurDuSecondFacteur = secondFacteur.toString().length
                if ( longueurDuSecondFacteur == nombreDeDigit)
                return i
            }
            ;
        }
    }
  }
}

function PlusPetitNombreDivisible(departIntervalle, finIntervalle){
  let EstLePlusPetitNombreDivisble = false
  let nombreATrouver = 0;
  do{
    nombreATrouver = nombreATrouver +2
    for (let i=departIntervalle; i<finIntervalle+1;i++){
      if(nombreATrouver%i == 0)
        EstLePlusPetitNombreDivisble = true;
      else{
        EstLePlusPetitNombreDivisble = false;
        break;
      }
    }
    if (EstLePlusPetitNombreDivisble )
    return nombreATrouver;

  }while(
    EstLePlusPetitNombreDivisble == false
  );
}

function SumSquareDifference(departIntervalle, finIntervalle){
  let sommeDesCarres = 0;
  let carreDesSommes = 0;

  for (let i = departIntervalle; i <= finIntervalle; i++){
    sommeDesCarres = sommeDesCarres + i*i;
  }
  carreDesSommes = ((departIntervalle + finIntervalle)*(finIntervalle/2))*((departIntervalle + finIntervalle)*(finIntervalle/2));
  console.log(carreDesSommes-sommeDesCarres);
  return (carreDesSommes-sommeDesCarres)

}

function nthPrime(nombreAAtteindre){
  let arrayPrime = [2];
  let i = 2;
  let pasPremier = false;
  let permier = false;
  let result = 0;
  while (arrayPrime.length !== nombreAAtteindre){
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        pasPremier = true;
      } else {
        permier = true;
      }
    }
    if (pasPremier == false && permier == true) {
      arrayPrime.push(i);
    }
    i++;
    pasPremier = false;
    permier = false;
  }
  result = arrayPrime[nombreAAtteindre-1]
  return result;
}

function biggestProductOfDigit(NombreDeDigit){
  const digitNumber ="7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

  let greatestProduct = 0;
  for ( let lastDigit = NombreDeDigit ; lastDigit < digitNumber.length ; lastDigit++  ){
    let product = 1 ; 
    for ( let i = 0 ; i < NombreDeDigit ; i++){
      product = product * digitNumber[lastDigit - i]
    }
    product > greatestProduct ? greatestProduct = product : product = product;
  }
  return greatestProduct;
}
export {
  multiple3and5,
  FibonacciSequenceSumEvenValue,
  recFibonacciSequenceSumEvenValue,
  calculFactoriel,
  fact,
  fact3,
  factoriel,
  PLusGrandFacteurPremier,
  PLusGrandFacteurPremierBis,
  PlusGrandPalindrome,
  PlusPetitNombreDivisible,
  SumSquareDifference,
  nthPrime,
  biggestProductOfDigit
};
