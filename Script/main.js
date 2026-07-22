function showOnly(id){
    const addMoneySh = document.getElementById('add-money-sh');
    const cashOutSh = document.getElementById('cash-out-sh');
    const transferMoneySh = document.getElementById('transfer-Money-sh');
    const payBillSh = document.getElementById('pay-Bill-sh');
    const latestPaymentSh = document.getElementById('latest-payment-sh');

    addMoneySh.classList.add('hidden');
    cashOutSh.classList.add('hidden');
    transferMoneySh.classList.add('hidden');
    payBillSh.classList.add('hidden');
    latestPaymentSh.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}