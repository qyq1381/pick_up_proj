import api from '../api'

export default {
	queryByFlight: function(flightnumber, date){
		return api().get('query/bydayflight/getByFlightNumber',{
			//must use params:
			params:{flightnumber, date}
		})	
	},
	querySumPassenger: function(date){
		return api().get('',{
			params:{date}
		})
	},
	
	queryFlightInfo: function(flightnumber){
		return api().get('query/getFlightInfo',{
			params:{flightnumber}
		})
	}
	

};