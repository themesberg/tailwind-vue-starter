<script setup>
import { onMounted } from 'vue'
import { Datepicker } from 'flowbite'

onMounted(() => {
    console.log('mounted');
    // set the target element of the input field
    const $datepickerEl = document.getElementById('datepicker-custom');

    console.log($datepickerEl);

    // optional options with default values and callback functions
    const options = {
        defaultDatepickerId: null,
        autohide: false,
        format: 'mm/dd/yyyy',
        maxDate: null,
        minDate: null,
        orientation: 'bottom',
        buttons: false,
        autoSelectToday: false,
        title: null,
        language: 'en',
        rangePicker: false,
        onShow: () => {},
        onHide: () => {},
    };

    const instanceOptions = {
        id: 'datepicker-custom-example',
        override: true
    };

    if ($datepickerEl) {
        const datepicker = new Datepicker($datepickerEl, options, instanceOptions);
    }
})
</script>

<template>
  <div class="max-w-2xl p-4 mx-auto">
    <div class="relative max-w-sm">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </div>
        <input id="datepicker-custom" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
    </div>
    </div>
</template>