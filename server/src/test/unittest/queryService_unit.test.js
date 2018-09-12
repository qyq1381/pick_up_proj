let queryServices = require('../../services/queryService');

function return_num(num) {

	return num;

}

test('must pass test', ()=>{

	let number = 1;
	expect(return_num(number)).toBe(number);

});
//---------------------------------------------------------------//
queryServices.getPassengerLuggageByDayFlight = jest.fn();

let luggageCache = {
	
	AA1380 : [
	{
		date:"2018-08-16",
		smallLuggage: 1,
		largeLuggage: 1,
		Passenger: 1
	},{
		date:"2018-08-16",
		smallLuggage: 1,
		largeLuggage: 2,
		Passenger: 2
	}],
	AA1000 : [{

	},{

	}],
	AB3212 : [

	]
}


describe('Test getPassengerLuggageByDayFlight', ()=>{
	let req = 'AA1380';
	it('query sum of passenger', ()=>{
		queryServices.getPassengerLuggageByDayFlight.mockImplementation((req) =>{
			let array = luggageCache[req];
			let Passenger = 0;
			array.forEach((order)=>{
				Passenger += order.Passenger;
			});
			return Passenger;
		});
		
		expect(queryServices.getPassengerLuggageByDayFlight(req)).toBe(3);
	});
	
	it('query sum of smallLuggage', ()=> {
		queryServices.getPassengerLuggageByDayFlight.mockImplementation((req)=>{
			let array = luggageCache[req];
			let smallLuggage = 0;
			array.forEach((order)=>{
				smallLuggage += order.smallLuggage;
			});
			return smallLuggage;
		});
		expect(queryServices.getPassengerLuggageByDayFlight(req)).toBe(2);
	});

	it('query sum of largeLuggage', ()=> {
		queryServices.getPassengerLuggageByDayFlight.mockImplementation((req)=>{
			let array = luggageCache[req];
			let largeLuggage = 0;
			array.forEach((order)=>{
				largeLuggage += order.largeLuggage;
			});
			return largeLuggage;
		});
		expect(queryServices.getPassengerLuggageByDayFlight(req)).toBe(3);
	});
	
});
