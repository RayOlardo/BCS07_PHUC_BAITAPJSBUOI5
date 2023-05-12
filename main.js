//  bài tập 1: Quản lý tuyển sinh
//input: Điểm chuẩn nhập vào ( number), chọn khu vực ưu tiên và đối tượng ưu tiên để cộng điểm, nhập vào điểm 3 môn (number)
// output(string): đậu hoặc rớt
//các bước xử lý

document.getElementById('tinhTongDiem').onclick = function tinhTongDiem(){
    // đi lấy dữ liệu ng dùng nhập vào điểm chuẩn
    // lấy dữ liệu ng dùng chọn đối tượng và khu vực
    var diemChuan = document.getElementById('nhapDiemChuan').value * 1;
    var diemKhuVuc = document.getElementById('nhapKhuVuc').value;
    switch(diemKhuVuc) {
        case 'a': {
            diemKhuVuc = 2;
        } 
        break;
        case 'b': {
            diemKhuVuc = 1;
        }
        break;
        case 'c':{
            diemKhuVuc = 0.5;
        }
        break;
        case 'axx':{
            diemKhuVuc = 0;
        }
        break;
    }
    var diemDoiTuong = document.getElementById('nhapDoiTuong').value;
    switch(diemDoiTuong){
        case '1': {
            diemDoiTuong = 2.5
        }
        break;
        case '2': {
            diemDoiTuong = 1.5;
        }
        break;
        case '3': {
            diemDoiTuong = 1;
        }
        break;
        case 'axx': {
            diemDoiTuong = 0;
        }
        break;
    }
    // lấy dữ liệu 3 môn ng dùng nhập vào
    var monThuNhat = document.getElementById('diemMon1').value * 1;
    var monThuHai = document.getElementById('diemMon2').value * 1;
    var monThuBa = document.getElementById('diemMon3').value * 1;

    // tạo biến tổng điểm và kết quả tổng kết
    var tongDiem =  tinhTong(monThuNhat, monThuHai, monThuBa, diemDoiTuong, diemKhuVuc) ;
    var ketQuaTongKet = "kết quả";
    if(tongDiem < diemChuan) {
        ketQuaTongKet = "bạn đã rớt"
    } else if (tongDiem >= diemChuan) {
        ketQuaTongKet = "bạn đã đậu"        
    }

    //in ra kết quả
    // output(string): đậu hoặc rớt
    document.getElementById('ketQua_1').innerHTML = "bạn được:" + tongDiem  +  ketQuaTongKet;
}
function tinhTong(a, b, c, d, e){
    var tongDiem = a + b + c + d + e;
    return tongDiem;
}

// Bài tập 2: tính tiền điện
//input: nhập vào tên người đóng và số kW điện đã dùng
//output: là họ tên và số tiền khi nhập số điện đã xài
// các bước xử lý
// đặt hàm để xử lý

function tinhTien() {
    const giaTienKw50TroXuong = 500;
    const giaTienKw51Toi100  =  650;
    const giaTienKw101Toi150 = 1100;
    const giaTienKw151TroLen = 1300;
    // đặt biến và lấy dữ liệu họ tên và sớ kW đã xài
    var hoVaTen = String(document.getElementById('nhapTen').value);
    var soDien = document.getElementById('soDien').value * 1;
    var tongTienDien = 0;
    //dùng if else để tính trường hợp kW điện đã xài
    if(soDien == 0){
        alert('ko xài tính tiền chi má')
    }else if(soDien <= 50) {
        tongTienDien = soDien * giaTienKw50TroXuong;
    }else if(soDien > 50 && soDien <=100) {
        tongTienDien = 50 * giaTienKw50TroXuong + ((soDien - 50) * giaTienKw51Toi100)
    }else if(soDien > 100 && soDien <= 150) {
        tongTienDien = (50 * giaTienKw50TroXuong) + (50 * giaTienKw51Toi100) + ((soDien - 100) * giaTienKw101Toi150)
    }else if (soDien > 150){
       tongTienDien = 50 * giaTienKw50TroXuong + (50 * giaTienKw51Toi100) + (50 * giaTienKw101Toi150) + ((soDien - 150) * giaTienKw151TroLen)
    } 
    //in ra kết quả
    //output là họ tên và số tiền khi nhập số điện đã xài
    document.getElementById('ketQua_2').innerHTML = hoVaTen + ' số tiền bạn phải trả: ' + tongTienDien.toLocaleString() + 'vnd'
}


