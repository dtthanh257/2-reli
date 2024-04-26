<template>
  <div>
    <Navbar></Navbar>
    <div class="flex-column">
      <div class="grid-12">
        <div class="home-cate procurement-contain">
          <h2 style="text-align: start; color: black">THU MUA SẢN PHẨM</h2>
          <div class="flex-column align-items-center">
            <div class="flex-row gap-20 w-100" style="margin-bottom: 26px">
              <div class="procurement-img" style="flex: 1"></div>
              <div class="flex-column gap-20 jc-sb" style="flex: 1">
                <Textfield
                  label="TÊN SẢN PHẨM"
                  placeholder="Giới thiệu ngắn gọn về sản phẩm"
                  height="40"
                  style="flex: 0"
                ></Textfield>
                <Textfield
                  label="MÔ TẢ SẢN PHẨM"
                  placeholder="Mô tả ngắn gọn về sản phẩm"
                  height="40"
                  style="flex: 0"
                ></Textfield>
                <div class="flex-column gap-8">
                  <h3 style="font-size: 14.4px">THÊM HÌNH ẢNH ĐƠN HÀNG</h3>
                  <span>Đăng từ 1 - 4 ảnh</span>
                  <div class="flex-row jc-sb">
                    <ImgSelect
                      v-for="index in 4"
                      :key="index"
                      :ref="'imgSelect' + index"
                      @click="openFileInput(index)"
                      size="106"
                    ></ImgSelect>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-row gap-20">
              <div class="flex-column gap-30" style="flex: 1">
                <h3>Thông tin cá nhân</h3>
                <Textfield
                  isV2="true"
                  label="Họ và tên"
                  height="50"
                ></Textfield>
                <div class="flex-row gap-20">
                  <Textfield
                    isV2="true"
                    label="Tỉnh/Thành phố"
                    height="50"
                  ></Textfield>
                  <Textfield
                    isV2="true"
                    label="Quận/Huyện"
                    height="50"
                  ></Textfield>
                </div>
                <Textfield
                  isV2="true"
                  label="Phường/Xã"
                  height="50"
                ></Textfield>
                <Textfield
                  isV2="true"
                  label="Địa chỉ cụ thể"
                  height="50"
                ></Textfield>
                <Textfield
                  isV2="true"
                  label="Số điện thoại"
                  height="50"
                ></Textfield>
                <Textfield
                  isV2="true"
                  label="Thời gian lấy hàng"
                  height="50"
                ></Textfield>
                <div class="flex-column">
                  <Textfield
                    isV2="true"
                    label="Tài khoản ngân hàng"
                    placeholder="Bạn chưa liên kết tài khoản ngân hàng"
                    height="50"
                  ></Textfield>
                  <div class="pfs-note">
                    Lưu ý: 2Reli sẽ thanh toán cho bạn qua Tài khoản ngân hàng.
                  </div>
                </div>
              </div>
              <div class="flex-column gap-18" style="flex: 1">
                <Textfield
                  label="SỐ LƯỢNG SẢN PHẨM"
                  height="40"
                  placeholder="Nhập số lượng sản phẩm"
                  style="flex: 0"
                ></Textfield>
                <div class="flex-column">
                  <Textarea
                    label="KÊ KHAI TÌNH TRẠNG SẢN PHẨM"
                    placeholder="Sản phẩm mới sử dụng một lần..."
                    height="90"
                  ></Textarea>
                  <div class="pfs-note">
                    Lưu ý: 2Reli không thu mua những sản phẩm bị rách, biến
                    dạng, hư hỏng không sử dụng được,...
                  </div>
                </div>
                <div class="flex-column" style="position: relative">
                  <Textfield
                    label="MỨC GIÁ BẠN MONG MUỐN NHẬN ĐƯỢC"
                    placeholder="Nhập giá tiền"
                    width="50"
                    height="40"
                  ></Textfield>
                  <div class="pfs-note">
                    Lưu ý: 2Reli sẽ dựa vào mức giá bạn mong muốn và tình trạng
                    thực tế của sản phẩm để đưa ra mức giá cuối cùng dành cho
                    bạn. Bạn sẽ nhận được tối đa 90% mức giá bạn đề xuất.
                  </div>
                </div>
                <div class="flex-column gap-18">
                  <h3
                    style="
                      font-weight: bold;
                      font-size: 14.4px;
                      line-height: 22px;
                    "
                  >
                    NẾU SẢN PHẨM KHÔNG ĐẠT CHẤT LƯỢNG KIỂM ĐỊNH, BẠN MONG MUỐN:
                  </h3>
                  <div class="input-radio">
                    <input type="radio" name="product-quality" id="" />
                    <label for="">Nhận lại sản phẩm</label>
                    <div class="product-gb">Bạn trả phí ship</div>
                  </div>
                  <div class="input-radio">
                    <input type="radio" name="product-quality" id="" />
                    <label>Quyên góp vào Quỹ 2Reli</label>
                  </div>
                  <div class="pfs-note">
                    Lưu ý: Quỹ 2Reli được xây dựng nhằm mục đích từ thiện cho
                    những người có hoàn cảnh khó khăn.
                  </div>
                </div>
              </div>
            </div>
            <button
              class="procurement-button btn nor-btn"
              style="font-weight: 600"
            >
              <div class="procurement-button-icon icon"></div>
              GỬI YÊU CẦU THU MUA
            </button>
          </div>
        </div>
      </div>
      <div
        class="grid-12"
        style="
          background-color: #f3f2f2;
          padding-bottom: 60px;
          padding-top: 12px;
          margin-top: 60px;
        "
      >
        <div class="precurement-produce flex-column home-cate gap-60">
          <h2>QUY TRÌNH THU MUA CÙNG 2RELI</h2>
          <div class="flex-row gap-20" style="width: 70%; align-items: center">
            <img
              class="precurement-produce-img"
              src="../../../public/img/assets/procduce-package.png"
              alt=""
            />
            <div class="flex-column" style="gap: 16px">
              <h3>Đóng gói sản phẩm</h3>
              <p style="line-height: 20px">
                2Reli sẽ đặt đơn vị vận chuyển đến để lấy hàng vào thời gian phù
                hợp. Bạn hãy ghi mã số đơn hàng trên túi hàng để 2Reli có thể
                nhận diện.
              </p>
            </div>
          </div>
          <div class="flex-row gap-20" style="width: 70%; align-items: center">
            <img
              class="precurement-produce-img"
              src="../../../public/img/assets/procduce-glass.png"
              alt=""
            />
            <div class="flex-column" style="gap: 16px">
              <h3>Kiểm định & Báo giá</h3>
              <p style="line-height: 20px">
                2Reli sẽ kiểm định chất lượng và gửi báo giá cho bạn trong vòng
                5 ngày để bạn kiểm tra và xác nhận.
              </p>
            </div>
          </div>
          <div class="flex-row gap-20" style="width: 70%; align-items: center">
            <img
              class="precurement-produce-img"
              src="../../../public/img/assets/procduce-money-bag.png"
              alt=""
            />
            <div class="flex-column" style="gap: 16px">
              <h3>Thanh toán & Đăng bán</h3>
              <p style="line-height: 20px">
                2Reli sẽ thanh toán hoá đơn ngay tức thì kể từ khi nhận được xác
                nhận từ bạn. Sau đó, sản phẩm của bạn sẽ được 2Reli đăng bán với
                tick xanh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Footer from "@/components/Footer/index.vue";
import Textfield from "@/components/TextField/index.vue";
import Combobox from "@/components/Combobox/index.vue";
import Textarea from "@/components/Textarea/index.vue";
import ImgSelect from "@/components/ImgSellect/index.vue";
const Procument = {
  components: {
    ImgSelect,
    Navbar,
    Textfield,
    Combobox,
    Footer,
    Textarea,
  },
};
export default Procument;
</script>
