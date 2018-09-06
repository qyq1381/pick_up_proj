<template>
	<div id="app">
		<v-app id="inspire">
			<v-data-table
			:headers="headers"
			:items="users"
			:loading="false"
			class="elevation-1"
			>
			<!--<v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>-->
			<template slot="items" slot-scope="props">
				<td>{{ props.item.IdNumber }}</td>
				<td class="text-xs-left">{{ props.item.firstName }}</td>
				<td class="text-xs-left">{{ props.item.lastName }}</td>
				<td class="text-xs-left">{{ props.item.Phone }}</td>
				<td class="text-xs-left">{{ props.item.Email }}</td>
				<td class="text-xs-left">{{ props.item.WeChat }}</td>
				<td class="text-xs-left">{{ props.item.CreateTime}}</td>
			</template>
		</v-data-table>
		<v-btn color="success" @click="ListUserwithoutFilter">get user</v-btn>
	</v-app>
</div>
</template>


<script type="text/javascript">
import queryUser from "../../services/api/queryUser.js"

export default{
	name: "passengerInfo",
	data () {
		return {
			headers: [
			{
				text: 'User ID',
				align: 'letf',
				sortable: false,
				value: 'IdNumber'
			},
			{ text: 'First Name', value: 'firstName' },
			{ text: 'Last Name', value: 'lastName' },
			{ text: 'Phone', value: 'Phone' },
			{ text: 'Email', value: 'Email' },
			{ text: 'WeChat', value: 'WeChat' },
			{ text: 'Create Time', value:'CreateTime'}
			],
			desserts: [
			{
				value: false,
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%'
			},
			],

			users: [
			{	
				IdNumber:'',
				Phone: '',
				WeChat: '',
				firstName: '',
				lastName: '',
				Email: '',
				CreateTime: '',
			}],
		
		}
	},
	methods: {
		queryUserwithoutFilter: queryUser.queryUserWithoutFilter,
		ListUserwithoutFilter: async function(){
			let users = await this.queryUserwithoutFilter();
			this.users = users.data;
		}
	}
};
</script>

<style>

</style>