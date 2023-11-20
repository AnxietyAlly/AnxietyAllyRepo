<div class="min-h-screen bg-sky flex flex-col items-center">
	<a href="/"> <img class="w-5 h-5 absolute top-4 left-3" src=".//back.png" alt="back logo" /> </a>
	<div class="h-2" />
	<img class="w-40 h-100" src=".//dailycheckup.png" alt="Anxiety Ally Logo" />

	<div id="initialContent" >
		<div class="h-20 mt-8 space-y-6">
      <div class="flex justify-center">
			<p class="text-xl font-semibold  text-white">How are you feeling today?</p>
		</div>
    </div>


    <div class=" flex justify-center ">
      <div class="w-2/3 md:w-1/2 lg:w-1/3 rounded-md shadow bg-gray-200 bg-opacity-25">
        <img class="w-auto h-20 mx-auto p-0" src=".//Emotion-scale.png" alt="Emotion scale" />
      </div>
    </div>

		<div class="h-20 mt-8 space-y-6">
      <div class="flex justify-center">
				<button
					id="submitButton"
					class="w-30 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
					Submit
				</button>
      </div>
		</div>

		<div class="h-20 mt-8 space-y-6">
			<div class="flex justify-center">
				<div class="w-2/3 md:w-1/2 lg:w-1/4 bg-gray-200 bg-opacity-25 p-4">
					<p class="text-xs text-center text-white italic">
						To understand your emotions, start by pausing and tuning into your physical sensations.
						Label the emotions you're experiencing (happy, sad, anxious, etc.) and consider what
						triggered them. Reflect on these feelings, perhaps by journaling, seeking feedback, or
						practicing mindfulness. This self-awareness can help you manage your emotions more
						effectively and make positive choices in response to them.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div id="otherContent" class="hidden">
		<div class="h-20 mt-8 space-y-6">
      <div class="flex justify-center">
			<p class="text-xl font-semibold text-white">Why are you feeling this way?</p>
		</div>
    </div>

		<div class="flex justify-center opacity-75">
            <input type="text" class="h-44 w-80 rounded-md bg-opacity-50" placeholder="Type here..." />
		</div>

    <div class="h-20 mt-8 space-y-6">
        <div class="flex justify-center">
        <p class="text-xl font-semibold text-white">So how did you feel overall?</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-5 mx-5 grid-rows-2">
      <div class="place-self-auto">
        <a href="/testing" class="w-30 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
          Good
        </a>
    </div>

    <div class="place-self-auto">
      <a href="/dailycheckup-results" class="w-30 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white button-color hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        Bad
      </a>
      </div>
    </div>

	</div>

	<style>
		.bg-sky {
			background-image: url('.//background-sky.png');
			background-position: center;
		}

		.button-color {
			background-color: #0c9eff;
		}
	</style>

	<script>
		const submitButton = document.getElementById('submitButton');
		const initialContent = document.getElementById('initialContent');
		const otherContent = document.getElementById('otherContent');

		submitButton.addEventListener('click', (event) => {
			initialContent.style.display = 'none';
			otherContent.style.display = 'block';
		});
	</script>
</div>
