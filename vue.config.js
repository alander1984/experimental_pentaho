module.exports = {
	chainWebpack: config => {
		config
		  .plugin('html')
		  .tap(args => {
			args[0].title= 'Абитуриент.2021'
			return args
		  })
	},
	configureWebpack: {
		devtool: 'source-map'
	},
	devServer: {
    	port: '3000',
    	proxy: {
      		'/pentaho': {
        		target: 'http://10.102.4.5/pentaho',
        		changeOrigin: true,
        		pathRewrite: {}
			  }
    	}
  	}
}
