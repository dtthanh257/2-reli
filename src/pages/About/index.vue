<template>
  <div class="about-page">
    <Navbar></Navbar>
    <div class="home-intro flex-row justify-content-center">
      <div class="home-about-title icon"></div>

      <div class="home-about-img icon"></div>
    </div>
    <div class="about-cont grid-12">
      <div class="home-cate">
        2Reli là nền tảng thương mại điện tử chuyên về các sản phẩm thời trang
        secondhand. Tại đây, chúng tôi xây dựng các tính năng nhằm phục vụ cho
        quá trình mua bán các mặt hàng secondhand. Với đội ngũ phát triển dày
        dặn kinh nghiệm cùng mạng lưới đối tác rộng lớn, chúng tôi mong muốn sẽ
        đem đến cho khách hàng những trải nghiệm mua sắm tiện lợi, nhanh chóng
        và đảm bảo chất lượng.
      </div>
    </div>
    <div
      class="home-intro flex-row justify-content-center"
      style="background-color: #f2f2f2; margin: 0; padding: 72px 0"
    >
      <div class="home-about-img2 icon"></div>
      <div class="home-about-title2 icon"></div>
    </div>
    <div class="grid-12">
      <div class="flex-column home-cate align-items-center">
        <div class="about-title">
          Hãy cùng khám phá 3 tính năng dọn tủ của 2Reli
        </div>
        <div class="about-divider"></div>
        <div class="flex-row about-discover gap-32">
          <div class="flex-column align-items-start about-discover-text flex-6">
            <h1>1. Mua bán</h1>
            <h2>Bạn muốn tùy ý bán lại sản phẩm theo mức giá mong muốn?</h2>
            <p>
              Vậy thì 2Reli chính là nơi lý tưởng để bạn “dọn tủ đồ” của mình,
              giúp bạn kết nối với cộng đồng người mua để món đồ của bạn không
              bị bỏ quên một cách lãng phí.
            </p>
          </div>
          <div class="about-discover-img1 icon flex-4"></div>
        </div>
        <div class="flex-row about-discover gap-32">
          <div class="about-discover-img2 icon flex-4" style="flex: 4"></div>
          <div class="flex-column align-items-start about-discover-text flex-6">
            <h1>2. Thu mua</h1>
            <h2>Bạn đăng bán sản phẩm nhưng mãi “không có ai hốt”?</h2>
            <p>
              Với tính năng thu mua, 2Reli sẽ kiểm định sản phẩm và thanh toán
              cho bạn ngay tức thì. Ngoài ra, các sản phẩm của bạn cũng sẽ được
              chúng mình “sửa sang” sao cho thật “xinh đẹp” để sẵn sàng cho một
              cuộc hành trình mới.
            </p>
          </div>
        </div>
        <div class="flex-row about-discover gap-32">
          <div class="flex-column align-items-start about-discover-text flex-6">
            <h1>3. Thu gom</h1>
            <h2>
              Quần áo của bạn đã bị “phai mờ” đi theo thời gian? Hay chỉ đơn
              giản là bạn mong muốn đem đến giá trị cho xã hội?
            </h2>
            <p>
              Vậy thì 2Reli chính là nơi lý tưởng để bạn “dọn tủ đồ” của mình,
              giúp bạn kết nối với cộng đồng người mua để món đồ của bạn không
              bị bỏ quên một cách lãng phí.
            </p>
          </div>
          <div class="about-discover-img3 icon flex-4"></div>
        </div>
      </div>
    </div>
    <div class="grid-12 bg-pri about-policy">
      <div class="home-cate flex-column">
        <h2>BẠN CỨ YÊN TÂM MUA BÁN</h2>
        <div class="flex-row jc-sb gap-128">
          <div class="flex-column align-items-center gap-32">
            <h3 style="white-space: nowrap">THANH TOÁN</h3>
            <div class="about-policy-img1 icon"></div>
            <div class="flex-column" style="gap: 4px">
              <p style="white-space: nowrap; padding: 0">Chính sách đổi trả</p>
              <p style="white-space: nowrap; padding: 0">
                bảo vệ quyền lợi của bạn
              </p>
            </div>
          </div>
          <div class="flex-column align-items-center gap-32">
            <h3 style="white-space: nowrap">KIỂM ĐỊNH</h3>
            <div class="about-policy-img2 icon"></div>
            <div class="flex-column" style="gap: 4px">
              <p style="white-space: nowrap; padding: 0">
                2Reli đảm bảo chất lượng
              </p>
              <p style="white-space: nowrap; padding: 0">
                của món đồ bằng tick xanh
              </p>
            </div>
          </div>
          <div class="flex-column align-items-center gap-32">
            <h3 style="white-space: nowrap">DỌN TỦ DỄ DÀNG</h3>
            <div class="about-policy-img3 icon"></div>
            <div class="flex-column" style="gap: 4px">
              <p style="white-space: nowrap; padding: 0">
                2Reli nhận đồ của bạn
              </p>
              <p style="white-space: nowrap; padding: 0">
                ở hầu hết tình trạng
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
import Navbar from "../../components/Navbar/index.vue";
import Footer from "../../components/Footer/index.vue";
import Product from "../../components/Product/index.vue";
const About = {
  components: {
    Navbar,
    Footer,
    Product,
  },
};
export default About;
</script>
