API: PokeAPI
DOCUMENTATION: https://pokeapi.co/docs/v2
EXAMPLE REQUEST: https://pokeapi.co/api/v2/pokemon/ditto

I choose HttpResource because it gives me value, isLoading and error as signals, so I don't need to create them. Also it is easier since I will use my API just with gets()

The local changes are stored on the browser's memory, so when a reload is made, it loads all the original code/Api, not what was added.
