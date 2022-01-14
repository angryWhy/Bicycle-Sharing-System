const CracoLessPlugin = require('craco-less');
module.exports={
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            modifyLessRule: () => {
              return {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
              }
            }
          }
        }
      ]
}