<script setup lang="ts">
import { useForm } from "vee-validate";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { useToast } from "../../components/ui/toast/use-toast";
import { onMounted, ref, reactive } from "vue";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useRoute } from "vue-router";
import { fields } from "../../constants/fields";
import { formSchema } from "./formSchema";
import Api from "../../services/api";
import { CustomerForm } from "../../types/customers";
import Skeleton from "../../components/ui/skeleton/Skeleton.vue";

const formData = reactive<CustomerForm>({
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  address2: "",
  city: "",
  postalCode: "",
  state: "",
  country: "",
});

const router = useRouter();
const route = useRoute();
const loading = ref<boolean>(true);
const { toast } = useToast();
const customer = ref();

const { handleSubmit, setValues, resetForm } = useForm({
  validationSchema: formSchema,
});

const getCustomer = async () => {
  try {
    const data = await Api.Customers.get(route.params.id);
    if (data.individual) {
      customer.value = {
        email: data.email,
        img: data.img,
        firstName: data.individual.name.first_name,
        lastName: data.individual.name.last_name,
        address: data.individual.residential_address.line1,
        address2: data.individual.residential_address.line2,
        city: data.individual.residential_address.city,
        postalCode: data.individual.residential_address.postal_code,
        state: data.individual.residential_address.state,
        country: data.individual.residential_address.country,
      };
    }

    if (data.organization) {
      customer.value = {
        email: data.email,
        img: data.img,
        firstName: data.organization.legal_name,
        address: data.organization.registered_address.line1,
        address2: data.organization.registered_address.line2,
        city: data.organization.registered_address.city,
        postalCode: data.organization.registered_address.postal_code,
        state: data.organization.registered_address.state,
        country: data.organization.registered_address.country,
      };
    }

    Object.assign(formData, customer.value);
    setValues(formData);
  } catch (error) {
    toast({
      title: "Error fetching customer",
      description: "There was a problem with your request.",
      variant: "destructive",
    });
  } finally {
    loading.value = false;
  }
};

const editCustomer = async () => {
  try {
    loading.value = true;
    const payload = {
      email: formData.email,
      individual: {
        name: {
          first_name: formData.firstName,
          last_name: formData.lastName,
        },
        residential_address: {
          line1: formData.address,
          line2: formData.address2,
          city: formData.city,
          postal_code: formData.postalCode,
          state: formData.state,
          country: formData.country,
        },
      },
    };
    await Api.Customers.edit(route.params.id, payload);
    toast({
      title: "Customer Edit",
      description: "Customer has been updated successfully.",
    });
    resetForm({ values: formData });
    await getCustomer();
  } catch (error) {
    toast({
      title: "Error updating customer",
      description: "There was a problem with your request.",
      variant: "destructive",
    });
  } finally {
    loading.value = false;
  }
};

const onSubmit = handleSubmit(() => {
  editCustomer();
});

const handleBack = () => router.push("/");
onMounted(async () => {
  getCustomer();
});
</script>

<template>
  <div class="container flex md:gap-60 md:flex-row flex-col-reverse gap-16">
    <div class="max-w-[700px] w-full h-full">
      <div class="flex items-center gap-2 mb-10 w-full">
        <FontAwesomeIcon
          @click="handleBack"
          :icon="faChevronLeft"
          class="text-foreground text-sm cursor-pointer" />
        <h1 class="text-2xl font-medium text-foreground">
          Customer Information
        </h1>
      </div>
      <form
        @submit="onSubmit"
        class="grid grid-cols-2 grid-rows-6 gap-4 w-full">
        <Skeleton
          v-if="loading"
          v-for="field in fields"
          :key="field.name + '-skeleton'"
          :class="[field.col, 'h-[45px] max-w-full rounded-md']" />
        <div
          v-else
          v-for="field in fields"
          :key="field.name"
          :class="field.col">
          <FormField :name="field.name">
            <FormItem>
              <FormLabel :for="field.name">{{ field.label }}</FormLabel>
              <FormControl>
                <Input
                  v-model="formData[field.name]"
                  @onInput="
                    ($event) =>
                      (formData[field.name].value = $event.target.value)
                  "
                  :type="field.type"
                  :placeholder="field.placeholder" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <Button
          type="submit"
          class="col-span-2 justify-self-end mt-8 px-7 py-5">
          Save
        </Button>
      </form>
    </div>

    <div class="w-full h-full">
      <h1 class="text-1xl font-medium text-foreground">Profile picture</h1>
      <img
        class="mt-8 rounded-full h-[175px] w-[175px] object-cover"
        :src="customer?.img" />
    </div>
  </div>
</template>
