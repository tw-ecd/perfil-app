
module.exports = (person) => {

    this.trendAnswers = person.answers.filter(a => a.typeOf === 'TREND' && a.weight > 0);
    this.profileAnswers = person.answers.filter(a => a.typeOf === 'PROFILE' && a.weight > 0);

    return {
        calculateProfile: () => {
            const weigthSum = this.profileAnswers.reduce((sum, answer) => {
                return sum + answer.weight;
            }, 0);

            const finalValue = this.profileAnswers.reduce((avg, answer) => {
                return avg + (answer.value * answer.weight) / weigthSum;
            }, 0);

            return Math.round(finalValue);
        },

        calculateTrend: () => {
            let responses = {};

            const occurences = this.trendAnswers.forEach(answer => {
                if (!responses.hasOwnProperty(answer.value)) {
                    responses[answer.value] = answer.weight;
                } else {
                    responses[answer.value] += answer.weight;
                }
            });

            return Object.keys(responses)
                .reduce((a, b) => responses[a] > responses[b] ? a : b);
        }
    };
};