const myModule = {
    myProperty: 'someValue',

    myConfig: {
        useCaching: true,
        language: 'en'
    },

    saySomething() {
        console.log('Chi sta vincendo in serie A oggi?')
    },

    reportMyConfig() {
      console.log(
          `Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`
      );
    },

    updateMyConfig(newConfig: any) {
        if (typeof newConfig === 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language)
        }
    }
}

myModule.saySomething();

myModule.reportMyConfig();

myModule.updateMyConfig({
    language: 'it',
    useCaching: false
})

myModule.reportMyConfig();



export default myModule;