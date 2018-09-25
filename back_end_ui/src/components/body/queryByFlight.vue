<template>
	<div id="dataByFlight">
		<v-container fluid>
			<v-layout row wrap>
				<v-flex xs5>
					<v-text-field
					label="FlightNumber"
					placeholder="FlightNumber"
					v-model="flightnumber" 
					></v-text-field>
				</v-flex>
				<v-flex xs5>
					<v-menu
					ref="menu"
					:close-on-content-click="false"
					v-model="menu"
					:nudge-right="40"
					:return-value.sync="date"
					lazy
					transition="scale-transition"
					offset-y
					full-width
					min-width="290px"
					>
					<v-text-field
					slot="activator"
					v-model="date"
					label="Picker in menu"
					prepend-icon="event"
					readonly
					class="D"
					></v-text-field>
					<v-date-picker v-model="date" no-title scrollable>
						<v-spacer></v-spacer>
						<v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
						<v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
					</v-date-picker>
				</v-menu>
			</v-flex>
			<v-flex xs2>
				<v-btn color="success" @click="searchServices">SearchServices</v-btn>
			</v-flex>
		</v-layout>

	</v-container>

	<v-data-table
	:headers="headers"
	:items="desserts"
	hide-actions
	class="elevation-1"
	>
	<template slot="items" slot-scope="props">
		<td>{{ flightnumber_display}}</td>
		<td class="text-xs-left">{{ date_display }}</td>
		<td class="text-xs-left">{{ NumberofPassengerLuggage.data.sumSmallLuggage}}</td>
		<td class="text-xs-left">{{ NumberofPassengerLuggage.data.sumLargeLuggage }}</td>
		<td class="text-xs-left">{{ NumberofPassengerLuggage.data.sumPassenger}}</td>
	</template>
</v-data-table>
<v-container fluid>
	<v-layout row wrap>
		<v-flex xs5>
			<v-text-field
			label="FlightNumber"
			placeholder="FlightNumber"
			v-model="flightnumber_forInfo" 
			></v-text-field>
		</v-flex>
		<v-btn color="success" @click="searchFlightInfoServices">SearchFlightInfo</v-btn>
	</v-layout>

</v-container>

<v-data-table
:headers="header_flightInfo"
:items="flightInfo"
hide-actions
class="elevation-1"
>
<template slot="items" slot-scope="props">
	<td>{{props.item.flightNumber}}</td>
	<td class="text-xs-left">{{ props.item.departureDate }}</td>
	<td class="text-xs-left">{{ props.item.smallLuggage}}</td>
	<td class="text-xs-left">{{ props.item.largeLuggage }}</td>
	<td class="text-xs-left">{{ props.item.Passenger}}</td>
</template>
</v-data-table>

</div>

</template>

<script type="text/javascript">
import queryServices from '../../services/api/queryServices.js'


export default {
	data () {
		return {
			date: null,
			date_display: null,
			landscape: false,
			reactive: false,
			flightnumber:'',
			flightnumber_forInfo:'',
			flightnumber_forInfo_display:'',
			flightnumber_display:'',
			NumberofPassengerLuggage: {
				data: [{
					sumSmallLuggage: 0,
					sumLargeLuggage: 0,
					sumPassenger: 0,
				}]
			},
			headers: [
			{
				text: 'Flight Number',
				align: 'center',
				sortable: false,
				value: 'name'
			},
			{ text: 'Depature Date', value: 'name'},
			{ text: 'Small Luggage', value: 'calories' },
			{ text: 'Large Luggage', value: 'fat' },
			{ text: 'Number of Passengers', value: 'carbs' },
			],
			//below is static data sample
			
			desserts: [
			{
				value: false,
				name: 'Frozen Yogurt',
				calories: 0,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%'
			}
			//above is static data sample
			],
			header_flightInfo: [
			{
				text: 'Flight Number',
				align: 'center',
				sortable: false,
				value: 'flightnumber'
			},
			{ text: 'Depature Date', value: 'departureDate'},
			{ text: 'Small Luggage', value: 'smallLuggage' },
			{ text: 'Large Luggage', value: 'largeLuggage' },
			{ text: 'Number of Passengers', value: 'passenger' },],
			
			flightInfo:[
			{
				FlightNumber: '',
				departureDate: '',
				smallLuggage: '',
				largeLuggage: '',
				Passenger: '',
			}],
		}


	},

	methods: {
		QueryServices : queryServices.queryByFlight,
		QueryFlightList : queryServices.queryFlightInfo,
		searchServices: async function(){
			this.NumberofPassengerLuggage = await this.QueryServices(this.flightnumber, this.date);
			this.flightnumber_display = await this.flightnumber;
			this.date_display = await this.date;
		},
		
		searchFlightInfoServices: async function(){
			let receivedFlightInfo = await this.QueryFlightList(this.flightnumber_forInfo);
			this.flightInfo = await receivedFlightInfo.data;
		}

	},
};

</script>

<style scoped>
#dataByFlight {
  height: 100%;
  margin: 0;
}
</style>