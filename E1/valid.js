function valid() {
    let f=document.myform.fn.value;
    let l=document.myform.ln.value;
    if ((f=="")+(l=="")) {
        alert("Enter the text field: ");
        return false;
    }
    let d=document.myform.dob.value;
    if (d=="") {
        alert("Select Date Of Birth :");
        return false;
    }
    let e=document.myform.email.value;
    if (e=="") {
        alert("Enter Email Id : ");
        return false;
    }
    let p=document.myform.pa.value;
    if ((p="")+(p.length<8)) {
        alert("Length of password must be greater than 8 ");
        return false;
    }
    let cp=document.myform.cpa.value;
    if (cp==p) {
        alert("Password mismatch :");
        return false;        
    }
    let pn=document.myform.pno.value;
    if (pn=="") {
        alert("Enter a phone number :");
        return false;
    }
    let g=document.myform.gender.value;
    if (g==true) {
        alert("Select Gender : ");
        return false;
    }
    let a=document.myform.add.value;
    if ((a="")+(a.length<10)){
        alert("Enter full Address : ")
    }
    return true;
}