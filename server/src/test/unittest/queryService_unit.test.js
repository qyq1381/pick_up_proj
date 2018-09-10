let queryServices = require('../../services/queryService');


function return_num(num) {
	return num;
}
test('must pass test', ()=>{
		
		let number = 1;
		expect(return_num(number)).toBe(number);


});
//---------------------------------------------------------------//
queryServices = jest.fn();

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
		largeLuggage: 1,
		Passenger: 1
	},{

	}],
	AA1000 : [{

	},{

	}],
	AB3212 : [

	]
}




describe('query number of luggage and passengers', ()=>{
	let req = 'AA1380';
	it('query sum of luggage',()=>{
		queryServices.mockImplementation((req)=>{
		let array = luggageCache[req];
		return array;
	});
	expect(queryServices(req)).toEqual(luggageCache['AA1380']);
	})
})