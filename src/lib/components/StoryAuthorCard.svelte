<script lang="ts">
	import type { User } from '@clerk/backend';
	export let author: Partial<User>;
</script>

<div class="bg-base-200">
<a href="/profile/{author.id}" class="btn h-full flex items-center pr-5">
	<div class="avatar">
		{#if author}
			<div class="mask mask-squircle w-9 h-9">
				<img src={author?.imageUrl} alt="profile" />
			</div>
		{:else}
			<div class="mask mask-squircle w-12 h-12 skeleton" />
		{/if}
	</div>
	<div class="flex flex-col text-left gap-1">
		{#if author}
			<p class="opacity-50 font-normal">Story shared by</p>
			<p>@{author?.username}</p>
		{:else}
			<div class="font-bold w-[20ch] h-6 skeleton" />
			<div class="text-sm opacity-50 w-[20ch] h-4 skeleton" />
		{/if}
	</div>
</a>
</div>
