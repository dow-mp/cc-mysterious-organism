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
      if (randomBase != newStrand[i]) {
        this.dna.splice(i,1,randomBase);
      } else if (randomBase = newStrand[i]) {
        randomBase = returnRandomBase();
        this.dna.splice(i,1,randomBase);
      } 
        return this.dna;
    }
  }
}

const newOrgA = pAequorFactory(randomNum, newStrand);

//console.log(newOrgA);

console.log(newOrgA.mutate());








