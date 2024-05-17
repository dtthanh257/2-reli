<template>
  <div>
    <Navbar></Navbar>
    <Popup
      style="z-index: 100"
      v-if="this.validate == true"
      :title="this.popup.title"
      :content="this.popup.content"
      :btn="this.popup.btn"
      :success="this.popup.success"
      @close="this.closePopup"
      @action="this.reloadPage"
    ></Popup>
    <div class="grid-12" style="background-color: #f5f5f5">
      <div class="home-cate profile-page">
        <h2>Hồ sơ của tôi</h2>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        <div class="divider" style="margin-bottom: 48px"></div>
        <div class="flex-column align-items-center gap-28">
          <Textfield
            label="Tên đăng nhập"
            :isReadOnly="isReadonly"
            v-model:input="this.userInfo.nickname"
            isV3="true"
            height="40"
          ></Textfield>
          <Textfield
            v-model:input="this.userInfo.name"
            label="Họ và tên"
            isV3="true"
            height="40"
          ></Textfield>
          <Textfield
            v-model:input="this.userInfo.email"
            label="Email"
            isV3="true"
            height="40"
          ></Textfield>
          <Textfield
            v-model:input="this.userInfo.phone_number"
            isReadonly="true"
            label="Số điện thoại"
            isV3="true"
            height="40"
          ></Textfield>
          <Textfield
            v-model:input="this.userInfo.province"
            label="Tỉnh/Thành phố"
            isV3="true"
            :items="date"
          ></Textfield>
          <Textfield
            v-model:input="this.userInfo.district"
            label="Quận/Huyện"
            isV3="true"
          ></Textfield>
          <Textfield
            v-model:input="this.userInfo.ward"
            label="Phường/Xã"
            isV3="true"
          ></Textfield>
          <Textfield
            v-model:input="this.userInfo.address"
            label="Địa chỉ cụ thể"
            isV3="true"
            height="40"
          ></Textfield>
          <div class="flex-row sex-option-container gap-28">
            <label for="">Giới tính</label>
            <div class="flex-row gap-8">
              <input
                type="radio"
                name="sex"
                id=""
                value="0"
                v-model="this.userInfo.gender"
              />
              Nam
            </div>
            <div class="flex-row gap-8">
              <input
                type="radio"
                name="sex"
                id=""
                value="1"
                v-model="this.userInfo.gender"
              />
              Nữ
            </div>
            <div class="flex-row gap-8">
              <input
                type="radio"
                name="sex"
                id=""
                value="2"
                v-model="this.userInfo.gender"
              />
              Khác
            </div>
          </div>
          <div class="profile-dob flex-row">
            <label>Ngày sinh</label>
            <Combobox
              isV3="true"
              width="120"
              :items="date"
              @input-value-changed="handleDate"
              :fetchValue="userDate"
              @fetch-data="fetchDate"
            ></Combobox>
            <Combobox
              isV3="true"
              width="120"
              :items="month"
              @input-value-changed="handleMonth"
              :fetchValue="userMonth"
            ></Combobox>
            <Combobox
              isV3="true"
              width="120"
              :items="year"
              @input-value-changed="handleYear"
              :fetchValue="userYear"
            ></Combobox>
          </div>
          <div class="profile-save-btn">
            <button class="pri-btn nor-btn" @click="updateProfile(this.userId)">
              Lưu
            </button>
          </div>
          <div class="flex-row jc-sb w-100">
            <h2>Tài khoản ngân hàng của tôi</h2>
            <a href="/profile">
              <button class="pri-btn nor-btn">
                Thêm tài khoản ngân hàng
              </button></a
            >
          </div>
          <div class="divider" style="margin: 0"></div>
          <span>Bạn chưa có tài khoản ngân hàng.</span>
        </div>
        <div class="profile-set-ava">
          <div
            class="flex-column"
            style="
              max-width: 204px;
              justify-content: center;
              align-items: center;
              gap: 20px;
            "
          >
            <div class="profile-ava">
              <img
                id="avaDefault"
                src="../../../public/img/assets/ava-acc-icon.png"
                alt=""
              />
              <img
                id="newAva"
                :src="imageUrl"
                alt=""
                style="display: none; object-fit: cover"
              />
            </div>
            <input
              type="file"
              ref="fileInput"
              style="display: none"
              @change="handleImageChange"
            />
            <button @click="openFileInput">Chọn ảnh</button>
            <div class="flex-column gap-8">
              <label>Dung lượng file tối đa 1MB.</label>
              <label>Định dạng .JPEG, .PNG</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer style="margin: 0; background: #f5f5f5; padding: 80px 0"></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar/index.vue";
