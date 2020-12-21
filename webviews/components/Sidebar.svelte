<script lang="ts">
    let todos: Array<{ text: string; completed: boolean }> = [];
    let text = "";
</script>

<style>
    .complete {
        text-decoration: line-through;
    }
</style>

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

<button
    on:click={() => {
        tsvscode.postMessage({ type: 'onInfo', value: 'info message' });
    }}>click me</button>

<button
    on:click={() => {
        tsvscode.postMessage({ type: 'onError', value: 'error message' });
    }}>click me for error</button>
