//Total Sum Finder..
const totalSum = (Array) => {
    let sum = 0
    Array.forEach(element => {
        sum += Number(element.innerText)
    })
    return sum
}
//total chanda Collection....
const totalChanda = document.getElementById('totalChanda')
const chandaArray = document.querySelectorAll('.ch')
totalChanda.innerHTML = totalSum(chandaArray)

//total box Collection....
const boxCollection = document.getElementById('bc')
const boxArray = document.querySelectorAll('.bc')
const oc = document.getElementById('operatorCharge')
oc.innerHTML = totalSum(boxArray) / 1000
const totalOC = document.getElementById('totalOC')
totalOC.innerHTML = (totalSum(boxArray) / 1000) * 200
boxCollection.innerHTML = totalSum(boxArray) - totalOC.innerHTML

//total Finance Help Collection....
const financeHelp = document.getElementById('fh')
const financeHelpArray = document.querySelectorAll('.fh')
financeHelp.innerHTML = totalSum(financeHelpArray)

//lodu patta amount...
const loduPatta = document.getElementById('lodupatta').innerText

//grand total Amount ....
const grandTotalAmount = document.getElementById('totalAmount')
grandTotalAmount.innerHTML = totalSum(chandaArray) + totalSum(boxArray) + totalSum(financeHelpArray) + Number(loduPatta)

//total Expenditure....
const expenditure = document.getElementById('x')
const expenditureArray = document.querySelectorAll('.x')
expenditure.innerHTML = totalSum(expenditureArray)

//grand total Expenditure....
const totalExpenditure = document.getElementById('totalExpenditure')
totalExpenditure.innerHTML = totalSum(expenditureArray)

//finance help 2023
const financeHelp2023 = document.getElementById('financeHelp').innerText

const balance = document.getElementById('balance')
balance.innerText = totalAmount.innerText - totalExpenditure.innerHTML - financeHelp2023
