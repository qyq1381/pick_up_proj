<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :rules="[() => page1UnTouched || (passengerInfo.departureDate!=''&& passengerInfo.flightNumber!=''&&passengerInfo.Passenger!=''&& passengerInfo.largeLuggage!=''&&passengerInfo.smallLuggage!='')]"
          :complete="e1 > 1"
          step="1"
        >Flight Info</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :rules="[() => page2UnTouched || (passengerInfo.firstName!=''&& passengerInfo.lastName!=''&& passengerInfo.email!=''&&passengerInfo.email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(passengerInfo.email))]"
          :complete="e1 > 2"
          step="2"
        >Your Info</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :rules="[() => page3UnTouched || (passengerInfo.address_line_1!=''&&passengerInfo.city!=''&& passengerInfo.state!=''&& passengerInfo.zip!=''&& passengerInfo.country!='')]"
          :complete="e1 > 3"
          step="3"
        >Destination</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :rules="[() => page4UnTouched || (passengerInfo.firstName!=''&&passengerInfo.lastName!=''&& passengerInfo.email!='')]"
          step="4"
        >Optional Info</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>
                  <v-form v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="passengerInfo.flightNumber"
                      :rules="[(v) => !!v || 'This field is required']"
                      label="Flight Number*"
                      mask="AA####A"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="passengerInfo.departureDate"
                      :rules="[(v) => !!v || 'This field is required']"
                      label="Departure Date*"
                      type="date"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="passengerInfo.Passenger"
                      :rules="[(v) => !!v || 'This field is required']"
                      label="Number of passenger*"
                      mask="##"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="passengerInfo.largeLuggage"
                      :rules="[(v) => !!v || 'This field is required']"
                      mask="##"
                      label="Number of large luggage*"
                      placeholder="large luggage Standard"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="passengerInfo.smallLuggage"
                      :rules="[(v) => !!v || 'This field is required']"
                      label="Number of small luggage*"
                      placeholder="small luggage Standard"
                      mask="##"
                      required
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
              </v-card>
            </v-flex>
          </v-layout>

          <v-btn color="primary" @click="e1 = 2, page1UnTouched = false">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>
                  <v-text-field
                    v-model="passengerInfo.firstName"
                    :rules="[(v) => !!v || 'This field is required']"
                    label="First Name*"
                    mask="AAAAAAAAAAA"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="passengerInfo.lastName"
                    :rules="[(v) => !!v || 'This field is required']"
                    label="Last Name*"
                    mask="AAAAAAAAAAA"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="passengerInfo.email"
                    :rules="this.emailRules"
                    label="Email*"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field v-model="passengerInfo.wechat" label="WeChat"></v-text-field>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
              </v-card>
            </v-flex>
          </v-layout>

          <v-btn flat @click="e1 = 1">Previous</v-btn>
          <v-btn color="primary" @click="e1 = 3, page2UnTouched = false">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>
                  <v-text-field
                    v-model="passengerInfo.address_line_1"
                    label="Address line 1*"
                    counter="25"
                    required
                    :rules="[
                                (v)=>!!v || 'This field is required',
                                (v) => !!v && v.length <= 25 || 'Address must be less than 25 characters'
                                ]"
                  ></v-text-field>
                  <v-text-field
                    v-model="passengerInfo.address_line_2"
                    label="Address line 2"
                    counter="25"
                  ></v-text-field>
                  <v-text-field
                    :rules="[(v) => !!v || 'This field is required']"
                    v-model="passengerInfo.city"
                    label="City*"
                    mask="AAAAAAAAAAA"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="passengerInfo.state"
                    :rules="[(v) => !!v || 'This field is required']"
                    label="State/Province/Region*"
                    required
                    mask="AA"
                  ></v-text-field>
                  <v-text-field
                    :rules="[(v) => !!v || 'This field is required']"
                    v-model="passengerInfo.zip"
                    label="ZIP / Postal Code*"
                    required
                    mask="#####"
                  ></v-text-field>

                  <v-autocomplete
                    :rules="[(v) => !!v || 'This field is required']"
                    :items="countries"
                    v-model="passengerInfo.country"
                    label="Country*"
                    placeholder="Select..."
                    required
                  ></v-autocomplete>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
              </v-card>
            </v-flex>
          </v-layout>
          <v-btn flat @click="e1 = 2">Prevous</v-btn>
          <v-btn color="primary" @click="e1 = 4, page3UnTouched = false">Continue</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-layout justify-center>
            <v-flex xs12 sm10 md8 lg6>
              <v-card ref="form">
                <v-card-text>
                  <v-text-field v-model="passengerInfo.phone" mask="phone" label="Phone Number"></v-text-field>
                </v-card-text>
                <v-divider class="mt-5"></v-divider>
              </v-card>
            </v-flex>
          </v-layout>
          <v-btn flat @click="e1 = 3">Previous</v-btn>
          <v-btn color="primary" @click="submit">Submit</v-btn>
          <v-alert :value="this.formHasEmpty" type="error">Please complete all required fields !</v-alert>
          <v-alert :value="this.emailIsInvalid" type="error">Please doublecheck your email !</v-alert>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import eventmethods from "../../services/api/eventmethods.js";
export default {
  computed: {
    requiredData() {
      return {
        firstName: this.passengerInfo.firstName,
        lastName: this.passengerInfo.lastName,
        flightNumber: this.passengerInfo.flightNumber,
        Passenger: this.passengerInfo.Passenger,
        largeLuggage: this.passengerInfo.largeLuggage,
        smallLuggage: this.passengerInfo.smallLuggage,
        email: this.passengerInfo.email,
        address_line_1: this.passengerInfo.address_line_1,
        city: this.passengerInfo.city,
        state: this.passengerInfo.state,
        zip: this.passengerInfo.zip,
        country: this.passengerInfo.country,
        departureDate: this.passengerInfo.departureDate
      };
    }
  },

  data: () => {
    return {
      formHasEmpty: false,
      emailIsInvalid: false,
      page1UnTouched: true,
      page2UnTouched: true,
      page3UnTouched: true,
      page4UnTouched: true,
      countries: ["United States"],
      e1: 0,
      passengerInfo: {
        firstName: "",
        lastName: "",
        phone: "",
        flightNumber: "",
        Passenger: "",
        largeLuggage: "",
        smallLuggage: "",
        email: "",
        wechat: "",
        address_line_1: "",
        address_line_2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        departureDate: ""
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
    };
  },
  methods: {
    sendevent: eventmethods.sendeventform,
    submitvalue: function() {
      this.sendevent(this.passengerInfo);
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    submit() {
      // console.log(this.formHasEmpty)
      this.formHasEmpty = false;
      this.emailIsInvalid = false;
      Object.keys(this.requiredData).forEach(f => {
        // console.log(this.requiredData[f])
        if (!this.requiredData[f]) this.formHasEmpty = true;
      });
      // console.log(this.formHasEmpty)
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.passengerInfo.email
        )
      )
        this.emailIsInvalid = true;
      else if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.passengerInfo.email
        )
      ) {
        this.emailIsInvalid = false;
        if (!this.formHasEmpty) {
          console.log(this.passengerInfo.departureDate);
          this.sendevent(this.passengerInfo);
          this.navigateTo({ name: "Success" });
        }
      }
      //  console.log(this.emailIsInvalid)
    }
  }
};
</script>


