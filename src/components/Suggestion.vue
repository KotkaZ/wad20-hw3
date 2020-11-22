<template>
    <div class="browse-user">
        <div class="browse-image-container"><img :src="suggestion.avatar"></div>
        <p class="browse-user-text">{{fullname}}</p>
        <button class="browse-follow-button"
            @click="followed = !followed" 
            v-text="followed ? 'Followed' : 'Follow'"
            :class='{"was-pressed": followed}'
        >Follow</button>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["suggestion"],
    data(){
        return {
            followed: false
        }
    },
    computed:{
        fullname: function() {
            return `${this.suggestion.firstname} ${this.suggestion.lastname}`
        }
    }
}
</script>

<style scoped>
.browse-user {
    flex: 0 0 calc(50% - 8px);
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 4px;
    text-align: center;
}

.browse-user-text {
    font-weight: bold;
}

.browse-user:nth-child(2n) {
    margin-left: 16px;
}

.browse-user:nth-child(n + 3) {
    margin-top: 16px;
}

.browse-image-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}

.browse-image-container img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.browse-follow-button {
    font-weight: bold;
    border: 1px solid transparent;
}

.browse-follow-button.was-pressed {
    background: white;
    color: purple;
    border: 1px solid #e6e6e6;
}
</style>