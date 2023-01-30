<template>
    <div>
        <div class="container-md">
        <h3>Add quiz details here</h3>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Quiz Title</label>
            <input type="text" class="form-control" id="formGroupExampleInput" v-model="quizTitle" placeholder="Example input placeholder">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Quiz Description</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" v-model="quizDescription" placeholder="Another input placeholder">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Quiz Category</label>
            <input type="text" class="form-control" id="formGroupExampleInput3" v-model="quizCategory" placeholder="Example input placeholder">
        </div>
        <button type="button" @click="createQuiz" class="btn btn-primary">Create Quiz</button>
    </div>
    </div>
</template>

<script>
 import admin from '../services/admin'
export default {
    data: function () {
        return {
            questions:[],
            quizTitle: '',
            quizDescription: '',
            quizCategory: '',
        }
    },
    computed: {
        quizDetails: function () {
            return { questions: this.questions, title: this.quizTitle, description: this.quizDescription, category: this.quizCategory };
        }
    },
    methods:{
        createQuiz: function () {
            try {
                admin.createQuiz('/create', this.quizDetails).then((response) => {
                    console.log(response.data);
                    
                })
                console.log(this.quizDetails);
            } catch (error) {
                console.log(error);
            }
        },
    }
}


</script>