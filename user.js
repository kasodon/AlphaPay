(() => {
    'use strict'
  
    if (!('indexedDB' in window)) {
      console.warn('IndexedDB not supported')
      return
    }
  
   

    (async () => {
        //...
      
        const dbName = 'users';
        const storeName = 'store1';
        const version = 1;
      
        const db = await openDB(dbName, version, {
          upgrade(db, oldVersion, newVersion, transaction) {
            const store = db.createObjectStore(storeName)
          }
        })
      })()


  })()