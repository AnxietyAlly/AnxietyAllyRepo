<script>

	let questions = [
		{
			"question": "Question 1: I find it hard to unwind, relax or sit still.",
			"options": [
				"Always",
				"Never",
				"Often",
				"Sometimes"
			],
			"correctIndex": 3
		},
		{
			"question": "Question 2: I have experienced shortness of breath.",
			"options": [
				"Always",
				"Never",
				"Not often",
				"Sometimes"
			],
			"correctIndex": 3
		},
		{
			"question": "Question 3: I have had stomach problems, such as feeling sick or stomach cramps.  ",
			"options": [
				"Always",
				"Never",
				"Not often",
				"Sometimes"
			],
			"correctIndex": 1
		},
		{
			"question": "Question 4: I have been irritable and easily annoyed.",
			"options": [
				"Always",
				"Never",
				"Not often",
				"Sometimes"
			],
			"correctIndex": 1
		},
		{
			"question": "Question 5: I feel dizzy and unsteady at times.",
			"options": [
				"Always",
				"Never",
				"Not often",
				"Sometimes"
			],
			"correctIndex": 2
		}
	];
	let answers = new Array(questions.length).fill(null);
	let questionPointer = -1;
	function getScore(){
		let score = answers.reduce((acc,val,index)=>{
			if(questions[index].correctIndex == val){
				return acc+1;
			}
			return acc;
		},0);
		return (score/questions.length * 100)+"%";
	}
	function restartQuiz(){
		answers = new Array(questions.length).fill(null);
		questionPointer = 0;
	}
</script>
<div class="min-h-screen bg-sky flex flex-col items-center">
    <img class="w-40 h-100" src=".//anxietyAllyLogo.png" alt="Anxiety Ally Logo">

<div class="app top-0 w-screen justify-center items-center px-10 py-2 rounded-full focus:outline-none p-50 justify-between flex-wrap w-45 border-radius-20 my-10 text-white fixed bottom-0 left-0 w-full h-16 flex justify-between items-center w-150 h-10 bg-blue-300 rounded-10 overflow-hidden flex flex-col mb-10">
	{#if questionPointer==-1}
		<div class="start-screen flex justify-center items-center px-10 py-2 bg-blue-500 text-white rounded-full focus:outline-none">
			<button class="px-10 py-2 bg-blue-500 text-white rounded-full focus:outline-none w-45 border-radius-20 my-10" on:click={()=>{questionPointer=0}}>
				Start Quiz
			</button>	
		</div>
	{:else if !(questionPointer > answers.length-1)}
		<div class="quiz-screen p-50 flex justify-between flex-wrap w-45 border-radius-20 my-10 bg-blue-400 text-white fixed bottom-0 left-0 w-full h-16 flex justify-between items-center w-150 h-10 bg-blue-600 rounded-10 overflow-hidden">
			<div class="main bg-blue-400 p-50 flex justify-between flex-wrap w-45 border-radius-20 my-10 bg-blue-400 text-white">
				<h2>
					{questions[questionPointer].question}
				</h2>
				<div class="options flex justify-between flex-wrap w-45 border-radius-20 my-10 bg-blue-400 text-white">
					{#each questions[questionPointer].options as opt,i}
						<button class="{answers[questionPointer]==i?'selected':''} px-10 py-2 bg-blue-500 text-white rounded-full focus:outline-none w-45 border-radius-20 my-10" on:click={()=>{answers[questionPointer]=i}}>
							{opt}	
						</button>
					{/each}
				</div>
			</div>
			<div class="footer bg-blue-400 fixed bottom-0 left-0 w-full h-16 flex justify-between items-center w-150 h-10 bg-blue-400 rounded-10 overflow-hidden">
				<div class="progress-bar w-150 h-10 bg--400 rounded-10 overflow-hidden h-full bg-purple-200">
					<div style="width:{questionPointer/questions.length *100}%">
					</div>
				</div>
				<div class="buttons">
					<button class="px-10 py-2 bg-blue-500 text-white rounded-full focus:outline-none w-45 border-radius-20 my-10" disabled={questionPointer==0} on:click={()=>{questionPointer--}}>
						&lt;
					</button>
					<button class="px-10 py-2 bg-blue-500 text-white rounded-full focus:outline-none w-45 border-radius-20 my-10" on:click={()=>{questionPointer++}}>
						&gt;
					</button>
				</div>
			</div>
		</div>
	{:else}
		<div class="score-screen flex justify-center items-center px-10 py-2 bg-blue-500 text-white rounded-full focus:outline-none flex flex-col mb-10">
			<h1 class="mb-10">
				Your score: {getScore()}
			</h1>
			<button class="px-10 py-2 bg-blue-500 text-white rounded-full focus:outline-none w-45 border-radius-20 my-10" on:click={restartQuiz}>
				Restart Quiz
			</button>
		</div>
	{/if}
</div>
</div>
<style>
      .bg-sky {
      background-image: url(".//background-sky.png");
      background-position: center;
    }

    .app > div {
		width:100%;
		height:100%;
	}

    button.selected{
        background:blueviolet;
		color:#eee;
    }

    .app .quiz-screen .footer > div {
		margin:0px 10px;
	}

</style>