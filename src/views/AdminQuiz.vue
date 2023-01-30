<template>

    <div>
        <div class="container-md">
            <h3>Add quiz details here</h3>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Quiz Title</label>
                <input type="text" class="form-control" id="formGroupExampleInput" v-model="quizTitle"
                    placeholder="Quiz Title : eg.Maths Quiz ">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Quiz Description</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" v-model="quizDescription"
                    placeholder="Quiz Description: eg. This quiz is focused on Surface Area">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Quiz Category</label>
                <input type="text" class="form-control" id="formGroupExampleInput3" v-model="quizCategory"
                    placeholder="Medium: eg. Add Difficulty level">
            </div>
            <button id="createbtn" @click="createQuiz();show()" class="btn btn-dark">Create Quiz </button>
            
        </div>
        <div class="container-md">
            <h3>Add Questions</h3>
            <div class="mb-3">
                <label for="questionText" class="form-label">Question :</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    placeholder="Type the question here" v-model="customQuestion.questionText">
            </div>

            <div class="container-sm">

                <div class="mb-3" v-for="option, index in customQuestion.options" :key="index">
                    <label :for="'option' + index" class="form-label">Option :{{ index+ 1 }}</label>
                    <input class="form-control m-1 w-50" placeholder="Type the option here" :id="'option' + index"
                        type="text" v-model="customQuestion.options[index]">
                </div>
                <div>
                    <p>Select the correct Answer :</p>
                    <select class="form-select" aria-label="Default select example"
                        v-model="customQuestion.correctAnswer">

                        <option v-for="(answer, index) in customQuestion.options" :key="index" :value="answer">
                            {{ answer }}
                        </option>

                    </select>
                    <p class="fw-bold">Correct Answer : {{ customQuestion.correctAnswer }}</p>
                </div>
            </div>
            <div id="displayquestions">
                <h4>Total Questions : {{ this.questions.length }}</h4>
            </div>
            <div id="btns">
            <button @click="addToQuiz" class="btn btn-dark">Add Questions </button>
            <label for="formGroupExampleInput2" class="form-label">Quiz Id</label>
            <input type="Number" placeholder="Enter id" v-model="quizId">
            <button @click="AddQuestion" class="btn btn-dark">Add Questions to Quiz </button>
        </div>
        </div>
    </div>


</template>

<script>
import admin from '../services/admin'
export default {
    data: function () {
        return {
            created:false,
            questions: [],
            quizTitle: '',
            quizDescription: '',
            quizCategory: '',
            quizId:'',
            customQuestion: {
                questionText: '',
                options: ['', '', '', ''],
                correctAnswer: ''
            },
        }
    },
    computed: {
        quizDetails: function () {
            return { questions: this.questions, title: this.quizTitle, description: this.quizDescription, category: this.quizCategory , id: this.quizId};
        }
    },
    methods: {
        show: function(){
            this.created = true;
        },
        createQuiz: function () {
            try {
                admin.createQuiz('/create', this.quizDetails).then((response) => {
                    console.log(response.data);
                })
            } catch (error) {
                console.log(error);
            }
        },
        AddQuestion: function () {
            try {
                admin.createQuiz('/add', this.quizDetails).then((response) => {
                    console.log(response.data);
                })
            } catch (error) {
                console.log(error);
            }
        },
        addToQuiz: function () {
            const { questionText, options, correctAnswer } = this.customQuestion;
            let flag = 0;
            for (let i = 0; i < options.length; i++) {
                if (options[i] === '') {
                    flag = 1;
                }
            }
            const copy = {...this.customQuestion};
            if (questionText !== '' && correctAnswer != '' && flag != 1) {
                //alert('hello world')
                this.questions.push(copy);
                console.log(copy);
                this.customQuestion.correctAnswer='';
                this.customQuestion.options=['', '', '', ''];
                this.customQuestion.questionText='';
                
            }
            else {
                console.log('Empty fields are not allowed')
            }
        }
    }
}
</script>

<style scoped>
#btns{
    display: flex;
    justify-content: space-around;
}
#createbtn{
    margin-top: 20px;
    margin-bottom: 30px;
}
</style>
