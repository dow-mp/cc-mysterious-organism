// Returns a random DNA base (DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G'). )
const returnRandomBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases (mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.)

const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandomBase())
  };
  return newStrand
};

//mockUpStrand();

/*.mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again. */
function randomNum() {
  return Math.floor(Math.random()*1000);
};

const pAequorFactory = (randomNum, dnaArray) => {
  return {
    specimenNum: randomNum,
    dna: dnaArray,
    mutate() {
      let i = Math.floor(Math.random()*15);
      console.log(i);
      let randomBase = returnRandomBase();
      let currentBase = this.dna[i];
      if (randomBase != currentBase) {
        this.dna.splice(i,1,randomBase);
      } else if (randomBase = this.dna[i]) {
        randomBase = returnRandomBase(); //what if this returns the same randomBase again - add value of newStrand[i] as a var and set if statement so that randomBase != this variable?
        this.dna.splice(i,1,randomBase);
      } 
        return this.dna;
    },
    compareDNA(otherObj) {
      const mutualDNA = [];
      let count = 0;
      for (let i=0; i<15; i++) {
        if (otherObj.dna[i] === this.dna[i]) {
          mutualDNA.push(this.dna[i]);
          count++
        }
      };
      //console.log(otherObj.dna, this.dna)
      //console.log("Specimen 1 and specimen 2 have ", (count/15)*100, "% DNA in common.");
      return mutualDNA;
    },
    willLikelySurvive() { 
      let count = 0;
      for (let i=0; i<15; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          count++;
        };
      };
      //console.log((count/15)*100);
      if (((count/15)*100) >= 60) {
      return true
      } else {
        return false
      }
    }
  }
}

const newOrgA = pAequorFactory(randomNum(), mockUpStrand());
const newOrgB = pAequorFactory(randomNum(), mockUpStrand());

//console.log(newOrgA);
//console.log(newOrgB);

//console.log(newOrgA.mutate());
//console.log(newOrgA.compareDNA(newOrgB));

//console.log(newOrgA.willLikelySurvive());
//console.log(newOrgB.willLikelySurvive());








