const onCalkButtonClick = () => {
    let sum1 = document.getElementById('sum1').value
    let sum2 = document.getElementById('sum2').value
    let summ = +sum1 + +sum2
    document.getElementById('calcResult').innerText = summ
}
