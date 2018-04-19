
module.exports = (person) => {

    this.trendAnswers = person.answers.filter(a => a.typeOf === 'TREND');
    this.profileAnswers = person.answers.filter(a => a.typeOf === 'PROFILE');

    return{
        calculateProfile: ()=>{
            const weigthSum = this.profileAnswers.reduce((sum, answer)=>{
                return sum + answer.weight;
            }, 0);
    
            const finalValue = this.profileAnswers.reduce((avg, answer)=>{
                return avg + (answer.value * answer.weight) / weigthSum;
            }, 0);
    
            return finalValue;
        }
    }; 
};