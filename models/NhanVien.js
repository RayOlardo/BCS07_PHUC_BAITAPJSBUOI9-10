function NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam,
)
{
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    //gọi hàm hiển thị chức vụ 
    this.hienThiChucVu = function (){
        var chucVuHT = '';
        if(this.chucVu == 0){
            chucVuHT = '';
        }else if(this.chucVu == 1){
            chucVuHT = 'Sếp'
        } else if(this.chucVu == 2){
            chucVuHT = 'Trưởng phòng'
        } else if(this.chucVu == 3){
            chucVuHT = 'Nhân viên'
        }
        return chucVuHT;
    }

    //gọi hàm tính tổng lương cho đối tượng nhân viên;
   this.tinhTongLuongTheoDoiTuong = function (){
        var tongLuong = 0;
        if(this.chucVu == 1 ){
            tongLuong = this.luongCB * 3;
        } else if (this.chucVu == 2){
            tongLuong = this.luongCB * 2;
        }else if (this.chucVu == 3){
            tongLuong = this.luongCB 
        }
        return tongLuong
    }

    //gọi hàm xếp loại nhân viên
    this.xepLoaiNhanVien = function(){
        var xepLoai = '';
        if(this.gioLam >= 192 && this.chucVu ==3){
            xepLoai = 'Nhân viên xuất sắc'
        }else if (this.gioLam >= 176 && this.chucVu == 3){
            xepLoai = 'Nhân viên giỏi';
        }else if(this.gioLam >= 160 && this.chucVu == 3){
            xepLoai = 'Nhân viên khá';
        }else if(this.gioLam < 160 && this.chucVu == 3){
            xepLoai = 'Nhân viên trung bình';
        }else if(this.chucVu != 3){
            xepLoai = 'Không phải nhân viên';
        }
        return xepLoai;
    }


}