<template>
    <section class="hero-fullscreen relative w-full h-screen flex justify-center items-center px-14 lg:px-52">
        <div class="hero-fullscreen__container flex flex-col items-center mt-20 text-center">
            <span class="text-5xl md:text-7xl">Site permettant de détecter les sujets d'une image</span>

            <label class="block my-2 text-lg font-medium text-white" for="file_input">Télécharger un fichier</label>
            <input
                class="block w-1/2 text-lg text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="file_input"
                type="file"
                @change="handleFileChange"
            >
            <input
                type="submit"
                class="contactez-nous__container--send h-30 xl:h-60 py-6 lg:py-10 px-10 mt-12 bg-red-500 text-white rounded-full text-lg md:text-2xl lg:text-4xl uppercase cursor-pointer"
                @click="uploadImage"
            >
        </div>
    </section>
</template>

<script>

export default {

    // Nom du composant
    name: "HeroFullScreen",

    // Données en paramètres du composant
    props: {
        // props
    },

    // Données du composant
    data() {
        return {
            selectedFile: null,
            uploadUrl: 'https://api.imgur.com/3/image',
            clientId: 'cad9fcd23d5df73'
        };
    },

    // Script à éxécuter au chargement du composant
    mounted() {
        // mounted
    },

    // Méthodes du composant
    methods: {
        handleFileChange(event) {
            this.selectedFile = event.target.files[0];
        },
        async uploadImage() {
            try {
                const formData = new FormData();
                formData.append('image', this.selectedFile);

                const response = await this.$axios.post(this.uploadUrl, formData, {
                    headers: {
                        'Authorization': 'Client-ID ' + this.clientId,
                        'Content-Type': 'multipart/form-data',
                    }
                });

                console.log('Succès, l\'image a été uploadé :', response.data.data);

                this.$router.push('/' + response.data.data.id);
            } catch (error) {
                console.error('Erreur :', error);
            }
        }
    },
}

</script>

<style lang="scss">
</style>
