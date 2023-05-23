// hàm lấy giá trị input
function layGiaTriInput() {
  // lấy dữ liệu người dùng
  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCB = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value * 1;
  var _gioLam = document.getElementById("gioLam").value * 1;

  // kiểm tra người dùng có nhập thông tin hay không
  var valid = true;
  valid =
    kiemTraRong(_taiKhoan, "tbTKNV") &
    kiemTraRong(_hoTen, "tbTen") &
    kiemTraRong(_email, "tbEmail") &
    kiemTraRong(_matKhau, "tbMatKhau") &
    kiemTraRong(_ngayLam, "tbNgay") &
    kiemTraRong(_luongCB, "tbLuongCB") &
    kiemTraRong(_chucVu, "tbChucVu") &
    kiemTraRong(_gioLam, "tbGiolam")
  // Kiểm tra định dạng email
  & kiemTraEmail(_email, "tbEmail")
  if (!valid) {
    return;
  }
  //check chỉ nhập đc số
  valid &= onlyNumber(_luongCB, "tbLuongCB")
  if (!valid) {
    return;
  }

  valid &= onlyNumber(_gioLam, "tbGiolam")
  if (!valid) {
    return;
  }

  // check input tài khoản chỉ nhập trong khoản 4 tới 6 ký tư
  valid &= kiemTraTaiKhoan(_taiKhoan, "tbTKNV")
  if (!valid) {
    return;
  }

 //hàm chỉ nhập chữ ở input hoTen
  valid &= kiemTraHoTen(_hoTen, "tbTen")
  if (!valid) {
    return;
  }

  //hàm chỉ nhập input matKhau
  valid &= kiemTraMatKhau(_matKhau, "tbMatKhau")
  if (!valid) {
    return;
  }


  var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}

// hàm tìm vị trí nhân viên dựa vào taiKhoan
function timViTriNhanVien(taiKhoan) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  return viTri;
}



// hàm gán giá trị input
function ganGiaTriChoInput(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCB,
  chucVu,
  gioLam
) {
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("password").value = matKhau;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luongCB;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

// hàm lưu dữ liệu xuống local
function saveStorage() {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

//hàm lấy dữ liệu lên và sử dụng từ local
function getStorage() {
  var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
  if (arrNhanVienLocal != null) {
    arrNhanVien = arrNhanVienLocal;
  }
}
