import idb from 'idb';

const _dbPromise = () => {
    if (!navigator.serviceWorker) {
        return Promise.resolve();
    }

    return idb.open('converter-db', 1, (upgradeDb) => {
        upgradeDb.createObjectStore('currencies', { keyPath: 'id' });
    });
}

const fetchCurrencies = () => {
    let url = 'https://free.currencyconverterapi.com/api/v5/currencies';

    return fetch(url, {
        method: 'GET'
    })
    .then((response) => { return response.json(); })
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.log(error);
    });
}

const currencies = () => {
    return _dbPromise().then((db) => {
        if (db) {
            let tx = db.transaction('currencies');
            let currencyStore = tx.objectStore('currencies');
            var currencyIndex = currencyStore.index('id');
            
            return currencyStore.getAll();
        } else {
            return null;
        }
    }).then((currencyList) => {
        if(currencyList.lenght){
            return currencyList;
        } else {
            return _dbPromise.then(function(db) {
                var tx = db.transaction('currencies', 'readwrite');
                var store = tx.objectStore('currencies');
                store.put(fetchCurrencies());
                return tx.complete;
            }).then(function() {
              console.log('People added');
            });
        }
    });
};

export {
    currencies, fetchCurrencies
};