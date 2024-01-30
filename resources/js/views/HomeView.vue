<script setup>
import { Head } from '@inertiajs/vue3'
import CommerceHeader from "../components/organisms/CommerceHeader.vue";
import CommerceCarousel from '../components/organisms/CommerceCarousel.vue';
import BadgeAtom from '../components/atoms/BadgeAtom.vue';

defineProps({ user: Object })

const badges = [
    {
        icon: "mdi:truck",
        title: "frete grátis",
        subtitle: "Disponível para todo o país"
    },
    {
        icon: "solar:ticket-sale-bold",
        title: "10% OFf",
        subtitle: "No boleto e pix a vista"
    },
    {
        icon: "streamline:subscription-cashflow-solid",
        title: "Cashback",
        subtitle: "Acumule para resgatar prêmios"
    },
    {
        icon: "cil:cash",
        title: "Preços acessíveis",
        subtitle: "Em todas as categorias"
    },
]


</script>

<template>
    <div>

        <Head title="Fit Forge" />
        <CommerceHeader />
        <CommerceCarousel />
        <section class="flex justify-center gap-4 xl:px-48 my-12">
            <BadgeAtom v-for="badge in badges" :title="badge.title" :subtitle="badge.subtitle" :icon="badge.icon" />
        </section>
        <section>
            <h2 class="text-center text-3xl font-semibold">Últimos Lançamentos</h2>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
