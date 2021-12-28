// Returns a random DNA base (DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G'). )
const returnRandomBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases (mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.)
const newStrand = [];
const mockUpStrand = () => {
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandomBase())
  };
  console.log(newStrand);
  return newStrand
};

//mockUpStrand();

/*.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again. */
let randomNum = Math.floor(Math.random()*1000);
mockUpStrand();
const pAequorFactory = (randomNum, newStrand) => {
  return {
    specimenNum: randomNum,
    dna: newStrand,
    mutate() {
      let i = Math.floor(Math.random()*15);
      console.log(i);
      let randomBase = returnRandomBase();
      let currentBase = newStrand[i];
      if (randomBase != currentBase) {
        this.dna.splice(i,1,randomBase);
      } else if (randomBase = newStrand[i]) {
        randomBase = returnRandomBase(); //what if this returns the same randomBase again - add value of newStrand[i] as a var and set if statement so that randomBase != this variable?
        this.dna.splice(i,1,randomBase);
      } 
        return this.dna;
    },
    compareDNA(obj) {
      for (i=0; i<obj.length; i++) {
        //NEED JS NOTEBOOK FOR EXAMPLE OF ARRAY COMPARISON USING FOR LOOP - believe you compare each item with a for loop within a for loop and then .push to a new array for each matching element
      }
      /*.compareDNA() has one parameter, another pAequor object.

    The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.*/
    }
  }
}

const newOrgA = pAequorFactory(randomNum, newStrand);

//console.log(newOrgA);

console.log(newOrgA.mutate());








