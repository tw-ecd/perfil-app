
module.exports = class ResultService {

    constructor(person) {
        this.trendAnswers = person.answers.filter(a => a.typeOf === 'TREND' && a.weight > 0);
        this.profileAnswers = person.answers.filter(a => a.typeOf === 'PROFILE' && a.weight > 0);

        this.profileMatrix = {
            'EVO_INTER': ['Engenheira de Hábitos', 'Geradora de Interações'],
            'RISE_PLAT': ['Criadora de Possibilidades', 'Formadora de Plataformas'],
            'SEC_PRIV': ['Mestra dos Números', 'Guardiã dos Dados'],
            'HUMAN_AUG': ['Realizadora de Possibilidades', 'Criadora do Novo'],
            'RISE_ROBOT': ['Líder das Máquinas', 'Mestra de Robôs'],
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
            'name': this.profileMatrix[trend][profile],
            'trend': trend,
            'profile': profile
        };
    }

};