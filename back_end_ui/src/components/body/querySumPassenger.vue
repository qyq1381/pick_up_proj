
	<div>
	this is query by passenger
		<v-data-table
	  headers="headers"
	  items="items"
	  hide-actions
	  class="elevation-1"
	  select-all
	  pagination.sync="pagination"
	  item-key="id"
	  loading="true"
	  search="search"
	>
	<template>
	   <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.native="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
        </template>
	</v-data-table>
</div>



<script type="text/javascript">
	export default {
		name: "querybypassenger",
	};
</script>
	
<style type="text/css">
	
</style>