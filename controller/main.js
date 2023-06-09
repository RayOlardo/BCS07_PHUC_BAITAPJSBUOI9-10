// DỰ án quản lý nhân viên
var arrNhanVien = [];

// lấy dữ liệu từ local
getStorage();

// và render lên giao diện
renderGiaoDien(arrNhanVien);

// hàm render giao dien
function renderGiaoDien(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = new NhanVien();
    console.log(nhanVien);
    var nhanVienItem = arr[i];
    console.log(nhanVienItem);
    Object.assign(nhanVien, nhanVienItem);

    var hienThiChucVu = nhanVien.hienThiChucVu();
    // console.log(hienThiChucVu)
    var tongLuong = nhanVien.tinhTongLuongTheoDoiTuong();
    var xepLoaiNV = nhanVien.xepLoaiNhanVien();
    content += `
      <tr>
      <td class="nowrap">
          <span class="mr-1">${nhanVien.taiKhoan}
      </td>
      <td>${nhanVien.hoTen}</td>
      <td>${nhanVien.email}</td>
      <td>${nhanVien.ngayLam}</td>
      <td>${hienThiChucVu}</td>
      <td>${tongLuong.toLocaleString()}</td>
      <td>${xepLoaiNV}</td>
      <td>
      <button onclick="xoaNhanVien('${nhanVien.taiKhoan
          }')" class="btn btn-danger">
          <i class="fa fa-trash"></i>
        </button>
        <button onclick="editNhanVien('${nhanVien.taiKhoan
          }')" class="btn btn-warning" data-toggle="modal"
          data-target="#myModal">
          <i class="fa fa-pencil"></i>
      </button>
      </td>
  </tr>
  `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
// hàm onclick thêm nhân viên
document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = layGiaTriInput();

  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    // console.log(arrNhanVien);

    renderGiaoDien(arrNhanVien);
    saveStorage(arrNhanVien);
    ganGiaTriChoInput(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    )
};
};


// hàm xoá nhân viên
function xoaNhanVien(taiKhoan){
    var index = timViTriNhanVien(taiKhoan);
    if(index != -1){
        arrNhanVien.splice(index, 1)
    }
    renderGiaoDien(arrNhanVien);
}

//hàm edit nhân viên
function editNhanVien(taiKhoan){
    var index = timViTriNhanVien(taiKhoan);
    var nhanVien = arrNhanVien[index];
    console.log(nhanVien);
    ganGiaTriChoInput(
        nhanVien.taiKhoan,
        nhanVien.hoTen,
        nhanVien.email,
        nhanVien.matKhau,
        nhanVien.ngayLam,
        nhanVien.luongCB,
        nhanVien.chucVu,
        nhanVien.gioLam,
    )
    document.getElementById('tknv').readOnly = true;
}

// cập nhật thông tin nhân viên
function capNhatThongTinNhanVien(){
    var nhanVienDaChinhSua = layGiaTriInput();
    var index = timViTriNhanVien(nhanVienDaChinhSua.taiKhoan);
    arrNhanVien[index] = nhanVienDaChinhSua;
    saveStorage(arrNhanVien);
    renderGiaoDien(arrNhanVien);
    alert('Cập nhật thành công')
    ganGiaTriChoInput(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    )
    
}
//hàm đóng bảng log in 
function dongBangLogIn(){
    ganGiaTriChoInput(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    )
    document.getElementById('tknv').readOnly = false;

}
document.getElementById('btnCapNhat').onclick = capNhatThongTinNhanVien;


//hiển thị mật khẩu
var passwordInput = document.getElementById('password');
var showPassword = document.getElementById('showPass');

showPassword.addEventListener("click", function(){
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        showPassword.innerHTML = '<i class="fa fa-eye-slash"></i>';
    } else{
        passwordInput.type = "password";
        showPassword.innerHTML = '<i class="fa fa-eye"></i>';
    }
});

// hàm tìm sinh viên
document.getElementById('btnTimNV').onclick = function(){
    // lấy dữ liệu người dùng nhập 
    var nguoiDungSearch = document.getElementById('searchName').value;
    var arrSearch = [];
    for (var i = 0; i < arrNhanVien.length; i++){
        var xepLoaiNguoiDungNhap = arrNhanVien[i]
        console.log(xepLoaiNguoiDungNhap);
        if(xepLoaiNguoiDungNhap.xepLoaiNhanVien() == nguoiDungSearch){
            arrSearch.push(arrNhanVien[i])
        }else if(nguoiDungSearch == '') {
            arrSearch.push(arrNhanVien[i]);
        }
    }
    renderGiaoDien(arrSearch);
}