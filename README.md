API: PokeAPI
DOCUMENTATION: https://pokeapi.co/docs/v2
EXAMPLE REQUEST: https://pokeapi.co/api/v2/pokemon/ditto

I choose HttpResource because it gives me value, isLoading and error as signals, so I don't need to create them. Also it is easier since I will use my API just with gets()

The local changes are stored on the browser's memory, so when a reload is made, it loads all the original code/Api, not what was added.


LAZY LOADING

Before table

Browser bundles     
Initial chunk files  | Names            |  Raw size | Estimated transfer size
main-ABVIMPRO.js     | main             | 335.83 kB |                89.13 kB
styles-5INURTSO.css  | styles           |   0 bytes |                 0 bytes

                     | Initial total    | 335.83 kB |                89.13 kB

After table

Browser bundles     
Initial chunk files  | Names            |  Raw size | Estimated transfer size
chunk-CsfyNuv5.js    | -                | 149.63 kB |                44.44 kB
main-GSHORMQI.js     | main             | 139.91 kB |                37.16 kB
styles-5INURTSO.css  | styles           |   0 bytes |                 0 bytes

                     | Initial total    | 289.54 kB |                81.61 kB


Lazy chunk files     | Names            |  Raw size | Estimated transfer size
chunk-D6EXAREV.js    | pokemon-form     |  49.16 kB |                10.82 kB
chunk-C04VghfB.js    | pokemon-detail   | 913 bytes |               913 bytes
chunk-CuZT6Qam.js    | not-found        | 314 bytes |               314 bytes


The detail, add, edit and the 404-page load different from the main page, so it only downloads when there are visited for the first time so it saves resources. The landing page will always load first, that won't change



LIFECYCLE

1. Basically what happens is that the constructor runs before the id is assigned, so after the system sees that there is no id, it gives the error NG8118. 

2. The action of navigating away from the page, the destroy component destroys it in order to let the ngOnInit run next time the detail is opened

LOCAL STORAGE
I stored the pokemon's IDs of the saved pokemons, and the preference, in this case the sorting type (either name or default) because is data that the user selects manually and the preference is because it is cool to see the pokemons on alphabetical order.
Sensitive information (like passwords or private keys) must never be on the local storage because it can be read on the page which compromises the web's security.