import Textfield from "@/components/TextField/index.vue";
import Combobox from "@/components/Combobox/index.vue";
import Footer from "@/components/Footer/index.vue";
import UserService from "@/views/userServices";
import moment from "moment";
import Popup from "../../components/Popup/index.vue";
export default {
  components: {
    Navbar,
    Textfield,
    Combobox,
    Footer,
    Popup,
  },

  name: "ProfilePage",
  data() {
    return {
      imageUrl: "",
      userDate: "",
      userMonth: "",
      userYEar: "",
      dob: "",
      date: [
        { id: 1, name: 1 },
        { id: 1, name: 2 },
        { id: 1, name: 3 },
        { id: 1, name: 4 },
        { id: 1, name: 5 },
        { id: 1, name: 6 },
        { id: 1, name: 7 },
        { id: 1, name: 8 },
        { id: 1, name: 9 },
        { id: 1, name: 10 },
        { id: 1, name: 11 },
        { id: 1, name: 12 },
        { id: 1, name: 13 },
        { id: 1, name: 14 },
        { id: 1, name: 15 },
        { id: 1, name: 16 },
        { id: 1, name: 17 },
        { id: 1, name: 18 },
        { id: 1, name: 19 },
        { id: 1, name: 20 },
        { id: 1, name: 21 },
        { id: 1, name: 22 },
        { id: 1, name: 23 },
        { id: 1, name: 24 },
        { id: 1, name: 25 },
        { id: 1, name: 26 },
        { id: 1, name: 27 },
        { id: 1, name: 28 },
        { id: 1, name: 29 },
        { id: 1, name: 30 },
        { id: 1, name: 31 },
      ],
      month: [
        { id: 1, name: 1 },
        { id: 1, name: 2 },
        { id: 1, name: 3 },
        { id: 1, name: 4 },
        { id: 1, name: 5 },
        { id: 1, name: 6 },
        { id: 1, name: 7 },
        { id: 1, name: 8 },
        { id: 1, name: 9 },
        { id: 1, name: 10 },
        { id: 1, name: 11 },
        { id: 1, name: 12 },
      ],
      year: [
        { id: 1, name: 1980 },
        { id: 1, name: 1981 },
        { id: 1, name: 1982 },
        { id: 1, name: 1983 },
        { id: 1, name: 1984 },
        { id: 1, name: 1985 },
        { id: 1, name: 1986 },
        { id: 1, name: 1987 },
        { id: 1, name: 1988 },
        { id: 1, name: 1989 },
        { id: 1, name: 1990 },
        { id: 1, name: 1991 },
        { id: 1, name: 1992 },
        { id: 1, name: 1993 },
        { id: 1, name: 1994 },
        { id: 1, name: 1995 },
        { id: 1, name: 1996 },
        { id: 1, name: 1997 },
        { id: 1, name: 1998 },
        { id: 1, name: 1999 },
        { id: 1, name: 2000 },
        { id: 1, name: 2001 },
        { id: 1, name: 2002 },
        { id: 1, name: 2003 },
        { id: 1, name: 2004 },
        { id: 1, name: 2005 },
        { id: 1, name: 2006 },
        { id: 1, name: 2007 },
        { id: 1, name: 2008 },
        { id: 1, name: 2009 },
        { id: 1, name: 2010 },
        { id: 1, name: 2011 },
        { id: 1, name: 2012 },
        { id: 1, name: 2013 },
        { id: 1, name: 2014 },
        { id: 1, name: 2015 },
        { id: 1, name: 2016 },
        { id: 1, name: 2017 },
        { id: 1, name: 2018 },
        { id: 1, name: 2019 },
        { id: 1, name: 2020 },
        { id: 1, name: 2021 },
        { id: 1, name: 2022 },
        { id: 1, name: 2023 },
        { id: 1, name: 2024 },
      ],
      userInfo: {
        name: "",
        nickname: "",
        email: "",
        phone_number: "",
        province: "",
        district: "",
        ward: "",
        address: "",
        gender: "",
        dob: "",
      },
      isReadonly: true,
      userId: "",
      popup: {
        title: "",
        content: "",
        btn: "",
        success: false,
      },
      validate: false,
    };
  },
  created() {
    this.fetchUserInfo();
  },
  mounted() {
    // Gọi hàm fetchUserInfo khi component được mounted
    this.userId = localStorage.getItem("id");
  },
  methods: {
    openFileInput() {
      // Khi người dùng nhấp vào nút 'Chọn ảnh', kích hoạt input type="file"
      this.$refs.fileInput.click();
    },
    handleImageChange(event) {
      var avaDef = document.getElementById("avaDefault");
      var newAva = document.getElementById("newAva");
      const file = event.target.files[0];
      if (file) {
        avaDef.style.display = "none";
        newAva.style.display = "block";
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
          console.log(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
    async fetchUserInfo() {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        const id = localStorage.getItem("id");
        const res = await UserService.getUserById(id);
        console.log(res);
        this.userInfo.name = res.data.name;
        this.userInfo.nickname = res.data.nickname;
        this.userInfo.email = res.data.email;
        this.userInfo.phone_number = res.data.phone_Number;
        this.userInfo.province = res.data.province;
        this.userInfo.district = res.data.district;
        this.userInfo.ward = res.data.ward;
        this.userInfo.address = res.data.address;
        this.userInfo.gender = res.data.gender;
        this.userInfo.dob = res.data.dob;
        this.parseDatetimeFromDB();
      }
    },
    updateProfile(userId) {
      if (
        !this.userInfo.name ||
        !this.userInfo.nickname ||
        !this.userInfo.email ||
        !this.userInfo.phone_number ||
        !this.userInfo.province ||
        !this.userInfo.district ||
        !this.userInfo.ward ||
        !this.userInfo.address ||
        !this.userInfo.gender
      ) {
        this.popup.btn = "Đóng";
        this.popup.title = "Cập nhật thông tin thất bại";
        this.popup.content = "Hãy điền đầy đủ thông tin cá nhân!";
        this.popup.success = false;
        this.validate = true;
        console.log(this.userDate + " " + this.userMonth + " " + this.userYear);
      } else {
        const updatedUser = {
          name: this.userInfo.name,
          nickname: this.userInfo.nickname,
          email: this.userInfo.email,
          phone_number: this.userInfo.phone_number,
          province: this.userInfo.province,
          district: this.userInfo.district,
          ward: this.userInfo.ward,
          address: this.userInfo.address,
          dob: this.dob,
          gender: this.userInfo.gender,
        };
        const updateAva = {
          user_id: userId,
          user_ava: this.imageUrl,
        };
        UserService.changeUserAva(updateAva);
        UserService.updateUser(userId, updatedUser)
          .then((response) => {
            console.log(response.data);
            console.log("Cập nhật thông tin thành công");
            console.log(this.userInfo);
            this.popup.btn = "Tiếp tục";
            this.popup.title = "Thành công";
            this.popup.content = "Cập nhật thông tin thành công.";
            this.popup.success = true;
            this.validate = true;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    handleDate(value) {
      this.userDate = value;
      this.handleDatetime();
    },
    handleMonth(value) {
      this.userMonth = value;
      this.handleDatetime();
    },
    handleYear(value) {
      this.userYear = value;
      this.handleDatetime();
    },
    handleDatetime() {
      if (!this.userDate || !this.userMonth || !this.userYear) {
        console.log("Hãy nhập đủ thông tin ngày sinh");
      } else {
        const date = parseInt(this.userDate);
        const month = parseInt(this.userMonth);
        const year = parseInt(this.userYear);
        if (date && month && year) {
          const datetime = moment({ year, month: month - 1, date }).format(
            "YYYY-MM-DDTHH:mm:ss"
          );
          console.log(datetime);
          this.dob = datetime;
        } else {
          console.log("Vui lòng chọn đầy đủ ngày, tháng và năm.");
        }
      }
    },
    parseDatetimeFromDB() {
      if (this.userInfo.dob != null) {
        const datetime = new Date(this.userInfo.dob);

        console.log(this.dob);
        this.userDate = datetime.getDate().toString().padStart("0"); // Lấy ngày và đảm bảo định dạng là hh
        this.userMonth = (datetime.getMonth() + 1).toString().padStart("0"); // Lấy tháng và đảm bảo định dạng là hh
        this.userYear = datetime.getFullYear().toString(); // Lấy năm
        const date = parseInt(this.userDate);
        const month = parseInt(this.userMonth);
        const year = parseInt(this.userYear);
        const datetimeParsed = moment({ year, month: month - 1, date }).format(
          "YYYY-MM-DDTHH:mm:ss"
        );
        this.dob = datetimeParsed;
        console.log(
          this.userDate + ", " + this.userMonth + ", " + this.userYear
        );
      }
    },
    closePopup() {
      this.validate = false;
      console.log("Đóng");
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
