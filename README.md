# custom-react-hooks

A collection of useful custom react hooks.

## Installation

One can install the hooks' collection as an NPM package as follows:

```
npm install simple-custom-react-hooks
```

## Description

### 1. `useEffectOnUpdateOnly`

This custom hook covers the "missing" case of the build-in `useEffect()`[^1] hook of running only if an update occurs. That is, `useEffect` with and empty dependency array would run only once (as an effect of) after the initial render.
The `useEffectOnUpdateOnly` custom hook can be seen as a hook that handles the "opposite" behaviour, namely, applying an effect only once an update (in any of the defined dependencies) occurs.

### 2. `useLocalStorage`

A custom hook that stores a state into the local storage[^2].

### 3. `useFetchAll`

A custom hook that performs an API fetch[^3] to retrive all the resources available at a given URL and persists the response in a local state.

### 4. `useFetchOne`

A custom hook that performs an API fetch[^3] to retrieve a single resource available at a given URL and persists the response in a local state.

### 5. `useFetchQuery`

A custom React Query (TanStack Query) -like hook that executes and async function and persists the response in a local state. 

## Usage

### 1. `useEffectOnUpdateOnly`

```js
const someProp = `foo`

useEffectOnUpdateOnly({ callback: () => {
   // Effect code goes here
}, dependencies: [someProp] }) 
```

### 2. `useLocalStorage`

```js
const [localStorageValue, setLocalStorageValue] = useLocalStorage(`foo`)
...
setLocalStorageValue(`bar`)
```

### 3. `useFetchAll`

```js
const BASE_URL = `localhost:<PORT>`
const RESOURCE_PATH = `foo`

const [{ data, isError, isLoading }, { setQueryParameters, shouldFetchData }] = useFetchAll(BASE_URL}/${RESOURCE_PATH}`)
```
### 4. `useFetchOne`

```js
const BASE_URL = `localhost:<PORT>`
const RESOURCE_PATH = `foo`
const RESOURCE_ID = `123`

const [{ data, isError, isLoading }, { setQueryParameters, shouldFetchData }] = useFetchAll(BASE_URL}/${RESOURCE_PATH}/${RESOURCE_ID}`)
```

<details>
  <summary>API</summary>
  
  ### 1. useEffectOnUpdateOnly
  
  In the following `objArg: Args<T>` is used to describe the object that is passed to the hook.

  ```js
  type = Args<T> = {
    dependencies: Array<T>
    callback: () => void
  }
  ```

  #### `objArg.dependencies`
  Type: `Array<T>`

  The array on which the effect depends.

  #### `objArg.callback`
  Type: `() => void`

  The effect/function executed after an update in the dependency array occurs.

  ### 2. `useLocalStorage`
  
  #### `key`
  Type: `string`

  The identifier to which the value that is stored corresponds to.

  ### 3. `useFetchAll`

  #### `uri`
  Type: `string`

  #### `queryParams`
  Type: `QueryParams`

  Default value: `{ limit: 100 }: QueryParams`

  ```js
    type QueryParams = {
      limit: number
      page?: number
      sort?: Sort
    }

    type Sort = {
      sortOrder: SortOrderEnum
      sortField: string
    }

    enum SortOrderEnum {
      asc = `ASC`,
      DESC = `DESC`
    }
  ```

  #### `initialData`
  Type: `Array<T>`

  Default value: `[]`

  ### 4. `useFetchOne`

  #### `uri`
  Type: `string`

  #### `id`
  Type: `string`

  #### `initialData`
  Type: `object`
</details>

[^1]: React `useEffect` - [React use effect hook](https://react.dev/reference/react/useEffect)
[^2]: MDN documentation about local storage - [Local Storage MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[^3]: MDN fetch API - [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
