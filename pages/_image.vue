<template>
    <div class="image w-full h-full px-14 lg:px-52">
        <span class="text-4xl md:text-6xl">Les choses identifiées sur cette image sont :</span>

        <div class="flex flex-wrap gap-4 pt-4">
            <span
                v-for="(concept, index) in data"
                :key="index"
                class="p-3 text-xl md:text-2xl bg-white text-black rounded-full"
            >
                {{ concept.name }} : {{ concept.value }}
            </span>
        </div>

        <button>
            <router-link to="/" class="flex p-4 mt-12 text-xl border border-white rounded-full">Retour à l'accueil</router-link>
        </button>
    </div>
</template>

<script>

export default {

    // Nom de la page
    name: 'image',

    // Données en paramètres de la page
    props: {
        // props
    },

    // Données du composant
    data() {
        return {
            data: null,
            modelId: 'aa7f35c01e0642fda5cf400f543e7c40',
            modelVersionId: 'general-image-recognition',
            rawData: {
                'inputs': [
                    {
                        'data': {
                            'image': {
                                'url': 'https://i.imgur.com/' + this.$route.params.image + '.jpg'
                            }
                        }
                    }
                ]
            },
            requestOptions: {
                headers: {
                    Authorization: 'Key 4dcdc4799a2f4c59aebc96cefc799c6e',
                    'Content-Type': 'application/json'
                }
            }
        };
    },

    // Script à éxécuter avant le chargement de la page
    beforeMount() {
        this.getRecognition();
    },

    // Méthodes de la page
    methods: {
        async getRecognition() {
            try {
                const response = await this.$axios.post(
                    `https://api.clarifai.com/v2/users/clarifai/apps/main/models/${this.modelVersionId}/versions/${this.modelId}/outputs`,
                    this.rawData,
                    this.requestOptions
                );

                this.data = response.data.outputs[0].data.concepts;
            } catch (error) {
                console.error('Erreur lors de la prédiction :', error);
            }
        }
    }
}

</script>

<style lang="scss">
</style>
