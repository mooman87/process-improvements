
//This will be the script to return case notes depending on the condition selected



//This will be the script to return PA verbiage depending on the condition selected

// function paVerbiage() {
//     document.addEventListener('click', isPaOnFile[2]);
// }
// paVerbiage();


let cptbillablecoin = 'CPT code 96372 is valid and billable with a XX% coinsurance' + `<br>` + 'CPT code 96401 is valid and billable with a XX% coinsurance';
let cptbillablecpa = 'CPT code 96372 is valid and billable with a XX% copay.' + `<br>` + 'CPT code 96401 is valid and billable with a XX% copay.';
let insertblurbs = '*Insert prior authorization blurb*' + `<br>` + '*Insert case manager details*';
let oopmet = cptbillablecoin + `<br>` + 'The patient has met their OOP; therefore, the patient is covered at 100%.' + `<br>` + insertblurbs;
let samecpa = cptbillablecpa + `<br>` + 'Only one copay applies per date of service. Related to all billable codes.' + `<br>` + insertblurbs;
let multicpa = cptbillablecpa + `<br>` + 'Only one copay applies per date of service. The highest copay will apply.' + `<br>` + insertblurbs;
let multiptres = cptbillablecpa + `<br>` +  'Only one copay applies per date of service. The J-Code is covered separately.' + `<br>` + insertblurbs;
let dednotmet = cptbillablecoin + ' after the deductible has been met' + `<br>` + insertblurbs;



let payers = [
{
    _id: 0,
    payerName: '1199',
    isCommercial: true,
    isPharmaBenefit: true,
    isJCodeCovered: true,
    isPaReq: true,
    isStepReq: false,
},

{
    _id: 1,
    payerName: '4D Pharmacy Management',
    isCommercial: true,
    isPharmaBenefit: null,
    isMedBenefit: null,
},

{
    _id: 2, 
    payerName: 'AARP',
    isCommercial: true,
    isPharmaBenefit: true,
    isMedBenefit: false,
},

{
    _id: 3, 
    payerName: 'Accountable Care Mgt. Group',
    isCommercial: true,
    isPharmaBenefit: null,
    isMedBenefit: null,
},

{
    _id: 4, 
    payerName: 'ACI',
    isCommercial: true,
    isPharmaBenefit: null,
    isMedBenefit: null,
},
  ]
