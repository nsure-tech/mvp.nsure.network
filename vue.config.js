
module.exports = {
    outputDir: 'dist/' + process.env.outputDir,
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : './'
}
