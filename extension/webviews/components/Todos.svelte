<script lang="ts">
    import { onMount } from "svelte";
    import type { User } from "../types";

    export let user: User;
    let text = "";
    let todos: Array<{ text: string; completed: boolean }> = [];

    onMount(async () => {
        window.addEventListener("message", async (event) => {
            const message = event.data;
            switch (message.type) {
                case "new-todo":
                    todos = [
                        { text: message.value, completed: false },
                        ...todos,
                    ];
                    break;
            }
        });
    });
</script>

<style>
    .complete {
        text-decoration: line-through;
    }
</style>

<div>Hello: {user.name}</div>

<form
    on:submit|preventDefault={() => {
        todos = [{ text, completed: false }, ...todos];
        text = '';
    }}>
    <input bind:value={text} />
</form>

<ul>
    {#each todos as todo (todo.text)}
        <li
            class:complete={todo.completed}
            on:click={() => {
                todo.completed = !todo.completed;
            }}>
            {todo.text}
        </li>
    {/each}
</ul>
