
module.exports = class ResultService {

    constructor(person) {
        this.trendAnswers = person.answers.filter(a => a.typeOf === 'TREND' && a.weight > 0);
        this.profileAnswers = person.answers.filter(a => a.typeOf === 'PROFILE' && a.weight > 0);

        this.profileMatrix = {
            'EVO_INTER': ['ENGENHEIRA_HABITOS', 'GERADORA_INTERACOES'],
            'RISE_PLAT': ['CRIADORA_POSSIBILIDADES', 'FORMADORA_PLATAFORMAS'],
            'SEC_PRIV': ['MESTRA_NUMEROS', 'GUARDIA_DADOS'],
            'HUMAN_AUG': ['REALIZADORA_POSSIBILIDADES', 'CRIADORA_NOVO'],
            'RISE_ROBOT': ['LIDER_MAQUINAS', 'MESTRA_ROBOS'],
        };
    }

    calculateProfile() {
        const weigthSum = this.profileAnswers.reduce((sum, answer) => {
            return sum + answer.weight;
        }, 0);

        const finalValue = this.profileAnswers.reduce((avg, answer) => {
            return avg + (answer.value * answer.weight) / weigthSum;
        }, 0);

        return Math.round(finalValue);
    }

    calculateTrend() {
        let responses = {};

        this.trendAnswers.forEach(answer => {
            if (!responses.hasOwnProperty(answer.value)) {
                responses[answer.value] = answer.weight;
            } else {
                responses[answer.value] += answer.weight;
            }
        });

        return Object.keys(responses)
            .reduce((a, b) => responses[a] > responses[b] ? a : b);
    }

    calculateAuraProfile() {
        const trend = this.calculateTrend();
        const profile = this.calculateProfile();

        return {
            'identifier': this.profileMatrix[trend][profile],
            'trend': trend,
            'profile': profile
        };
    }

};