const student = {
    id: 101,
    balance: 5000,
    name: 'kibria',
    major: 'mathematics',
    subject: ['english', 'economics', 'calculus'],
    bestFriend:
    {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function(){   // 'takeExam' is function name
        console.log(this.name, 'is taking exam');
    },

    treatDey: function(expense, boksis){
        this.balance = this.balance - expense - boksis;
        return this.balance
    }
}


student.takeExam()
const remaining = student.treatDey(900, 100);
const remaining2 = student.treatDey(100, 100)
console.log(remaining2)