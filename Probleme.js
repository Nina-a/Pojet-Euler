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
  SumSquareDifference
};
