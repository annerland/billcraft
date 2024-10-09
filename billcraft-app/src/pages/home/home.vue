<script setup lang="ts">
import { columns } from "../../constants/tableColumns";
import { Customer } from "../../types/customers";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Api from "../../services/api";
import InputSearch from "../../components/ui/input/InputSearch.vue";
import Skeleton from "../../components/ui/skeleton/Skeleton.vue";

const customers = ref<Customer[]>([]);
const loading = ref<boolean>(true);
const searchFilter = ref<string>("");
const router = useRouter();

const getCustomers = async () => {
  try {
    const data = await Api.Customers.list();
    customers.value = data.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
  } finally {
    loading.value = false;
  }
};

const handleRowClick = (customer: Customer) => {
  router.push(`/customer/${customer.id}`);
};

const filteredCustomers = computed<Customer[]>(() => {
  if (searchFilter.value !== "") {
    const filtered = customers.value.filter(
      (elm) =>
        (elm.name && elm.name.includes(searchFilter.value)) ||
        (elm.email && elm.email.includes(searchFilter.value))
    );

    return filtered;
  }

  return customers.value;
});

const handleSearch = (search) => {
  searchFilter.value = search;
};

onMounted(async () => getCustomers());
</script>

<template>
  <div class="container">
    <InputSearch class="mb-28" @search="handleSearch" />
    <div
      class="flex flex-col mb-10 gap-2 max-w-full md:max-w-[653px] items-start">
      <h1 class="text-2xl font-medium text-foreground">Customers</h1>
      <p class="text-md text-gray-500">
        View and manage all customers in a single table. Click on any customer
        to edit their details quickly and easily.
      </p>
    </div>
    <Skeleton v-if="loading" class="h-[225px] max-w-full rounded-xl" />
    <Table v-else>
      <TableHeader>
        <TableRow>
          <TableHead
            class="w-[100px]"
            v-for="column in columns"
            :key="column.field">
            {{ column.header }}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="row in filteredCustomers"
          :key="row.id"
          @click="handleRowClick(row)"
          class="hover:bg-gray-100 cursor-pointer">
          <TableCell v-for="column in columns" :key="column.field">
            {{
              column.isCustom && column.customRender
                ? column.customRender(row)
                : row[column.field]
            }}
          </TableCell>
        </TableRow>
        <div v-if="filteredCustomers.length === 0" colspan="columns.length">
          No customers found.
        </div>
      </TableBody>
    </Table>
  </div>
</template>
