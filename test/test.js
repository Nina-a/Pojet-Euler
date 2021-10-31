import { multiple3and5,
  FibonacciSequenceSumEvenValue,
  calculFactoriel,
  fact,
  fact3,
  factoriel,
  recFibonacciSequenceSumEvenValue,
  PLusGrandFacteurPremier,
  PLusGrandFacteurPremierBis,
  PlusGrandPalindrome,
  PlusPetitNombreDivisible,
  SumSquareDifference,
  nthPrime,
  biggestProductOfDigit,
  specialPythagoreanTriplet
 } from '../Probleme.js';
  
import * as assert from 'assert';
import { expect } from 'chai';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Multiple de 3 et 5', function () {
  it(`la somme des multiple de 3 et 5 des nombres <10 est de 23`, function () {
    expect(multiple3and5(10)).to.be.equal(23);
  });
});

describe('Somme des nombres paires de la suite de Fibonacci', function () {
  it('la suite de fibonacci', function () {
    expect(FibonacciSequenceSumEvenValue(89)).to.be.equal(44);
  });
  it('la suite de fibonacci somme', function () {
    expect(FibonacciSequenceSumEvenValue(4000000)).to.be.equal(4613732);
  });
  it('la suite de fibonaccirec somme', function () {
    expect(recFibonacciSequenceSumEvenValue(1,2,89)).to.be.equal(44);
  });
});

describe('Calcul factoriel', function () {
  it('factoriel 7 = 5040' , function () {
    expect(factoriel(1, 7)).to.be.equal(5040);
  });
});

describe('PLus grand facteur premier', function () {
  it('Plus grand facteur de 13195 est 29', function () {
    expect(PLusGrandFacteurPremier(13195)).to.be.equal(29)
  });
  it('Plus grand facteur de 13195 est 29 pour le bis', function () {
    expect(PLusGrandFacteurPremierBis(600851475143 )).to.be.equal(6857)
  });
});

describe('le plus grand palindrome', function () {
  it ('Le plus grand palindrome de produit de 2 digit est de 9009', function (){
    expect(PlusGrandPalindrome(2)).to.be.equal(9009)
  })
  it ('Le plus grand palindrome de produit de 3 digit est de 9009', function (){
    expect(PlusGrandPalindrome(3)).to.be.equal(906609)
  })
})

describe('le plus petit nombre divisible par un intervalle', function () {
  this.timeout(20000);
  it ('Le plus nombre divisible par les nombres de 1 à 10', function (){
    expect(PlusPetitNombreDivisible(1,10)).to.be.equal(2520)
  })
  it ('Le plus nombre divisible par les nombres de 1 à 20', function (){
    expect(PlusPetitNombreDivisible(1,20)).to.be.equal(232792560)
  })
})

describe('Sum square difference', function() {
  it('sum square difference between 1 to 10',  function(){
    expect(SumSquareDifference(1,10)).to.be.equal(2640)
  })
  it('sum square difference between 1 to 100',  function(){
    expect(SumSquareDifference(1,100)).to.be.equal(25164150)
  })
})

describe('le nième premier', function() {
  this.timeout(40000);
  it('le sixième nombre premier est 13',  function(){
    expect(nthPrime(6)).to.be.equal(13)
  })
  it('le dix mille et unième nombre premier',  function(){
    expect(nthPrime(10001)).to.be.equal(104743)
  })
})

describe('Le plus grand produit d\'un nombre de digit donné' ,function(){
  it('le produit le plus grand avec 4 digit successifs', function(){
    expect(biggestProductOfDigit(4)).to.be.equal(5832)
  })
  it('le produit le plus grand avec 13 digit successifs', function(){
    expect(biggestProductOfDigit(13)).to.be.equal(23514624000)
  })
})

describe('Le triplet de Pythagore' ,function(){
   it('le triplet de Pythagore pour une somme de 12', function(){
     expect(specialPythagoreanTriplet(12)).to.be.equal(60)
   })
  it('le triplet de Pythagore pour une somme de 1000', function(){
    expect(specialPythagoreanTriplet(1000)).to.be.equal(31875000)
  })
})  