<script>
	export let title = '';
    export let fontSize = 'text-3xl'
    export let fontColor = "text-secondary"

	$: titleArray = title.split(' ');
	$: longestWord = titleArray.reduce((a, b) => (a.length > b.length ? a : b));
</script>

<h2 class="{fontSize}">
	{#if titleArray.length == 1}
		{title}
	{:else}
		{#each titleArray as word}
			{#if word == longestWord}
				<strong class="{fontColor} font-normal">{word} </strong>
			{:else}
				<strong class="font-normal">{word} </strong>
			{/if}
		{/each}
	{/if}
</h2>
