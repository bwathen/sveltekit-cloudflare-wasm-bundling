<script>
	let parsedTextToDisplay = "Text parsed from the image will appear here!";

	// @ts-ignore
	const onsubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		const response = await fetch("./", {
			method: "POST",
			body: formData,
		});

		const { parsedText } = await response.json();

		parsedTextToDisplay = parsedText;

		console.log("Parsing finished! See text below the file input")
	}
</script>

<svelte:head>
	<title>SvelteKit Vercel WASM Bundling</title>
</svelte:head>

<section>
	<p>Use this image in the input below</p>

	<img src="/cosmic.png" />

	<form action="/" method="POST" on:submit={onsubmit}>
		<input name="file" type="file" />
		<button type="submit" value="submit">Submit me</button>
	</form>

	<p>
		{parsedTextToDisplay}
	</p>
</section>

<style>
</style>