// BÀI TẬP 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
//input: nhập vào họ tên, tổng thu nhập 1 năm, số người phụ thuộc
//output: Xuất ra họ tên và tiền thuế phải đóng
// các bước xử lý:

// Viết hàm tính thu nhập chịu thuế
function thuNhapChiuThue(thuNhap, soNguoi) {
    var thuNhapChiuThueSuat = thuNhap - 4e+6 - (soNguoi * 1.6e+6)
    return thuNhapChiuThueSuat;
}

//gọi DOM .onclick;
function tinhTienThue(){
    //lấy dữ liệu;
    var tenNguoiDong = document.getElementById('tenNguoi').value;
    var tongThuNhap = document.getElementById('tongThuNhap').value * 1;
    var soNguoiPt = document.getElementById('soNguoiPt').value * 1;

    //đặt biến thuNhapThue gán funcion
    var thuNhapThue = thuNhapChiuThue(tongThuNhap, soNguoiPt);
    //output: tienThue;
    var tienThue = 0;
    // Xử lý:

    if(thuNhapThue <= 0 ) {
        alert('hong hợp lệ nha má')
    }else if(thuNhapThue <= 60e+6){
        tienThue =  thuNhapThue * 0.05;
    }else if(thuNhapThue > 60e+6 && thuNhapThue <= 120e+6){
        tienThue = 60e+6 * 0.05 + (thuNhapThue - 60e+6) * 0.1
    }else if(thuNhapThue > 120e+6 && thuNhapThue <= 210e+6){
        tienThue = 60e+6 * 0.15 + (thuNhapThue - 120e+6) *0.15;
    }else if(thuNhapThue > 210e+6 && thuNhapThue <= 384e+6){
        tienThue = 60e+6 * 0.15 + 90e+6 * 0.15 + (thuNhapThue - 210e+6) * 0.2;
    }else if(thuNhapThue > 384e+6 && thuNhapThue <= 624e+6){
        tienThue = 60e+6 * 0.15 + 90e+6 * 0.15 + 174e+6 * 0.2 + (thuNhapThue - 384e+6) * 0.25;
    }else if(thuNhapThue > 624e+6 && thuNhapThue <= 960e+6){
        tienThue = 60e+6 * 0.15 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (thuNhapThue - 624e+6) * 0.3;
    }else if(thuNhapThue > 960e+6){
        tienThue =  60e+6 * 0.15 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (thuNhapThue - 960e+6) * 0.35;
    }
    document.getElementById('ketQua_3').innerHTML = 'Họ tên: ' + tenNguoiDong + '; Số tiền Thuế: ' + tienThue.toLocaleString() + ' VND';

}


/** Bài 4: tính tiền cáp
 * input: mã kh số kênh số kết nối người dùng nhập vào, chọn option doanh nghiệp hoặc nhà dân
 * output: số tiền cáp (number) vs mã khách hàng (string) 
 * Các bước xử lý:
 */

//viết hàm chọn loại khách hàng
function chonLoaiKh(){
    var loaiKH = document.getElementById('mySelect').value * 1;
    if(loaiKH == 3) {
        document.getElementById('soKetNoi').disabled = false;
    } else {
        document.getElementById('soKetNoi').disabled = true;
    }
}

function tinhTienCap(){
    //lấy dữ liệu
    var loaiKH = document.getElementById('mySelect').value * 1;
    var maKH = document.getElementById('maKH').value;
    var soKenhCC = document.getElementById('soKenhCC').value * 1;
    var soKetNoi = document.getElementById('soKetNoi').value * 1;
    //output:
    var tienCap = 0;
    // các bước xử lý
    if(loaiKH == 2){
        tienCap = 4.5 + 20.5 + 7.5 * soKenhCC;
    } else if (loaiKH == 3 && soKetNoi <= 10) {
        tienCap = 15 + 75 + (50 * soKenhCC);
    }else if( loaiKH == 3 && soKetNoi > 10){
        tienCap = 15 + (75 + ((soKetNoi - 10) * 5) + 50 * soKenhCC);
    }
    document.getElementById('ketQua_4').innerHTML = 'Mã khách hàng là: ' + maKH + ' Tiền cáp là: '  + tienCap.toLocaleString() + ' $' ;
}