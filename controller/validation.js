// hàm kiểm tra xem người dùng có nhập dữ liệu hay không
function kiemTraRong(checkInput, idThongBao) {
  //check xem input đó có đc nhập dữ liệu vô hay không
  //nếu không có thì báo lỗi thì trả về 1 kết quả false, nếu có thì trả về true
  if (checkInput) {
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "inline";
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập trường này";
    return false;
  }
}

// hàm check email
function kiemTraEmail(checkInput, idThongBao) {
  // kiểm tra email bằng regex
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //mình sẽ sử dụng phương thức .test để ktra xem email nhập vào có phù hợp hay không
  //khi sử dụng .test sẽ trả về giá trị true hoặc false
  var hopLe = regexEmail.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).style.display = "none";
    return true;
  } else {
    document.getElementById(idThongBao).style.display = "inline";
   document.getElementById(idThongBao).style.display = "inline";
    return false;
  }
}

//hàm check chỉ nhập số
function onlyNumber(checkInput, idThongBao) {
  var numberRegex =
  /^\d+$/;
//   // Validate numbers
//   numberRegex.test("121220.22"); // Returns true
//   numberRegex.test("Hey12122022x"); // Returns false
  var hopLe = numberRegex.test(checkInput);
  if(hopLe){
    document.getElementById(idThongBao).style.display = "none";
    return true;
  }else {
    document.getElementById(idThongBao).style.display = "inline";
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập số";
    return false;
  }
}


//hàm giới hạn ký tự ở tài khoản
function kiemTraTaiKhoan(checkInput, idThongBao){
  var regexString =
  /^[a-zA-Z]{4,6}$/;
  var hopLe = regexString.test(checkInput);
  if(hopLe) {
    document.getElementById(idThongBao).style.display = "none";
    return true;
  }else {
    document.getElementById(idThongBao).style.display = "inline";
    document.getElementById(idThongBao).innerHTML = "vui lòng nhập đúng định dạng"
    return false;
  }
}



//hàm chỉ nhập chữ ở input hoTen
function kiemTraHoTen(checkInput, idThongBao){
  var regexString =
  /^[A-Za-z]+$/;
  var hopLe = regexString.test(checkInput);
  if(hopLe) {
    document.getElementById(idThongBao).style.display = "none";
    return true;
  }else {
    document.getElementById(idThongBao).style.display = "inline";
    document.getElementById(idThongBao).innerHTML = "vui lòng nhập đúng định dạng"
    return false;
  }
}


//hàm chỉ nhập input matKhau
function kiemTraMatKhau(checkInput, idThongBao){
  var regexString =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,10}$/;
  var hopLe = regexString.test(checkInput);
  if(hopLe) {
    document.getElementById(idThongBao).classList.remove('d-inline')
    document.getElementById(idThongBao).innerHTML = "";
    return true;
  }else {
    document.getElementById(idThongBao).style.color = "red";
    return false;
  }
}

//hàm kiểm tra người dùng nhập lương cơ bản
function kiemTraNhapLuong(checkInput, idThongBao){
  var regexSalary = 
  /^(1\d{6}|20000000)$/;
  var hopLe = regexSalary.test(checkInput);
  if(hopLe){
    document.getElementById(idThongBao).style.display = "none";
    return true;
  }else{
    document.getElementById(idThongBao).style.display = "inline";
    document.getElementById(idThongBao).innerHTML = "vui lòng nhập đúng"
    return false;
  }

}


//hàm kiểm tra người dùng nhập ngayLam đúng định dạng
function kiemTraNhapNgayLam(checkInput, idThongBao){
  var regexDate = 
  /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;
  var hopLe = regexDate.test(checkInput);
  if(hopLe){
    document.getElementById(idThongBao).style.display = "none";
    return true;
  }else{
    document.getElementById(idThongBao).style.display = "inline";
    document.getElementById(idThongBao).innerHTML = "vui lòng nhập đúng định dạng"
    return false;
  }

}


//hàm kiểm tra người dùng nhập gioLam
function kiemTraNhapGioLam(checkInput, idThongBao){
  var regexWorkTime = 
  /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/;
  var hopLe = regexWorkTime.test(checkInput);
  if(hopLe){
    document.getElementById(idThongBao).style.display = "none";
    return true;
  }else{
    document.getElementById(idThongBao).style.display = "inline";
    document.getElementById(idThongBao).innerHTML = "vui lòng nhập đúng"
    return false;
  }

}


