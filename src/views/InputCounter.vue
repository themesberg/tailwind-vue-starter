<script setup>
import { onMounted } from 'vue'
import { InputCounter } from 'flowbite';

onMounted(() => {
    // set the target element of the input field
    const $targetEl = document.getElementById('counter-input-example');

    // optionally set the increment and decrement elements
    const $incrementEl = document.getElementById('increment-button');

    const $decrementEl = document.getElementById('decrement-button');

    // optional options with default values and callback functions
    const options = {
        minValue: 0,
        maxValue: null, // infinite
        onIncrement: () => {
            console.log('input field value has been incremented');
        },
        onDecrement: () => {
            console.log('input field value has been decremented');
        }
    };

    const instanceOptions = {
        id: 'counter-input-example',
        override: true
    };

    if ($targetEl) {
        const counterInput = new InputCounter($targetEl, $incrementEl, $decrementEl, options, instanceOptions);
    }
})
</script>

<template>
  <form class="max-w-xs mx-auto">
        <label for="counter-input-example" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
        <div class="relative flex items-center">
            <button type="button" id="decrement-button" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                </svg>
            </button>
            <input type="text" id="counter-input-example" class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem]" placeholder="" value="12" required>
            <button type="button" id="increment-button" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
            </button>
        </div>
    </form>
</template>
