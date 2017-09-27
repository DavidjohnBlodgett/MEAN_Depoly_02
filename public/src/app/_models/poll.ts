export class Poll {
    constructor(
        public name = '',
        public question = '',
        public option1 = {
            content: '',
            votes: 0
        },
        public option2 = {
            content: '',
            votes: 0
        },
        public option3 = {
            content: '',
            votes: 0
        },
        public option4 = {
            content: '',
            votes: 0
        },
    ){}
}
